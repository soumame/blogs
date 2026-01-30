---
title: "Can the Use of LLMs Be Detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLMs) at school? At one time, companies like OpenAI released experimental software to detect text written by LLMs, but nowadays you don't find much of that when you look. Is it actually possible to reliably detect LLM use?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

One of my teachers said, “We have tools to detect LLM usage,” but is that really true? I decided to look into it.

## How LLMs Work in the First Place

I'm a bit fuzzy on the details, but the way AI returns text is, in simple terms, like predicting “the next word is probably this because the previous word(s) were that.” So if you knew what prompt was used, you could to some extent predict the output. [^How?]

But if you don't know the prompt, how would you do it? The results probably vary quite a bit depending on what data the model was trained on, but I wonder if you can tell much for major models.

## OpenAI
OpenAI once released software for detecting AI-written text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, its accuracy wasn't very good, and it probably wasn't practical for real use.

## Quillbot
A lot of people used it at my previous high school. It's a service that offers both an AI detector and a paraphrasing feature (replacing words with other words) in the same app — clearly targeting students determined to get AI to do their assignments. It also offers various other tools.

## Turnitin
At my school, [[en/works/keio|Keio SFC]], sometimes there's a message saying, “This course uses Turnitin, so your use of AI will be obvious!”

https://www.turnitin.com/

From what I found, Turnitin provides tools that educators would want, such as detection of AI use and plagiarism (copy-and-paste).

## wip

This article is a work in progress, and I don't have deep knowledge of LLM internals, so if anyone knows anything, please let me know~

[^How?]: Any good reference documents or resources?