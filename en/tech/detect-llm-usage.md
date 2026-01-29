---
title: "Can LLM Usage Be Detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLMs) at school? At one time, OpenAI and others released experimental software to detect text written by LLMs, but nowadays such tools are hard to find. Is it actually possible to reliably detect LLM usage?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

My teacher said, “We have tools to detect LLM usage,” but is that true? I decided to look into it.

## How LLMs Work

This is from memory, but the way AI generates text is, simply put, something like “the previous word was this, so the next word is probably that.” So if you know the prompt, you can to some extent predict the output.[^how?]

But if you don’t know the prompt, how would you do it? It probably depends a lot on what data the model was trained on, but for major models, could you figure it out to a fair degree?

## OpenAI
OpenAI previously released software for detecting AI-generated text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, its accuracy didn’t seem very good, and it didn’t become practical.

## Quillbot
A lot of people at my previous high school used it. It’s a service that offers an AI detector and a paraphrasing feature (replacing words with other words) in the same app—basically targeting students determined to get AI to do their assignments. It also provides various other tools.

## Turnitin
At my school [[en/works/keio|Keio SFC]], there are sometimes messages saying, “This course uses Turnitin, so your AI use will be obvious!”

https://www.turnitin.com/

From what I’ve found, Turnitin offers tools for educational institutions to detect AI use, plagiarism (copy-paste), and other features teachers would want.

## wip
This article is a work in progress and I don’t have deep knowledge of LLMs, so I don’t really understand much—if anyone knows anything, please tell me~

[^how?]: Any good reference materials?