---
title: "Integrating LLM into Visual Programming (Blockly × LLM)"
emoji: "🤖"
tags:
  - "frontend"
  - "programming-education"
  - "blockly"
  - "gpt"
  - "llm"
published_at: "2024-11-22 12:19"
---

Hello, I'm Soma Tokumaru.
For about a year, I've been deeply involved in Typescript/React web app development, and I'm currently creating a web application called ["TutoriaLLM"](https://tutoriallm.com) that incorporates visual programming, AI dialogue, and real-time code execution features.

https://tutoriallm.com

["TutoriaLLM"](https://tutoriallm.com) has been in development since the beginning of this year. While it's my first serious application, I'm happy to say it was selected for [Mitou Junior 2024](https://jr.mitou.org/projects/2024/tutoriallm) and won the AI development division at [App Koshien 2024](https://applikoshien.jp/).

Although I've been showcasing it at various external contests, I haven't had many opportunities to explain each feature in detail. Today, I'd like to explore various aspects of integrating LLM into programming education using block programming.

To make this accessible to many people, I'll omit program code details. If you're interested in specifics, please feel free to ask me directly or refer to the GitHub repository. (I might write more in-depth content if there's demand.)
https://github.com/TutoriaLLM/TutoriaLLM

## Integrating LLM into VPL

VPL (Visual Programming Language) is often used for teaching programming beginners. With recent improvements in LLM accuracy, some might be considering integrating LLM into VPL.
https://zenn.dev/yutakobayashi/articles/blockly-openai
For example, Yuta's demo achieves direct program creation within Google's [Blockly](https://developers.google.com/blockly?hl=ja) VPL workspace. TutoriaLLM's VPL×AI system is heavily inspired by this.

## There Was a Problem

However, while the aforementioned demo is well-received by developers (myself included), user testing revealed it wasn't very effective with children. Like GitHub Copilot, when LLM directly writes programs, humans write less code, and children especially tend to become overly dependent on it, thinking "If AI can write better programs, I'll just let it do everything!" As someone who heavily relies on Copilot myself, I can't entirely criticize this, but for now, let's consider it problematic when children completely delegate tasks to AI without thinking.

## Getting Users to Take Action

Therefore, in TutoriaLLM, we developed a system where AI assists users while they actively participate, using block highlighting and direct block suggestions.
[![Image from Gyazo](https://i.gyazo.com/31abfd751e0584aacefefdede66b9997.gif)_AI Block Highlighting_](https://gyazo.com/31abfd751e0584aacefefdede66b9997)

[![Image from Gyazo](https://i.gyazo.com/002a9d49d1a377a4bd9c23c09e3ef826.gif)_AI Block Suggestions_
](https://gyazo.com/002a9d49d1a377a4bd9c23c09e3ef826)

While we haven't tested it with a large audience yet, this approach requires users to be hands-on. As a former programming instructor, I used to teach programming step by step in this way. LLMs are excellent at mimicking human behavior and communication, so they work well in this step-by-step teaching approach.

## How We Implemented It

Both block highlighting and block suggestions use a slightly modified version of the Blockly framework. Blockly allows dynamic retrieval of workspace content. Toolbar content can also be easily accessed with some modifications.

Blockly workspace content can be [serialized](https://developers.google.com/blockly/guides/configure/web/serialization) and saved as JSON or XML. TutoriaLLM uses this JSON for processing.
For highlighting, we directly draw SVG in the workspace. You can find more information about this through research.

Toolbox content can be read using Blockly's built-in methods. For collapsible toolboxes, we search through all hierarchy levels and highlight the entire path when a matching category is found.

Using these technologies, we analyze LLM responses and convert block highlights and suggestions into user-friendly formats on the frontend.

### Initial Stage

In the initial stage, responses looked like the image. AI could specify one block per message.
[![Image from Gyazo](https://i.gyazo.com/b9f7d8875b386a3fb282654fcd002bdc.png)_Writing block names in chat wasn't ideal_](https://gyazo.com/b9f7d8875b386a3fb282654fcd002bdc)
We used OpenAI API's structured output for this. I believe a new structured output mode replaced JSON mode while developing this feature, significantly reducing error rates.
As I recall, GPT returned responses like this:

```json
{
content: "Currently, the tutorial..."
block: "ext_example_console_log"
toolbar: null
}
```

### Current Specification

However, this specification had issues: **only one block could be selected**, and **elementary school students wouldn't read long text messages**.
So, we introduced a new system, **trading some certainty** for improvement.
[![Image from Gyazo](https://i.gyazo.com/0d17abba11d61c30241dcbb823768af5.png)](https://gyazo.com/0d17abba11d61c30241dcbb823768af5)
This system analyzes Markdown-containing text from LLM on the frontend and replaces block names or workspace block IDs with appropriate formats for rendering. While incorrect block names or IDs still display as text, this approach significantly reduces unnecessary text information and provides clearer responses.
The LLM recognizes and returns the user's workspace as text, but users see it converted to visual information, making it quite efficient.
[![Image from Gyazo](https://i.gyazo.com/5910b3783b04510b77b318d0705e478a.png)](https://gyazo.com/5910b3783b04510b77b318d0705e478a)
Now we can provide inline instructions for multiple blocks and workspace elements.

This makes it much clearer, as AI can point things out instead of requiring a teacher to physically indicate "here, look here!"

### Voice Mode

We're also implementing these features with voice support.
The recently released gpt4o-audio-preview model allows converting these inputs and outputs to voice.
While the Realtime API got more attention, we didn't use it because it had the critical flaw of forgetting context after disconnection (at least when I last checked) and only supported voice-to-voice.
While audio-preview doesn't yet support structured output and occasionally returns broken JSON (proper error handling needed), it can handle dialogue as specified by users. For example, you can input by voice and receive text output.
[![Image from Gyazo](https://i.gyazo.com/0670ec2f53d2d882f842b53804275926.jpg)_Voice input case_](https://gyazo.com/0670ec2f53d2d882f842b53804275926)

[![Image from Gyazo](https://i.gyazo.com/0abdd3a3e228a0e237de5abd1b143315.jpg)_Text input case_
](https://gyazo.com/0abdd3a3e228a0e237de5abd1b143315)
While it might not be fully practical yet, feel free to try it at [demo.tutoriallm.com](https://demo.tutoriallm.com).

## Conclusion

So, while TutoriaLLM is still in development and quite unstable (crashing almost daily), we've released a demo version. It's completely open source and actively seeking contributors. Though the code might be messy, please feel free to take a look.
https://github.com/TutoriaLLM/TutoriaLLM

If you're interested, I'd appreciate follows on social media!
https://tokumaru.work/ja
