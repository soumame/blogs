---
title: "The Use of XR Might Be to Use It Like a HUD - Let's Cook with AI"
emoji: "🍳"
tags:
  - "dev"
  - "application-development"
published_at: "2026-01-12T00:00:00.000Z"
description: "I borrowed an inmo XR — XR glasses running Android — from Ukai, known from Mitou Junior, and did a little hackathon. After wondering how to use it, I ended up building a cooking assistant to enjoy with an AI. Here I introduce trying to cook with an AI using XR glasses."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/cooking-with-ai.md"
sourceHash: "0f82af75953f6a92b59d96a44ab58b72e53c6e15277b036aa38839e8e8ac24d8"
---

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Today I made a teleprompter app for the Inmo Air 3 — an Android-running pair of glasses I bought in Shenzhen from <a href="https://twitter.com/inmoxreality?ref_src=twsrc%5Etfw">@inmoxreality</a> — that can stylishly display Google Slides speaker notes. It's fun and seems immediately practical. (In reality it's floating in the air with AR glasses and looks insanely cool, but it's tough because there's no way to show that.) <a href="https://t.co/lEd14WBgBW">pic.twitter.com/lEd14WBgBW</a></p>&mdash; Yu Ukai (@ukkaripon) <a href="https://twitter.com/ukkaripon/status/2010702060107464846?ref_src=twsrc%5Etfw">January 12, 2026</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Today I tried out an inmo XR — XR glasses running Android — that Ukai from Mitou Junior had, and thought up products that might be useful with it

## Exploring the Potential of inmo XR

I also have lenses called [XREAL One](http://xreal.com) and wondered if it could do the same things. Basically I only use XREAL like a mobile monitor, so to be honest I didn't feel much need to make apps specifically for it — creating a dedicated UI or looking for APIs is a hassle.

But actually trying it out, being cable-free and standalone is a huge advantage, and as a developer it opens up many possibilities, so I felt these kinds of devices will increase in the future.
XREAL's approach aside, it's extremely thin and less conspicuous (though there's still some oddness), and judging by the thinness and performance of the glasses themselves, I wondered if it might be an upgrade over [Even Realities](https://www.evenrealities.com/).

(For Even G1, I recommend the introduction by electrical_cat:)
https://note.com/electrical_cat/n/ncbff77528ada

I don't know if inmo XR is the best (I've only compared it to XREAL), but it felt like it's reached a level that's practically usable. When running heavy tasks it heats up around the ears to an abnormal degree, and as is common with Chinese devices, the Play Store couldn't be used and related services were unavailable. There might be some way to get around that...

The display is interesting as well. XREAL uses a birdbath optical system? — using a triangular mirror (a semi-transparent mirror) placed right near where the eye would be to deliver images — but inmo XR uses a different method: some mysterious technology delivers images while being ultra-thin. How to put it... a mirror seems embedded inside a few-millimeter-thick eyeglass lens... you can see images projected from the side... (I lack the vocabulary)

Since it's Android, an operation method equivalent to a mouse was needed. As a result, inmo XR has a touchpad-like device and a ring-shaped device you wear on a finger (which is probably also a touchpad).

## Weaknesses of Current Wearable Devices

Separately, I recognized problems common to inmo XR and other devices.

As with most high-function XR glasses, they're all heavy in the end, and at least I can't stand wearing them daily. There are devices like Even G1/G2 that strip down features, but those that do things like full HD display or have Android built-in tend to be heavy and cause eye fatigue.

Also, with my vision around 0.7, insert lenses are necessary. You could say "just use contact lenses", but it's scary to put something foreign into your eye with your own hands every day... Still, maybe people need to endure things like that to adapt to machines, lol.

So from a developer's perspective, I prefer higher-performance devices like these, but using them daily ends up being exhausting.

But I feel these issues will probably be resolved relatively soon. As time goes on, they'll become smaller... I hope.

## What to Build

So I thought about what to build, but since the plan was to put something together in one day (hackathon-style), I ignored inmo XR's biggest strengths — running Android and having device APIs. Instead, I focused on its high screen transparency that makes it usable like a HUD, and the fact that it's not tethered by cables from your ears, which increases usable scenarios.

A recent annoyance with XREAL was... ah, right

So I made an AI app that helps with cooking.
[![Image from Gyazo](https://i.gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5.png)](https://gyazo.com/ef4a0c47ca44dd5ad8b1e029500458d5)
_(Illustration by Gemini)_

The concept is simple. You say what you have at home or what you want to make, and the AI creates a 'recipe.json' (lol), and the system follows it.

inmo XR has the characteristic, for better or worse, that black becomes transparent (XREAL is similar but this is even more transparent), so I made use of that.

In the past, something at a usable product level (not just a prototype) would've taken at least a week, but using LLM coding apps like Cursor, you can do it in a day — no, half a day.

What people currently need is the skill to oversee the AI, to judge whether it's likely to work, whether it'll complete successfully, to watch the AI's behavior and decide if corrections are needed, and if so, when to interrupt and make those corrections.

https://xr-ai-recipe-assistant.vercel.app/

I threw this together, so try it out (I'm paying for LLM usage, so I may shut it down if it gets too costly).

## Improvements

Text on XR is a bit hard to read, so I made the buttons huge as hell. On a PC they look ridiculously large, but surprisingly they're just right on XR.

Also, originally the buttons were dark, but the darker something is the more transparent it becomes (like a movie theater projector), so I changed the button color to green so it can be used in bright environments. That's the most visible. Maybe there's a reason movie HUDs are green.

Furthermore, it was necessary to reduce buttons. The demo has a few buttons, but ultimately control should be via head movements (like nodding to go to the next page). You don't want to touch a touchpad with hands covered in raw meat while cooking. So, to eliminate buttons in the future, I limited the maximum number of buttons to four and added voice input for text fields.

## Other Things I Want to Build

If the glasses' performance were extremely good and the field of view wider, I'd like them to recognize real-world objects and draw based on their spatial relationships.

You can already do this with approaches like Vision Pro that use a chip to capture video, but being able to use a lightweight, glasses-like form factor would likely be more socially acceptable (at least more than Vision Pro) and cheaper.

## Using It in Actual Cooking

If Ukai were around he'd lend me the inmo XR, but since I don't have one at home I tried cooking using XREAL and my phone instead. However, colors change quite a bit, and you have to attach a cable from your ear to a PC or phone, so its practicality is questionable.

> I'll try using it next time I cook and add an update if it seems workable