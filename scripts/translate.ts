import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  exists,
  getBlogRoot,
  isProbablyJapanese,
  normalizeTag,
  posixify,
  sha256Hex,
  writeText,
} from "./utils.js";
import { translateMarkdownStructured } from "./openai.js";
import { buildCanonicalEnglishTags, collectTagOccurrences } from "./tags.js";

export type Locale = "ja" | "en";

type BlogFrontmatter = {
  title: string;
  emoji: string;
  tags?: string[] | null;
  published_at?: string | Date | null;
  description?: string | null;
  isTranslated?: boolean | null;
  sourcePath?: string | null;
  sourceHash?: string | null;
};

function uniqueByNormalized(tags: string[]) {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const t of tags) {
    const n = normalizeTag(t);
    if (!n) continue;
    if (seen.has(n)) continue;
    seen.add(n);
    out.push(t.trim());
  }
  return out;
}

function canonicalizeByExactMatch(
  tags: string[],
  canonicalEnglishTags: string[]
) {
  const map = new Map<string, string>();
  for (const t of canonicalEnglishTags) map.set(normalizeTag(t), t);
  return tags.map((t) => map.get(normalizeTag(t)) ?? t);
}

export async function translateOne(params: {
  sourceAbsPath: string;
  targetAbsPath: string;
  sourceLocale: Locale;
  targetLocale: Locale;
  dryRun?: boolean;
  force?: boolean;
  canonicalEnglishTags?: string[];
}) {
  const blogRoot = getBlogRoot();
  const sourceRaw = await fs.readFile(params.sourceAbsPath, "utf8");
  const sourceHash = sha256Hex(sourceRaw);
  const sourceRel = posixify(path.relative(blogRoot, params.sourceAbsPath));
  const targetRel = posixify(path.relative(blogRoot, params.targetAbsPath));

  const sourceParsed = matter(sourceRaw);
  const src = sourceParsed.data as Partial<BlogFrontmatter>;
  if (!src.title || !src.emoji) {
    throw new Error(
      `source frontmatter が不正です: ${sourceRel}（title/emoji必須）`
    );
  }

  const targetExists = await exists(params.targetAbsPath);
  if (targetExists) {
    const targetRaw = await fs.readFile(params.targetAbsPath, "utf8");
    const targetParsed = matter(targetRaw);
    const t = targetParsed.data as Partial<BlogFrontmatter>;
    if (t.isTranslated === true) {
      if (t.sourceHash === sourceHash && t.sourcePath === sourceRel) {
        return { action: "skip_uptodate" as const, sourceRel, targetRel };
      }
    } else if (!params.force) {
      return { action: "skip_manual" as const, sourceRel, targetRel };
    }
  }

  const canonicalEnglishTags =
    params.canonicalEnglishTags ??
    buildCanonicalEnglishTags(await collectTagOccurrences());

  const translated = await translateMarkdownStructured({
    sourceLocale: params.sourceLocale,
    targetLocale: params.targetLocale,
    sourceTitle: src.title,
    sourceDescription: src.description ?? null,
    sourceEmoji: src.emoji,
    sourceTags: (src.tags ?? null) as string[] | null,
    canonicalEnglishTags,
    markdownBody: sourceParsed.content,
  });

  let outTags = translated.tags ?? [];
  outTags = outTags
    .map((t) => t.trim())
    .filter(Boolean)
    .filter((t) => !isProbablyJapanese(t));
  outTags = uniqueByNormalized(outTags);
  outTags = canonicalizeByExactMatch(outTags, canonicalEnglishTags);

  const outFrontmatter: BlogFrontmatter = {
    title: translated.title.trim(),
    emoji: src.emoji,
    // 翻訳先の記事はタグを英語に統一する（空ならnull）
    tags: outTags.length > 0 ? outTags : null,
    published_at: (src.published_at ?? null) as any,
    // 翻訳先の記事は description も翻訳結果を優先（空ならnull）
    description: (translated.description?.trim() || null) as any,
    isTranslated: true,
    sourcePath: sourceRel,
    sourceHash,
  };

  const out = matter.stringify(translated.body, outFrontmatter as any);

  if (params.dryRun) {
    return {
      action: targetExists
        ? ("would_update" as const)
        : ("would_create" as const),
      sourceRel,
      targetRel,
    };
  }

  await writeText(params.targetAbsPath, out);
  return {
    action: targetExists ? ("updated" as const) : ("created" as const),
    sourceRel,
    targetRel,
  };
}
