type FrontmatterValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Date
  | string[];

export type BlogFrontmatter = {
  title: string;
  emoji: string;
  tags?: string[] | null;
  published_at?: string | Date | null;
  description?: string | null;
  isTranslated?: boolean | null;
  sourcePath?: string | null;
  sourceHash?: string | null;
};

function quoteYamlString(s: string) {
  // YAMLのダブルクォート文字列として安全にする
  // 絵文字を含むUnicodeはそのまま保持する（\u エスケープしない）
  const escaped = s
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n");
  return `"${escaped}"`;
}

function formatScalar(v: Exclude<FrontmatterValue, string[]>) {
  if (v === null || v === undefined) return null;
  if (typeof v === "string") return quoteYamlString(v);
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  if (v instanceof Date) return quoteYamlString(v.toISOString());
  return quoteYamlString(String(v));
}

export function stringifyFrontmatter(data: BlogFrontmatter) {
  const lines: string[] = [];

  // 安定した順序で出力
  lines.push(`title: ${quoteYamlString(data.title)}`);
  lines.push(`emoji: ${quoteYamlString(data.emoji)}`);

  if (Array.isArray(data.tags)) {
    lines.push("tags:");
    for (const t of data.tags) {
      lines.push(`  - ${quoteYamlString(t)}`);
    }
  }

  const published = formatScalar(data.published_at ?? null);
  if (published != null) lines.push(`published_at: ${published}`);

  const desc = formatScalar(data.description ?? null);
  if (desc != null) lines.push(`description: ${desc}`);

  if (data.isTranslated != null) {
    lines.push(`isTranslated: ${data.isTranslated ? "true" : "false"}`);
  }

  const sp = formatScalar(data.sourcePath ?? null);
  if (sp != null) lines.push(`sourcePath: ${sp}`);

  const sh = formatScalar(data.sourceHash ?? null);
  if (sh != null) lines.push(`sourceHash: ${sh}`);

  return lines.join("\n");
}

export function stringifyMarkdownWithFrontmatter(params: {
  frontmatter: BlogFrontmatter;
  body: string;
}) {
  const fm = stringifyFrontmatter(params.frontmatter);
  const body = params.body.replace(/^\s+/, ""); // 先頭の余計な空白は落とす
  return `---\n${fm}\n---\n\n${body}`;
}
