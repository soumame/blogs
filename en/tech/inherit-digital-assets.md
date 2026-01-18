---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I store my information across various platforms, and I think it's a shame for those accounts to become frozen and inaccessible after I die, so I'm considering measures to pass those assets on to posterity."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
At the time of writing this I'm 19, so from an average life expectancy perspective I still have a long life ahead of me.
However, that's a probabilistic thing — it's not impossible to die at any time.

In many cases, older people do "end-of-life planning" or write an "ending note" to indicate what they want done after they die, which smooths things out later. But young people usually don't do such things, and I don't feel like doing it either. If I survive into the future, the contents of an ending note will probably keep changing, and updating it every year sounds like a bother. Honestly, I feel like I'd just forget.

On top of that, most of my assets are in the digital realm. In a world where everything is going digital, I think many people are in the same situation.
In my case, what I've written, my connections with people, money, and my creations are all stored digitally, which is another hassle. If I die, accessing any of these will be extremely difficult.

## Share passwords?
The reason it's so hard is that to access these things you need to clear passwords, two-factor authentication, and everything else. I thought maybe I could write them down on paper and leave them somewhere, but I use a lot of services and the number will only increase, so that's difficult.

Also, passwords are getting more complex to prevent brute-force attacks.

So I'm migrating everything — passwords, two-factor details, and the like — to [1Password](https://1password.com) so I can manage all of these procedures on the same platform.

Entrusting them to a single platform raises concerns like “what if the service collapses...?”, which isn't entirely unfounded, but it seems more likely that I'd simply forget my passwords and lose access than that the platform would fail, so I use it.

This way, to access all my accounts you only need the 1Password master password and the secret key combination. If those two things leak, it's game over, but conversely, if you guard those two things, you're fine. To allow heirs to access these assets after my death, I need some way to notify them of those two pieces of information.

## How do you convey access methods?
Up to this point I hit a wall: how do I communicate this to others? There are services that send emails, but if those services shut down, it's meaningless. Sure, the same applies to 1Password, but these delivery services must be not only reliable in everyday use but also guaranteed to work after death, so you need to trust them a lot. Google has an account deactivation tool, but Google has a habit of burying little-used or unprofitable services, so it's not very reliable ()

Leaving a piece of paper at home might never be found. What if you moved, or the house burned down? When you start considering all the risks, it never ends.

While wondering what to do, I found an article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name suggests, is one in which the state stores a will you have created.
> If you die, it notifies your legal heirs that a will exists. In this country, it can be regarded as an API that most reliably and accurately detects your death as a trigger and delivers the message called a will.

The article explains how to use a government system to store this information. That's amazing.

The approach is to have the government store a will that contains the secret key, the URL for access, email, username, and so on, and have heirs recall a password so they can access it.

If you have no heirs there's nothing you can do, but among the options I can think of now, this might be the most reasonable.

The biggest advantage is that it's valid as long as the government doesn't cease to exist. Of course, if the facility storing the wills is destroyed or the state is overthrown and everything is lost, that's another story, but since it's the government, it seems more trustworthy than leaving things with a private service. Detecting and notifying of death is hard, but this should be able to do that reliably. As the article says, it must not misfire in cases like thinking someone is alive when they're dead or vice versa.

> Actually, if you search you'll find several digital end-of-life services. However, many of them use periodic PING emails, and the lack of a reply is used as a trigger. That means temporary injuries or illnesses can cause false triggers. There must be no false positives (thinking someone is dead when they're alive) or false negatives (thinking someone is alive when they're dead); when someone dies, it should _trigger immediately and exactly once_.

With that in mind, this system might be really good.

## Trying it out in practice

Anyway, it doesn't cost much (you can do it by paying only ¥3,900), so I plan to actually try it — but school is busy right now so I don't have time. I'll report back when I actually do it sometime in the future.