---
title: "XR's Use Might Be as a HUD - Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I borrowed an inmo XR — an Android-based XR headset — from Ukai, known from the Mitou Junior program, and held a small hackathon. After struggling to find a use for it, I built a cooking assistant to enjoy cooking with an AI. Here I introduce my attempt to cook with an AI using the XR glasses."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Today I made a teleprompter app that stylishly displays Google Slides speaker notes for the Inmo Air 3 — the Android-powered glasses I bought in Shenzhen from <a href="https://twitter.com/inmoxreality?ref_src=twsrc%5Etfw">@inmoxreality</a>. It's fun and looks immediately practical. (In reality the AR glasses float in the air and look ridiculously cool, but it's hard to show that.) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I got to try the inmo XR — an Android-powered XR headset that Ukai from the Mitou Junior program had — and I brainstormed what practical products could be made with it.

## Exploring the potential of inmo XR

I already own [XREAL One](http://xreal.com) lenses, so I wondered whether it could do the same kinds of things. Basically, I mostly use XREAL like a mobile monitor, so to be honest I hadn't felt a strong need to build apps specifically for such devices. Creating custom UIs and hunting for APIs is a hassle.

But after actually trying it, being cable-free and standalone is a huge advantage. From a developer's perspective it opens up a lot of possibilities, and I feel we'll see more of these devices.
Unlike XREAL's approach, it's extremely thin and less conspicuous (though it still feels a bit odd), and judging by the thinness and performance of the glasses themselves, I wondered if it's an upgraded alternative to [Even Realities](https://www.evenrealities.com/).

(If you want a recommendation for Even G1, DenDen Nekoneko wrote a good introduction:)
https://note.com/electrical_cat/n/ncbff77528ada

I don't know if inmo XR is the absolute best (I've only compared it to XREAL), but it feels close to being practically usable. There were issues: heavy workloads made the area around the ears get unusually hot, and as is common with some Chinese devices, the Play Store couldn't be used and related services were unavailable. There might be ways to work around that, though.

Also, the display technology is interesting. XREAL uses what they call a birdbath optical system — triangular semi-transparent mirrors placed right where the eye is — but inmo XR uses a different method. Some mysterious technique delivers an image in an ultra-thin form factor. How to describe it... it's like a mirror embedded in a lens just a few millimeters thick, and you can see the image from the side... (sorry for the lack of vocabulary).

Since it's Android, an input method equivalent to a mouse was needed. inmo XR provides a touchpad-like device and a ring-like device you wear on a finger (which also acts like a touchpad).

## Weaknesses of current wearable devices

Separately, I also recognized some problems common to inmo XR and other devices.

Like most high-function XR glasses, they're ultimately heavy, and I personally can't tolerate wearing them daily. There are pared-down options like Even G1/G2, but devices that display Full HD or have built-in Android tend to be heavy and cause eye fatigue.
Also, with my vision at about 0.7, I need insert lenses. Some say "just use contact lenses," but putting foreign objects in your eyes every day is scary... Still, maybe humans will have to adapt to machines and tolerate some discomfort, haha.

From a developer's perspective, high-performance devices are great, but for everyday use they end up tiring.

That said, I think this will improve fairly quickly. Technology will get smaller over time.

## What to build

I thought about what to make, but since this was a one-day, hackathon-style effort, I ignored the inmo XR's biggest strengths — Android and device APIs. Instead I focused on two points: the screen's high transparency that makes it usable like a HUD, and the fact that there are no cables running from the ears, which increases situations where it can be used.

What recently bothered me with XREAL was... oh right.

So I made an AI app that helps with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The concept is simple. Tell it what you have at home or what you want to make, and the AI generates a "recipe.json" (lol), and the system follows that. inmo XR tends to make black areas transparent for better or worse (XREAL is similar but less so), so I built the app to take advantage of that.

A while back, a prototype at a usable-product level might have taken at least a week to build, but using LLM coding tools (like Cursor), I made it in a day — maybe even half a day.

What people need now is the skill to monitor the AI: watching whether it's behaving plausibly, whether it will complete the task, and if corrections are needed, deciding when to interrupt and make fixes.

https://xr-ai-recipe-assistant.vercel.app/

I put this together quickly, so give it a try (I'm paying for LLM costs myself, so I may shut it down if I can't afford it).

## What I adjusted

Since XR text can be a bit hard to read, I made the buttons huge. They look ridiculous on a PC, but in XR they're about right.

Initially the buttons were dark, but the darker a region is, the more transparent it becomes (same as movie theater projectors), so I made the buttons green so they work in bright environments. Green turned out to be the easiest to see. Maybe there's a reason movie HUDs are green.

I also needed to reduce the number of buttons. The demo has several buttons, but ultimately you should be able to control it with head movements (e.g., nod to go to the next page). You don't want to touch a touchpad with hands covered in raw meat while cooking. So to eliminate buttons in the future, I limited the maximum number of buttons to four and added voice input for text fields.

## Other things I'd like to build

If glasses become extremely capable with a wider field of view, it'd be great if they could recognize real-world objects and render based on their relative positions.

You can already do this with approaches like the Vision Pro that capture imagery with a chip, but lightweight glasses that are easy to wear would likely be more socially acceptable (at least more so than Vision Pro) and cheaper.

## Trying it while cooking

If Ukai is around he'll loan me the inmo XR, but since I don't have one at home, I tried cooking with XREAL and a smartphone instead. The colors changed a lot, and you need cables from the ears to connect to a PC or phone, so practicality is questionable.

> I'll try it the next time I cook and add an update if it works
