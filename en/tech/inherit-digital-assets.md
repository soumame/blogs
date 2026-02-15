---
title: "Digital Asset Inheritance"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I store my information across various platforms, and I think it's a waste for access to be lost and frozen after I die, so I'm thinking about measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
I'm 19 as I write this, so from the perspective of average life expectancy I still have a long life ahead. However, that's a probabilistic statement — it's not impossible for me to die at any time.

In many cases, older people do "end-of-life planning" or keep an "end-of-life note" to indicate their wishes after death, which smooths things over for what comes next. Young people, though, rarely do that, and I don't really feel like doing it either. If I survive going forward, the contents of such a note will keep changing, and updating it every year would just be a hassle. Honestly, I'd probably forget.

On top of that, most of my assets are in the digital space. In a world moving everything digital, I imagine many people are like this. For me, things I've written, my connections with people, money, and creations are all stored digitally, which is another headache. If I die, accessing these will be extremely difficult.

## Share passwords?
The reason it's so difficult is that to access these things you need to clear passwords, two-factor authentication, and so on. I thought maybe I could write them down on paper and leave them somewhere, but I use a lot of services and the number will only grow, so that's hard.

Also, passwords are getting more complex to prevent brute-force attacks.

So I'm migrating everything to [1Password](https://1password.com), so that passwords, two-factor setups, and other procedures can all be handled on the same platform.

Entrusting everything to a single platform raises concerns like "what if the service collapses...", and those concerns aren't zero. But at least it seems more likely that I'd lose access because I've misplaced a password than because the password manager collapsed, so I'm using it.

This means that to access all accounts you only need the 1Password master password and the Secret Key. If those two are leaked, it's over, but conversely if I protect those two I'm fine. To allow access to these assets after my death, I need some way to notify my heirs or relatives of those two pieces of information.

## How do I communicate access methods?
Having thought this far, I got stuck on how to convey this to others. There are email delivery services, but those are meaningless if the service ends. Sure, you could say the same about 1Password, but these delivery services are not only services you don't normally use — they need to reliably operate after your death, so you have to trust them a lot. Google has an account inactivity manager, but Google has a habit of burying unused or unprofitable services, so it's not something I fully trust.

Even leaving a paper at home is iffy — will it be found? What if you've moved, or it burns in a fire? Once you start thinking about the various risks there's no end to it.

While wondering what to do, I found this article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> As the name suggests, this system allows the government to store wills you create.
> If you die, it notifies statutory heirs and the like that a will exists. In this country, it can be seen as the most reliable and accurate API that triggers on your death and delivers a will as a message.

The article explains how to use a government system to store this information. That's amazing.

The method is to have them store a will that lists your Secret Key, URLs for access, email addresses, usernames, and so on, and then have your heirs recall the passwords so they can gain access.

If you have no heirs there's nothing you can do, but this may be the most rational option available right now. The biggest point is that it's valid as long as the government continues to exist. If the facility storing wills is destroyed or the state is overthrown and everything is lost, that's another story, but because it's the government it seems more trustworthy than entrusting a private service. Detecting and notifying that someone has died is difficult, but this should be able to do that reliably. As the article says, it must not fail to operate as expected in cases like thinking someone was alive when they were dead, or vice versa.

> In fact, if you look there are several digital end-of-life services with that purpose. However, many of them trigger on a lapse in replies to periodic PING emails. In other words, there are false triggers caused by temporary injuries or illnesses. There must be neither false positives (e.g., thinking someone is dead when they're actually alive) nor false negatives (e.g., thinking someone is alive when they're actually dead) — when someone dies, you want it to "_fire immediately once and only once_."

## Trying it myself
So, it's not very expensive (you can do it for just ¥3,900), so I plan to actually try it... but school is busy and I don't have time, so I'll report back when I actually do it sometime later.