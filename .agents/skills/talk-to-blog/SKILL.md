---
name: discord-topic-dialogue-blog
description: Discordのチャンネルやスレッドの会話から、トピック指定に沿った対話形式ブログを生成するときに使う。会話を精査して危険または曖昧な表現を文意を崩さず安全にリライトし、既存ブログ群から収集したタグを使ってフロントマターを埋め、日付を取得して `published_at` に入れた `blog.md` を作成するときに使う。
---

# Discord Topic Dialogue Blog

Generate a single `blog.md` file that contains frontmatter and a dialogue-style body. Use the conversation log as source material. Preserve intent, keep the chronology, and rewrite only the minimum needed for safety and clarity.

## Read First

- Open `references/blog-template.md` before writing frontmatter.
- Use `node scripts/list-tags.js` to collect reusable tags from existing Markdown files in the repo.
- Use the shell command `date +%F` when the conversation does not provide a reliable publish date.

## Workflow

### 1. Normalize the source conversation

- Collect the target topic, message range, requested tone, and any publish-date instruction.
- Keep speaker names and timestamps.
- Remove reactions, bot messages, and noise that do not affect the story.
- Classify each utterance as `Core`, `Supporting`, or `Off-topic`.
- Preserve chronological order. Do not reorder the story for style.

### 2. Design the narrative

- Build the post around `Core` utterances.
- Use `Supporting` utterances only when they improve context, tone, or continuity.
- Drop `Off-topic` material unless the user explicitly asks to keep it.
- Split long conversations with short section headings only when the flow becomes hard to follow.

### 3. Fill the frontmatter

- Copy the exact structure from `references/blog-template.md`.
- Set `title` from the channel or thread title when available. Otherwise write a new title within 70 characters.
- Choose exactly one `emoji` that matches the topic.
- Write `description` in 1-2 sentences that capture the problem and the landing point.
- Always include `ai-generated` as the first tag.
- Run `node scripts/list-tags.js [keyword ...]` and choose 1-3 existing English tags that match the topic.
- Prefer existing canonical tags from the repo. Avoid inventing a new tag unless no existing tag fits.
- Set `published_at` to the conversation date when it is explicit and reliable.
- Run `date +%F` and use that value when the conversation date is missing or ambiguous.

### 4. Write the body

- Start with a short introduction that explains the context, participants, and central question.
- Write each turn as `speaker name`, blank line, then blockquote.

```md
ユーザー1

> foo

ユーザー2

> bar
```

- Merge consecutive messages from the same speaker only when the meaning stays clear.
- Use Discord display names for speakers.
- Render image URLs as Markdown images with short alt text.
- Render normal URLs as plain standalone lines, not Markdown links.
- Add short stage directions such as `*図を共有*` only when they materially help the reader.
- Rewrite dangerous, aggressive, or misleading wording conservatively. Keep the meaning intact and annotate only when useful.

### 5. Verify before saving

- Check that every quoted statement is grounded in the source conversation.
- Check that the order still matches the source chronology.
- Check that safety rewrites did not change the speaker's intent.
- Check that frontmatter keys and order still match `references/blog-template.md`.
- Check that `tags` came from the collected tag list and that `published_at` is filled.

## Scripts

### `scripts/list-tags.js`

Run this command to print reusable English tags collected from existing posts:

```bash
node scripts/list-tags.js
```

Filter by keyword when the topic is narrow:

```bash
node scripts/list-tags.js ai markdown
```

- Output format is `tag<TAB>count`.
- `count` is the number of times the normalized tag appears in the repo.

## Output

- Save the final Markdown as `blog.md` with UTF-8 and LF.
- Return or attach only the file when the surrounding environment expects a file response.
