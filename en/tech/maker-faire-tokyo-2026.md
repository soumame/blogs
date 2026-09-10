---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I casually submitted my first piece of hardware and ended up getting accepted!?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "50a4d7f7adb3c6d4c71167fba013c4dd20367e3c2dcbdf8e672521cd082000da"
---

> I’m updating the story of how I ended up exhibiting at Maker Faire Tokyo as I go. This is very much a work in progress — I’ll finish it before the event.

# Announcement and Overview of the Exhibit
The details of the exhibit have been published! Come see it!

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                         |
| ------- | --------------------------------------------------------------------------------------- |
| 📛 出店名称 | そうまめの部屋(Soumame's room)                                                                 |
| 📍 場所   | B-07-08                                                                                 |
| 🛒 出展物  | ワイヤレス給電で書き換え可能な電子ペーパー名刺(Wirelessly-rewritable E-paper name badge (card style))          |
| 販売情報    | 1日目、2日目に分けて、電子ペーパー名刺（すぐに使用可能）とソフトウェア（Androidアプリ限定。~~iOSは資金が集まり次第開発~~ (資金が集まったので)近日公開予定） |

---
## Profile

I’m Tokumaru, also known as Soumame, a first-year student at Keio University’s Faculty of Environment and Information Studies! I’ve mostly been doing software development, but recently I got interested in hardware and have been studying a lot!

- Web: [https://tokumaru.work](https://tokumaru.work/)
- X: [@so_toku](https://twitter.com/so_toku)

## Exhibit Details
### Main attraction: E-paper business card sales
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I’ll be showcasing and selling a limited number (**planned 30 units**) of e-paper business cards that run on wireless power and can be rewritten from your smartphone whenever you like!
These are seriously expensive to produce, and it’s been quite a struggle. **We are currently performing operational checks, but if they don’t work reliably, we may have to cancel sales.**

### A hands-on NFC demo
While I’m at it, I’ll also display things you can do with NFC, which I played with this spring and found really interesting.

### Talk about AI-assisted board design and implementation
The aforementioned NFC board was designed and implemented with AI assistance, so I’d like to talk about that too. Using AI to help with software is already commonplace, but using AI for hardware design is becoming easier as well, and I feel the piece I built this time shows how accessible this has become.


---

# Diary
> I’ll write everything here about how this project started and progressed.
## August 11, 2025: It’s so cool that hardware can run on a single board

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I had a great time at DEF CON — heading back to Japan.<br><br>(This is me trying to use the ads-b/ATC receiver I bought from <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> to receive aircraft position information and radio) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’d never actually built hardware before, and I thought people who can do this must live in another realm — that I couldn’t do it.

DEF CON has a BadgeLife culture where people show off their badges at the event. Many badges are based on PCBs and have some functionality — LED-flashing types, ones capable of advanced computation, and even some with screens running Linux.

Maker Faire isn’t as intensely hyped as DEF CON, but there are still a few people like that. Also, Japan has a strong business card culture — people carry business cards almost everywhere, and engineers are no exception.

So I decided not to make a huge badge-sized board this time, but intentionally keep it the size of a business card so you can casually show off your cool board in daily life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and got involved mainly with the software around the Melt Mouse HID device.

I hadn’t had many opportunities to interact with hardware engineers before, so it was a fresh experience. There are some insanely skilled hardware engineers, and even the students working part-time there are proficient with CAD and schematics — they’re amazing. It felt like a team of monster engineers.

Even though I’d never touched hardware, I felt the necessity to understand it. I decided it was worth investing some of my own money to learn, and luckily I was in an environment where I could gain that knowledge — this was the chance.


## April 1: The AI-designed business card worked!? The start of the board creation

However, my lazy streak made me think, “Can’t I just throw all the tedious work to AI?” That laziness was actually part of why I started making software in the first place.

Instead of learning everything the usual way, I thought, why not have AI design the board while I gradually understand it? I showed the KiCad design app screen to Gemini and, with guidance, completed a PCB.

As mentioned, I was interested in making a badge-like item on a board to show off, so I decided to make a business card PCB and add a display to it.

I then thought, if that display were e-paper, I wouldn’t need to worry about battery drain, and I could rewrite the content whenever I liked.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is the moment I explained it to Gemini and it taught me. For some reason it started complimenting me a lot halfway through. Maybe it’s an educator’s mindset that uses praise to encourage learning.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I asked an LLM for guidance and maybe created the ultimate business card? (AI PCB design)<br>Will it actually work... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

As a result, I at least completed an MVP that can be rewritten (though it still feels barely like an MVP).

Of course it didn’t work perfectly — it’s basically at the level where you write data via NFC and the e-paper updates.


## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized this fumi is the fumi from [[en/works/keio|Keio SFC]]...!? I can’t believe someone like that is in the same school. Amazing.

My motivation for the business card board went up.


## April 22: I applied just in case

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn’t sure whether it was okay to exhibit a half-finished business card, but I thought setting a goal and working toward it was good, so I applied.


## May 28: Seriously!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it was accepted. My motivation spiked by about five times, but university got really busy, so I couldn’t work much...


## May 31: Starting to drift
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which incorporates fixes up to V2 and is the closest to the current prototype.

The idea is to harvest power from NFC to drive the circuit and rewrite the E-ink (e-paper) display wirelessly. Being batteryless allows for thinness, making this configuration ideal for devices like business cards. Using power generated by NFC to drive the circuit and update the E-ink display wirelessly enables a batteryless, thin form factor suitable for business-card devices.

When I actually built it, I could update the screen, but even working with AI I ran into a problem: insufficient power capacity.

That forced a redesign of the circuit, and I had to investigate from scratch how power capacity and energy storage work in NFC-powered systems, which involved a lot of trial and error.


## August 16: V4 ordered

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn’t work, it’ll be really bad, but I ordered it anyway. I significantly increased the number of capacitors and reselected footprints.
I used AI again to automatically pick suitable footprints based on LCSC (JLCPCB) stock lists and then automatically run simulations based on those footprints.

No amount of simulation guarantees hardware will work, so I can’t be sure it’ll function, but reliability should be improved compared to before.

Also, during development I disassembled an ezsign e-paper card to study how it works.

ezsign’s existing product:

https://amzn.asia/d/04zeppW6

If it had writable memory I could embed a URL and have it scanned, which would have been perfect... but oh well.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)
This thing is pretty amazing — you can write to it using apps available in the app store.

Hold it to a reader for about 20 seconds and it rewrites like this.
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I disassembled it to check the antenna shape and how much storage capacity it has.

At first I didn’t fully understand the concept of energy storage, but through this I learned a bit.

I realized their design was much more efficient than mine. They have dedicated chips and sometimes use a method of continuously receiving power and communicating rather than storing energy. It’s impressive.


## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)
When I flashed firmware onto the delivered boards and held a phone to them, they worked. More than happy, I felt relieved. If this hadn’t worked, selling functioning devices at Maker Faire would have been very difficult.


## August 23: App development

Since it worked, I decided to make an app. I had built web apps before, but never handled NFC, so this was a new challenge.

However, by having AI do the coding, it was manageable to some extent. Modern AI is at a level where I sometimes wonder if humans are even necessary. I knew what frameworks were available, so I instructed the AI to build it in a certain way and had it do so.

There was one issue: on iOS you can’t use NFC for development purposes unless you join the Apple Developer Program and pay $99, which is an absurd restriction. So I abandoned iOS for now and the app will likely be Android-only for sales.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)
Development wasn’t that hard overall, but there were a few important experiential takeaways. Making the NFC business card easy to rewrite and tuning the display quality balance were important.

If you try to improve display quality, you might have to hold the NFC steady for about a minute. With faster settings it still takes about 15 seconds. Commercial products also take about 15 seconds, so that’s acceptable.

However, because writing requires holding the device steadily for around 15 seconds, the software needs robust error handling. After tweaking a lot, it became stable enough and I felt confident about selling them.
## August 25: The banner

From past Maker Faires I observed that unpaid exhibitor spaces can look pretty sparse. Even tables and chairs aren’t supplied unless you pay, so I thought about how to decorate my space cheaply.

I found that making one huge banner was more attention-grabbing and cost-effective than printing flyers. Bringing my own table and other items (I have a car) was cheaper too.

When the ordered banner arrived today... lol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It’s huge. Too huge.
It’s fire-retardant and at the maximum allowed size for the event, but still... lol

My Illustrator license had expired (the Adobe tax is too high), so I made it in PowerPoint, and PowerPoint can apparently make these rainbow-style letters. No wonder PowerPoint slides are often tacky.

Just to be clear, I don’t actually like this design for my product. I prioritized visibility, not aesthetics. I’m not choosing this because I prefer it.


## August 26: Ordering production V1

Even though things were looking hopeful, I found a few improvements to make. There were no screw holes, so I couldn’t make a cover with a 3D printer or attach a strap to wear it around the neck.

After considering shape changes, I added four screw holes, a strap hole for wearing it around the neck, and extra GPIO pins so purchasers can program their own firmware.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
AI did all of this for me, which is amazing. I chose black for the color.

### Forced to change footprints

When I tried to order, I got an error: the parts used in the previous successful prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire, this was bad news.

Since I was asking JLCPCB to assemble the parts, I either had to wait for restocking or find replacements. I selected alternative parts with somewhat lower performance (less memory) but still sufficient to operate, and ordered them.

As a result, the order was delayed and I wasn’t sure it would arrive by MFT.


## August 28: Customs paperwork
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me, “You got a suspicious letter from China,” and handed it over.

Inside it said I had to pay ¥5,500. Is this a scam? Turns out it was just the bill for the e-paper I ordered.

When I previously ordered e-paper it took over a month via China Post, so I used FedEx this time, but they still charged ¥5,500...

I’ve already sunk over ¥150,000 into this project, so finances are tight. Even if I sold all 30 units at ¥5,000 each at Maker Faire, I might not break even.

But if you exclude the learning costs, the cost of the actual product might not be so large. It’s fine — ¥150,000 should be recouped quickly in the future. (But right now I have about ¥300,000 in total assets, so I’m quietly freaking out inside.)

Even though I say I let AI do everything, I still need to understand what the AI says to some extent (and try to understand it), clarify things I don’t know, and give instructions.

I didn’t learn how to design schematics from scratch, but by deciding the hardware I wanted to build and making everything myself (mostly with AI), including the software, and releasing it for others to use, I can hold the whole process in my hands. Considering that it cost only ¥150,000, it might be insanely cheap.


## August 29: Worried it won’t arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
The prototype arrived in four days last time, so I thought it would be fine, but due to parts and color choices this time it’s taking longer. Still, it should arrive in a week, right...?

I keep checking JLCPCB’s order status every two hours, but it’s stuck on "manufacturing data finished." Maybe because today is Saturday, manufacturing starts Monday? Worst-case, the boards might arrive after MFT. That would be bad.

...but there’s not much I can do. Rushing them probably won’t help.


## August 30: Don’t leave things to the last minute
### I ended up nudging them

Last night I said "nudging won’t speed things up," but I decided to nudge them anyway.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a)
It probably didn’t do much, but some human- or LLM-like response came back,
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
and an estimated schedule started showing up.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
But PCB assembly is scheduled for September 2. I need to receive them by around September 4 (the day before), so that’s tight... (Reality sink-in panic increases.)

### The banner

To make matters worse, I hadn’t actually applied the fire-retardant option to the banner I ordered (I thought I had, but the setting probably got cleared — my mistake), so I had to reorder. I considered just using flyers, but the banner seemed comparatively cheaper, so I reordered. My house already has a huge banner without fire-retardant treatment, and my family told me not to bring more junk home. I don’t know what to do with the non-fire-retardant one...


## September 5: Day 1 finished!

I was so busy I hadn’t updated this. Up until the 4th I was dealing with logistics and assembling the delivered business card boards. (So yes — they arrived and I assembled them.)


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">#MFTokyo2026 Day 1 finished! Many people stopped by and saw it! I want to write so much more here!<br><br>It’s become possible for software people to productize things like this using AI... actually, it became possible this morning. (GPT-6 Astra)<br>Human work may be about showing and letting people hold what we make and communicating around it. <a href="https://t.co/eO8R892Y0I">pic.twitter.com/eO8R892Y0I</a></p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I wrote that on X, but the character limit is brutal so I’ll write it here.

Day 1 finished! Many people came to see it! I want to share so many things I can’t fit in that post. It’s now possible for software people to productize things like this using AI — in fact, it became possible this morning. (GPT-6 Astra)

I feel that human work might be about showing what you’ve made, letting people hold it, and communicating. Hardware makes this easier than software, so it’s been an amazing experience, and I want to be able to understand what AI produces and hold the reins of that creation.

By the way, sales went reasonably well. I expected none or only a few acquaintances to buy them, but many different people purchased them.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I bought Soumame’s NFC business card <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Apparently you can rewrite e-paper with the tiny power from NFC electromagnetic induction — it rewrites with just that little bit! <a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’m super happy people shared these online!

Also, this was my first time selling hardware, so I was extremely nervous. What if the hardware or firmware breaks? I’ve tested a lot, but unlike software you can’t just replace things easily.

I work part-time at [[melt-interface-technologies | Melt Interface Technologies]] (a sponsor of Maker Faire), and from a software engineer’s perspective you gain insights you wouldn’t normally see. If something breaks, you can fix it, but once you sell it you can’t easily replace it — recovery takes a lot of cost.

I was shocked: do people really sell things in this world!? At the same time, it’s incredibly rewarding to see people use something you made.

Honestly, I set the sale price at ¥5,000 per unit and I personally feel that’s very expensive. There’s no legal guarantee like consumer warranty here, but it’s under my name — if it breaks, that’s a problem and anyone who paid ¥5,000 might feel cheated. It’s a heavy responsibility.

That said, the price includes development and research costs, and I’ll probably still be in the red at that price... I plan to sell all the units I’ve produced at Maker Faire.

However, if you think about the encounters and experiences, it might actually be hugely profitable in a non-monetary sense. I’ll do my best again tomorrow.