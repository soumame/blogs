---
title: "Thick-Cut JSON"
emoji: "🔤"
tags:
  - "ai-generated"
published_at: "2026-07-22T00:00:00.000Z"
description: "\"Why JSON format!?!?\" \"Why can't we write comments!? Didn't you say it's a format for humans to read!? You make us use it for config files but won't let us leave notes — that's cruel!! Have you ever thought about the feelings of engineers forced to add a dummy key like `\"comment1\": \"ここは本番のURL\"`?\""
isTranslated: true
isDraft: false
sourcePath: "ja/misc/atsugiri-json.md"
sourceHash: "133fc8154dc72401f9571ed29b6fd7a93cfcd90c83b87a51efa39f946ccd1a84"
---

soumame
> Think up a staple routine for "Thick-Cut JSON" — not Atsugiri Jason, but the hardcore engineer's version.

Hello World! This is the hardcore engineer comedian, "Thick-Cut JSON." That energy and the rage against unfairness are perfect to aim at the JSON specification.

Imagine him slamming the whiteboard and screaming as you read.

https://ja.wikipedia.org/wiki/%E5%8E%9A%E5%88%87%E3%82%8A%E3%82%B8%E3%82%A7%E3%82%A4%E3%82%BD%E3%83%B3


**【Entrance】** （bursts onto the stage） "Hello World!! I'm the hardcore engineer comedian, Thick-Cut JSON!!"

"Man, everyone — thanks for all your system development work today! But I'm angry! That data format that acts like the de-facto standard of the IT industry — it has so many messed-up things!!"

"Today I want you all to look at this!!" (starts writing on the whiteboard with a marker)

**【Bit 1: Comments】** "People often use JSON as a configuration file format, right? Out of kindness for the team you want to leave notes about what this setting does. It's an act of engineering compassion!"

(writes on the whiteboard) `// ここは本番環境のURL` `"apiUrl": "https://..."`

"Alright, let's run this! ……『SyntaxError: Unexpected token / in JSON』"

(eyes widen, screams) "**Why JSON format!?!?**" "Why can't you write comments!? Didn't you say it's a format for humans to read!? You make us use it for config files but won't let us leave notes — that's cruel!! Have you ever thought about the feelings of engineers who have to create a dummy key like `"comment1": "ここは本番のURL"`?"

**【Bit 2: Trailing Commas】** "Okay, fine — give up on comments. Next: arrays. It's common to append items to a list!"

(writes on the whiteboard) `[` `"apple",` `"banana",` `]`

"Alright, I added banana at the end. Perfect. Let's run it! ……『SyntaxError: Unexpected token ] in JSON』"

(slams the whiteboard and screams) "**Why JSON format!?!?**" "Why won't you allow the trailing comma!? JavaScript objects allow it, but the moment it becomes JSON it suddenly becomes strict!? When looking at diffs in version control like Git, that trailing comma can cause the previous line to appear changed — it's such a pain!! Please, just parse the last comma gracefully!!"

**【Bit 3: Date Type】** "There's more! Modern systems always deal with this kind of data: time! User registration dates, update timestamps — you always save them!"

(writes on the whiteboard) `{` `"createdAt": 2026-07-22` `}`

"Alright, I put a date in. I'll parse this and show it on the screen!...wait? There's no Date type?"

(puts head in hands and screams) "**Why JSON format!?!?**" "Why isn't a 'date' type provided by default!? Since there are only strings and numbers, we forcibly use an ISO 8601 string like `"2026-07-22T12:00:00Z"` and make the frontend call `new Date()` every time! Engineers around the world are constantly converting between strings and dates every single day!! It's such a waste of time!!"

**【Punchline】** (loosening his tie, calming down a bit)

"...But I still prefer it over XML, which is full of tags and ridiculously heavy."

"That's it!!"