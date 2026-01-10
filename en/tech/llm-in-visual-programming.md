---
title: "Embedding LLMs in Visual Programming (Blockly × LLM)"
emoji: "🤖"
tags:
  - "llm"
  - "programming-education"
  - "dev"
published_at: "2024-11-22 12:19"
isTranslated: true
sourcePath: "ja/tech/llm-in-visual-programming.md"
sourceHash: "48e4dd8cb0ef3c27560847ec58fd321a40f6dc76ee23dcd39abfe3a1476901b8"
---

Nice to meet you. I’m Sōmamekoto Tokumaru Sōsei.

About a year ago I got hooked on Typescript/React web app development, and I’m currently building a web application called [“TutoriaLLM”](https://tutoriallm.com) that integrates visual programming with AI-driven dialogue and real-time code execution features.

https://tutoriallm.com

[“TutoriaLLM”](https://tutoriallm.com) has been in development since the beginning of this year, and while it’s the first app I’ve properly built, I’m happy to say it was selected for [Mitou Junior 2024](https://jr.mitou.org/projects/2024/tutoriallm) and won the AI development division at [Applica Koshien 2024](https://applikoshien.jp/).

That said, I’ve entered a number of external contests, but I haven’t had many opportunities to explain each feature in detail, so today I’d like to think through the integration of LLMs into block-based programming for programming education.

I’ll skip writing out the code because I want many people to read this. If you’re curious about the details, please ask me directly or check the GitHub repository. (If there’s demand, I might write a deeper dive.)
https://github.com/TutoriaLLM/TutoriaLLM

## Integrating LLMs into a VPL

VPLs (visual programming languages) are often used for teaching programming beginners. Recently, LLM accuracy has improved, so some people may be considering integrating LLMs into VPLs.
https://zenn.dev/yutakobayashi/articles/blockly-openai
For example, in this demo developed by yuta, you can create programs directly within the playground of Google’s [Blockly](https://developers.google.com/blockly?hl=ja) VPL. The VPL×AI portion of TutoriaLLM I’ll introduce today is heavily inspired by this.

## There was a problem

However, the aforementioned demo is very well received by general developers (I’m one of them), but user testing revealed it wasn’t very effective for children. Like GitHub Copilot, when an LLM directly creates code, humans write less code. Children, in particular, can become overly reliant on it and throw everything to the AI with an attitude like, “If it can write better code than me, I’ll just have the AI do it all!” I rely on Copilot a lot myself, so I’m not trying to condemn it, but here I treat the behavior of children stopping to think and handing over all tasks to the AI as undesirable.

## Getting users to move their hands

So in TutoriaLLM we developed a system where the AI assists while making users actually move—highlighting blocks and directly suggesting blocks to use—so users manually interact with the workspace while the AI supports them.
[![Image from Gyazo](https://i.gyazo.com/31abfd751e0584aacefefdede66b9997.gif)_AI-driven block highlighting_](https://gyazo.com/31abfd751e0584aacefefdede66b9997)

[![Image from Gyazo](https://i.gyazo.com/002a9d49d1a377a4bd9c23c09e3ef826.gif)_AI-driven block suggestions_
](https://gyazo.com/002a9d49d1a377a4bd9c23c09e3ef826)

We haven’t tested this on a large number of people yet, but this approach at least forces users to move their hands. I used to teach at a programming classroom, and I taught students how to build programs step by step like this. LLMs are very good at imitating human actions and speech, so they work well when teaching step-by-step like this.

## How it was implemented

Both the block highlighting and block suggestions are implemented by making slight modifications to the Blockly framework that provides the visual programming environment. Blockly allows you to dynamically retrieve the workspace contents. You can also retrieve toolbar contents with a bit of tweaking.

The Blockly workspace can be [serialized](https://developers.google.com/blockly/guides/configure/web/serialization) and saved as JSON or XML. TutoriaLLM uses this JSON for processing. For highlighting we draw SVG directly inside the workspace. You can find information on that with a quick search.

The toolbox can be read using methods provided by Blockly. For a collapsible toolbox, we examine every bottom-level category and highlight the entire path up to the matching category once found.

Using these techniques, we parse responses from the LLM and, when there are block highlights or block suggestions, the frontend converts them into a form users can interact with and responds accordingly.

### Early stage

In the early stage, responses looked like the image below. The AI could specify one block per message.
[![Image from Gyazo](https://i.gyazo.com/b9f7d8875b386a3fb282654fcd002bdc.png)_It’s not ideal that the block name is written directly in the chat_](https://gyazo.com/b9f7d8875b386a3fb282654fcd002bdc)
To achieve this, we used OpenAI’s API structured output. I think while building this feature a new structured output mode replacing JSON mode was announced, which greatly reduced the probability of errors.
I vaguely remember responses from gpt looking like this

```json
{
content: "現在、チュートリアルが..."
block: "ext_example_console_log"
toolbar: null
}
```

### Current specification

However, this specification had a problem: it could only select one block. Also, because the responses tended to be long, elementary school children often wouldn’t read the entire message.
So, trading a bit of certainty for better usability, we introduced a new system.
[![Image from Gyazo](https://i.gyazo.com/0d17abba11d61c30241dcbb823768af5.png)](https://gyazo.com/0d17abba11d61c30241dcbb823768af5)

This system parses the LLM’s Markdown-containing output on the frontend and, if block names or workspace block IDs are included, replaces them with the appropriate format for rendering. The current issue is that if block names or IDs are incorrect, they’ll be displayed as plain text, but this approach greatly reduces unnecessary textual information and produces clearer responses.
The LLM just recognizes the user’s workspace as a string and returns it as a string, but the user sees it converted into visual information, so I think it’s a fairly cost-effective method.
[![Image from Gyazo](https://i.gyazo.com/5910b3783b04510b77b318d0705e478a.png)](https://gyazo.com/5910b3783b04510b77b318d0705e478a)

This allows inline instructions referencing multiple blocks and workspace actions like this.

With this, the AI can do everything instead of the teacher pointing at the screen and saying, “Here, here!”, which makes things much easier to understand.

### Voice mode

We’re also working on implementing these features with voice.
There’s a model that came out recently—gpt4o-audio-preview, I think—that can replace these inputs and outputs with audio.
Although the Realtime API got more attention, it had a fatal flaw of forgetting the entire context when the connection was dropped (I’m not sure about the current state), and it only supports voice-to-voice, so we didn’t use it.
Audio-preview doesn’t yet support structured output, so it sometimes returns broken JSON (so you need proper error handling), but it can carry out dialogues in the manner specified by the user. For example, you can input by voice and output as text.
[![Image from Gyazo](https://i.gyazo.com/0670ec2f53d2d882f842b53804275926.jpg)_When input is by voice_](https://gyazo.com/0670ec2f53d2d882f842b53804275926)

[![Image from Gyazo](https://i.gyazo.com/0abdd3a3e228a0e237de5abd1b143315.jpg)_When input is text_
](https://gyazo.com/0abdd3a3e228a0e237de5abd1b143315)
That said, I’m not sure it’s practical yet, so if you’re interested please try it at [demo.tutoriallm.com](https://demo.tutoriallm.com).

## In closing

So,
TutoriaLLM is still in development and unstable enough to crash almost daily... but we’ve already released a demo. Everything is open source and we’re eagerly looking for contributors, so the code might be messy—please take a look if you’re interested.
https://github.com/TutoriaLLM/TutoriaLLM

If you’re interested, I’d appreciate a follow on social media!
https://tokumaru.work/ja