import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

export type OpenAIModels = {
  translationModel: string;
  embeddingModel: string;
};

export function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY が未設定です。CI/ローカルで環境変数を設定してください。"
    );
  }
  return new OpenAI({ apiKey });
}

export function getOpenAIModels(): OpenAIModels {
  return {
    translationModel: process.env.OPENAI_TRANSLATION_MODEL ?? "gpt-4o-mini",
    embeddingModel:
      process.env.OPENAI_EMBEDDING_MODEL ?? "text-embedding-3-small",
  };
}

export async function embedTexts(texts: string[]) {
  const client = getOpenAIClient();
  const { embeddingModel } = getOpenAIModels();
  const res = await client.embeddings.create({
    model: embeddingModel,
    input: texts,
  });
  return res.data.map((d) => d.embedding);
}

export type TranslateMarkdownOutput = {
  title: string;
  description: string;
  body: string;
};

export async function translateMarkdownStructured(params: {
  sourceLocale: "ja" | "en";
  targetLocale: "ja" | "en";
  sourceTitle: string;
  sourceDescription?: string | null;
  markdownBody: string;
}): Promise<TranslateMarkdownOutput> {
  const client = getOpenAIClient();
  const { translationModel } = getOpenAIModels();

  const jsonSchema = {
    type: "json_schema",
    name: "translated_markdown",
    strict: true,
    schema: {
      type: "object",
      additionalProperties: false,
      properties: {
        title: { type: "string" },
        description: { type: "string" },
        body: { type: "string" },
      },
      required: ["title", "description", "body"],
    },
  } as const;

  const sourceLang = params.sourceLocale === "ja" ? "日本語" : "英語";
  const targetLang = params.targetLocale === "ja" ? "日本語" : "英語";

  const prompt = [
    `あなたは技術ブログの編集者です。以下のMarkdown記事を ${sourceLang} → ${targetLang} に翻訳してください。`,
    "",
    "制約:",
    "- 出力は **JSONのみ**（スキーマに厳密準拠）",
    "- Markdown本文は Markdown のまま（リンク/画像/コードフェンス/見出し/引用 を壊さない）",
    "- 翻訳対象は title / description / body のみ（emojiやtags等は触らない）",
    "- description は必ず返す（元が無い場合は空文字でよい）",
    "- 埋め込みなどのコードは、そのままコピーする",
    "",
    "ソースfrontmatter（参考）:",
    `- title: ${params.sourceTitle}`,
    `- description: ${params.sourceDescription ?? ""}`,
    "",
    "ソース本文(Markdown):",
    params.markdownBody,
  ].join("\n");

  const res = await client.responses.create({
    model: translationModel,
    instructions:
      "You are a careful translator and technical editor. Preserve markdown formatting exactly and return strictly valid JSON according to the provided schema.",
    input: prompt,
    text: { format: jsonSchema },
  });

  const text = res.output_text;
  if (!text) throw new Error("OpenAIからの出力が空です");

  const parsed = JSON.parse(text) as TranslateMarkdownOutput;
  return parsed;
}
