---
title: "XR's Use Might Be as a HUD — Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "At a hackathon I borrowed an inmo XR Android-based XR glasses from Ukai (known from Mitou Junior) and experimented with possible uses. After some indecision, I built a cooking assistant that enjoys cooking with an AI. Here I introduce the attempt to cook with AI using XR glasses."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Today I made a teleprompter app that can stylishly display Google Slides speaker notes for the Inmo Air 3 — Android-running glasses I bought in Shenzhen (@inmoxreality). It's fun and seems immediately practical. (In reality it floats in the air on AR glasses and looks ridiculously cool, but it's painful that there's no good way to show this.) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I got to try an inmo XR — an Android-powered XR headset that Ukai (familiar from Mitou Junior) brought — and I thought up some potentially useful products for it.

## Exploring the potential of inmo XR

I also own [XREAL One](http://xreal.com) lenses, and I wondered whether the inmo XR could do the same kinds of things. Basically, I mainly use XREAL like a mobile monitor, so frankly I didn't feel much need to build apps specifically for this kind of device. Making a dedicated UI or hunting for APIs is a hassle.

However, after actually trying it, the lack of cables and the fact that it runs standalone are major advantages. From a developer perspective there are more possibilities, so I feel we'll see more devices like this in the future. Unlike XREAL's approach, it's extremely slim and less conspicuous (though it still feels a bit odd), and judging by the thinness and performance of the glasses portion, I wondered if it might be an improved equivalent of [Even Realities](https://www.evenrealities.com/).

(If you want an intro to Even G1, I recommend the write-up by 電電猫猫:)
https://note.com/electrical_cat/n/ncbff77528ada

I don't know if inmo XR is the best (I've only compared it to XREAL), but it feels like it's reached a level that can actually be practical. There are issues: heavy operations made it heat up around the ears abnormally, and as is common with Chinese devices, the Play Store didn't work so related services were unusable. Maybe there's some way to work around that.

The display is interesting too. XREAL uses something like a birdbath optical system — a triangular semi-transparent mirror placed right where it almost touches the eye — but inmo XR uses a different method: thanks to some mysterious technology it delivers images to the eye with an ultra-thin form factor. How to explain it... it's like a mirror embedded inside a few-millimeter-thin pair of lenses, and you can see an image projected in from the side... (my vocabulary fails me)

Since it's Android, it needed a mouse-like input method. As a result, the inmo XR has a touchpad-like device and a ring-shaped device you wear on your finger (which is also kind of a touchpad).

## Weak points of current wearable devices

Separately, I recognized a common problem with inmo XR and other similar devices.

As with most high-function XR glasses, they're ultimately heavy, and at least for me they're not tolerable for daily wear. There are devices like Even G1/G2 that strip down functionality, but things that display in full HD or have built-in Android tend to be heavy and cause eye strain. Also, since my vision is around 0.7, I need insert lenses. You might say, "why not use contact lenses?" — but putting foreign objects into your eyes by hand every day is scary...

Still, maybe we humans need some tolerance to adapt to machines, so some discomfort might be inevitable, haha.

From a developer standpoint, I prefer higher-performance devices, but wearing them all the time is exhausting.

That said, I feel this will be fixed fairly quickly — as time goes on they'll get smaller.

## What to build

So what should I build? The plan was to make something quickly in a day (hackathon-style), so I ended up ignoring inmo XR's biggest merits like running Android and exposing device APIs. Instead I focused on its high screen transparency, which makes it usable like a HUD, and the freedom from cable tethering, which increases usable scenarios.

Recently I had trouble with XREAL... oh right.

So I made an AI app to assist with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The concept is simple. Tell the AI what you have at home or what you want to make, and the AI creates a "recipe.json" (lol), then the system follows that. Because inmo XR tends to make black areas transparent (XREAL does this too but inmo XR is even more transparent), the UI takes advantage of that.

In the past, something at a product level (not just a prototype, but actually usable) would have taken at least a week to build, but with LLM coding apps like Cursor, you can do it in a day — no, half a day.

What people need now is the skill to supervise AI: to watch if it's behaving roughly as expected, to judge if it will succeed to the end, to decide whether corrections are necessary, and if so when to interrupt and make the AI fix things.

https://xr-ai-recipe-assistant.vercel.app/

I slapped something together, so please try it (I pay LLM fees, so if I can't afford it I'll stop running it).

## Design choices

Text on XR can be a little hard to read, so I made the buttons absurdly large. They look ridiculous on a PC, but surprisingly the size is just right in XR.

Initially the buttons were dark, but the darker they are the more transparent they become (same as a movie theater projector), so I made the buttons green so they work well in bright environments. Green turns out to be the most visible. Maybe there's a reason movie HUDs are green.

I also needed to reduce the number of buttons. There are several buttons in the demo, but ultimately you want to control it by head movement (e.g., nodding to go to the next page). You don't want to touch a touchpad with your hands covered in raw meat while cooking. So to be able to eliminate buttons in the future, I limited the maximum number of buttons to four and enabled voice input for text fields.

## Other things I want to build

If the glasses are extremely capable and the field of view is wide, I'd like the system to recognize real objects and draw overlays based on their relative positions.

Sure, approaches like Vision Pro that ingest video via a chip can already do this, but a casual glasses-like form factor would likely be more readily accepted by society (at least more than Vision Pro), and it's cheaper.

## Trying it in actual cooking

If Ukai were here he'd lend me the inmo XR, but since I don't have one at home I tried cooking using XREAL and my phone instead. The color reproduction changed a lot, and you need a cable from your ear to connect to a PC or phone, so practicality is iffy.

> I'll try it the next time I cook, and if it seems workable I'll add notes.