---
title: "Can the use of LLMs be detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever had AI tools like ChatGPT (LLM) banned at school? At one time, OpenAI and others released experimental software for detecting LLM-written text, but nowadays such tools don't turn up much when you look. Is it really possible to reliably detect LLM usage?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

A teacher at school was like, "We have tools to detect LLM usage," and I wondered if that was true, so I looked into it.

## About how LLMs work in the first place

From what I vaguely remember, the way AI returns text is basically like: "the previous word was this, so the next word is probably that," and it outputs in that kind of manner. Therefore, if you knew what prompt was used, you should be able to predict the output to some extent. [^How?]

But if you don't know the prompt, how would you do it? It probably varies quite a bit depending on what data the model was trained on, but for a major model, maybe you can figure out a lot.

## OpenAI
OpenAI previously released software for detecting AI-written text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, its accuracy didn't seem very good, and it probably never became practical.

## Quillbot 
When I was at my previous high school, a lot of people used it. It's a service that offers an AI detector and a paraphrasing (replacing words with other words) function in the same app—targeting students who will do anything to get their assignments done by AI. They also provide various other tools.

## Turnitin
At my school [[en/works/keio|慶應SFC]], there are sometimes messages like, "This course uses Turnitin, so your AI usage will be obvious!"

https://www.turnitin.com/

From what I found, Turnitin provides tools for educational institutions, such as detection of AI and plagiarism (copy-paste), basically tools teachers would want to use.

## wip
This article is a work in progress, and I don't have deep knowledge of LLM internals, so I don't really know much — if anyone knows anything, please let me know~

[^How?]: Is there any decent reference material?