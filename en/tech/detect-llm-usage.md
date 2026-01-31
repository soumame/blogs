---
title: "Can LLM Usage Be Detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been prohibited from using AI tools like ChatGPT (LLMs) at school? For a while, OpenAI and others released tools to detect AI-written text, but those seem harder to find now. Is it actually possible to reliably detect LLM usage?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

A teacher at my school was saying, "We have tools to detect LLM usage," so I wondered if that's true and decided to look into it.

## How LLMs Work in the First Place

My memory is fuzzy, but the way AI generates text is, simply put, something like: "given the previous words, the next word is likely this," and it outputs based on that. So if you knew the prompt, you could to some extent predict the output.[^どうやって?]

But if you don't know the prompt, how would you do it? It probably depends a lot on what data the model was trained on, but I wonder if you can tell pretty well for major models.

## OpenAI

OpenAI has previously released software for AI detection.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, the accuracy didn't seem great, and it probably hasn't reached practical usability.

## Quillbot

A lot of people at my previous high school used it. It offers an AI detector and a paraphrasing feature (replacing words with other words) in the same app — a service clearly targeting students trying to get AI to do their assignments. It also provides various other tools.

## Turnitin

At [[en/works/keio|Keio SFC]] where I attend, some courses have messages like, "We use Turnitin in this class, so your AI usage will be obvious!"

https://www.turnitin.com/

From what I found, Turnitin provides tools that teachers would want, such as AI detection and plagiarism (copy-paste) detection, aimed at educational institutions.

## wip

This article is a work in progress, and I don't have deep knowledge of LLM internals, so I don't really know much — if anyone knows something, please let me know~


[＾どうやって？]: Any good reference documents?