---
title: "Introduction to Useful Tools for Team Development"
emoji: "⚒️"
tags:
  - "coding"
  - "team-dev"
published_at: "2025-10-05T00:00:00.000Z"
description: "When starting team development, it's often difficult to decide how to work together. This article summarizes tools that may be useful in such cases."
isTranslated: true
sourcePath: "ja/tech/team-dev-tools.md"
sourceHash: "b82ff1cab454408b21a055303e299516fabbdc6129bd446602e472186276a32b"
---

## Tools That May Be Useful for Team Development
> This is intended for participants of the [[tomodachi|TOMODACHI Boeing Entrepreneurship Seminar 2025]], organized by the U.S.-Japan Council Japan (a public interest incorporated foundation) and run by Code for Japan (a general incorporated association), but it is also viewable by external readers

- Must be free
- Must work on Windows/MacOS
- Must be usable even by people with no prior team development experience
## Design and Idea Sharing
### [[figma|Figma]]
[![Image from Gyazo](https://i.gyazo.com/4addba09ea6044e8ed37e3aff051f2d3.png)](https://gyazo.com/4addba09ea6044e8ed37e3aff051f2d3)
There used to be a time when people used Adobe XD, but before I knew it Figma became dominant.
You can design app UIs easily just by placing shapes.
You can create with drag & drop, or set precise numeric spacing and other details for proper design — it's finished in a way that anyone from beginners to advanced users can use.

Sharing designs among multiple people is super easy (if you've used Google Docs you'll pick it up quickly), so I recommend it.
### [[tldraw]]
Figma is great, but for quick idea sharing this is the one!
You can create diagrams simply by placing shapes. I used to recommend an app called Miro, but it restricts the number of boards you can create, which is a harsh limitation, so I recommend this instead. If the host (the person who creates the board) creates a free account, others can use it without registering.
[![Image from Gyazo](https://i.gyazo.com/2dba6448bc3062a36c0d81336be6f3a9.png)](https://gyazo.com/2dba6448bc3062a36c0d81336be6f3a9)
When everyone is remote, you can't use physical sticky notes for brainstorming, so tools like this are handy.

## Writing Code
### [[vs-code| VS Code]]
The common image of apps might be mobile apps downloaded from the App Store or Google Play or desktop apps for PCs, but building apps for those specific platforms requires specialized knowledge and time (including reviews), so if there's no particular reason to use those platforms and you want to build a service quickly, it's common to make a web app using JavaScript/TypeScript.

VS Code is a very convenient, completely free code editor. You can add many features by combining extensions, and it works great with AI.

### Various LLM Services
#### Claude

https://claude.ai/new

Personally, I feel it has the best code performance.
Claude also offers Claude Code (mentioned later), an application specialized for code generation — it seems they put a lot of effort into the coding side.
#### ChatGPT

https://chatgpt.com

This is provided by OpenAI. Lately people have been calling it “Chappy” or something like that... or so I've heard.

#### Gemini

https://gemini.google.com

This is provided by Google. It seems there are promotions where university students can get access to a supposedly smarter model on a paid plan for free, so I recommend it for university students. (They seem to run these kinds of campaigns from time to time.)

### For the more advanced: AI code-generation services
Unlike the LLM services mentioned above, there are editors that provide more powerful code-generation AI. To be precise, the underlying technology is the same as the services mentioned earlier, but these are tuned to write longer pieces of code and include features that can finish large parts of a program for you without copying and pasting bit by bit. I won't go into much detail here, but I'll list a few.

When using these services, I recommend understanding why they work and how the programs they produce run. If you don't understand what the AI created or what it is trying to do, you may not realize if it's doing something dangerous.

https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de

As an example/talking point, this post shows an AI tool executing a command that deletes all files on a computer (you normally wouldn't do that). What would happen if you didn't notice that and left it running? Think carefully when using these tools (they're super convenient though).

#### GitHub Copilot
Used as an add-on for VS Code and others. If you're in the [[github-student-pack|GitHub Student Pack]] you should be able to use it for free.
#### Cursor
An editor based on VS Code with many AI features added.

#### Tools to use in the CLI
The following three are CLI/terminal tools.
#### Claude Code
Claude appears directly in your terminal. Unlike the web version, it will persist and properly finish the code. But sometimes it gets stuck and starts thinking forever...
#### Gemini CLI
Google has released something like Claude Code, but honestly I feel Claude Code is better.
#### Codex
A relatively later entrant. It's provided by OpenAI. The reputation seems good.
## File and Source Code Sharing

### [[github-team-dev|GitHub]]
The primary choice for source code hosting is GitHub. It's used so much you could say there's no second choice.

https://github.com

[![Image from Gyazo](https://i.gyazo.com/d018017bd674a21da6471ff09f28c54d.png)](https://gyazo.com/d018017bd674a21da6471ff09f28c54d)
GitHub is currently operated by Microsoft and provides various services based on the Git version control system. I also explain [[github-team-dev|How to use GitHub]], so please check it out.
## Document Sharing
### Notion
Notion is an app like a notebook that works across many platforms. But it's more than a notebook: you can organize large amounts of data, integrate with calendars, and use it in many different ways. On the flip side, it has so many features it can be overwhelming, but it's convenient.

https://notion.com
### Google Docs
If you're only sharing documents, Google Docs is fine in my view. It's simple and very easy for collaborative editing as long as you have a Google account.

### GitHub Issue
GitHub also has a feature called Issues where you can write comments and have discussions in a dialog-like format. It's not ideal for long-term document storage or typical document sharing, but it's great for keeping logs during development or noting places that need fixes.

## Slide Creation
There are many tools for creating presentation slides, and many readers are probably already familiar with them, so here is a quick roundup of online collaborative options.

### Canva
With abundant templates, it's like Google Slides but with a lighter feel — you can quickly make attractive presentations that run smoothly.

### Google Slides
Think of it as PowerPoint behavior made stable and shareable online. There's nothing particularly flashy about it, but many people end up using this. It has drawbacks like not being able to upload videos in some cases, but people used to PowerPoint may prefer this over Canva.
### Miro
If you want a highly flexible presentation style based on a movable whiteboard, this is highly recommended. You can write and draw in real time, and it's fun.

## Task Management
Having a task management app makes it much easier to distribute work among multiple members and communicate smoothly.
### Trello
[![Image from Gyazo](https://i.gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb.png)](https://gyazo.com/e3a9d5983db5d4a7ea1692bf752ebcdb)
[![Image from Gyazo](https://i.gyazo.com/aada22018959a2290c977bed2752abb1.png)](https://gyazo.com/aada22018959a2290c977bed2752abb1)
It's a task board based on the kanban system (Toyota's production method).
It's simple — write tasks and line them up — but it's easy to understand and suitable for team task management.
### Notion
As mentioned above, Notion has many features and can also be used for task management.
[![Image from Gyazo](https://i.gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86.png)](https://gyazo.com/3d0c7e29d36f396e0c5f0260d753ab86)
This is an example template. You can create kanban-style boards or horizontal-scroll timeline-style, gantt-like views like this.

https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2

### GitHub Projects
GitHub also offers a Trello-like system called GitHub Projects.
[![Image from Gyazo](https://i.gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24.png)](https://gyazo.com/3ab067da64fcc1e66d66d6eb019a5e24)
If you're using GitHub Issues, you can take advantage of very powerful integrations, so it's recommended.

## Conclusion
That's my personal list of recommended tools pushed onto everyone, but I believe there are many other great tools out there.

If you have recommendations, please let me know by email or DM!!