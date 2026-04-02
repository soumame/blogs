import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const contentRoots = ["ja", "en"].map((dir) => path.join(root, dir));
const keywords = process.argv
  .slice(2)
  .map((arg) => arg.trim().toLowerCase())
  .filter(Boolean);

function normalizeTag(tag) {
  return tag.trim().replace(/\s+/g, " ").toLowerCase();
}

function isProbablyJapanese(text) {
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(text);
}

async function collectMarkdownFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectMarkdownFiles(abs)));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".md")) files.push(abs);
  }
  return files;
}

function extractFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return null;
  const end = raw.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return raw.slice(4, end);
}

function extractTags(frontmatter) {
  const lines = frontmatter.split(/\r?\n/);
  const tags = [];
  let inTags = false;

  for (const line of lines) {
    if (!inTags) {
      if (/^tags:\s*$/.test(line)) inTags = true;
      continue;
    }

    const itemMatch = line.match(/^\s*-\s+(.+?)\s*$/);
    if (itemMatch) {
      const rawTag = itemMatch[1].trim().replace(/^['"]|['"]$/g, "");
      if (rawTag) tags.push(rawTag);
      continue;
    }

    if (/^\s*$/.test(line)) continue;
    break;
  }

  return tags;
}

const occurrences = [];

for (const dir of contentRoots) {
  let files = [];
  try {
    files = await collectMarkdownFiles(dir);
  } catch {
    continue;
  }

  const locale = path.basename(dir) === "ja" ? "ja" : "en";
  for (const file of files) {
    const raw = await fs.readFile(file, "utf8");
    const frontmatter = extractFrontmatter(raw);
    if (!frontmatter) continue;
    const tags = extractTags(frontmatter);
    for (const tag of tags) {
      occurrences.push({
        tag,
        normalized: normalizeTag(tag),
        locale,
      });
    }
  }
}

const canonical = new Map();
for (const occ of occurrences) {
  if (isProbablyJapanese(occ.tag)) continue;
  if (occ.locale !== "en") continue;
  if (!canonical.has(occ.normalized)) canonical.set(occ.normalized, occ.tag.trim());
}
for (const occ of occurrences) {
  if (isProbablyJapanese(occ.tag)) continue;
  if (!canonical.has(occ.normalized)) canonical.set(occ.normalized, occ.tag.trim());
}

const counts = new Map();
for (const occ of occurrences) {
  counts.set(occ.normalized, (counts.get(occ.normalized) ?? 0) + 1);
}

const tags = Array.from(canonical.values())
  .sort((a, b) => a.localeCompare(b))
  .filter((tag) => {
    if (keywords.length === 0) return true;
    const lower = tag.toLowerCase();
    return keywords.some((keyword) => lower.includes(keyword));
  });

for (const tag of tags) {
  console.log(`${tag}\t${counts.get(normalizeTag(tag)) ?? 0}`);
}
