import { collectTagOccurrences, detectSemanticDuplicateTags } from "./tags.js";
import { isProbablyJapanese, normalizeTag } from "./utils.js";

function getArg(name: string) {
  const idx = process.argv.indexOf(`--${name}`);
  if (idx === -1) return undefined;
  return process.argv[idx + 1];
}
function hasFlag(name: string) {
  return process.argv.includes(`--${name}`);
}

type RepoInfo = { owner: string; repo: string };
function getRepoInfo(): RepoInfo | null {
  const repo = process.env.GITHUB_REPOSITORY;
  if (!repo) return null;
  const [owner, name] = repo.split("/");
  if (!owner || !name) return null;
  return { owner, repo: name };
}

async function upsertIssue(params: { title: string; body: string }) {
  const token = process.env.GITHUB_TOKEN;
  const info = getRepoInfo();
  if (!token || !info) return { ok: false as const, reason: "missing_token_or_repo" as const };

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };

  // find existing open issue by title
  const listUrl = `https://api.github.com/repos/${info.owner}/${info.repo}/issues?state=open&per_page=100`;
  const issuesRes = await fetch(listUrl, { headers });
  if (!issuesRes.ok) {
    return { ok: false as const, reason: `list_failed:${issuesRes.status}` as const };
  }
  const issues = (await issuesRes.json()) as Array<{ number: number; title: string }>;
  const existing = issues.find((i) => i.title === params.title);

  if (existing) {
    const patchUrl = `https://api.github.com/repos/${info.owner}/${info.repo}/issues/${existing.number}`;
    const patchRes = await fetch(patchUrl, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ body: params.body }),
    });
    if (!patchRes.ok) {
      return { ok: false as const, reason: `update_failed:${patchRes.status}` as const };
    }
    return { ok: true as const, action: "updated" as const, number: existing.number };
  }

  const createUrl = `https://api.github.com/repos/${info.owner}/${info.repo}/issues`;
  const createRes = await fetch(createUrl, {
    method: "POST",
    headers,
    body: JSON.stringify({ title: params.title, body: params.body }),
  });
  if (!createRes.ok) {
    return { ok: false as const, reason: `create_failed:${createRes.status}` as const };
  }
  const created = (await createRes.json()) as { number: number };
  return { ok: true as const, action: "created" as const, number: created.number };
}

async function main() {
  const threshold = Number(getArg("threshold") ?? "0.90");
  const maxPairs = Number(getArg("max-pairs") ?? "50");
  const createIssue = hasFlag("create-issue");
  const failOnDuplicates = hasFlag("fail-on-duplicates");

  const occ = await collectTagOccurrences();
  const byTag = new Map<string, { normalized: string; files: Set<string>; locales: Set<string> }>();
  for (const o of occ) {
    const key = o.tag.trim();
    if (!key) continue;
    const cur = byTag.get(key) ?? {
      normalized: normalizeTag(key),
      files: new Set<string>(),
      locales: new Set<string>(),
    };
    cur.files.add(o.file);
    cur.locales.add(o.locale);
    byTag.set(key, cur);
  }

  const japaneseTags = Array.from(byTag.keys()).filter((t) => isProbablyJapanese(t));

  const normalizedDupGroups = new Map<string, string[]>();
  for (const t of byTag.keys()) {
    const n = normalizeTag(t);
    const arr = normalizedDupGroups.get(n) ?? [];
    arr.push(t);
    normalizedDupGroups.set(n, arr);
  }
  const normalizedDuplicates = Array.from(normalizedDupGroups.entries())
    .filter(([, arr]) => arr.length >= 2)
    .map(([, arr]) => arr);

  const semanticPairs = await detectSemanticDuplicateTags({ threshold, maxPairs });

  const hasAny =
    japaneseTags.length > 0 || normalizedDuplicates.length > 0 || semanticPairs.length > 0;

  const lines: string[] = [];
  lines.push(`タグ重複検知レポート（threshold=${threshold}）`);
  lines.push("");

  if (japaneseTags.length > 0) {
    lines.push("## 日本語タグ（英語統一推奨）");
    for (const t of japaneseTags.slice(0, 100)) {
      const meta = byTag.get(t)!;
      lines.push(`- \`${t}\` (${Array.from(meta.locales).join(",")}) 例: ${Array.from(meta.files).slice(0, 3).join(", ")}`);
    }
    lines.push("");
  }

  if (normalizedDuplicates.length > 0) {
    lines.push("## 表記ゆれ（正規化で同一）");
    for (const group of normalizedDuplicates.slice(0, 100)) {
      lines.push(`- ${group.map((t) => `\`${t}\``).join(" / ")}`);
    }
    lines.push("");
  }

  if (semanticPairs.length > 0) {
    lines.push("## 意味が重複している可能性（embedding）");
    for (const p of semanticPairs) {
      const aMeta = byTag.get(p.a);
      const bMeta = byTag.get(p.b);
      lines.push(
        `- sim=${p.similarity.toFixed(3)}: \`${p.a}\` ↔ \`${p.b}\``,
      );
      if (aMeta) lines.push(`  - A例: ${Array.from(aMeta.files).slice(0, 2).join(", ")}`);
      if (bMeta) lines.push(`  - B例: ${Array.from(bMeta.files).slice(0, 2).join(", ")}`);
    }
    lines.push("");
  }

  if (!hasAny) {
    console.log("OK: duplicated tags not detected.");
    return;
  }

  const body = [
    "自動検知で、タグの重複/表記ゆれ/日本語タグが見つかりました。",
    "",
    ...lines,
  ].join("\n");

  console.warn(body);

  if (createIssue) {
    const title = "[auto] duplicated tags detected";
    const res = await upsertIssue({ title, body });
    if (res.ok) {
      console.log(`Issue ${res.action}: #${res.number}`);
    } else {
      console.warn(`Issue作成/更新をスキップ: ${res.reason}`);
    }
  }

  if (failOnDuplicates) process.exit(1);
}

await main();


