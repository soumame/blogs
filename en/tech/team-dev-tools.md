---
title: "Introduction to Useful Tools for Team Development"
emoji: "⚒️"
tags:
  - "coding"
  - "team-dev"
published_at: "2025-10-05T00:00:00.000Z"
description: "When starting team development for the first time, it's often hard to decide how to work together. This article summarizes and introduces tools that can be useful in those situations."
isTranslated: true
sourcePath: "ja/tech/team-dev-tools.md"
sourceHash: "b82ff1cab454408b21a055303e299516fabbdc6129bd446602e472186276a32b"
---

## Summary of Tools That May Be Useful for Team Development
> This content is aimed at participants of the [[tomodachi|TOMODACHI Boeing Entrepreneurship Seminar 2025]], hosted by the U.S.-Japan Council and organized by Code for Japan, but it is also available to external readers

- Free to use
- Available on Windows/MacOS
- Usable even by people who have never done team development before
## Design and Idea Sharing
### [[figma|Figma]]
[![Image from Gyazo](https://i.gyazo.com/4addba09ea6044e8ed37e3aff051f2d3.png)](https://gyazo.com/4addba09ea6044e8ed37e3aff051f2d3)
There used to be a time when people used Adobe XD, but before we knew it Figma became the dominant tool.
By arranging shapes you can easily design app UIs. You can create with drag & drop, or precisely define spacing and measurements — it's designed to be usable by beginners through advanced users.

Sharing designs among multiple people is super easy (if you use Google Docs you'll pick it up quickly), so it's recommended.
### [[tldraw]]
Figma is great, but for quick idea sharing this is the one!
You can create diagrams by simply placing shapes. I used to recommend an app called Miro, but it limits the number of boards you can create which is restrictive, so I recommend this one instead. If the host (the person who creates the board) makes a free account, other participants can use it without registering.
[![Image from Gyazo](https://i.gyazo.com/2dba6448bc3062a36c0d81336be6f3a9.png)](https://gyazo.com/2dba6448bc3062a36c0d81336be6f3a9) When everyone is scattered, you can't use physical sticky notes for brainstorming, so tools like this are handy.

## Writing Code
### [[vs-code| VS Code]]
While the general image of apps might be smartphone apps from the App Store or desktop apps for PCs, building apps for those platforms requires specialized knowledge and time (and often review), so unless you have to use a specific platform, building a web app with JavaScript/TypeScript is the common way to create a service quickly.

VS Code is a completely free and very useful code editor. You can add many features via extensions, and it pairs excellently with AI.

### Various LLM Services
#### Claude

https://claude.ai/new

Personally, it seems to have the best code performance.
Claude not only offers the web app but also provides an application specialized in code generation called Claude Code (described later), and it seems quite focused on the code-writing side.
#### ChatGPT

https://chatgpt.com

This is provided by OpenAI. Lately some people reportedly call it "Chappi" — or maybe that's just something I read...?

#### Gemini

https://gemini.google.com

This is provided by Google. It seems there are paid plans that sometimes allow university students to use a supposedly smarter model for free, so it's recommended for university students. (They seem to run campaigns like this occasionally.)

### Slightly Advanced: AI Code Generation Services
Unlike the LLM services mentioned above, there are editors that provide more powerful code generation AI. To be precise, the underlying models are the same as the services mentioned earlier, but these are tuned to produce longer pieces of code or include features that can assemble a whole program without manual copy-paste. I won't go into details, but I'll list them here.

When using these services, I recommend understanding why they work and how the generated programs run. If you don't understand what the AI produced or is trying to do, you might not realize if it's doing something dangerous.

https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de

As an example for a laugh, in this post an AI tool executes a command that deletes all files on the computer (you normally wouldn't do this, of course). What would happen if you left it running without noticing? Think carefully before using these tools (they're super convenient though).

#### GitHub Copilot
Attachable to VS Code and similar editors. If you're in the [[github-student-pack|GitHub Student Pack]] it should have been available for free.
#### Cursor
An editor based on VS Code with many added AI features.

#### Tools for CLI
The following three are tools you can use in the CLI (terminal).
#### Claude Code
Claude appears directly in the terminal. Unlike the web version, it will reliably keep going until it finishes the code. But sometimes when it gets stuck it can start thinking indefinitely...
#### Gemini CLI
Google also has something like Claude Code, but honestly I feel Claude Code is better.
#### Codex
A fairly latecomer. Run by OpenAI. It seems to have a good reputation.
## File and Source Code Sharing

### [[github-team-dev|GitHub]]
GitHub is the first choice for hosting source code. It's used so widely that you could say there is no second choice.

https://github.com

[![Image from Gyazo](https://i.gyazo.com/d018017bd674a21da6471ff09f28c54d.png)](https://gyazo.com/d018017bd674a21da6471ff09f28c54d)
GitHub is currently operated by Microsoft and provides various services based on the Git version control system. I also explain [[github-team-dev|how to use GitHub]], so please check it out.
## Document Sharing
### Notion
Notion is like a notebook app that works across many platforms. But it's more than a notebook—you can organize large amounts of data, integrate calendars, and use it in many ways. On the flip side, it has so many features it can be overwhelming, but it's very useful.

https://notion.com
### Google Docs
If it's just document sharing, Google Docs is perfectly fine in my opinion. It's simple, and as long as you have a Google account you can use everything, making collaborative editing very easy.

### GitHub Issue
GitHub also has a feature called Issues where you can write comments and carry on a dialog-like document. It's not ideal for long-term documentation, but it's great for leaving logs during development or noting places that need fixes.

## Slide Creation
There are many tools for creating presentation slides, and many of you are probably already familiar with them, so I'll briefly list ones that work well for online collaborative editing.

### Canva
Canva has an abundance of templates — think of it as a template-rich Google Slides. It's very lightweight and lets you quickly create attractive presentations.

### Google Slides
You can think of it as PowerPoint behavior stabilized and made shareable online. There's nothing particularly flashy about it, but it often ends up being the default choice. It has drawbacks like not being able to upload some videos, but people accustomed to PowerPoint might prefer it to Canva.
### Miro
If you want a highly flexible presentation in a whiteboard style, this is highly recommended. You can write and draw in real time, and it's fun to use.

## Task Management
When distributing tasks among multiple members, using a task management app makes communication much smoother.
### Trello
[![Image from Gyazo](https://i.gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb.png)](https://gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb)
[![Image from Gyazo](https://i.gyazo.com/aada22018959a2290c977bed2752abb1.png)](https://gyazo.com/aada22018959a2290c977bed2752abb1)
It's a task board based on the kanban system (Toyota production method). It's simple—write tasks and arrange them—but clear and suitable for team task management.
### Notion
As mentioned earlier, Notion has many features and can be used for task management.
[![Image from Gyazo](https://i.gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86.png)](https://gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86)
This is an example template. You can create kanban-style boards or timeline-style horizontal scrolls that look like Gantt charts.

https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2

### GitHub Projects
GitHub also has a Trello-like system called GitHub Projects.
[![Image from Gyazo](https://i.gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24.png)](https://gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24)
If you use GitHub Issues, you can take advantage of very powerful integrations, so it's recommended.

## Conclusion
This is my list of personal recommendations that I've forcefully imposed on everyone, but I believe there are many other good tools besides these.

If you have any recommendations, please let me know by email or DM!!