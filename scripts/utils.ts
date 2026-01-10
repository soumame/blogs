import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function getBlogRoot() {
  // scripts/ 配下から blog/ へ
  const here = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(here, "..");
}

export function posixify(p: string) {
  return p.split(path.sep).join(path.posix.sep);
}

export function sha256Hex(input: string | Buffer) {
  return createHash("sha256").update(input).digest("hex");
}

export async function exists(p: string) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

export async function readText(p: string) {
  return await fs.readFile(p, "utf8");
}

export async function writeText(p: string, content: string) {
  await fs.mkdir(path.dirname(p), { recursive: true });
  await fs.writeFile(p, content, "utf8");
}

export function isProbablyJapanese(text: string) {
  // Hiragana/Katakana/Kanji
  return /[\u3040-\u30ff\u3400-\u9fff]/.test(text);
}

export function normalizeTag(tag: string) {
  return tag.trim().replace(/\s+/g, " ").toLowerCase();
}

export function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  const denom = Math.sqrt(na) * Math.sqrt(nb);
  return denom === 0 ? 0 : dot / denom;
}

export function rewriteWikiLinksLocale(
  markdown: string,
  targetLocale: "ja" | "en",
) {
  // [[...]] のみ対象（通常のMarkdownリンクは触らない）
  // [[target|label]] 形式の場合は target 部分だけ置換する
  const from = targetLocale === "en" ? "ja" : "en";
  const to = targetLocale;

  return markdown.replace(/\[\[([^\]]+)\]\]/g, (_m, inner: string) => {
    const parts = inner.split("|");
    const targetRaw = parts[0] ?? "";
    const rest = parts.slice(1);

    const target = targetRaw.trim();
    if (!target) return `[[${inner}]]`;
    // 外部URLっぽいものは触らない
    if (/^https?:\/\//i.test(target)) return `[[${inner}]]`;

    // `/ja/` や `ja/` のようなパスプレフィックスだけ入れ替える
    let replaced = targetRaw;
    replaced = replaced.replace(new RegExp(`(^|\\/)${from}(?=\\/)`, "g"), `$1${to}`);

    const rebuilt =
      rest.length > 0 ? [replaced, ...rest].join("|") : replaced;
    return `[[${rebuilt}]]`;
  });
}


