---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I store my information across various platforms, and I think it would be a waste for access to be lost or frozen after I die. I'm considering measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
When I wrote this I was 19, so from the perspective of average life expectancy I still have a long life ahead. However, that's a probabilistic argument — it's possible to die at any time.

In many cases, older people do end-of-life planning or write an "ending note" to indicate their wishes after death, which makes what follows smoother. But young people rarely do that, and I don't feel motivated either. If I continue to live, the contents of an ending note will keep changing, and updating it every year would just be annoying. Honestly, I feel like I would forget.

On top of that, most of my assets exist in the digital realm. In a world that is pushing everything digital, I think many people are in this situation. For me, things I've written, connections with people, money, and works I've created are all stored digitally, which is a hassle. If I die, accessing these would be extremely difficult.

## Share passwords?
The reason it's so difficult is that to access these you have to clear passwords, two-factor authentication, and all that. I thought maybe I could write them down on paper and leave them somewhere, but I use so many services and that number will only grow, so that's hard.

Also, passwords are made complex to prevent brute-force attacks and the like.

So I'm moving everything to [1Password](https://1password.com) so that I can manage passwords, two-factor auth, and related procedures on one platform.

Putting everything on one platform raises concerns like what happens if the service collapses... but at least the risk of losing access because I can't remember a password seems higher, so I use it.

This way, to access all accounts you only need the 1Password password and the secret key combination. If those two leak it's over, but conversely, if you protect those two you're fine. To allow access to such assets after my death, those two pieces of information need to be conveyed to my relatives by some method.

## How do you convey access methods?

Having thought this far, I got stuck on how to tell others about it. There are email delivery services and such, but those are meaningless if the service shuts down. Sure, you could say the same about 1Password, but such delivery services not only are services you don't use regularly, they must be guaranteed to work after your death, so you can't use them unless you trust them a great deal. Google has an account inactivity manager, but Google has a habit of burying unused or unprofitable services, so they're unreliable (I don't trust them).

Leaving paper at home is also dubious — will it be found? What if I move, or a fire destroys it? Once you start considering the various risks, there is no end.

Hmm, what should I do, I wondered, when I found this article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name implies, is a system in which the state stores wills that have been created. If I die, it notifies statutory heirs and others that a will exists. In this country, it can be regarded as an API that most reliably and accurately triggers on one's death and delivers a message in the form of a will.

The article explained a method of using a government system to store this kind of information. That's pretty amazing.

The approach is to have the will store the secret key, the URL to access things, email addresses, usernames, etc., and have relatives recall the passwords so they can gain access.

If you have no heirs there's nothing you can do, but among the options I can think of now, this might be the most rational. The biggest advantage is that it's valid as long as the government doesn't cease to exist. If the facility storing wills is destroyed or the state is overthrown and everything disappears, that's another story, but since the counterparty is the government, it seems more trustworthy than entrusting things to a private service. Detecting death and sending notifications is difficult, but this should be able to do that reliably. As the article says, you can't have it misfire — you can't have false positives (thinking someone is dead when they're alive) or false negatives (thinking someone is alive when they're dead). It must "fire exactly once and immediately" when someone dies.

> In fact, there are a few digital end-of-life services you can find if you look. However, many of them trigger on the absence of replies to periodic PING emails. In other words, they have false negatives triggered by temporary injuries or illnesses. There must be no false positives (thinking someone is dead when they're alive) or false negatives (thinking someone is alive when they're dead); it should "fire exactly once and immediately" when someone dies.

When you think about it that way, this system seems really good.

## Trying it out

So, it doesn't cost much (you can do it for just 3,900 yen), so I plan to actually try it — but I'm busy with school and don't have the time right now, so I'll report back when I actually do it.