---
title: "Can the Use of LLMs Be Detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLM) at school? For a while OpenAI and others released experimental software to detect text written by LLMs, but such tools don't seem to appear much anymore. Is it actually possible to reliably detect LLM usage?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

So a teacher at school said, “We have a tool to detect LLM usage,” but is that true? I looked into it.

## How LLMs Work

I don't remember precisely, but basically AI generates text by predicting the next word based on the previous ones — like "the previous word was this, so the next is probably that." So if you knew the prompt used, you could to some extent predict the output. [^How?]

But if you don't know the prompt, how would you do it? There's likely a big difference depending on what data the model was trained on, but for major models, is it possible to figure it out to some extent?

## OpenAI
OpenAI previously released software for detecting AI-generated text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, it seems the accuracy wasn't very good, and it never became practical.

## Quillbot
Many people used it at my previous high school. It's a service that offers an AI detector and a paraphrasing feature (replacing words with other words) in the same app—clearly targeting students trying to get their assignments done by AI. It also offers various other tools.

## Turnitin
At [[en/works/keio|Keio SFC]] (where I study) there's sometimes a message that says, "This course uses Turnitin, so your AI usage will be totally exposed!"

https://www.turnitin.com/

From what I found, Turnitin offers tools for educational institutions that teachers would want, such as detecting AI use and plagiarism (copy-and-paste).

## wip
This article is a work in progress, and I don't have deep knowledge of LLM internals, so if anyone knows anything, please tell me~

[＾How?]: Any good reference documents or resources?