---
title: "Thick-Cut JSON"
emoji: "🔤"
tags:
  - "ai-generated"
published_at: "2026-07-22T00:00:00.000Z"
description: "\"Why JSON format!?!?\" \"Why can't we write comments!? Didn't they say it's a format for humans to read!? They make us use it for config files but won't let us leave notes — what kind of cruelty is that!? Have you ever considered the feelings of engineers who have to create a dummy key like `\"comment1\": \"ここは本番のURL\"`?\""
isTranslated: true
isDraft: false
sourcePath: "ja/misc/atsugiri-json.md"
sourceHash: "133fc8154dc72401f9571ed29b6fd7a93cfcd90c83b87a51efa39f946ccd1a84"
---

soumame
> Thinking up a signature bit called “Thick-Cut JSON” by a real engineer, not Atsugiri Jason

Hello World! This is the "Thick-Cut JSON" bit by a hardcore engineer-comedian. That high energy and righteous anger aimed at absurdity — it's perfect to channel at the JSON spec.

Imagine him pounding the whiteboard and screaming as you read.

https://ja.wikipedia.org/wiki/%E5%8E%9A%E5%88%87%E3%82%8A%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%BD%E3%83%B3


**【Entrance】** (bursting onto the stage) "Hello World!! I'm the hardcore engineer-comedian, Thick-Cut JSON!!"

"Hey everyone, great job on system development today! But I'm angry! That data format acting like the de facto standard in the IT world — it's full of nonsense!!"

"Today I want you all to look at this!!" (starts writing on the whiteboard with a marker)

**【Bit 1: Comments】** "People often use JSON as a config file, right? For the team, you want to leave a memo explaining what this setting is. It's an act of kindness from engineers!"

(on the whiteboard) `// ここは本番環境のURL` `"apiUrl": "https://..."`

"Alright, let's run this! …'SyntaxError: Unexpected token / in JSON'"

(eyes wide, screaming) "**Why JSON format!?!?**" "Why can't we write comments!? Didn't they say it's a format for humans to read!? They make us use it for config files but won't let us leave notes — what kind of cruelty is that!? Have you ever considered the feelings of engineers who have to create a dummy key like `"comment1": "ここは本番のURL"`?"

**【Bit 2: Trailing Commas】** "Fine, give up on comments. Next up: arrays. Adding items to a list is a common operation, right?"

(on the whiteboard) `[` `"apple",` `"banana",` `]`

"Okay, I just added banana at the end. Perfect. Run it! …'SyntaxError: Unexpected token ] in JSON'"

(slaps the whiteboard loudly and screams) "**Why JSON format!?!?**" "Why won't it allow the trailing comma at the end!? In JavaScript objects it's allowed, but the moment it becomes JSON it gets suddenly strict!? When you look at diffs in version control like Git, that comma causes the previous line to show up as changed, which is super annoying!! Please just parse the trailing comma gracefully!!"

**【Bit 3: Date Type】** "There's more! Modern system development always deals with this one type of data. Yes, 'time'! Registration dates, update timestamps — you always store these, right?"

(on the whiteboard) `{` `"createdAt": 2026-07-22` `}`

"Okay, I put a date in. I'll parse it and show it on the screen! ...wait? There's no Date type?"

(grabs his head and screams) "**Why JSON format!?!?**" "Why isn't there a native 'date' type!? Since you only have strings and numbers, we force dates into ISO 8601 strings like `"2026-07-22T12:00:00Z"` and make the frontend call `new Date()` every time it receives one!! Engineers around the world are constantly converting between strings and dates every single day!! What a waste of time!!"

**【Punchline】** (loosening his tie, calming down a bit)

"...But I still prefer it to XML, which is full of tags and unbearably heavy."

"That's all!!"