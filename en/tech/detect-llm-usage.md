---
title: "Can LLM Usage Be Detected?"
emoji: "🤖"
tags:
  - "brain-storming"
  - "llm"
published_at: "2025-10-06T00:00:00.000Z"
description: "Have you ever had the use of AI tools like ChatGPT (LLMs) banned at school? For a while, organizations like OpenAI released experimental software to detect text written by LLMs, but now such tools are hard to find. Is it actually possible to reliably detect the use of LLMs?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/detect-llm-usage.md"
sourceHash: "b537120fcb8ea6cebe200ffea8ef6455c15ffdb603512d6c2fb979ac3e562d75"
---

My teacher at school said, “We have tools to detect LLM usage.” I wondered if that was true, so I looked into it.

## How LLMs Work

I'm a bit hazy, but the way AI generates text, put simply, is something like “the previous word was this, so the next word is probably that.” Therefore, if you know what prompt was used, you should be able to predict the output to some extent.[^どうやって?]

But if you don't know the prompt, how would you do it? There will likely be significant differences depending on what data the model was trained on, but for major models, is it largely possible to figure it out?

## OpenAI
OpenAI previously released software for detecting AI-generated text.

https://openai.com/ja-JP/index/new-ai-classifier-for-indicating-ai-written-text/

However, its accuracy didn't seem to be very good, and it probably never reached practical usability.

## Quillbot 
Many people at my previous high school used it. It's a service that targets students who try to get assignments done by AI at all costs, offering an AI detector and a paraphrase (replacing words with other words) feature in the same app. They also provide various other tools.

## Turnitin
At the [[en/works/keio|慶應SFC]] where I attend, there's sometimes a message saying, “This course uses Turnitin, so your AI usage will be totally exposed!”

https://www.turnitin.com/

From what I found, Turnitin provides tools for educational institutions that teachers would want to use, such as detection of AI and plagiarism (copy-paste).

## wip
This article is a work in progress, and I don't have deep knowledge about LLMs, so I don't really understand much. If anyone knows anything, please let me know~

[＾どうやって？]: Are there any good reference materials?