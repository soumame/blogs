---
title: "I Did a Massive Refactoring After Mitou Junior Ended"
emoji: "♻️"
tags:
  - "postgresql"
  - "typescript"
  - "rpc"
  - "mitou-junior"
  - "hono"
published_at: "2024-12-14 12:13"
---

Hello, I'm Souma.

:::message
This article is part of the [Mitou Junior Advent Calendar](https://adventar.org/calendars/10825).
:::

Today I'd like to talk about how I did a major refactoring of my app [TutoriaLLM](https://tutoriallm.com). Although I've gotten more comfortable with development, I'm still an amateur compared to industry professionals, so I may be writing code in ways that are generally considered bad. If you notice anything, please let me know gently. [Contact info here](https://tokumaru.work/ja)

https://tutoriallm.com

https://github.com/TutoriaLLM/TutoriaLLM

# What is TutoriaLLM?

> A self-hosted software that lets you easily create block programming tutorials like Scratch and provide them using AI.

Simply put, TutoriaLLM is a block programming learning software aimed at teachers and children that incorporates many ideas and solutions to frustrations encountered with [Scratch](https://scratch.mit.edu/) and [Makecode](https://makecode.microbit.org/).

Using technologies like AI that monitors the entire app and acts as a teacher's assistant to teach block programming to children, and a VM system that executes created code on the server-side, it aims to reduce the cost burden on teachers and make programming education more accessible.

The app has been developed since May of this year with support from the "Mitou Junior" creator support program, and we had our final presentation on November 4th. Later, on the 17th, we surprisingly won first place at App Koshien. This was quite shocking. As this was the first proper application developed by me with only 2 years of programming experience, I'm endlessly grateful to everyone at Mitou Junior who watched over me warmly while I wrote code inexperienced and taught me so many things.

# Reasons for Refactoring

However, after finishing the final presentation and winning App Koshien, I was feeling satisfied but... as I worked with my app's code that I had rushed to complete in a short time, I started thinking "...isn't this code kind of messy?" Perhaps this means my technical skills have improved. The app is far from stable - the demo site's Sentry receives error notifications almost daily. While this app has been highly evaluated as a technical demo, it's still insufficient and unusable for real-world implementation.

This app is intended to be used by teachers and children. While people may have been lenient since it was made by a high school student, having errors occur when actual users are using it would be a serious problem.

Additionally, this app is [open source](https://github.com/TutoriaLLM/TutoriaLLM), and while there aren't many contributors yet, there may be people who want to contribute in the future. For that reason, I felt I needed to create an environment where developers can write code comfortably... or rather, a friend pointed this out to me.

When I started writing code in May, everything was trial and error and I didn't understand anything, but now I feel like I can handle it! So I decided to do the refactoring.

# Starting the Refactoring!

For the refactoring, rather than just working from online information, I got various advice about repository setup and trending frameworks from Yuta-san who often helps me out. When it comes to making an app production-ready, it seems best to learn from someone with actual experience.
https://zenn.dev/yutakobayashi

## DB Redesign

First, I started by completely rebuilding the database.
Previously I was using a combination of PostgreSQL and Redis, but I decided to consolidate this into PostgreSQL.

Originally, TutoriaLLM synchronized user-created programs with server storage in real-time to enable LLM processing, multi-user access to the same session, and server-side code execution. I used Redis to accomplish this. At the time, I didn't understand PostgreSQL very well, and since it was in the testing phase, I prioritized getting a working version quickly, so I chose Redis because it was simple to use and could be implemented immediately. Also, since session data was written in JSON and was being overwritten in Redis each time, the high-speed in-memory processing it advertised was another reason.

However, as time passed and we reached the stage where people would actually use it, we needed something that was "reliably working" rather than just "working somehow". Redis is in-memory, so if you stop the server without taking any precautions, all data is lost. If the server goes down even for a moment while children are using it, all their in-progress data would be lost - a disaster. Also, after changing to a diff-based update method, the amount of data read and written at once decreased. In this case... PostgreSQL is sufficient.

So, as we moved from the stage of creating a working demo to having people actually use it, I decided to redesign the DB.

### Selected Technologies

Although I say redesign, it was quite simple since I just integrated the session management part into PostgreSQL. However, I decided not to support backward compatibility as it would have been difficult. (This would be very problematic in production)
For the PostgreSQL server, I used a Docker image that already supported Vector data (which isn't in standard PG and needs to be extended) since it was needed for AI-related features.
https://hub.docker.com/r/ankane/pgvector

For these operations, I used Drizzle ORM. It also [supports Vector](https://orm.drizzle.team/docs/guides/vector-similarity-search), and I think this is the best choice for people writing in Javascript/Typescript.
https://orm.drizzle.team/

## Goodbye, Express

TutoriaLLM used Express for backend and Vite for frontend, and to build these quickly, I was using something straightforwardly named Vite-express.
https://github.com/szymmis/vite-express
It's more of a wrapper for easy full-stack deployment than a framework (sorry if I'm wrong). Since the app is served as static files, using this made it easy to handle the whole flow of Vite build → Express loading → frontend/backend serving.

When I first developed it, I thought this was super convenient! And it is. However, using something like this makes it impossible to separate the frontend and backend.
TutoriaLLM is provided as a Docker image, but this offers zero scalability. Just like before, while it was fine for creating a working demo, when it comes to actual use... it's a bit concerning.

### Monorepo Strategy

So, with Yuta-san's help, we started by turning the application into a monorepo. Since I was using pnpm, we used [pnpm workspaces](https://pnpm.io/ja/next/workspaces) to separate the frontend and backend. Since it's essentially just Vite and Express, moving directories should be enough... right...

### Type Definition Issues

However, reality wasn't so simple. Five months ago, I was sharing TypeScript type definitions between frontend and backend.

When communicating between frontend and backend, you can't have type definitions without doing anything special. There are various ways to add type definitions but... ~~it was troublesome, so I was about to use Any (making enemies of TypeScript users worldwide)~~
Creating a dedicated module for type definitions in the pnpm workspace and managing them there... just thinking about it is troublesome, and double definitions would probably become a maintenance nightmare and ~~we'd end up back in Any hell~~

### Hono + RPC

There was a hot framework for lazy individual developers like me. It's called Hono.
With Hono, you can bring type definitions defined in the backend using zod to the frontend.
https://hono.dev/docs/concepts/stacks

It's amazing, right? I have no idea what technology is being used (I should study), but with this, you can bring types directly to the frontend. Moreover, you can generate these based on [Zod+OpenAPI combinations](https://hono.dev/examples/zod-openapi). Just by defining the API specifications and describing the corresponding responses, you can develop the backend side with complete type safety.

So since Hono clearly matches our current situation better, I decided to part ways with Express. While Express is a widely used framework for building server-side applications and is used in many large-scale applications with high stability, at least for cases like mine, this is better.

TutoriaLLM was already using Hono for executing user code.
TutoriaLLM's code execution feature can connect with games like Minecraft to run code, and we were using Hono's WebSocket helper to provide a lightweight WebSocket connection environment. Often these kinds of WebSocket servers can't connect with special clients like Minecraft, but Hono is written very simply so there seem to be fewer such troubles.

So for this refactoring, we decided to implement Hono across the entire app, and since it was so user-friendly, I plan to become a Hono believer and promote it from now on.

# Time and Results

So what do you think?
For my first time refactoring my first web app, I think we achieved quite good improvements.

The time taken for these changes was about three weeks. I think this is excellent timing for completing everything including technology selection, DB redesign, repository migration, monorepo conversion, framework change, and type sharing setup.

I believe these changes have greatly improved TutoriaLLM's stability. I'm very satisfied that what was previously in a temporary working state is now functioning quite properly.

However, even after this refactoring, there are still unstable areas that need more fixes, but by establishing a solid development foundation at this point, we plan to continue updates and eventually deploy this app for actual use in educational institutions teaching programming.

During the Mitou Junior period, I focused on creating a working demo to gather interest. While it's valid to develop without considering stability, there comes a time when you need to rewrite things like this. We need to aim for stable operation too. I'll keep working hard.

https://tokumaru.work/ja
