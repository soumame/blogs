---
title: "Introduction of Useful Tools for Team Development"
emoji: "⚒️"
tags:
  - "coding"
  - "team-dev"
published_at: "2025-10-05T00:00:00.000Z"
description: "When starting team development for the first time, everyone struggles with how to proceed. This article summarizes tools that may be useful in such cases."
isTranslated: true
sourcePath: "ja/tech/team-dev-tools.md"
sourceHash: "cbf3004a2dd31397937a61cdd15cd6d85f198f8932dc3d6685df26040ac2740d"
---

## Tools Suitable for Team Development
> This content is aimed at participants of the TOMODACHI Boeing Entrepreneurship Seminar 2025, organized by the Public Interest Incorporated Foundation U.S.-Japan Council and operated by the general incorporated association Code for Japan, but it can also be viewed by external parties.

- Must be free to use
- Must work on Windows/MacOS
- Usable even by those with no prior team development experience
## Design and Idea Sharing
### [[figma|Figma]]
[![Image from Gyazo](https://i.gyazo.com/4addba09ea6044e8ed37e3aff051f2d3.png)](https://gyazo.com/4addba09ea6044e8ed37e3aff051f2d3)
There was a time when we used Adobe XD and now Figma has become the dominant tool.
Just by placing shapes, you can easily design the UI of an app.
You can create designs using drag & drop, or you can define spacing properly with numerical values, making it accessible for everyone from beginners to advanced users.

Sharing designs among multiple users is super easy (if you're familiar with Google Docs, you'll find it straightforward), so I highly recommend it.
### [[tldraw]]
Figma is great, but if you want to quickly share ideas, this is the tool for you!
Just place shapes easily to create diagrams. While I previously recommended an app called Miro, it has limitations on the number of boards that can be created, which can be restrictive, so I recommend this instead. If the person hosting (creating the board) has a free account, others can use it without registering.
[![Image from Gyazo](https://i.gyazo.com/2dba6448bc3062a36c0d81336be6f3a9.png)](https://gyazo.com/2dba6448bc3062a36c0d81336be6f3a9) When everyone is in different locations, you can't use physical sticky notes for brainstorming, so tools like this can be really helpful.

## Coding
### [[vs-code| VS Code]]
When thinking about typical applications, we often visualize smartphone apps or desktop applications downloaded from the App Store or Google Play. However, creating apps on specific platforms requires specialized knowledge and time (as they need to be reviewed), so there’s no particular reason to use those platforms. If you want to create a service in a short time, it's common to make a web app using Javascript/Typescript.

VS Code is a very handy code editor that is completely free to use. You can add various features by combining extensions, and it works excellently with AI.

### Various LLM Services
#### Claude

https://claude.ai/new

I personally think this one has the best code performance.
Claude not only offers a web app but also an application specifically for code generation called Claude Code (mentioned later), which shows considerable dedication to code writing.
#### ChatGPT

https://chatgpt.com

Provided by OpenAI. Recently, everyone has been calling it "Chappy" or something like that...?

#### Gemini

https://gemini.google.com

This is offered by Google. There is a paid plan that allows university students to use a smarter model for free, so I recommend it for students (they seem to have such initiatives from time to time).

### A Bit Advanced: AI Code Generation Services
Unlike the previously mentioned LLM services, there are editors that provide more powerful code-generating AIs. To be precise, the inner workings of these services are similar to the ones mentioned earlier, but they have been fine-tuned to allow for longer code writing and have features that help you finish the entire program without needing to copy and paste each time. I won't go into too much detail, but I’d like to at least mention them.

When using these services, I recommend understanding why they work, and how programs operate. If you don’t understand what the AI has created, or what the AI is trying to do, you may not realize if it’s something dangerous.

https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de

As an example, in this post, the AI tool executes a command that deletes all files from the computer (normally you wouldn't do something like that).
What happens if you overlook this? Please use it carefully after thinking it through (though it's super convenient).

#### GitHub Copilot
Attached to VS Code and should be free to use if you’re part of the [[github-student-pack|GitHub Student Pack]].
#### Cursor
An editor based on VS Code with many added AI capabilities.

#### CLI Tools
The following three are used by being added to the CLI (terminal).
#### Claude Code
Claude is displayed directly in the terminal. However, unlike the web version, it keeps going until it writes the code completely, though sometimes it can get stuck and start thinking indefinitely...
#### Gemini CLI
Google also has something similar to Claude Code, but honestly, I feel Claude Code is better.
#### Codex
A relatively new player from OpenAI. It seems to have a good reputation.

## File and Source Code Sharing

### [[github-team-dev|GitHub]]
GitHub is the first choice for source code storage. There’s not really a second choice since GitHub is so widely used.

https://github.com

[![Image from Gyazo](https://i.gyazo.com/d018017bd674a21da6471ff09f28c54d.png)](https://gyazo.com/d018017bd674a21da6471ff09f28c54d)
GitHub is currently operated by Microsoft and provides various services based on the Git version control system. For instructions on how to use [[github-team-dev|GitHub]], please check it out!
## Document Sharing
### Notion
Notion is an application that can be used across various platforms, functioning like a note-taking app. However, despite being a note app, it can organize massive data, integrate with calendars, and serve various purposes. The abundance of features can sometimes be overwhelming, but it's very useful.

https://notion.com
### Google Docs
If it's just document sharing, personally I think Google Docs works well too. It’s simple, and as long as you have a Google account, it’s easy to collaboratively edit.

### GitHub Issues
GitHub also has a function called Issues that allows you to use comments to write text in a dialogue format. While it’s not intended for document sharing per se, it’s perfect for recording logs during development or noting down what requires fixing.

## Slide Creation

There are various tools for creating presentation slides, and many of you may already be familiar with them, so I will quickly summarize useful online tools for collaborative editing.

### Canva
This is like Google Slides, with a plethora of templates. It’s lightweight and allows for the quick creation of visually appealing presentations.

### Google Slides
This can be thought of as a more stable version of PowerPoint adapted to online sharing. While there aren't particularly exciting features, it often ends up being the go-to choice. There may be disadvantages like being unable to upload videos, but those familiar with PowerPoint might prefer this over Canva.
### Miro
If you want to present with high freedom in a whiteboard style, it’s quite recommended. You can write text in real time, making it fun.

## Task Management
Having task management apps can greatly facilitate communication when distributing tasks among several members.
### Trello
[![Image from Gyazo](https://i.gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb.png)](https://gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb)
[![Image from Gyazo](https://i.gyazo.com/aada22018959a2290c977bed2752abb1.png)](https://gyazo.com/aada22018959a2290c977bed2752abb1)
This is a task board based on the kanban method (Toyota's production system).
It’s a simple setup of writing down tasks and arranging them, which is clear and suitable for team task management.
### Notion
As previously mentioned, Notion has various features and can also be used for task management.
[![Image from Gyazo](https://i.gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86.png)](https://gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86)
Here’s an example of a template. You can create kanban or horizontally scrolling timeline formats, resembling Gantt charts.

https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2

### GitHub Projects
GitHub has a feature called GitHub Projects, which adopts a Trello-like system.
[![Image from Gyazo](https://i.gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24.png)](https://gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24)
If you’re using GitHub Issues, you can utilize very powerful integrations, so I recommend it.

## Conclusion
This is a list of recommendations that I personally pushed upon everyone, but I believe there are many more good tools out there.

If you have recommendations, please feel free to let me know via email or DM!