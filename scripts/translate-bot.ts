/**
 * 未翻訳のブログ記事と、変更があったブログ記事を翻訳する
 * - 英日と、日英、双方向で、記事を補完する。同じslugの記事がある場合はスキップ
 * - 翻訳済みの記事には、フロントマターにisTranslated: trueと、その記事のコンテンツに基づいたハッシュ値を追加
 * - このbotがworkflowで呼び出されるたびに、ハッシュ値に基づいて既存の記事の検索も行う。ハッシュ値が一致する記事があれば、その記事を翻訳する。
 * - isTranslated: trueがなく、ハッシュ値も一致しない記事が見つかった場合はスキップする。(人間が手動で翻訳しているため)
 * translate.tsを呼び出し、ブログ記事を翻訳する
 * pnpm translate
 */

import path from "node:path";
import { glob } from "glob";
import { getBlogRoot, posixify } from "./utils.js";
import { translateOne, type Locale } from "./translate.js";

type Direction = "ja-en" | "en-ja" | "both";

function getArg(name: string) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}
function hasFlag(name: string) {
  return process.argv.includes(`--${name}`);
}

function swapLocale(rel: string, from: Locale, to: Locale) {
  if (rel.startsWith(`${from}/`)) return `${to}/${rel.slice(3)}`;
  return rel;
}

async function runForDirection(
  sourceLocale: Locale,
  targetLocale: Locale,
  params: {
    dryRun: boolean;
    limit?: number;
    force: boolean;
  }
) {
  const root = getBlogRoot();
  const sourceFiles = await glob([`${sourceLocale}/**/*.md`], {
    cwd: root,
    nodir: true,
  });
  sourceFiles.sort();

  let processed = 0;
  const results: Array<{
    action: string;
    sourceRel: string;
    targetRel: string;
  }> = [];

  console.error(
    `[translate-bot] ${sourceLocale}->${targetLocale}: ${sourceFiles.length} files` +
      (params.limit != null ? ` (limit=${params.limit})` : "")
  );

  for (const rel of sourceFiles) {
    if (params.limit != null && processed >= params.limit) break;
    const sourceRel = posixify(rel);
    const targetRel = swapLocale(sourceRel, sourceLocale, targetLocale);
    const sourceAbs = path.resolve(root, sourceRel);
    const targetAbs = path.resolve(root, targetRel);

    const idx = processed + 1;
    console.error(
      `[translate-bot] (${idx}/${Math.min(
        sourceFiles.length,
        params.limit ?? sourceFiles.length
      )}) ${sourceLocale}->${targetLocale} ${sourceRel} -> ${targetRel}`
    );
    const t0 = Date.now();
    const r = await translateOne({
      sourceAbsPath: sourceAbs,
      targetAbsPath: targetAbs,
      sourceLocale,
      targetLocale,
      dryRun: params.dryRun,
      force: params.force,
    });
    console.error(
      `[translate-bot] done ${sourceRel} => ${r.action} (${Date.now() - t0}ms)`
    );
    results.push({
      action: r.action,
      sourceRel: r.sourceRel,
      targetRel: r.targetRel,
    });
    processed++;
  }

  return results;
}

async function main() {
  const direction = (getArg("direction") as Direction | undefined) ?? "ja-en";
  const dryRun = hasFlag("dry-run");
  const force = hasFlag("force");
  const limitRaw = getArg("limit");
  const limit = limitRaw ? Number(limitRaw) : undefined;

  if (limitRaw && Number.isNaN(limit)) {
    throw new Error(`--limit が不正です: ${limitRaw}`);
  }

  const allResults: Array<{
    action: string;
    sourceRel: string;
    targetRel: string;
  }> = [];

  if (direction === "ja-en" || direction === "both") {
    allResults.push(
      ...(await runForDirection("ja", "en", {
        dryRun,
        force,
        limit,
      }))
    );
  }
  if (direction === "en-ja" || direction === "both") {
    allResults.push(
      ...(await runForDirection("en", "ja", {
        dryRun,
        force,
        limit,
      }))
    );
  }

  const counts = new Map<string, number>();
  for (const r of allResults)
    counts.set(r.action, (counts.get(r.action) ?? 0) + 1);

  console.log(
    JSON.stringify(
      {
        direction,
        dryRun,
        force,
        limit,
        summary: Object.fromEntries(counts),
        sample: allResults.slice(0, 10),
      },
      null,
      2
    )
  );
}

await main();
