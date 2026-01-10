import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  exists,
  getBlogRoot,
  posixify,
  rewriteWikiLinksLocale,
  sha256Hex,
  writeText,
} from "./utils.js";
import { translateMarkdownStructured } from "./openai.js";
import {
  stringifyMarkdownWithFrontmatter,
  type BlogFrontmatter,
} from "./frontmatter.js";

export type Locale = "ja" | "en";

export async function translateOne(params: {
  sourceAbsPath: string;
  targetAbsPath: string;
  sourceLocale: Locale;
  targetLocale: Locale;
  dryRun?: boolean;
  force?: boolean;
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

  const startedAt = Date.now();
  console.error(
    `[translate] OpenAI start: ${params.sourceLocale}->${params.targetLocale} ${sourceRel}`
  );
  const translated = await translateMarkdownStructured({
    sourceLocale: params.sourceLocale,
    targetLocale: params.targetLocale,
    sourceTitle: src.title,
    sourceDescription: src.description ?? null,
    markdownBody: sourceParsed.content,
  });
  console.error(
    `[translate] OpenAI done : ${params.sourceLocale}->${params.targetLocale} ${sourceRel} (${Date.now() - startedAt}ms)`
  );

  const outFrontmatter: BlogFrontmatter = {
    title: translated.title.trim(),
    // emoji は翻訳元をそのまま引き継ぐ（AIに渡すと壊れることがあるため）
    emoji: src.emoji,
    // tags は翻訳元をそのまま引き継ぐ（英日共通運用）
    tags: (src.tags ?? null) as any,
    published_at: (src.published_at ?? null) as any,
    // description は翻訳結果を優先（空ならnull）
    description: (translated.description?.trim() || null) as any,
    isTranslated: true,
    sourcePath: sourceRel,
    sourceHash,
  };

  // wikilink [[...]] 内の /ja/ /en/ を翻訳先言語に合わせて置換
  const bodyWithRewrittenWikiLinks = rewriteWikiLinksLocale(
    translated.body,
    params.targetLocale,
  );

  // gray-matter.stringify はUnicode(絵文字)をエスケープする場合があるため、自前でYAMLを生成する
  const out = stringifyMarkdownWithFrontmatter({
    frontmatter: outFrontmatter,
    body: bodyWithRewrittenWikiLinks,
  });

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
