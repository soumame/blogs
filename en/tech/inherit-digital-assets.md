---
description: I entrust my information to various platforms, and I thought it would be a waste for those accesses to be frozen after I die, so I'm thinking about measures to pass those assets on to future generations.
emoji: 🤝
isDraft: true
isTranslated: true
published_at: 2026-01-10T00:00:00.000Z
sourceHash: 295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788
sourcePath: ja/tech/inherit-digital-assets.md
tags:
  - dev
title: Inheritance of Digital Assets
---

## What to do if I die?

I’m 19 as I write this, so by average life expectancy I still have a long life ahead. But that’s a probabilistic matter — it wouldn’t be strange to die at any time.

In many cases, older people do “end-of-life planning” or keep an “ending note” to state their wishes after death, which makes things smoother. Young people rarely do that, and I don’t feel motivated either. If I keep living, the contents of an ending note would keep changing, and updating it every year would be a pain. Honestly, I feel like I’d just forget.

Moreover, most of my assets exist in the digital space. In a world where everything is becoming digital, I think many people are in the same situation. For me, what I’ve written, my relationships, money, and creations are all stored digitally, so it’s also troublesome. If I die, accessing these will be extremely difficult.

## Share passwords?

The reason it’s so difficult is that to access these you must clear passwords and two-factor authentication for everything. I thought maybe I could write them down on paper and leave them, but I use so many services and they’ll only keep increasing, so that’s hard.

Also, passwords are getting more complex to prevent brute-force attacks.

So I’m moving everything to [1Password](https://1password.com) so I can manage passwords and two-factor authentication procedures on a single platform.

Putting everything on one platform raises concerns like “what if the service collapses...”, and those concerns aren’t zero. Still, it seems more likely I’d lose access because I forget passwords, so I use it.

This means that to access all accounts you’d only need the 1Password password and the Secret Key. If those two leak, it’s over, but conversely, if you safeguard them, you’re fine. To allow someone to access these assets after my death, I need to notify my relatives of these two by some method.

## How to convey the access method

Having thought that far, I got stuck on how to tell others. There are mail delivery services, but they are useless if the service ends. Sure, one could say the same about 1Password, but these delivery services not only aren’t used regularly, they must reliably operate after death, so you can’t use them unless you really trust the provider. There’s also Google’s Inactive Account Manager, but Google tends to bury unused or unprofitable services, so it’s not very trustworthy.

Leaving a paper at home is suspect — will it be found? What if you move, or it burns in a fire? Once you start considering the risks there’s no end.

I wondered what to do, and then I found an article

<https://blog.jxck.io/entries/2025-07-25/digital-regacy.html>

> This system, as the name suggests, is one in which the state stores wills you create.
> If you die, it notifies statutory heirs that a will exists. In this country it can be regarded as an API that most reliably and accurately triggers on one’s death and delivers the message that is the will.

The article explained how to use the national system to store this. That’s amazing.

The method is to have a will stored that contains the Secret Key, the URL for access, email, username, etc., and let the heirs remember the password so they can access it.

If there are no heirs, there’s nothing you can do, but it may be the most reasonable option available.

The biggest advantage is that it’s valid as long as the government doesn’t shut down. If the facility storing wills is destroyed or the state is overthrown and everything lost, that’s a different story, but since it’s the government, it seems more trustworthy than a private service. Detecting and notifying of death is hard, but this should be able to do that reliably. As the article also says, there must be no cases where it doesn’t work as expected — like believing someone was alive when they were dead, or vice versa.

> In fact, if you look there are several digital end-of-life services of this kind. However, many are triggered by the absence of a reply to periodic PING emails. That means there’s a risk of false negatives — accidental activation due to a temporary injury or illness. There must be no false positives (thinking someone was alive when they were dead) or false negatives (thinking someone was dead when they were alive); you want it to "_fire immediately and exactly once_" when someone dies.

Thinking like that, this system might be really good.

## Trying it out in practice

So, since it doesn’t cost much (you can do it for just 3,900 yen), I’m going to try it — but I’m busy with school and don’t have the time, so I’ll report back when I actually try it sometime.
