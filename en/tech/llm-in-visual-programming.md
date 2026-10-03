---
title: I Want to Incorporate LLM into Visual Programming (Blockly × LLM)
emoji: 🤖
locale: en
slug: llm-in-visual-programming
category: tech
tags:
  - dev
  - llm
  - programming-education
published_at: 2024-11-22T03:19:00.000Z
updated_at: 2024-11-22T03:19:00.000Z
description: Hello everyone. My name is Sousei Tokumaru, also known as Sōmame. About a year ago, I became deeply fascinated with web application development using Typescript
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: true
translation_of: 01M3TQXVGTVCXG4VBJSN3T39SE
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

Hello everyone. My name is Sousei Tokumaru, also known as Sōmame.
About a year ago, I became deeply fascinated with web application development using Typescript and React, and I am currently creating a web application called ["TutoriaLLM"](https://tutoriallm.com), which incorporates visual programming, AI interactions, and real-time code execution features.

[TutoriaLLMへようこそ](https://tutoriallm.com)

Scratchのようなブロックプログラミングのチュートリアルを簡単に作成し、AIを利用して提供することができるセルフホスト型のソフトウェアです。

Since the beginning of this year, I have been developing ["TutoriaLLM"](https://tutoriallm.com). While it's the first serious app I have created, I am happy to say that it has been selected for [Unexplored Junior 2024](https://jr.mitou.org/projects/2024/tutoriallm) and has won the AI development category at [App Koshien 2024](https://applikoshien.jp/).

However, although I have participated in several external contests, I have not had many opportunities to explain the details of each feature. So today, I would like to think about incorporating LLM into programming education using block programming.

I would like as many people as possible to see this, so I will omit the program descriptions. If you are curious about the details, please feel free to ask me directly or refer to the GitHub repository. (I might write more detailed articles if there is demand.)
<https://github.com/TutoriaLLM/TutoriaLLM>

## Incorporating LLM into VPL

VPL (Visual Programming Language) is often associated with the education of programming beginners. Recently, as the accuracy of LLMs has improved, some people might consider incorporating LLMs into VPL as well.
<https://zenn.dev/yutakobayashi/articles/blockly-openai>
For example, in this demo developed by Yuta, it is possible to create programs directly within a workspace of [Blockly](https://developers.google.com/blockly?hl=ja), which is developed by Google. The VPL×AI system of TutoriaLLM that I will introduce today is quite inspired by this.

## Issues Encountered

However, while the aforementioned demo is well-received by general developers (I am one of them), user tests showed that it was not very effective for children. Similar to GitHub Copilot, when LLMs are used to create programs directly, humans tend to write less code, and especially with children, they can overly rely on it. This leads to a mentality of "If AI can write a better program than me, I'll let it handle everything!" I am someone who heavily relies on Copilot, so I cannot deny it, but for the sake of discussion, let's treat it as a negative that children can stop thinking and delegate all tasks to AI.

## Encouraging User Interaction

Therefore, in TutoriaLLM, we developed a system that highlights blocks and directly suggests blocks to encourage users to actually engage by moving their hands while AI provides assistance.
[![Image from Gyazo](../../media/5ebf367da44130fd94159e5e0ffca38df7ff2f65989a9700022d0d6067c2d122.gif)*AI Highlighting Blocks*](../../media/5ebf367da44130fd94159e5e0ffca38df7ff2f65989a9700022d0d6067c2d122.gif)

[![Image from Gyazo](../../media/c23805505c7b94cf5912202d041d4015c337e9cd8d192faa915d9062e3a45bcf.gif)*AI Block Suggestions*](../../media/c23805505c7b94cf5912202d041d4015c337e9cd8d192faa915d9062e3a45bcf.gif)

Although we have not been able to conduct large-scale testing yet, at least users will now need to move their hands. In fact, I used to teach programming classes, and I taught students step-by-step how to create programs like this. LLM is very good at mimicking human behaviors and speech, so it works well even when teaching step-by-step.

## Implementation

Both the block highlighting and block suggestions use a slightly modified version of the framework providing visual programming, called Blockly. With Blockly, the contents of the workspace can be dynamically retrieved. Additionally, accessing the contents of the toolbar can also be done easily with slight modifications.

The contents of the Blockly workspace can be [serialized](https://developers.google.com/blockly/guides/configure/web/serialization), allowing for saving in JSON or XML formats. In TutoriaLLM, we use this JSON for processing.
For highlighting, we handle it by directly drawing SVGs within the workspace. You should be able to find information on this through research.

Toolbox reading can be done using the methods provided by Blockly. For collapsible toolboxes, we highlighted all categories in the hierarchy until we discovered a matching category by searching to the lowest level.

Then, using these technologies, we analyze responses from LLMs and respond to the frontend with anything like block highlights or suggestions, making it available for users.

### Initial Stage

In the initial stage, responses like the one in the image were returned. The AI could specify one block for each message.
[![Image from Gyazo](../../media/40ea305806d4c82b28a9aaf5f316acfaa6ed52ffe1070137ac697727a0edae36.png)*It's not good to have the block name written in the chat.*](../../media/40ea305806d4c82b28a9aaf5f316acfaa6ed52ffe1070137ac697727a0edae36.png)
To achieve this, we used the structured output from OpenAI's API. During the creation of this feature, a new structured output mode was announced, which replaced JSON mode and significantly reduced the probability of errors.
Although I recall vaguely, the response from GPT looked something like this:

```json
{
content: "Currently, the tutorial is..."
block: "ext_example_console_log"
toolbar: null
}
```

### Current Specifications

However, this specification had issues: **only one block can be selected**. Moreover, since the text tends to become long, **elementary school children often do not read everything.** Therefore, we implemented a new system, **in exchange for some reliability.**&#xA;

[![Image from Gyazo](../../media/548a2f141e7ae4af817fc9ce3e4f588986ce60ba3eef5feb2999830d05241c6a.png)](../../media/548a2f141e7ae4af817fc9ce3e4f588986ce60ba3eef5feb2999830d05241c6a.png)

&#xA;This system analyzes sentences from LLM that contain Markdown and replaces block names and block IDs within the workspace into an appropriate format for rendering. The current issue is that if block names or IDs are incorrect, they are displayed as plain text. However, thanks to this, unnecessary textual information has been greatly reduced, allowing for clearer responses.
LLMs merely recognize the user’s workspace as a string and return it as a string, but since users see it converted into visual information, I think it's quite a cost-effective method.&#xA;

[![Image from Gyazo](../../media/06dccb95ea682b6829f67394c7b1ae39d003906eb486df9f5afa07ff24becc4f.png)](../../media/06dccb95ea682b6829f67394c7b1ae39d003906eb486df9f5afa07ff24becc4f.png)

&#xA;This allows for inline guidance for multiple blocks and workspace instructions.

With this, teachers do not have to point to the screen saying, "Here, look, here!" because AI can do all of that, making it very easy to understand.

### Voice Mode

Additionally, we are also working on implementing this via voice.
Recently, a model called gpt4o-audio-preview (if I remember correctly) allows for these inputs and outputs to be replaced by audio.
While the Realtime API has been a hot topic, it had a critical flaw where it would forget all context when disconnected (I’m not sure if this is still the case now). Moreover, as it only supports voice-to-voice, I did not use it.
Audio-preview does not yet support structured output, so it sometimes returns broken JSON (proper error handling is necessary), but it enables dialogues in the way specified by users. For example, it can allow for input via voice and output via text.
[![Image from Gyazo](../../media/48751b3a329a6f8204d6f2d81464b13ba95983ba4e77f71a7e024bfc991c75a8.jpg)*For voice input*](../../media/48751b3a329a6f8204d6f2d81464b13ba95983ba4e77f71a7e024bfc991c75a8.jpg)

[![Image from Gyazo](../../media/2d1044c054a7f0288a7238b919b9eb3b09bfa96072ee31b24deca2fcd07eca9c.jpg)*For text input*](../../media/2d1044c054a7f0288a7238b919b9eb3b09bfa96072ee31b24deca2fcd07eca9c.jpg)
Nevertheless, I feel it may not yet be practical, so please try it at [demo.tutoriallm.com](https://demo.tutoriallm.com) if you're interested.

## Conclusion

In conclusion, TutoriaLLM is currently in development and is unstable to the level of crashing daily... but a demo version is already available. Also, it's fully open source and actively seeking contributors, so please take a look even though the code might be messy.
<https://github.com/TutoriaLLM/TutoriaLLM>

If you are interested, I would be happy if you could follow me on social media!
<https://tokumaru.work/ja>
