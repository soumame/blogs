---
title: Inheritance of Digital Assets
emoji: 🤝
tags:
  - dev
published_at: 2026-01-10T00:00:00.000Z
description: I entrust my information to various platforms, and I think it's a waste for those assets to become inaccessible and frozen after my death, so I'm considering measures to pass those assets on to posterity.
isTranslated: true
sourcePath: ja/tech/inherit-digital-assets.md
sourceHash: fff09ad591d9555c9be442146eaf258e804c2ebfc0474aef7b524264a35a158a
---

## What if I die?
At the time of writing this I'm 19, so from an average-lifespan perspective I still have a long life ahead.

However, that's a probabilistic matter — it's not impossible that I could die at any time.

In many cases, older people do "end-of-life planning" or keep an "end-of-life note," and by expressing their wishes for after death things proceed more smoothly. But young people usually don't do such things, and I myself don't feel like doing it. After all, if I keep living my preferences in an end-of-life note will continue to change, and updating it every year would just be a hassle. Or rather, I feel like I'd forget.

On top of that, most of my assets exist in the digital space. In a world where everything is going digital, I think many people are in a similar situation.

For me, what I've written, my connections with people, money, and my creations are all stored digitally, which is also a pain. If I die, accessing these will be extremely difficult.

## Sharing passwords?
The reason it's so difficult is that to access these things you have to get past passwords, two-factor authentication, and so on. I thought maybe I could write them down on paper and leave them somewhere, but I use many services and they'll only increase, so that's hard.

Also, passwords have become complex to prevent brute-force breaks.

So, I'm moving everything — passwords, two-factor authentication details, and procedures — onto the same platform by using [1Password](https://1password.com).

Putting everything on a single platform raises the concern of "what if the service collapses..." but while that's not zero risk, it seems more likely that I'll simply lose the passwords and be unable to access things, so I use it.

This way, to access all accounts you only need the 1Password password and the Secret Key. Sure, if those two get leaked it's game over, but conversely if you protect those two you're fine. And to allow access to those assets after my death, I need to notify my relatives of those two pieces of information somehow.

## How do you communicate access methods?

Up to this point I was stuck on how to convey this to others. There are email delivery services and such, but those are meaningless if the service shuts down. Well, that applies to 1Password too, but delivery services are things you don't use regularly and that must work reliably after death, so you can't use them unless they're extremely trustworthy. Google has an account inactivity tool, but Google has a habit of burying unused or unprofitable services, so it's not trustworthy ().

Leaving a paper at home is also dubious — will it be found? What if you've moved or the house burned down? Once you start considering the various risks there's no end.

Hmm, I was wondering what to do when I found this article

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name implies, is a system in which the government stores the will you created.
> If you die, it notifies statutory heirs and others that a will exists. In this country, it can be regarded as an API that most reliably and accurately detects one's death and delivers the message in the form of a will.

The article explained how to use a government system to store this. That's amazing.

The method is to have the will store the Secret Key, the URL and email/username needed to access things, and then have the heirs recall the password so they can gain access.

If you have no heirs there's nothing you can do, but this may be the most rational option available now.

The biggest advantage is that it's effective as long as the government doesn't cease to exist. If the facility storing wills were destroyed or the state were overthrown and everything lost, that's another story, but because the counterpart is the government it seems more trustworthy than entrusting things to a private service. Detecting death and notifying people is difficult, but this should reliably do that. As the article says, there must not be cases where it fails to act as expected, such as thinking someone was alive when they were actually dead, or thinking someone was dead when they were actually alive.

> Actually, if you look for digital end-of-life services you can find a few. However, many are triggered by the absence of replies to periodic PING emails. In other words, temporary injury or illness can trigger false activations. There must be no false positives (thinking they were alive when they were actually dead) or false negatives (thinking they were dead when they were actually alive), and it should "_fire once immediately and reliably_" when you die.

Thinking about it that way, this system might be really good.

## Actually trying it

So, it doesn't cost much (you can do it for just ¥3,900), so I plan to actually try it... but I'm busy with school and don't have time, so I'll report back when I actually do it sometime.