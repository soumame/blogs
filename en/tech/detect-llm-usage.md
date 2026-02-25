---
title: "Can the use of LLMs be detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever been banned from using AI tools like ChatGPT (LLMs) at school? For a while OpenAI and others published experimental software to detect text written by LLMs, but nowadays such tools are hard to find. Is it actually possible to reliably detect the use of an LLM?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

My teacher said something like "we have tools to detect the use of LLMs" — I wondered if that's true, so I looked into it.

## How LLMs work in the first place

I only vaguely remember, but the way AI generates text is, simply put, something like "given the previous word(s), the next word will be X" — it outputs based on that kind of pattern. So if you know what prompt was used, you can to some extent predict the output.[^どうやって？]

But if you don't know the prompt, how would you do it? It probably depends a lot on what data the model was trained on, but for major models is it fairly possible to figure out?

## OpenAI
OpenAI previously released software for detecting AI-generated text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, it seems the accuracy wasn't very good, and it probably wasn't practical.

## Quillbot 
A lot of people at my previous high school used it. It's a service that offers an AI detector and a paraphrasing (replacing words with other words) function in the same app — clearly targeting students who try to get assignments done by AI at any cost. They also offer various other tools.

## Turnitin
At my school, [[en/works/keio|Keio SFC]], there are sometimes messages saying "We're using Turnitin for this course, so your use of AI will be totally exposed!".

https://www.turnitin.com/

From what I found, Turnitin provides tools for educational institutions that teachers would want to use, like AI-detection and plagiarism (copy-paste) detection.

## wip
This article is a work in progress, and I don't have deep knowledge of LLM internals, so if anyone knows anything, please let me know~

[＾どうやって？]: Any good references?