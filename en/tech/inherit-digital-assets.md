---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I entrust my information to various platforms, and I think it's a waste if access to them is lost and they get frozen after I die, so I consider measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
I was 19 when I wrote this, so in terms of average life expectancy I still have a long life ahead. But that's a probabilistic argument — it's not impossible to die at any time.

In many cases, older people do end-of-life planning or keep an "ending note" to indicate their wishes after death, which smooths things over. But young people rarely do such things, and I don't feel like doing it either. If I survive, the contents of an ending note would keep changing, and updating it every year would be nothing but a hassle. Honestly, I feel like I'd just forget.

On top of that, most of my assets are in the digital realm. In a world where everything is being digitized, I think quite a few people are like this. For me, notes I've left behind, connections with people, money, and works I've created are all stored digitally, which is another pain. If I die, accessing these will be extremely difficult.

## Share passwords?
The reason it's so difficult is that to access these you have to clear passwords and two-factor authentication. You might think to write them down on paper and leave them somewhere, but I use many services and that number will only keep growing, so it's difficult.

Passwords are also made complex to prevent brute-force attacks.

So I'm migrating everything to [1Password](https://1password.com) so that I can manage all those passwords and two-factor authentication procedures on a single platform.

Entrusting everything to one platform carries concerns like "what if the service collapses...", and those concerns aren't zero. But it seems more likely that I'd simply forget passwords and lose access, so I'm using it.

This way, to access all my accounts you only need the 1Password master password and the secret key. If those two leak, it's game over, but conversely, if you protect just those two, you're fine. To allow access to these assets after my death, I need to notify my family of those two in some way.

## How to convey access methods
Having thought that far, I got stuck on how to tell others. There are email delivery services, but they're useless if the service shuts down. Well, that applies to 1Password too, but these delivery services are things you don't use regularly and they must work reliably after death, so you have to trust them a lot to use them. Google has an account inactivity manager, but Google has a habit of burying unused or unprofitable services, so it's not trustworthy ()

Even leaving a paper at home is uncertain — will it be found? What if I moved, or it burned in a fire? Once you start considering various risks there's no end.

While thinking about what to do, I found an article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name suggests, is a system where the state keeps the wills you create.
> If I die, it will notify statutory heirs and others that a will exists. In this country, it can be regarded as an API that most reliably and accurately triggers on one's death and delivers the message that is the will.

The article explained how to use a government system to store this. That's amazing.

The method is to have the will store the secret key and the URL, email, username, etc. needed to access, and have the heirs recall the password so they can get access.

If there are no heirs there's nothing to be done, but among the options currently conceivable it might be the most rational. The biggest point is that it's valid as long as the government doesn't terminate. If the facility storing wills were destroyed or the state toppled and everything vanished, that's another story, but since it's the government, it seems more trustworthy than entrusting it to a private service. Detecting and notifying of death is difficult, but this should reliably make it known. As the article says, it must not misbehave in cases like thinking someone was alive when they were dead or thinking someone was dead when they were alive.

> In fact, there are several digital end-of-life services if you look. However, many are triggered by a failure to reply to periodic PING emails. In other words, there are false negatives caused by temporary injuries or illnesses. We don't want false positives (thinking they were alive when they were dead) nor false negatives (thinking they were dead when they were alive); we want it to "_fire once and only once immediately upon death_."

With that in mind, this system might be very good.

## Trying it out
So, since it doesn't cost much (you can do it for just ¥3,900), I plan to try it... but I'm busy with school and don't have the time, so I'll report back when I actually do it.