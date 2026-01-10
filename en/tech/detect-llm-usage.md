---
title: "Can LLM Usage Be Detected?"
emoji: "🤖"
tags:
  - "LLM"
  - "brain-storming"
  - "wip"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLMs) at school? At one time OpenAI and others released experimental software to detect text written by LLMs, but such tools are hard to find now. Is it actually possible to reliably detect LLM usage?"
isTranslated: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "90857afb14f00f5a98f0d154a4bdd1a9dfeba92e7f80e967747ebdea43805b6e"
---

My teacher at school was like, "We have tools to detect LLM usage," — but is that true? So I looked into it.

## How LLMs Work in the First Place

I'm a bit fuzzy on the details, but the way AI returns text is, simply put, like: "the previous word was this, so the next word is probably that." So if you know what prompt was used, the output should be somewhat predictable.[^How?]

But if you don't know the prompt, how would you do that? It probably depends a lot on what data the model was trained on, but for major models, is it largely understandable?

## OpenAI
OpenAI once released software for AI detection.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, it seems the accuracy wasn't great, and it never became practical.

## Quillbot 
A lot of people used it at my previous high school. It's a service that offers an AI detector and a paraphrasing feature (replacing words with other words) in the same app — clearly targeting students trying to get AI to do their assignments. They also provide various other tools.

## Turnitin
At my school, [[ja/works/keio|Keio SFC]], there's sometimes a message saying, "This course uses Turnitin, so your AI use will be totally exposed!"

https://www.turnitin.com/

From what I found, Turnitin offers tools for educational institutions to detect AI use and plagiarism (copy-paste), basically the kinds of tools teachers would like to use.

## wip
This article is a work in progress, and I don't have deep knowledge of LLMs, so I don't really know much — if anyone knows anything, please tell me~

[^How?]: Is there any good reference material?
