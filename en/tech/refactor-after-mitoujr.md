---
title: "Super Large Refactoring After Finishing MITOU Junior"
emoji: "♻️"
tags:
  - "mitou-junior"
published_at: "2024-12-14 12:13"
isTranslated: true
sourcePath: "ja/tech/refactor-after-mitoujr.md"
sourceHash: "5c1c8dcef22a9ddaef81dcbfe7ff4a76a8e8907d35ad9b9685ab0fb21a4ffa31"
---

Hello. I'm Souma.

:::message
This article is part of the [MITOU Junior Advent Calendar](https://adventar.org/calendars/10825).
:::

Today, I'd like to talk about a large-scale refactoring of the app I am currently developing, called [TutoriaLLM](https://tutoriallm.com). Although I've gotten somewhat accustomed to it, I am still a beginner in the eyes of the community, so I may be writing code that is generally considered poor. Please let me know gently if I am! [Contact here](https://tokumaru.work/ja)

https://tutoriallm.com

https://github.com/TutoriaLLM/TutoriaLLM

# What is TutoriaLLM?

> It's self-hosted software that allows you to easily create tutorials for block programming like Scratch and provide them using AI.

To put it simply, TutoriaLLM is a learning software for block programming aimed at teachers and children, filled with frustrations and ideas that emerged from platforms like [Scratch](https://scratch.mit.edu/) and [Makecode](https://makecode.microbit.org/).

Using technologies such as AI functions that assist teachers in teaching block programming while monitoring the entire application and a VM system that executes created code on the server-side, it aims to lower the costs for educators and make access to programming education easier.

The app has been developed with support from the creator support program "MITOU Junior" since around May of this year, and we held a成果報告会 (results presentation meeting) on November 4th. Additionally, I was fortunate enough to win the app competition held on the 17th. I'm surprised! This application was my first serious development project after two years of programming, and I can't thank the wonderful people at MITOU Junior enough who watched over me as I wrote code in my inexperience and taught me so many things.

# Reasons for Refactoring

However, after the presentation meeting and winning the app competition, I found myself satisfied... but while touching the code of my app, which I managed to finish in a short amount of time, I began to think, "...Isn’t the code kind of messy?" Perhaps this indicates that my technical skills have improved. The app cannot be called stable by any means, as I receive error notifications on the demo site’s Sentry almost daily. While this app has been highly evaluated as a technical demo, it is still insufficient for actual implementation in the real world and is not usable at all.

This app is intended for use by teachers and children. Everyone may have overlooked it since it was made by high school students, but it would be a big problem if users actually use it and errors arise.

Moreover, since this app is [open-source](https://github.com/TutoriaLLM/TutoriaLLM), although not many people are participating yet, someone might contribute in the future. Therefore, I thought it was necessary to create an environment where developers can feel comfortable writing code... Well, a friend pointed it out to me.

When I started coding in May, everything was a trial and error, and I didn’t understand anything, but now I feel like I can somehow manage it! So, I decided to refactor.

# Start Refactoring!

In embarking on the refactoring, I made sure to get advice from Yuta, who often helps me, about setting up the repository and trendy frameworks, rather than relying solely on information from the internet. After all, I think it's best to hear from someone who has actually done it when it comes to getting an app into a production environment.
https://zenn.dev/yutakobayashi

## Redesigning the Database

First, I started by completely redesigning the database. 
Originally, I was using a combination of PostgreSQL and Redis, but I decided to integrate them into PostgreSQL.

Initially, TutoriaLLM was using Redis to synchronize users’ created programs in real-time with the server's storage in order to handle LLM processing, multiple users accessing the same session, and server-side code execution. At that time, I didn’t have much understanding of PostgreSQL, and since it was still in the testing phase, I prioritized creating a working version quickly, which is why I chose Redis for its simplicity and immediate usability. Additionally, session data was described in JSON and was being overwritten in Redis each time, thus leveraging its advertised fast in-memory processing.

However, as time passed and we moved to the stage of actual usage by people, the demand shifted from "just working" to "working reliably." Since Redis operates in-memory, if the server is stopped unexpectedly, all data will be lost. If the server drops even for a moment while children are using it, all the data they were working on will disappear, leading to a disaster. Furthermore, by switching to a differential base for data updates, the amount read and written at once was reduced. With that said... PostgreSQL is sufficient for our needs.

Thus, as we transitioned from creating a functional demo to a stage where real users would be using it, I decided to redesign the database.

### Selected Technologies

Even though I said I redesigned it, I only integrated session management into PostgreSQL, so it was relatively simple to do. However, I decided against supporting backward compatibility because doing so in a production environment would be very tricky.
Since the PostgreSQL server needed to store vector data related to AI features (which is not present in standard PG and needs to be extended), I started with a Docker image that supports it from the outset.
https://hub.docker.com/r/ankane/pgvector

For these operations, I used Drizzle ORM. It supports [vector capabilities](https://orm.drizzle.team/docs/guides/vector-similarity-search), and for those writing in Javascript/Typescript, this is probably the best option.
https://orm.drizzle.team/

## Goodbye, Express

In TutoriaLLM, the stack consisted of Express for the backend and Vite for the frontend, and to create these quickly, I was using something simply named vite-express.
https://github.com/szymmis/vite-express

Rather than a framework, it's more like a wrapper for easily deploying full-stack applications (I apologize if that’s incorrect). Since the app is served as static files, using something like this made the process straightforward from building with Vite → loading it with Express → providing frontend/backend.

At the time of development, I thought this was super convenient! And it was indeed convenient. However, by using something like this, it became impossible to separate the frontend from the backend.
TutoriaLLM is provided as a Docker image, but this setup shows no scalability at all. While it was sufficient for creating a working demo, it became a bit concerning once it had to be used in practice...

### Monorepo Strategy

Thus, with Yuta's help, I decided to start by converting the application into a monorepo. Since I was using pnpm, I would use [pnpm workspaces](https://pnpm.io/ja/next/workspaces) to separate the frontend and backend. Since it effectively uses Vite and Express, it should just take moving the directories...

### Type Definition Issues

However, reality was not so easy. Five months ago, I was sharing TypeScript type definitions between the frontend and backend.

When making the frontend and backend communicate without doing anything, type definitions cannot be applied. There are various ways to implement type definitions... but I was going to use Any out of laziness (which would put me at odds with all typescripters around the world).
I considered creating a module solely for type definitions in the pnpm workspace, but just thinking about it felt tedious, and if I ended up having to define them twice, it would probably become a hassle to manage and lead me back to the Any hell.

### Hono + RPC

There was a hot framework for lazy individual developers: Hono.
With Hono, you can bring the type definitions defined in the backend (using zod etc.) to the frontend.
https://hono.dev/docs/concepts/stacks

Isn’t that wonderful? I have no idea what technology is being used (I should study), but by using this, you can take types straight to the frontend. Moreover, you can even generate these based on a [Zod + OpenAPI combination](https://hono.dev/examples/zod-openapi). By defining the API specifications and writing the corresponding responses, the backend can develop completely with types intact.

Given that it fits the current situation much better, I decided to part ways with Express. While Express is a widely used framework for server-side development and is often found in large-scale applications with high stability, in cases like mine, this seems to be a better choice.

Originally, Hono was also used in TutoriaLLM when executing code. The code execution functionality of TutoriaLLM allows connection with games like Minecraft to execute code, and by utilizing Hono's WebSocket helper, it provided a lightweight WebSocket connection environment. A lot of WebSocket servers struggle to connect with specialized clients like Minecraft, but I have the impression that Hono is very simply written, which reduces such troubles.

Thus, for this refactoring, I decided to implement Hono throughout the entire application, and I found it very user-friendly, so I plan to become a Hono believer and promote it in the future.

# Time and Outcomes

So, how was it? Considering it was my first web app and my first time refactoring, I think we made significant improvements.

The total time taken for these changes was about three weeks. Considering that I managed the technology selection, redesigned the database, migrated the repository, converted it to a monorepo, changed frameworks, and set up type sharing, I think this timeframe is quite good.

With these changes, I believe the stability of TutoriaLLM has improved greatly. What was previously a makeshift working state has become more robust, and I am very satisfied.

That said, even after this refactoring, there are still some unstable areas, and I need to fix a few more things. However, I aim to establish a solid development foundation at this point and to continue updating, with the eventual goal of deploying this app to educational institutions that teach programming (for them to use).

During the MITOU Junior period, I focused primarily on creating a working demo to attract people interested in the app. Of course, I think it's acceptable to develop like this, ignoring stability, but there will come a time when you need to rewrite things in such a manner. We need to aim for reliable functioning as well. I will keep trying my best.