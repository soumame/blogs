---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I entrust my information to various platforms, and it seems a shame that access to them would be lost and frozen after I die, so I consider measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
I'm 19 as I write this, so from the perspective of average life expectancy I still have a long life ahead. But that's a probabilistic story — it's not impossible that I could die at any time.

In many cases, older people do things like "end-of-life planning" or keeping an "ending note"; by expressing what they want after they die, things go more smoothly for those left behind. But young people rarely do that, and I don't feel like doing it either. If I survive going forward, the contents of an ending note will probably continue to change, and updating it every year would just be a hassle. Honestly, I feel like I'd forget.

On top of that, most of my assets exist in the digital realm. In a world that’s moving everything digital, I think there are many people in the same situation. For me, things I've written down, relationships with people, money, and works I've created are all stored digitally, which makes this even more troublesome. If I were to die, accessing these would be extremely difficult.

## Share passwords?
The reason it's so difficult is that to access these you have to clear passwords, two-factor authentication, and so on. I thought maybe I could write them down on paper and leave them, but I use many services and that number will only grow, so that's difficult.

Also, passwords are getting more complex to prevent brute-force attacks.

So I've been moving everything to [1Password](https://1password.com) so that passwords, two-factor auth, and all related procedures can be handled on the same platform.

Entrusting everything to one platform does raise concerns like "what if the service collapses...", but the probability that I would simply lose access because I forgot the password seems higher, so I'm using it.

This means that to access all accounts, you only need the 1Password password and the Secret Key combination. If those two leak, it's game over, but conversely, if you guard those two, you're fine. To allow access to these assets after my death, I need some way to notify my family about those two.

## How to convey access methods

Having thought this far, I got stuck on how to convey this to others. There are mail delivery services, but if those services shut down they're meaningless. Sure, you could say the same about 1Password, but such delivery services not only are ones you don't normally use, they must work reliably after your death, so you need to use somewhere you can really trust. Google has an inactive account manager too, but Google has a habit of burying unused or unprofitable services, so it's untrustworthy ()

Even if you leave a paper at home, it's questionable whether it'll be found. What if you moved, or it burned in a fire? Once you start considering various risks there's no end.

Hmm, what should I do... and then I found an article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name suggests, is a system where the state keeps the will you create.
> If I die, it notifies statutory heirs and others that a will exists. In this country, it can be regarded as the most reliable and accurate API to trigger the discovery of one’s death and deliver the message that is a will.

The article explained how to use a government system to store this. That's amazing.

The method is to have the will store the Secret Key, the URL to access it, email, usernames, and so on, and for relatives to recall the password so they can access it.

If you have no relatives there's nothing you can do, but it might be the most rational thing available now. The biggest point is that it's valid as long as the government doesn't cease to exist. If the facility storing wills were destroyed or the state were overthrown and everything disappeared, that's another story, but since the counterpart is the state, it seems more trustworthy than entrusting it to a private service. Detecting that someone died and notifying others is difficult, but with this system it should be reliably detectable. As the article says, it must not fail to act as expected in cases like thinking someone was alive when they were dead or vice versa.

> Actually, if you search you can find several digital end-of-life services for this purpose. However, many of them are triggered by the absence of a reply to periodic PING emails. That means there are false negatives triggered by temporary injuries or illness. There must be no false positives (thinking alive when dead) or false negatives (thinking dead when alive), and when someone dies, it should "_fire immediately exactly once_."

Thinking about that, this system seems really good.

## Actually trying it

So, it doesn't cost much (you can do it by paying just 3,900 yen), so I plan to actually do it... but school is busy and I don't have time, so I'll report back when I actually do it sometime.