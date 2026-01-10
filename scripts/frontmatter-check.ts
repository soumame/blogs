import { glob } from "glob";
import matter from "gray-matter";
import path from "node:path";
import fs from "node:fs/promises";
import { getBlogRoot, isProbablyJapanese, posixify } from "./utils.js";

type BlogFrontmatter = {
  title?: unknown;
  emoji?: unknown;
  tags?: unknown;
  published_at?: unknown;
  description?: unknown;
  isTranslated?: unknown;
  sourcePath?: unknown;
  sourceHash?: unknown;
};

function isString(x: unknown): x is string {
  return typeof x === "string";
}
function isBoolean(x: unknown): x is boolean {
  return typeof x === "boolean";
}
function isStringArray(x: unknown): x is string[] {
  return Array.isArray(x) && x.every((v) => typeof v === "string");
}

function validateFrontmatter(
  relFile: string,
  data: BlogFrontmatter
): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!isString(data.title) || data.title.trim().length === 0) {
    errors.push("title が文字列として必須です");
  }
  if (!isString(data.emoji) || data.emoji.trim().length === 0) {
    errors.push("emoji が文字列として必須です");
  }

  if (data.tags != null && !isStringArray(data.tags)) {
    errors.push("tags は string[] である必要があります（null/undefinedはOK）");
  }
  if (isStringArray(data.tags)) {
    const hasJapaneseTag = data.tags.some((t) => isProbablyJapanese(t));
    if (hasJapaneseTag)
      warnings.push("tags に日本語が含まれています（英語統一を推奨）");
  }

  if (data.description != null && !isString(data.description)) {
    errors.push("description は string/null/undefined のみ許容です");
  }

  if (data.isTranslated != null && !isBoolean(data.isTranslated)) {
    errors.push("isTranslated は boolean/null/undefined のみ許容です");
  }

  // YAMLの date は Date になることがある。文字列も許容。
  if (
    data.published_at != null &&
    !(data.published_at instanceof Date) &&
    !isString(data.published_at)
  ) {
    errors.push("published_at は string/Date/null/undefined のみ許容です");
  }

  if (data.isTranslated === true) {
    if (!isString(data.sourcePath) || data.sourcePath.trim().length === 0) {
      errors.push("isTranslated: true の場合、sourcePath が必須です");
    }
    if (!isString(data.sourceHash) || data.sourceHash.trim().length === 0) {
      errors.push("isTranslated: true の場合、sourceHash が必須です");
    }
  } else {
    // 翻訳フラグが空（例: isTranslated: ）は null になりがちなので警告
    if (data.isTranslated === null)
      warnings.push("isTranslated が null です（空値の可能性）");
  }

  if (errors.length > 0) {
    errors.unshift(`(${relFile})`);
  }
  if (warnings.length > 0) {
    warnings.unshift(`(${relFile})`);
  }
  return { errors, warnings };
}

function validateMarkdownSyntax(relFile: string, markdown: string) {
  const errors: string[] = [];
  // 超軽量チェック: ``` の数が奇数ならコードフェンス未閉じの可能性が高い
  const fenceCount = (markdown.match(/```/g) ?? []).length;
  if (fenceCount % 2 !== 0) {
    errors.push(
      `(${relFile}) Markdownのコードフェンス(\`\`\`)が閉じられていない可能性があります`
    );
  }
  return errors;
}

async function main() {
  const root = getBlogRoot();
  const files = await glob(["ja/**/*.md", "en/**/*.md"], {
    cwd: root,
    nodir: true,
  });

  const allErrors: string[] = [];
  const allWarnings: string[] = [];

  for (const rel of files) {
    const abs = path.resolve(root, rel);
    const relPosix = posixify(rel);
    const raw = await fs.readFile(abs, "utf8");
    let parsed: ReturnType<typeof matter>;
    try {
      parsed = matter(raw);
    } catch (e) {
      allErrors.push(
        `(${relPosix}) frontmatterの解析に失敗しました: ${(e as Error).message}`
      );
      continue;
    }

    const { errors, warnings } = validateFrontmatter(
      relPosix,
      parsed.data as BlogFrontmatter
    );
    allErrors.push(...errors);
    allWarnings.push(...warnings);

    // Markdown本文の軽量構文チェック
    allErrors.push(...validateMarkdownSyntax(relPosix, parsed.content));
  }

  if (allWarnings.length > 0) {
    console.warn("[WARN] frontmatter warnings:");
    for (const w of allWarnings) console.warn(`- ${w}`);
  }
  if (allErrors.length > 0) {
    console.error("[ERROR] frontmatter errors:");
    for (const e of allErrors) console.error(`- ${e}`);
    process.exit(1);
  }

  console.log(`OK: ${files.length} files checked.`);
}

await main();
