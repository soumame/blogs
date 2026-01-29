---
title: "Maybe the use of XR is to use it like a HUD - Let's cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I got to try an Android-equipped XR headset called inmo XR that Ukai brought, and after a hackathon-style session I ended up building a cooking assistant you can enjoy with an AI. Here I introduce the experiment of cooking with AI using XR glasses."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Today I made a teleprompter app that stylishly displays Google Slides speaker notes for the Inmo Air 3 — the Android-powered glasses I bought in Shenzhen from <a href="https://twitter.com/inmoxreality?ref_src=twsrc%5Etfw">@inmoxreality</a>. It's fun and seems immediately practical. (In reality it's floating in mid-air with AR glasses and looks insanely cool, but it's frustrating that there's no way to show this.) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I got to try the inmo XR — an Android-equipped XR glasses unit that Ukai, known from the Mitou Junior program, had — and I spent some time thinking about products that might be useful with it.

## Exploring inmo XR's potential

I also own the [XREAL One](http://xreal.com) lenses and wondered if it could do the same kinds of things. Basically I only use XREAL like a mobile monitor, so to be honest I hadn't really felt the need to make apps specifically for it. Making a dedicated UI or hunting for APIs is just a hassle.

However, after actually trying inmo XR, the fact that it's cable-free and standalone is a huge advantage. From a developer perspective it opens up many possibilities, so I felt devices like this will become more common. Unlike XREAL's approach, it's extremely thin and unobtrusive (though it still feels a bit odd), and judging by the thinness and performance of the glasses alone, I wondered if it might be an upper-level alternative to [Even Realities](https://www.evenrealities.com/).

(If you want an introduction to the Even G1, I recommend the piece by 電電猫猫:)

https://note.com/electrical_cat/n/ncbff77528ada

I don't know if inmo XR is the best overall (I've only compared it to XREAL), but it feels like it's reached a level that's at least usable in practice. There were issues like heavy heat generation around the ears under heavy load, and the usual China-device quirks like not being able to use the Play Store and related services. Maybe there's some way to work around that.

The display itself is interesting: XREAL uses something like a birdbath optical system — a triangular semi-reflective mirror placed right where the eye would be — but inmo XR uses a different method: a mysterious technology that allows an ultra-thin design to deliver imagery to the eye. How to describe it... it's like a mirror embedded within a very thin lens a few millimeters thick, and you can see the image coming in from the side... (I lack the vocabulary).

Since it's Android, it required some mouse-like control. As a result, inmo XR has a touchpad-like device and a ring-shaped device you wear on a finger (which also seems to act like a touchpad).

## Weaknesses of current wearable devices

Separately, I also recognized problems common to inmo XR and other devices.

Most high-function XR glasses are heavy, and at least for me, they're unbearable to wear daily. There are pared-down devices like the Even G1/G2, but full-HD displays or built-in Android tend to make devices heavy and tiring to the eyes.

Also, with a vision of about 0.7, I need insert lenses. Some say, "Why not use contact lenses?" but the idea of putting a foreign object in my eye every day with my hands is scary... Still, maybe humans will just have to adapt to machines and endure such discomforts, haha.

From a developer perspective, I want powerful devices like these, but in everyday use they end up being exhausting.

I do think these issues will be solved fairly quickly. As technology progresses, they'll get smaller.

## What to build

So what should I build? Since it was a one-day, quick hackathon-style project, I ignored inmo XR's greatest strengths — the Android runtime and device APIs. Instead I focused on its high screen transparency, which makes it usable like a HUD, and the fact that it's cable-free and therefore usable in more scenarios.

Recently, one problem with XREAL is... oh right.

So I built an AI app to help with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The concept is simple. Tell it what you have at home or what you want to make, and the AI creates a "recipe.json" (lol), and the system acts according to that. With inmo XR, for better or worse, black becomes transparent (XREAL is similar but this is even more transparent), so I designed the UI to take advantage of that.

Previously, something at a usable product level (not just a prototype) might have taken at least a week to build, but using LLM-powered coding tools like Cursor, it can be done in a day — or even half a day.

What people currently need is the skill to supervise the AI: to watch whether it seems to be working, whether it will succeed to the end, and to decide if and when to interrupt and correct it.

https://xr-ai-recipe-assistant.vercel.app/

I threw this together, so try it out (I'm paying for the LLM costs, so I might shut it down if it becomes too expensive).

## What I tweaked

Text can be a bit hard to read on XR, so I made the buttons huge. They look comically large on a PC, but they're just right on XR.

Also, initially the buttons were dark, but the darker they are the more transparent they become (same as a movie theater projector), so I made the button color green so it works well in bright environments. That makes them the most visible. Maybe there's a reason movie HUDs are green.

I also needed to reduce the number of buttons. The demo has several buttons, but ultimately control should be possible with head movements (e.g., nodding to go to the next page). You don't want to touch a touchpad with hands covered in raw meat while cooking. So to eliminate buttons in the future, I limited the maximum number of buttons to four and added voice input for text fields.

## Other things I want to build

If the glasses' performance were excellent and the field of view wider, it'd be nice if they could recognize real objects and render UI based on their spatial relationships.

You can already do this with approaches like the Vision Pro, which use a dedicated chip to capture video, but lightweight glasses that are as easy to use as normal specs would likely be more socially acceptable (at least more than Vision Pro) and cheaper.

## Trying it in actual cooking

If Ukai is around he'll lend me the inmo XR, but since I don't have one at home, I tried cooking using XREAL and my phone instead. However, colors change a lot, you need cables from the ear, and you must connect to a PC or phone, so the practicality is marginal.

> I'll try it next time I cook and add updates if it seems to work well.
