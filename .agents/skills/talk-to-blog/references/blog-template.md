# Discord Dialogue Blog Front Matter

Use this exact block at the top of every Markdown output. Replace only the placeholder text.

- Collect reusable tags from the repo before filling `tags`:
  `node scripts/list-tags.js [keyword ...]`
- Get today's date for `published_at` when the conversation date is unknown:
  `date +%F`
- Keep `ai-generated` as the first tag. Add 1-3 existing English tags from the collected list when they match the topic.

```
---
title: <タイトル>
emoji: <主要テーマに最も関連する1つの絵文字>
description: <会話全体のサマリー（1-2文、日本語OK）>
tags:
  - ai-generated
  - <収集済みタグから選んだ英語タグ>
published_at: <YYYY-MM-DD>
isTranslated: false
isDraft: true
style: dialogue
noIndex: false
dialogue-users:
  そうまめ: https://avatars.githubusercontent.com/u/46675982
  まめの家: https://i.gyazo.com/8b41047e614840673b90b7120faf5cfe.jpg
  <上記は例。発話者名と、名前を並べる>
---
```

## 見出し

そうまめ
> こんな感じに書くと、自動的にコメントとして読み込まれるよ。

まめの家
> いいね！。会話の内容がわかりやすく整理されそう。
