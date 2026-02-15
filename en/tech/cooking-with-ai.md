---
title: "XR's Use May Be as a HUD — Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I borrowed an inmo XR — an Android-based XR headset — from Ukai, known from Mitou Junior, and did a short hackathon. After struggling with potential uses, I built a cooking assistant to enjoy cooking with an AI. I tried using XR glasses to cook with an AI, so here's an introduction."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Today I made a teleprompter app that stylishly displays Google Slides speaker notes for the Inmo Air 3 — Android-powered glasses I bought in Shenzhen from <a href="https://twitter.com/inmoxreality?ref_src=twsrc%5Etfw">@inmoxreality</a>. It’s fun and could be immediately practical. (In reality it’s floating in the air with AR glasses and looks insanely cool, but it’s painful that there’s no good way to show this) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I tried out an inmo XR — an Android-based XR headset — that Ukai from Mitou Junior had, and brainstormed products that might be useful with it.

## Exploring the potential of inmo XR

I also own [XREAL One](http://xreal.com) lenses and wondered if inmo XR could do similar things. Basically, I mostly use XREAL like a mobile monitor, so to be honest I hadn't felt a strong need to build apps specifically for that kind of device. Making a dedicated UI or digging into APIs felt like a hassle.

But when I actually tried it, the fact that it runs standalone without cables is a huge advantage — it opens up a lot more possibilities for developers, so I feel devices like this will become more common. Unlike XREAL’s approach, inmo XR is very thin and less conspicuous (there’s still some oddness), and judging by the thinness and performance of the glasses themselves, I wondered if it might be an upgrade over [Even Realities](https://www.evenrealities.com/).

(If you want an introduction to the Even G1, I recommend the piece by 電電猫猫:)
https://note.com/electrical_cat/n/ncbff77528ada

I don’t know if inmo XR is the best (I only compared it to XREAL), but it felt like it’s reached the point of being practically usable. There were issues: heavy operations made the area around the ears heat up alarmingly, and typical China-device problems like not being able to use the Play Store or related services. Maybe there’s some way to work around that.

The display is interesting too. XREAL uses something like a birdbath optical system — a triangular semi-reflective mirror placed right where your eye would be to deliver the image — but inmo XR uses a different method: some mysterious tech delivers images to the eye in an ultra-thin form. How to describe it... there’s a mirror embedded inside a lens that’s only a few millimeters thin, and you can see the image coming from the side... (I lack the vocabulary)

Since it’s Android, an input method equivalent to a mouse was needed. inmo XR offers a touchpad-like device and a ring-shaped device you wear on your finger (which also acts like a touchpad).

## Weaknesses of current wearable devices

Separately, I noticed problems common to inmo XR and other devices.

Like most high-function XR glasses, they’re ultimately heavy, and I for one can’t tolerate wearing them daily. There are lightweight, severely feature-limited options like Even G1/G2, but devices that do full HD or include Android tend to be heavy and tiring for the eyes. Also, since my eyesight is about 0.7, insert lenses are essential for me. Some say just use contacts, but putting foreign objects in your eyes every day is scary… Still, humans may need to adapt to machines, so some tolerances might be necessary, lol.

From a developer perspective, I prefer higher-performance devices, but they end up exhausting to use regularly.

That said, I feel these issues will be fixed soon enough. As time goes on, they’ll get smaller, right?

## What to build

We decided to make something quick in one day (hackathon style), so we ended up ignoring the biggest strengths of inmo XR — Android and device APIs. Instead, we focused on the high transparency of the display (making it usable like a HUD) and the fact that it’s cable-free, which increases usable scenarios.

Recently on XREAL I had this annoying thought... oh right

So I built an AI app to help with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The idea is simple. Say what you have at home or what you want to make, and the AI generates a "recipe.json" (lol), and the system follows it. Because inmo XR tends to render black as transparent (XREAL is similar but inmo is even more transparent), we designed the UI to take advantage of that.

In the past, a prototype at a usable-product level might have taken at least a week, but using LLM coding tools like Cursor, it took one day, or even half a day.

What people need now is the skill to supervise the AI: glance at whether it’s likely to work, watch it through to the end, decide if correction is needed, and if so, judge when to interrupt and make the correction.

https://xr-ai-recipe-assistant.vercel.app/

It’s a quick prototype, so please try it out (I’m covering the LLM costs for now; I might stop if it becomes unaffordable).

## Design decisions

Text in XR was a bit hard to read, so I made the buttons enormous. They look ridiculously big on a PC, but surprisingly appropriate in XR.

Originally the button color was dark, but darker colors become more transparent (same as projectors in movie theaters), so I changed the buttons to green so they work in bright environments. That’s the most visible. Maybe there was a reason movie HUDs are green.

We also needed to reduce the number of buttons. The demo has several, but ultimately it should be controlled by head movement (e.g., nod to go to the next page). You don’t want to touch a touchpad with hands covered in raw meat while cooking. So to remove buttons in the future, we limited the maximum button count to four and made text input support voice input.

## Other ideas to build

If glasses become extremely capable with a wider field of view, it would be great to recognize real-world objects and render overlays based on their spatial relationships.

You can already do this with approaches like Vision Pro that use a chip to capture video, but glasses in a lightweight, convenient form factor are more likely to be socially accepted (at least more than Vision Pro) and cheaper.

## Trying it out for cooking

If Ukai were here he’d lend me the inmo XR, but since I don’t have one at home I tried cooking using XREAL and a smartphone instead. Colors change a lot, and you need cables from the ears to a PC or phone, so practicality is questionable.

> I’ll try using it next time I cook and add notes if it looks viable
