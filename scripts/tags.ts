import path from "node:path";
import { glob } from "glob";
import matter from "gray-matter";
import fs from "node:fs/promises";
import { embedTexts } from "./openai.js";
import {
  cosineSimilarity,
  getBlogRoot,
  isProbablyJapanese,
  normalizeTag,
  posixify,
} from "./utils.js";

export type TagOccurrence = {
  tag: string;
  normalized: string;
  file: string; // posix relative
  locale: "ja" | "en";
};

export async function collectMarkdownFiles() {
  const root = getBlogRoot();
  const patterns = ["ja/**/*.md", "en/**/*.md"];
  const files = await glob(patterns, {
    cwd: root,
    dot: false,
    nodir: true,
  });
  return files.map((f) => path.resolve(root, f));
}

export async function collectTagOccurrences(): Promise<TagOccurrence[]> {
  const root = getBlogRoot();
  const files = await collectMarkdownFiles();
  const occ: TagOccurrence[] = [];
  for (const abs of files) {
    const rel = posixify(path.relative(root, abs));
    const locale = rel.startsWith("ja/")
      ? "ja"
      : rel.startsWith("en/")
        ? "en"
        : "en";
    const raw = await fs.readFile(abs, "utf8");
    let parsed: ReturnType<typeof matter>;
    try {
      parsed = matter(raw);
    } catch (e) {
      // frontmatter error is handled elsewhere; ignore here
      continue;
    }
    const tags = (parsed.data?.tags ?? []) as unknown;
    if (!Array.isArray(tags)) continue;
    for (const t of tags) {
      if (typeof t !== "string") continue;
      occ.push({
        tag: t,
        normalized: normalizeTag(t),
        file: rel,
        locale,
      });
    }
  }
  return occ;
}

export function buildCanonicalEnglishTags(occ: TagOccurrence[]) {
  // まずは en 記事のタグを優先して canonical にする（表記揺れの基準）
  const seen = new Map<string, string>(); // normalized -> canonical
  for (const o of occ) {
    if (isProbablyJapanese(o.tag)) continue;
    if (o.locale !== "en") continue;
    if (!seen.has(o.normalized)) seen.set(o.normalized, o.tag.trim());
  }
  // en 側に無いが英語っぽいタグが ja 側にある場合も補完
  for (const o of occ) {
    if (isProbablyJapanese(o.tag)) continue;
    if (!seen.has(o.normalized)) seen.set(o.normalized, o.tag.trim());
  }
  return Array.from(seen.values()).sort((a, b) => a.localeCompare(b));
}

export async function loadEmbeddingCache(): Promise<Record<string, number[]>> {
  const root = getBlogRoot();
  const p = path.join(root, ".cache", "tag-embeddings.json");
  try {
    const txt = await fs.readFile(p, "utf8");
    return JSON.parse(txt) as Record<string, number[]>;
  } catch {
    return {};
  }
}

export async function saveEmbeddingCache(cache: Record<string, number[]>) {
  const root = getBlogRoot();
  const p = path.join(root, ".cache", "tag-embeddings.json");
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, JSON.stringify(cache), "utf8");
}

export async function getTagEmbeddings(uniqueTags: string[]) {
  const cache = await loadEmbeddingCache();
  const missing = uniqueTags.filter((t) => !cache[t]);
  if (missing.length > 0) {
    const vectors = await embedTexts(missing);
    for (let i = 0; i < missing.length; i++) {
      cache[missing[i]] = vectors[i];
    }
    await saveEmbeddingCache(cache);
  }
  return uniqueTags.map((t) => cache[t]);
}

export type DuplicateTagPair = {
  a: string;
  b: string;
  similarity: number;
};

export async function detectSemanticDuplicateTags(params: {
  threshold: number;
  maxPairs: number;
}): Promise<DuplicateTagPair[]> {
  const occ = await collectTagOccurrences();
  const unique = Array.from(new Set(occ.map((o) => o.tag.trim()))).filter(
    Boolean
  );

  // embedding は英語タグを中心に（日本語タグはまず警告対象）
  const candidates = unique.filter((t) => !isProbablyJapanese(t));
  const vectors = await getTagEmbeddings(candidates);

  const pairs: DuplicateTagPair[] = [];
  for (let i = 0; i < candidates.length; i++) {
    for (let j = i + 1; j < candidates.length; j++) {
      const a = candidates[i];
      const b = candidates[j];
      if (normalizeTag(a) === normalizeTag(b)) continue;
      const sim = cosineSimilarity(vectors[i], vectors[j]);
      if (sim >= params.threshold) {
        pairs.push({ a, b, similarity: sim });
      }
    }
  }

  pairs.sort((x, y) => y.similarity - x.similarity);
  return pairs.slice(0, params.maxPairs);
}
