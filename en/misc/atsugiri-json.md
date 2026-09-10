---
title: "Thick-Cut JSON"
emoji: "🔤"
tags:
  - "ai-generated"
published_at: "2026-07-22T00:00:00.000Z"
description: "\"Why JSON format!?!?\" \"Why can't you write comments!? Didn't they say it's a format for humans to read!? They force us to use it as a config file but won't let us leave notes—what kind of cruelty is that!? Have you ever thought about how it feels for engineers who have to create a dummy key like `\"comment1\": \"ここは本番のURL\"`?\""
isTranslated: true
isDraft: false
sourcePath: "ja/misc/atsugiri-json.md"
sourceHash: "133fc8154dc72401f9571ed29b6fd7a93cfcd90c83b87a51efa39f946ccd1a84"
---

soumame
> Think up a signature bit for a serious engineer's "Thick-Cut JSON," not the comedian Atsugiri Jason

Hello World! This is the "Thick-Cut JSON" of a serious engineer-comedian. That high energy and righteous anger are perfect for venting at the absurdities of the JSON spec.

Read this while imagining him pounding the whiteboard and screaming.

https://ja.wikipedia.org/wiki/%E5%8E%9A%E5%88%87%E3%82%8A%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%BD%E3%83%B3


**【Entrance】** (bursting onto the stage) "Hello World!! I'm the serious engineer-comedian, Thick-Cut JSON!!"

"Hey, everyone, great job on your system development today! But I'm angry! That data format that pretends to be the industry's de facto standard—it's full of nonsense!!"

"Today I want you all to look at this!!" (starts writing on the whiteboard with a marker)

**【Bit 1: Comments】** "People often use JSON as a config file, right? You want to leave notes for the team explaining what this setting does. That's an act of kindness from engineers!"

(writing on the whiteboard) `// ここは本番環境のURL` `"apiUrl": "https://..."`

"Okay, let's run this now! …'SyntaxError: Unexpected token / in JSON'"

(eyes wide, screaming) "**Why JSON format!?!?**" "Why can't you write comments!? Didn't they say it's a format for humans to read!? They make you use it as a settings file but won't let you leave notes—what kind of cruelty is that!? Have you ever considered the feelings of the engineer who has to create a dummy key like `"comment1": "ここは本番のURL"`?"

**【Bit 2: Trailing Commas】** "Fine, I give up on comments. Next is arrays. You often append items to a list, right?"

(writing on the whiteboard) `[` `"apple",` `"banana",` `]`

"Alright, I just added banana at the end. Perfect. Run it! …'SyntaxError: Unexpected token ] in JSON'"

(slams the whiteboard and screams) "**Why JSON format!?!?**" "Why won't it allow the trailing comma at the end!? In JavaScript objects it's allowed, but the moment it becomes JSON it gets strict!? When viewing diffs in version control like Git, that comma makes it look like the previous line changed too, and it's super annoying!! Just be lenient and parse the trailing comma, please!!"

**【Bit 3: Date Type】** "There's more! Modern system development always deals with this data: time! Registration dates, update timestamps—we always save these, right?"

(writing on the whiteboard) `{` `"createdAt": 2026-07-22` `}`

"Okay, I put in a date. Let's parse this and show it on the screen! …huh? There's no Date type?"

(holding his head and screaming) "**Why JSON format!?!?**" "Why isn't a 'date type' provided by default!? Since there are only strings and numbers, we force `"2026-07-22T12:00:00Z"` into ISO 8601 string form and make the frontend call `new Date()` every time it receives it!! Engineers all over the world go back and forth between strings and dates every single day!! It's such a waste of time!!"

**【Punchline】** (loosening his tie, calming down a bit)

"...But I still prefer it to that tag-heavy, bloated XML."

"That's all!!"