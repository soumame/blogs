---
title: "After Mitou Junior Ended, I Performed a Massive Refactor"
emoji: "♻️"
tags:
  - "mitou-junior"
published_at: "2024-12-14 12:13"
isTranslated: true
sourcePath: "ja/tech/refactor-after-mitoujr.md"
sourceHash: "5c1c8dcef22a9ddaef81dcbfe7ff4a76a8e8907d35ad9b9685ab0fb21a4ffa31"
---

Hello. I'm Soumame.

:::message
This article is part of the [Mitou Junior Advent Calendar](https://adventar.org/calendars/10825).
:::

Today I'd like to talk about how I performed a major refactor on the app I'm currently developing, [TutoriaLLM](https://tutoriallm.com). Although I'm getting more experienced, I'm still an amateur compared to people in the field, so I may have been writing code in ways that are generally considered poor practice. If you spot anything, please quietly let me know. [Contact here](https://tokumaru.work/ja)

https://tutoriallm.com

https://github.com/TutoriaLLM/TutoriaLLM

# What is TutoriaLLM?

> It's a self-hosted software that makes it easy to create tutorials for block programming like Scratch and deliver them using AI.

Put simply, TutoriaLLM is a block-programming learning software aimed at teachers and children, packing in lots of ideas and frustrations I had with [Scratch](https://scratch.mit.edu/) and [Makecode](https://makecode.microbit.org/).

It uses technologies such as AI features that act as an assistant to the teacher while monitoring the whole app, and a VM system that runs created code server-side. The goal is to lower the cost for educators and improve access to programming education.

The app has been under development since around May of this year with support from the creator support program “Mitou Junior,” and I presented the results on November 4. Also, at the App Koshien held on the 17th, we actually won first place. I was surprised. This app was the first real application I developed in my two years of programming, so I can’t thank everyone from Mitou Junior enough for watching over my inexperienced coding and teaching me so much.

# Why refactor?

After the results presentation and winning App Koshien, I felt satisfied... but when I looked back at the code I had rushed to finish, I started thinking, “...isn’t this code kind of messy?” Maybe my skills have improved. The app is far from stable, and the demo site's Sentry receives error notifications almost daily. Although this app is highly regarded as a technical demo, it's still far from being production-ready and is basically unusable.

This app is intended for teachers and children. Until now people may have cut me some slack because it was an app made by a high schooler, but it becomes a huge problem if users encounter errors while using it.

Also, this app is [open source](https://github.com/TutoriaLLM/TutoriaLLM). There aren’t many contributors yet, but contributors might show up in the future. For that reason, I felt it necessary to set up an environment where developers can comfortably write code... or rather, a friend pointed this out to me.

When I started writing code back in May everything was trial and error and I didn’t know much, but now I felt like I could manage it—so I decided to refactor.

# Refactoring begins!

Rather than relying only on information from the internet, I asked my regular helper Yuta for various advice about repository configuration and trending frameworks. When you actually want to make an app usable in production, hearing directly from someone who has done it is probably the best.
https://zenn.dev/yutakobayashi

## Database redesign

First, I started by rebuilding the entire database.
Previously I used a combination of PostgreSQL and Redis, but I decided to consolidate everything into PostgreSQL.

Originally, TutoriaLLM synchronized user-created programs to server storage in real time to enable LLM processing, multi-user access to the same session, and server-side code execution. Redis was used to achieve this. At the time I didn’t understand PostgreSQL well and, being in a trial stage, I prioritized getting a working version quickly. Redis was simple to use and ready to go, so I chose it. Session data was stored as JSON and overwritten in Redis each time, so the in-memory speed of Redis was also a reason.

However, as time passed and the app reached the stage of being used by people, stability became more important than “just working.” Because Redis is in-memory, if the server stops without doing anything, all the data is gone. If the server dropped even briefly while a child was using it, all their in-progress work would disappear—an absolute disaster. Also, by switching updates to be diff-based, the amount of data read and written at once decreased. At that point... PostgreSQL was more than enough.

So, moving from a quick demo to something people would actually use, I redesigned the DB.

### Chosen technologies

Since I only integrated session management into PostgreSQL, the redesign was fairly straightforward. However, supporting backward compatibility was tough so I skipped that (it would be a nightmare in production).
PostgreSQL needed to store vector data for AI-related features (not available in vanilla PG without extensions), so I used a Docker image that supports it out of the box.
https://hub.docker.com/r/ankane/pgvector

For these operations I used Drizzle ORM. It supports [vector functionality](https://orm.drizzle.team/docs/guides/vector-similarity-search) and is a great choice if you're writing in JavaScript/TypeScript.
https://orm.drizzle.team/

## Goodbye, Express

TutoriaLLM originally used Express for the backend and Vite for the frontend, so I used something literally named vite-express to set them up quickly.
https://github.com/szymmis/vite-express

It’s more of a wrapper to easily deploy a full-stack app than a full framework (apologies if that’s not the best description). Since the app is served as static files, this lets you build with Vite → serve with Express → provide frontend/backend, all in a simple flow.

When I first developed it, I thought it was super convenient. And it was. But using something like this makes it hard to decouple frontend and backend.
TutoriaLLM is distributed as a Docker image, but with this approach there was no scalability. It was fine for a working demo, but for actual use it felt worrying.

### Monorepo strategy

So, with Yuta’s help, I started by converting the application into a monorepo. Since I was using pnpm, I used [pnpm workspaces](https://pnpm.io/ja/next/workspaces) to separate the frontend and backend. Since it was essentially Vite and Express, I thought I could just move directories and be done... or so I thought.

### Type definition issues

Reality was not so kind. Five months ago I was sharing TypeScript type definitions between the frontend and backend.

When you communicate between frontend and backend without any setup, you can’t get type safety. There are many ways to add types, but... ~~it was a hassle so I was going to use Any (I made enemies of Typescripters worldwide)~~
Creating a dedicated types module in a pnpm workspace and managing types there... just thinking about it was tedious, and duplicate definitions would have been a pain to manage—~~I would probably have fallen back into the Any hell again~~

### Hono + RPC

Then I discovered a wonderful framework for lazy solo developers: Hono.
With Hono, you can bring types defined on the backend using zod over to the frontend.
https://hono.dev/docs/concepts/stacks

It’s amazing. I have no idea what technology it uses under the hood (I should study it), but it allows you to carry types straight to the frontend. Moreover, you can generate these using the [Zod + OpenAPI combination](https://hono.dev/examples/zod-openapi). Define the API spec and write responses accordingly, and the backend can be developed with full type safety.

Hono clearly matched my situation better than Express, so I parted ways with Express. Express is widely used for building server-side apps and is common in large applications with proven stability, but for my case Hono was the better fit.

Originally, TutoriaLLM already used Hono for executing user code.
The code execution feature can connect and run code with games like Minecraft, and by using Hono’s WebSocket helper I provided a lightweight WebSocket environment. Many WebSocket servers struggle to connect with unusual clients like Minecraft, but Hono’s simplicity makes such issues less frequent.

So for this refactor I introduced Hono across the whole app. It worked well, and I’ve become a Hono believer—I plan to recommend it going forward.

# Time and results

So, how was it?
For a first refactor of my first web app, I think it achieved significant improvements.

The changes took about three weeks. Considering I did technology selection, DB redesign, large-scale repository movement, monorepo conversion, framework change, and type sharing setup in that time, I think that was quite good.

I believe this refactor greatly improved TutoriaLLM’s stability. What used to be a quick-and-dirty prototype now runs much more reliably, and I’m very satisfied.

That said, there are still unstable parts that need fixing, and more work remains. At this point I’m laying a solid foundation for development so that with continued updates we can eventually deploy this app in production for educational institutions teaching programming.

During the Mitou Junior period I was dedicated to building a working demo to attract interest. Ignoring stability and focusing on getting something working is fine for that stage, but eventually you have to rewrite it. We must also aim for stable operation. I’ll keep working hard.

https://tokumaru.work/ja