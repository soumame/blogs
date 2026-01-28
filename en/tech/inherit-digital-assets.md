---
title: "Inheritance of Digital Assets"
emoji: "🤝"
tags:
  - "dev"
published_at: "2026-01-10T00:00:00.000Z"
description: "I store my information across various platforms, and I think it's a waste if access to those assets is lost and they become frozen after I die, so I consider measures to pass those assets on to future generations."
isTranslated: true
isDraft: true
sourcePath: "ja/tech/inherit-digital-assets.md"
sourceHash: "295eb829b5ccf581f159771aa18b5ab9a0f91e8484d28360c092f2eeab990788"
---

## What if I die?
At the time of writing this I am 19 years old, so from the perspective of average life expectancy, I still have a long life ahead of me.
However, that's a probabilistic view — it's not impossible to die at any time.

In many cases, older people do things like "end-of-life planning" or keep an "ending note" to express their wishes for after death, which makes things smoother. But young people usually don't do such things, and I don't feel motivated either. If I survive into the future, the contents of an ending note would likely keep changing, and updating it every year would just be a hassle. Honestly, I feel like I'd forget.

On top of that, most of my assets exist in the digital realm. In a world that moves everything digital, I think there are many people like this. In my case, things I've written, my relationships with people, money, and creations are all stored digitally, which is also a pain. If I die, accessing these will be extremely difficult.

## Share passwords?
The reason it's extremely difficult is that to access these you need to clear passwords and two-factor authentication for everything. I thought maybe I could write them down on paper and leave them somewhere, but I use so many services and the number will likely keep growing, so that's hard.

Also, to prevent brute-force attacks and the like, passwords are becoming more complex.

So I've been migrating everything to [1Password](https://1password.com) so I can manage these passwords and two-factor authentication procedures on a single platform.

By entrusting a single platform, concerns like "what if the service collapses..." aren't zero, but at least it seems more likely that I'll lose access because I forgot the password than because the password manager fails, so I use it.

This way, to access all of my accounts you only need the 1Password password combined with the secret key. If those two are leaked, it's over, but conversely, if you protect those two, you're fine. To allow access to these assets after my death, I need to notify my relatives of these two somehow.

## How to communicate access methods
So, having thought this far, I got stuck on how to convey this to others. There are email delivery services and such, but these are meaningless if the service shuts down. Well, you could say the same about 1Password, but these delivery services not only aren't used regularly, they also need to work reliably after death, so you have to be able to trust them a lot to use them. Google has an inactive account manager, but Google has a habit of burying services that are unused or unprofitable, so they're untrustworthy ( ).

Even if you leave paper at home, it's doubtful it'll be discovered. What if you move, or a fire destroys it? If you start considering various risks, there is no end.

Hmm, what should I do, I wondered, and then I found an article:

https://blog.jxck.io/entries/2025-07-25/digital-regacy.html

> This system, as the name implies, is a mechanism by which the government stores the will you create.
> If you die, it notifies statutory heirs and others that a will exists. In this country, it can be regarded as an API that most reliably and accurately detects your death and delivers the message in the form of a will.

The article explains how to use a government system to store this. That's amazing.

The method is to have a will stored that documents the secret key, the URL to access it, email addresses, username, etc., and then have the relatives recall the password so they can gain access.

If there are no relatives, there's nothing you can do, but this might be the most rational option currently imaginable. The biggest advantage is that it's valid as long as the government doesn't cease to exist. If the facility storing wills were destroyed, or the state were overthrown and everything lost, that's another matter, but since the counterparty is the state, it seems more trustworthy than entrusting it to a private service. Detecting death and notifying others is difficult, but this should reliably do that. As the article says, it must not fail by firing erroneously in cases like "thought to be alive but actually dead" or "thought to be dead but actually alive." It must fire exactly once and immediately when someone dies.

> In fact, there are several digital end-of-life services if you look for them. However, many of them trigger on the absence of a reply to a periodically sent PING email. That means they can be falsely triggered by temporary injuries or illnesses, producing false negatives. There must be no false positives (thinking someone is alive when dead) or false negatives (thinking someone is dead when alive); it should "trigger immediately and exactly once when someone dies."

Thinking that way, this system might be really good.

## Trying it out
So, it doesn't cost that much (you can do it for just ¥3,900), so I plan to actually try it, but I'm busy with school and don't have time, so I'll report back when I actually do it sometime.