---
title: "Can LLM usage be detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLMs) at school? For a time, OpenAI and others released experimental software to detect text written by LLMs, but nowadays those tools don't seem to appear much in searches. Is it actually possible to reliably detect LLM usage?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

Some teacher at school was like 「私たちは LLM の使用を検知するツールを持っている」 — is that true? I decided to look into it.

## そもそものLLMの仕組みについて

If I remember correctly, the way AI returns text is, simply put, it outputs something like “the previous words were this, so the next word will probably be that.” So if you know what prompt was used, you should be able to predict the output to some extent.[^どうやって?]

But if you don't know the prompt, how would you do it? I imagine it depends a lot on what data the model was trained on, but for major models, is it largely knowable?

## OpenAI
OpenAI previously released software for AI detection.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, its accuracy didn't seem very good, so it likely wasn't practical.

## Quillbot 
A lot of people at my previous high school used it. It's a service targeting students who will do anything to get assignments done by AI, offering an AI detector and a paraphrasing feature (replacing words with other words) in the same app. They also offer various other tools.

## Turnitin
At my school [[en/works/keio|慶應SFC]], there are sometimes messages saying 「この講義ではTurnitinを使っているのでお前らのAI使用はバレバレだよ！」

https://www.turnitin.com/

From what I found, Turnitin provides tools for educational institutions to detect AI use and plagiarism (copy-paste), and other tools teachers would likely want to use.

## wip
This article is a work in progress, and I don't have deep knowledge of LLMs so I don't really understand much — if anyone knows anything, please let me know~


[＾どうやって？]: Are there any good reference documents?