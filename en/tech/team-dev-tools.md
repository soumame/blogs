---
title: Introduction to Useful Tools for Team Development
emoji: ⚒️
locale: en
slug: team-dev-tools
category: tech
tags:
  - coding
  - team-dev
published_at: 2025-10-05T00:00:00.000Z
updated_at: 2025-10-05T00:00:00.000Z
description: When starting team development, it's often difficult to decide how to work together. This article summarizes tools that may be useful in such cases.
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: true
translation_of: 01M3TQXVS8870R2Q4J8066NWZC
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

## Tools That May Be Useful for Team Development

> This is intended for participants of the [[en/accomplishments/tomodachi|TOMODACHI Boeing Entrepreneurship Seminar 2025]], organized by the U.S.-Japan Council Japan (a public interest incorporated foundation) and run by Code for Japan (a general incorporated association), but it is also viewable by external readers

- Must be free
- Must work on Windows/MacOS
- Must be usable even by people with no prior team development experience

## Design and Idea Sharing

### [[en/misc/figma|Figma]]

[![Image from Gyazo](../../media/32eb5b2c972c0ac700dc02b34f04e2915c6f34abe596f5c8df0377cde967941d.png)](../../media/32eb5b2c972c0ac700dc02b34f04e2915c6f34abe596f5c8df0377cde967941d.png)

&#xA;There used to be a time when people used Adobe XD, but before I knew it Figma became dominant.
You can design app UIs easily just by placing shapes.
You can create with drag & drop, or set precise numeric spacing and other details for proper design — it's finished in a way that anyone from beginners to advanced users can use.

Sharing designs among multiple people is super easy (if you've used Google Docs you'll pick it up quickly), so I recommend it.

### [[en/misc/tldraw|tldraw]]

Figma is great, but for quick idea sharing this is the one!
You can create diagrams simply by placing shapes. I used to recommend an app called Miro, but it restricts the number of boards you can create, which is a harsh limitation, so I recommend this instead. If the host (the person who creates the board) creates a free account, others can use it without registering.&#xA;

[![Image from Gyazo](../../media/ffe0f271869befd54c1feba1a96040a11fa7731aabc1d4d99b48759fb0029d5a.png)](../../media/ffe0f271869befd54c1feba1a96040a11fa7731aabc1d4d99b48759fb0029d5a.png)

&#xA;When everyone is remote, you can't use physical sticky notes for brainstorming, so tools like this are handy.

## Writing Code

### [[en/misc/vs-code| VS Code]]

The common image of apps might be mobile apps downloaded from the App Store or Google Play or desktop apps for PCs, but building apps for those specific platforms requires specialized knowledge and time (including reviews), so if there's no particular reason to use those platforms and you want to build a service quickly, it's common to make a web app using JavaScript/TypeScript.

VS Code is a very convenient, completely free code editor. You can add many features by combining extensions, and it works great with AI.

### Various LLM Services

#### Claude

<https://claude.ai/new>

Personally, I feel it has the best code performance.
Claude also offers Claude Code (mentioned later), an application specialized for code generation — it seems they put a lot of effort into the coding side.

#### ChatGPT

<https://chatgpt.com>

This is provided by OpenAI. Lately people have been calling it “Chappy” or something like that... or so I've heard.

#### Gemini

[gemini.google.com](https://gemini.google.com)

This is provided by Google. It seems there are promotions where university students can get access to a supposedly smarter model on a paid plan for free, so I recommend it for university students. (They seem to run these kinds of campaigns from time to time.)

### For the more advanced: AI code-generation services

Unlike the LLM services mentioned above, there are editors that provide more powerful code-generation AI. To be precise, the underlying technology is the same as the services mentioned earlier, but these are tuned to write longer pieces of code and include features that can finish large parts of a program for you without copying and pasting bit by bit. I won't go into much detail here, but I'll list a few.

When using these services, I recommend understanding why they work and how the programs they produce run. If you don't understand what the AI created or what it is trying to do, you may not realize if it's doing something dangerous.

[![mugisus (@mugisus) on X](../../media/f3527bdf0e18445f5eb8d3fa6fd139646cf5fc65c821daa04c1666331d459d6f.webp)](https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_\&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de)

[mugisus (@mugisus) on X](https://x.com/mugisus/status/1940127947962396815?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1940127947962396815%7Ctwgr%5Ea4b906fe53a5ba6d495774e424167e89ea6cf635%7Ctwcon%5Es1_\&ref_url=https%3A%2F%2Fnote.com%2Flab_bit__sutoh%2Fn%2Fn3363f140d3de)

ん？え？は？何してるの？

As an example/talking point, this post shows an AI tool executing a command that deletes all files on a computer (you normally wouldn't do that). What would happen if you didn't notice that and left it running? Think carefully when using these tools (they're super convenient though).

#### GitHub Copilot

Used as an add-on for VS Code and others. If you're in the [[en/misc/github-student-pack|GitHub Student Pack]] you should be able to use it for free.

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

### [[en/tech/github-team-dev|GitHub]]

The primary choice for source code hosting is GitHub. It's used so much you could say there's no second choice.

[![GitHub · Change is constant. GitHub keeps you ahead.](../../media/4362e0f40c55899efa413782c16570754ad2ca800bd3bb6232df46ca7269107d.png)](https://github.com)

[GitHub · Change is constant. GitHub keeps you ahead.](https://github.com)

Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity.

[![Image from Gyazo](../../media/d488009b0b0eb9a447d7d2d92e26dd9cb6ac5504bb07e96dc40f9876aea62981.png)](../../media/d488009b0b0eb9a447d7d2d92e26dd9cb6ac5504bb07e96dc40f9876aea62981.png)

&#xA;GitHub is currently operated by Microsoft and provides various services based on the Git version control system. I also explain [[en/tech/github-team-dev|How to use GitHub]], so please check it out.

## Document Sharing

### Notion

Notion is an app like a notebook that works across many platforms. But it's more than a notebook: you can organize large amounts of data, integrate with calendars, and use it in many different ways. On the flip side, it has so many features it can be overwhelming, but it's convenient.

[![The AI workspace that works for you. | Notion](../../media/548455b96a3cb2cfea13a39771b8b5d0114591c179291abc269f579791d54e53.jpg)](https://notion.com)

[The AI workspace that works for you. | Notion](https://notion.com)

Build Custom Agents, search across all your apps, and automate busywork. The AI workspace where teams get more done, faster.

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

[![Image from Gyazo](../../media/7b119dbb4bbd6acd3202cc163c810508ecdb2f77406cd81c09a4f553d52e7a11.png)](../../media/7b119dbb4bbd6acd3202cc163c810508ecdb2f77406cd81c09a4f553d52e7a11.png)

[![Image from Gyazo](../../media/403b18ec8a996e52a1c4e24d9c3f24d5c19f59361ca4bbde3b9a599d63ca5447.png)](../../media/403b18ec8a996e52a1c4e24d9c3f24d5c19f59361ca4bbde3b9a599d63ca5447.png)

&#xA;It's a task board based on the kanban system (Toyota's production method).
It's simple — write tasks and line them up — but it's easy to understand and suitable for team task management.

### Notion

As mentioned above, Notion has many features and can also be used for task management.&#xA;

[![Image from Gyazo](../../media/71f77cfc276b061f7c81a65853f0f1ccedc45fd08a8a0eac0d7bde22d742f420.png)](../../media/71f77cfc276b061f7c81a65853f0f1ccedc45fd08a8a0eac0d7bde22d742f420.png)

&#xA;This is an example template. You can create kanban-style boards or horizontal-scroll timeline-style, gantt-like views like this.

[![Notion | Where teams and agents work together](../../media/3fad30c68e8991ce1eec0b36769e6ef0d618b11e2be7a4e8040364ae02c9408f.png)](https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2)

[Notion | Where teams and agents work together](https://mrpugo.notion.site/Project-Timeline-1ad6c91f88508098b40ece4f27dff2a2)

A collaborative AI workspace, built on your company context. Build and orchestrate agents right alongside your team's projects, meetings, and connected apps.

### GitHub Projects

GitHub also offers a Trello-like system called GitHub Projects.&#xA;

[![Image from Gyazo](../../media/34ceb9f37a25d7ef8e788f40d175858f6aeacb545c87edee4f7bffc1dd21bebc.png)](../../media/34ceb9f37a25d7ef8e788f40d175858f6aeacb545c87edee4f7bffc1dd21bebc.png)

&#xA;If you're using GitHub Issues, you can take advantage of very powerful integrations, so it's recommended.

## Conclusion

That's my personal list of recommended tools pushed onto everyone, but I believe there are many other great tools out there.

If you have recommendations, please let me know by email or DM!!
