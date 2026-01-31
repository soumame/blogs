---
title: "Maybe the Use for XR Is to Use It Like a HUD - Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I got to try an inmo XR — Android-powered XR glasses — that Yu Ukai (known from the Mitou Junior program) had, and for a quick hackathon we built an AI cooking assistant to enjoy cooking with an AI. I tried using the XR glasses while cooking, so here’s a write-up."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Today I built a teleprompter app for the Inmo Air 3 — the Android-powered glasses I bought in Shenzhen from <a href="https://twitter.com/inmoxreality?ref_src=twsrc%5Etfw">@inmoxreality</a> — that displays Google Slides speaker notes in a stylish way. It's fun and seems immediately practical. (In reality it floats in the air with AR glasses and looks insanely cool, but it's hard to show that.) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I got to try an inmo XR — the Android XR glasses that Yu Ukai (known from Mitou Junior) had — and I spent some time thinking up products that might be useful with it.

## Exploring the potential of inmo XR

I also own a [XREAL One](http://xreal.com) lens and wondered if it could do similar things. Basically I’ve been using XREAL mostly like a mobile monitor, so to be honest I didn’t feel a strong need to build an app specifically for these devices. Making a dedicated UI or hunting for APIs felt like a hassle.

However, after actually trying it out, the fact that it’s cable-free and runs standalone felt like a huge strength — it opens up many possibilities for developers, and I felt devices like this will likely become more common. Unlike XREAL’s approach, it’s very slim and less conspicuous (still a bit strange, though), and judging by the thinness and performance of the glasses themselves I wondered if it might be an upper-tier equivalent to [Even Realities](https://www.evenrealities.com/).

(If you want an intro to the Even G1, 電電猫猫 has a good writeup I recommend:)
https://note.com/electrical_cat/n/ncbff77528ada

I don’t know if inmo XR is the absolute best (I only compared it to XREAL), but it felt like it has reached a level where it could be practical. There were issues: when doing heavy processing it got unusually hot around the ears, and — a typical China-device caveat — the Play Store didn’t work and related services were unavailable. Maybe there’s some way to get around that.

The display itself is interesting: XREAL uses a birdbath optical system? — basically a triangular semi-reflective mirror placed right where your eye would be to deliver the image — but inmo XR uses a different approach with some mysterious technology to deliver images in an ultra-thin form. How to explain it... it’s like a mirror embedded inside a lens only a few millimeters thick, so you can see an image from the side... (my vocabulary fails me)

Because it’s Android, a mouse-like input was needed. inmo XR provides something like a touchpad device and a ring-shaped device that you wear on a finger (which also functions like a touchpad).

## Weak points of current wearable devices

Separately, I recognized problems common to inmo XR and other devices.

Most high-function XR glasses end up being heavy, and at least for me they’re not tolerable for everyday wear. There are lightweight options like the Even G1/G2 that strip down functionality, but devices that display full HD or include Android tend to be heavy and cause eye fatigue.

Also, with my eyesight of around 0.7, I need insert lenses. Some say "just use contact lenses," but putting foreign objects into your eyes by hand every day is scary... Still, people might need to adapt to the machines somehow, so maybe some of this tolerance is inevitable, haha.

From a developer perspective, I like high-performance devices, but they’re exhausting to use day-to-day.

That said, I feel these issues will be fixed relatively soon. As time goes on, things will get smaller.

## What to build

We had to make something quickly in a day (hackathon-style), so we ultimately ignored inmo XR’s biggest advantages — Android running on the device and device APIs. Instead, we focused on its high display transparency that makes it feel like a HUD, and the fact it’s cable-free from the ears, which increases usable scenarios.

A recent annoyance with XREAL was... oh right.

So I built an AI app that helps with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Image diagram by Gemini)_

The idea is simple. Tell the AI what ingredients you have or what you want to make, and the AI generates a "recipe.json" (lol), and the system follows it.
Because inmo XR tends to render black as transparent (XREAL is similar but inmo XR is even more transparent), we leveraged that characteristic in the design.

In the past, something usable as a product (not just a prototype) would’ve taken at least a week to build, but with LLM-based coding tools (like Cursor) you can do it in a day — no, even half a day.

What people currently need is the skill to supervise the AI: to watch whether it seems to be working, whether it will finish successfully, whether it needs correction, and if so, when to pause and make that correction.

https://xr-ai-recipe-assistant.vercel.app/

I threw this together quickly, so give it a try (I’m paying for LLM costs, so if it becomes too expensive I might have to shut it down).

## Design choices

Text is somewhat harder to read on XR, so I made the buttons huge. They look absurdly large on a PC, but on XR they’re actually about right.

Initially the buttons were darker, but the darker the button the more transparent it became (same principle as cinema projectors), so to make them visible in bright environments I made them green. Green turned out to be the most visible — maybe that’s why movie HUDs often use green.

I also needed to reduce the number of buttons. The demo has a few, but ultimately the controls should be driven by head movements (e.g., nod to go to the next page). You don’t want to touch a touchpad with hands that are covered in raw meat while cooking. So to eliminate buttons in the future, I limited the maximum number of buttons to four and added voice input for text fields.

## Other things I want to build

If glasses become extremely capable with a wider field of view, I’d like them to recognize real objects and draw overlays based on their positions relative to each other.

You could already do this with approaches like Vision Pro that use a dedicated chip to process incoming video, but a glasses-like, lightweight, and affordable form factor would be more socially acceptable (at least more so than Vision Pro) and cheaper.

## Trying it out while actually cooking

If Ukai-san were around he’d lend me an inmo XR, but since I don’t have one at home I tried cooking with XREAL and a smartphone instead. Colors changed quite a bit, and because you have to run a cable from your ear to a PC or phone, the practicality is marginal.

> I’ll try using it next time I cook, and if it seems promising I’ll add an update
