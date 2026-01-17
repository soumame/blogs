---
title: "XR's Use Might Be Like a HUD - Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I borrowed an inmo XR — Android-powered XR glasses — from Ukai-san (known from the MITOU Junior program) and did a short hackathon. After struggling to find a use, I created a cooking assistant to enjoy with an AI. Here I introduce my attempt to cook with AI using XR glasses."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Today I made a teleprompter app for the Inmo Air 3 — Android-powered glasses I bought in Shenzhen — that stylishly displays Google Slides speaker notes. It's fun and looks immediately practical. (In reality it's floating in the air with AR glasses and ridiculously cool, but it's painful that there's no way to show this) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I tried out an inmo XR — Android-powered XR glasses — that Ukai-san (familiar from MITOU Junior) had, and brainstormed products that might work with it.

## Exploring the potential of inmo XR

I own [XREAL One](http://xreal.com) lenses and was wondering if it could do the same kinds of things. Basically, I mostly use XREAL like a mobile monitor, so honestly I hadn't felt much need to build apps specifically for this kind of device. Creating a custom UI or digging into APIs felt like a hassle.

However, actually trying the device made it clear that being cable-free and standalone is a huge advantage — from a developer perspective it opens up a lot of possibilities, and I feel we'll see more devices like this going forward. Unlike XREAL's approach, it's extremely thin and less conspicuous (though it still feels a bit odd), and judging by the thinness and performance of the glasses portion alone, I wondered if it's an upper-tier upgrade over [Even Realities](https://www.evenrealities.com/).

(If you want a recommendation about the Even G1, Denden Nekoneko wrote an introduction:)
https://note.com/electrical_cat/n/ncbff77528ada

I don't know if inmo XR is the best (I've only compared it to XREAL), but it feels like it's reached the point of being practically usable. There are issues: heavy workloads cause alarming heat around the ears, and as is common with Chinese devices, the Play Store doesn't work and related services are unavailable. Maybe there's some way to bypass that.

The display itself is interesting. XREAL uses a birdbath optical system? — placing triangular semi-reflective mirrors right where the eye would be — but inmo XR uses a different method: some mysterious technique that delivers images to the eye in an ultra-thin form. How to describe it... a few-millimeter-thin glasses lens has mirrors embedded inside, and you can see images from the side... (my vocabulary fails me)

Because it's Android, it needed some mouse-equivalent control. As a result, inmo XR has a touchpad-like device and a ring-shaped device you wear on your finger (which also acts like a touchpad).

## Weaknesses of current wearable devices

Separately, I also recognized some common problems with inmo XR and other devices.

Most high-function XR glasses are heavy, and at least for me they're unbearable for daily wear. There are devices like the Even G1/G2 that strip down functionality, but anything with full HD or built-in Android tends to be heavy and causes eye fatigue. Also, with about 0.7 vision, I need insert lenses. Some people suggest using contact lenses, but putting foreign objects into my eyes daily is scary...

That said, maybe humans will need to adapt to machines and tolerate some discomfort, haha.

From a developer perspective, I prefer high-performance devices like these, but they are exhausting for everyday use.

Still, I feel these issues will be resolved relatively quickly as tech advances and things get smaller.

## What to build

We decided to build something quickly in one day (hackathon-style), so we ultimately ignored inmo XR's biggest strengths like Android running on-device and device APIs. Instead, we focused on its high screen transparency — making it usable like a HUD — and the fact that there are no cables coming from your ears, which broadens possible use scenarios.

Recently I had a problem with XREAL... ah, right.

So I built an AI app that helps with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The concept is simple. Tell the AI what you have at home or what you want to make, and it generates a "recipe.json" (lol), and the system follows it. inmo XR has the characteristic (for better or worse) that black becomes transparent (XREAL is similar but inmo XR is more transparent), so we take advantage of that.

In the past, making a product at a usable level (beyond a prototype) might have taken at least a week, but with LLM coding tools like Cursor, you can build it in a day — or half a day.

What people need now is the skill to monitor the AI: judging whether things are likely to work, whether it'll succeed to the end, watching the AI's actions to decide if corrections are needed, and if so when to interrupt and ask for fixes.

https://xr-ai-recipe-assistant.vercel.app/

I made a quick demo, so try it out (I'm paying for the LLM usage — I'll shut it down if I can't cover the costs).

## Design decisions

Text can be a little hard to read on XR, so I made the buttons huge. They look ridiculously large on a PC, but oddly they're just right in XR.

Originally the buttons were dark, but the darker the color, the more transparent it becomes (same as a movie theater projector), so I switched the buttons to green so they're visible in bright environments. That turned out to be the most visible. Maybe the reason movie HUDs are green is real.

We also needed to reduce the number of buttons. The demo has several buttons, but in the end we should control it with head movements (like nodding to go to the next page). You don't want to touch a touchpad with hands covered in raw meat while cooking. So to eliminate buttons in the future, we capped the maximum number of buttons at four and added voice input for text fields.

## Other ideas

If the glasses become extremely capable with a wider field of view, I'd like them to recognize real-world objects and render overlays based on their positions.

This is already possible with approaches like Vision Pro that use a chip to capture video, but glasses that are as easy to wear as regular glasses would be more socially acceptable (at least more than Vision Pro) and cheaper.

## Trying it out while cooking

If Ukai-san is around he'll lend me the inmo XR, but since I don't have one at home I tried cooking with XREAL and a smartphone instead. The colors tend to shift quite a bit, and you have to run cables from your ears to a PC or phone, so the practicality is questionable.

> I'll try using it next time I cook and add notes if it looks promising
