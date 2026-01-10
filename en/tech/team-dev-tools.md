---
title: "Introduction to Useful Tools for Team Development"
emoji: "⚒️"
tags:
  - "coding"
  - "team-dev"
published_at: "2025-10-05T00:00:00.000Z"
description: "When doing team development for the first time, it's often hard to decide how to work together. This article summarizes tools that may be useful in such situations."
isTranslated: true
sourcePath: "ja/tech/team-dev-tools.md"
sourceHash: "cbf3004a2dd31397937a61cdd15cd6d85f198f8932dc3d6685df26040ac2740d"
---

## Summarizing Tools That Might Be Useful for Team Development
> This content is aimed at participants of the TOMODACHI Boeing Entrepreneurship Seminar 2025, hosted by the U.S.-Japan Council (Japan) and operated by Code for Japan, but external readers are also welcome to view it

- Free to use
- Available on Windows/MacOS
- Usable even by people who have never done team development
## Design and Idea Sharing
### [[figma|Figma]]
[![Image from Gyazo](https://i.gyazo.com/4addba09ea6044e8ed37e3aff051f2d3.png)](https://gyazo.com/4addba09ea6044e8ed37e3aff051f2d3)
There was a time when people used Adobe XD, but before we knew it Figma became the dominant tool.
By just placing shapes, you can easily design app UIs.
You can build with drag & drop, or you can design precisely by defining spacing and measurements numerically — it's finished in a way that anyone from beginners to advanced users can use.

Sharing designs among multiple people is also super easy (if you can use Google Docs, you'll pick it up immediately), so I recommend it.
### [[tldraw]]
Figma is great, but if you want to quickly share ideas, this is it!
You can easily place shapes to create diagrams. I used to recommend an app called Miro, but it limits the number of boards you can create, which is restrictive, so I recommend this one instead. If the host (the person who creates the board) creates a free account, others can use it without registering an account.
[![Image from Gyazo](https://i.gyazo.com/2dba6448bc3062a36c0d81336be6f3a9.png)](https://gyazo.com/2dba6448bc3062a36c0d81336be6f3a9) When everyone is remote and you can't use physical sticky notes for brainstorming, these kinds of tools are very handy.

## Writing Code
### [[vs-code| VS Code]]
When people imagine apps they often think of smartphone apps from the App Store or Google Play or desktop apps for PCs, but building apps for specific platforms requires specialized knowledge and time (approval is often required). If there's no particular reason to target those platforms and you want to build a service quickly, it's common to use JavaScript/TypeScript to create a web app.

VS Code is a very useful code editor that is completely free. You can add many features by combining extensions, and it works great with AI tools.

### Various LLM Services
#### Claude

https://claude.ai/new

Personally I feel it has the best code performance.
Claude also offers an application focused on code generation called Claude Code (described below), and it seems they are putting a lot of effort into the coding area.
#### ChatGPT

https://chatgpt.com

This is provided by OpenAI. Lately people say they call it "Chappy"—or so I've read...?

#### Gemini

https://gemini.google.com

This is provided by Google. They seem to offer a paid plan that gives university students access to a smarter model for free, so I recommend it if you're a student. (They seem to run such promotions from time to time.)

### For the More Advanced: AI Code Generation Services
Unlike the previously mentioned LLM services, there are editors that provide more powerful AI code generation. To be precise, they use the same underlying services as those mentioned earlier but are tuned to produce longer code, and include features that can complete an entire program without having to copy and paste. I won't go into deep detail here, but I'll list a few.

When using these services, I recommend understanding why and how they work, and how the generated programs run. If you don't understand what the AI created or what it's trying to do, you might not notice if it's doing something dangerous.

https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de

As an example, this post shows an AI tool executing a command that deletes all files on a computer (you normally wouldn't do that).
What would happen if you left it running without noticing? Think carefully before using these tools (they're super convenient though).

#### GitHub Copilot
Used as an add-on for VS Code and others. If you're part of the [[github-student-pack|GitHub Student Pack]] you should be able to use it for free.
#### Cursor
An editor based on VS Code with many AI features added.

#### CLI Tools
The following three are tools you can install and use in the CLI (terminal)
#### Claude Code
Claude appears directly in the terminal. Unlike the web version, it tends to persist and finish writing the code properly. But sometimes when it gets confused it starts thinking endlessly...
#### Gemini CLI
Google also released something like Claude Code, but honestly I feel Claude Code is better.
#### Codex
A relatively later entrant. It's from OpenAI and seems to have a good reputation.
## File and Source Code Sharing

### [[github-team-dev|GitHub]]
GitHub is the first choice for hosting source code. It's used so widely you could say there's no real second choice.

https://github.com

[![Image from Gyazo](https://i.gyazo.com/d018017bd674a21da6471ff09f28c54d.png)](https://gyazo.com/d018017bd674a21da6471ff09f28c54d)
GitHub is currently operated by Microsoft and provides a variety of services based on the Git version control system. I also explain [[github-team-dev|how to use GitHub]], so please check that out.
## Document Sharing
### Notion
Notion is an app you can use across many platforms, like a notepad. But it's more than a notepad — you can organize large amounts of data, integrate with calendars, and use it in many ways. On the flip side, it has so many features that it can be overwhelming, but it's very useful.

https://notion.com
### Google Docs
For document sharing alone, I personally think Google Docs is fine. It's simple, and as long as you have a Google account you can use everything, making collaborative editing very easy.

### GitHub Issue
GitHub also has an Issue feature where you can write comments and create conversational-style documents. It's not ideal as a document-sharing system for long-term documents, but it's great for keeping logs during development or noting places that need fixes.

## Slide Creation
There are many tools for creating presentation slides, and many of you might already be familiar with them, so here I'll briefly summarize tools that are useful for online collaborative editing.

### Canva
With a wealth of templates, think of it as Google Slides with polish — it’s lightweight and lets you quickly create visually appealing presentations.

### Google Slides
You can think of this as PowerPoint behavior made stable and shareable online. There's nothing particularly flashy, but many projects end up using this. It has some drawbacks such as limitations on video uploads, but people used to PowerPoint might prefer this over Canva.
### Miro
If you want a highly flexible presentation style using a movable whiteboard, this is quite recommended. You can write and edit in real time and it's fun.

## Task Management
When assigning work among multiple members, task management apps make communication much smoother.
### Trello
[![Image from Gyazo](https://i.gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb.png)](https://gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb)
[![Image from Gyazo](https://i.gyazo.com/aada22018959a2290c977bed2752abb1.png)](https://gyazo.com/aada22018959a2290c977bed2752abb1)
A task board based on the Kanban style (inspired by the Toyota production system).
It's simple — write tasks and arrange them — but it's intuitive and well suited for team task management.
### Notion
As mentioned earlier, Notion has many features and can be used for task management.
[![Image from Gyazo](https://i.gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86.png)](https://gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86)
This is an example template. You can create Kanban boards or timeline-style horizontal scrolling views that look like Gantt charts.

https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2

### GitHub Projects
GitHub also has a Trello-like system called GitHub Projects
[![Image from Gyazo](https://i.gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24.png)](https://gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24)
If you're using GitHub Issues, the integrations you can use are very powerful, so I recommend it.

## Closing
That's my personal list of recommendations that I'm imposing on everyone, but I'm sure there are many other great tools out there.

If you have any recommendations, please let me know by email or DM!!