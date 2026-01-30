---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I store my information across various platforms, and I think it would be a shame for access to be lost and for those assets to be frozen after I die, so I'm thinking about measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
When I wrote this I'm 19, so by average-life-expectancy standards I still have a long life ahead. But that's a probabilistic argument — it wouldn't be surprising to die at any time.

In many cases, older people do things like "end-of-life planning" or write an "ending note," and by expressing how they want things handled after death, the aftermath goes more smoothly. But young people usually don't do that, and I don't feel like doing it either. If I survive into the future, the contents of an ending note will probably keep changing, and updating it every year would be nothing but a hassle. Honestly, I feel like I'd forget.

On top of that, most of my assets exist in the digital realm. In a world where everything is going digital, I think a lot of people are in the same situation. For me, what I've written, my connections with people, money, and my creations are all stored digitally, so that's another headache. If I die, accessing these will be exceedingly difficult.

## Share passwords?
The reason it's so difficult is that to access these you need to overcome passwords, two-factor authentication, and so on. I thought maybe I could just write them down on paper, but I use a lot of services and they'll only keep increasing, so that's hard.

Passwords are also getting more complex to prevent brute-force breaches.

So I'm moving everything to [1Password](https://1password.com), letting me handle passwords and two-factor procedures on a single platform.

Putting everything on one platform raises concerns like "what if the service collapses..." — those concerns aren't zero — but at least the probability of losing access because I forgot a password seems higher, so I'm using it.

This way, to access all my accounts you only need the 1Password password and the secret key. Sure, if those two are leaked it's over, but conversely, if you protect those two it's fine. To allow access to these assets after my death, those two items need to be communicated to my relatives somehow.

## How do I convey the access method?
Having thought up to this point, I hit a snag: how do I pass this information to others? There are email-delivery services, but those are meaningless if the service shuts down. Well, you could say the same about 1Password, but these delivery services are not only ones you don't normally use — they also have to be guaranteed to work after your death, so you'd need somewhere you really trust. Google has an account inactivity manager, but Google has a habit of burying unused or unprofitable services, so it's not entirely trustworthy.

Leaving a piece of paper at home is questionable too — will it be found? What if I've moved, or it burned in a house fire? Once you start considering various risks there's no end.

Hmm, what should I do, I wondered, when I found an article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name suggests, is a system where the state keeps the wills you create.
> If you die, it notifies your statutory heirs and others that a will exists. In this country it can be regarded as an API that most reliably and accurately triggers on your death and delivers the message that is your will.

The article described using a government system to store this. That's amazing.

The method is to have the state keep a will that records the secret key, the URL for access, email, username, etc., and have relatives recall the password so they can access it.

If you have no relatives there's nothing you can do, but among the options I can think of now, it might be the most rational. The biggest thing is that it's valid as long as the government doesn't cease to exist. If the facility storing wills is destroyed or the state is overthrown and everything is lost, that's another matter, but since the counterparty is the state, it's likely more reliable than entrusting things to private services. Detecting death and notifying is difficult, but with this system it should be certain. As the article notes, it must not fail to operate as expected in cases like thinking someone is alive when they're dead, or thinking they're dead when they're alive.

> In fact, there are several digital end-of-life services of that kind if you look for them. However, many of them are triggered by a lack of reply to periodic PING emails. That means there's a risk of false negatives triggered by temporary injuries or illness. There must be no false positives (thinking someone was alive when they were dead) or false negatives (thinking someone was dead when they were alive); it should "trigger once immediately and reliably" when someone dies.

Thinking that way, this system might be really good.

## Actually trying it
So, since it doesn't cost much (you can do it for just ¥3,900), I plan to actually try it... but school is busy and I don't have the time right now, so I'll report back when I actually do it.