---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I somehow submitted the first hardware I made and ended up getting accepted!?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "50a4d7f7adb3c6d4c71167fba013c4dd20367e3c2dcbdf8e672521cd082000da"
---

> I'm updating the story of how I came to exhibit at Maker Faire Tokyo as I go. This is very much a work in progress, so I'll finish it before the event.

# Announcement and Overview of the Exhibit
The details of the exhibit have been published! Come see it!

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                         |
| ------- | --------------------------------------------------------------------------------------- |
| 📛 出店名称 | Soumame's room                                                                 |
| 📍 場所   | B-07-08                                                                                 |
| 🛒 出展物  | Wirelessly-rewritable E-paper name badge (card style)          |
| 販売情報    | Split across Day 1 and Day 2: E-paper name badges (ready to use) and software (Android app only. ~~iOS will be developed once funding is raised~~ (funding was raised) to be released soon) |

---
## Profile

I'm Tokumaru (nicknamed Soumame), a first-year student in the Faculty of Environment and Information Studies at Keio University! I've been doing software development for a long time, but recently I've gotten interested in hardware and have been studying a lot of things!

- Web: [https://tokumaru.work](https://tokumaru.work/)
- X: [@so_toku](https://twitter.com/so_toku)

## Exhibit Details
### Highlight: E-paper name badge sales
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I’ll be showing and selling a limited number (planned: **30 units**) of E-paper name badges that operate using wireless power and can be rewritten from your smartphone anytime!
This thing is seriously expensive to make, and it's been quite a struggle. **We are currently doing functionality checks; if they don't work, we may have to abandon selling them.**

### An exhibit to play with NFC
Since it's a perfect opportunity, I'll also exhibit things you can do with NFC that I played with around this spring and found interesting.

### Talk about implementing the board with AI
Also, the aforementioned NFC board was designed and implemented with AI assistance, so I hope to talk about that as well. AI is already common when writing software, but it's becoming increasingly easy to use AI even in hardware design, and I feel that the piece I made this time is something anyone could create.


---

# Diary
> I'll write everything here about why I started this project.
## August 11, 2025: Hardware that runs on a single board is so cool

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DEFCON楽しかったぞ〜ってことで日本に帰ります。<br><br>(これは <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> で買ったads-b/ATC(航空機の位置情報や、無線)を受信するやつを、使おうとしている様子) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I had never made hardware before, and I thought people who can do this must live in some celestial realm—I couldn't do it.

DEF CON has a culture called BadgeLife where people show off a bunch of badges they hang on themselves at the event. Many badges are board-based and have some function: some blink LEDs, some can do advanced computations (some even run Linux and have screens).

Maker Faire isn't as intense as that, but there are still a few people like that. Also, Japan has a strong business card culture—business people carry cards everywhere. Engineers are the same.

So instead of making a giant badge, I decided to make it intentionally small—card-sized—so people could display a cool board in everyday life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and was mainly involved with the software for the Melt Mouse HID device.

Until then I had few opportunities to interact with hardware people, so it was a fresh experience. There are insanely skilled hardware engineers, and even the students working part-time with them are proficient with CAD and schematics. It's like a group of monstrous engineers.

Even though I hadn't touched hardware before, I felt the need to understand it, and since I was in an environment where I could learn, I decided this was my chance—even if it meant spending some of my own money to learn.


## April 1: The AI-designed name card worked!? The start of board creation

However, being lazy, I thought, “Can I just throw all the tedious work at AI?” That laziness was actually part of why I started making software in the first place.

Learning normally is fine, but I thought it might be better to have AI design the board while I gradually learn. I showed Gemini the KiCad screen and finished a single PCB with its help.

As mentioned, I was interested in making badges or business-card-like boards to show off myself, so I decided to make a name-card PCB and put a display on it.

I also thought that if I used an e-paper display, I wouldn't have to worry about battery life, and the content could be rewritten whenever I wanted.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is the session where I told Gemini about that and it taught me. For some reason it started praising me a lot halfway through. Maybe it has an educator-like mindset of lifting people up with praise.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">LLMに指示を仰いだらなんか最強の名刺ができたかもしれない？（AI基板設計）<br>果たして動くのか... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

As a result, I managed to complete an MVP that can at least be rewritten (though it barely feels like an MVP).

Of course it doesn't work perfectly—it’s at the level of “I wrote data to NFC and the e-paper updated!”


## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized this fumi person is the fumi from [[en/works/keio|Keio SFC]]...!? I didn't know someone like that was on the same campus. Amazing.

My motivation for the card PCB rose.


## April 22: I applied for it anyway.

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn't sure if it was okay to submit a half-finished card, but I thought setting a goal and working toward it would be good, so I applied.


## May 28: Seriously!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it got accepted. My motivation increased about fivefold, but I was so busy with university that I couldn't work on it at all...


## May 31: Starting to drift
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, incorporating the fixes I wanted up to V2, and it's the closest to the current prototype.

The idea is to harvest power from NFC to drive the circuit and rewrite the E-ink (e-paper) display non-contact. Because it runs battery-free, it can be made thin and is ideal for card devices. The NFC-generated power drives the circuit and updates the E-ink display contactlessly. Because it operates battery-free, thinness is possible, making it optimal for devices like business cards.

When I actually built it, it could update the screen correctly, but even while consulting with AI, I ran into a problem of insufficient power capacity.

I had to reexamine the circuit design and investigate from scratch how power capacity and energy storage work in NFC power reception, and I went through a lot of trial and error.


## August 16: V4 ordered

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn't work, it would be really bad, but I ordered it anyway. I significantly increased the number of capacitors and reselected footprints. I again used AI to automatically choose suitable footprints based on LCSC (JLCPCB) stock lists and automatically performed simulations based on those footprints.

Hardware sometimes doesn't work no matter how much you simulate, so I can't be sure it will definitely work, but reliability should be improved compared to before.

Also, to make this, I disassembled an ezsign e-paper card to investigate how it works.

Existing ezsign product:

https://amzn.asia/d/04zeppW6

If it had writable memory areas, I could have embedded a URL and made it scannable, which would have been perfect... I thought.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)

This is pretty amazing—you can use apps from the app store to write to it.

If you hold it for about 20 seconds it rewrites like this.
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I took it apart and checked the antenna shape and how much storage it has.

I didn't really understand the concept of energy storage at first, but I feel like I learned a bit through this.

I also realized their design is much more efficient than mine. They use dedicated chips or use a method of continuously communicating with received power instead of storing electricity. Amazing.


## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)

I flashed firmware onto the delivered board and it worked when I tapped it. I felt relieved more than happy. If this hadn't worked, selling working units at Maker Faire would have been really tough.


## August 23: App development

Since it worked, I decided to make an app. I had made web apps before but never handled NFC, so this was a new challenge.

However, having AI write code got me most of the way there. Modern AI is at the level where I sometimes feel humans might not be needed. I knew the frameworks to use, so I instructed it to build in a certain way and had it do the work.

One problem is that on iOS you can't use NFC for development unless you join the Apple Developer Program and pay $99—even for development. That nonsensical restriction made me give up on iOS, so the app for sale will likely be Android-only.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)

There weren't many difficult parts in the development, but there were important experience points. Making NFC name-card rewriting easy and balancing display quality were important.

To improve image quality you have to hold the NFC contact for about a minute. Even the faster setting takes around 15 seconds. Commercial products also take about 15 seconds, so that's acceptable.

But because the write process needs a stable ~15 seconds of contact, the software had to handle errors and retries carefully. After fiddling with it, it became stable enough to proceed with sales, so I felt relieved.
## August 25: Banner

I noticed that unpaid exhibit spaces at Maker Faire tend to look pretty sparse. Even tables and chairs aren't provided unless you pay, so I thought about how to decorate the space cheaply.

It turned out making one huge banner draws more attention than printing flyers, and bringing my own table stuff (I have a car) was cheaper.

Today the banner I ordered arrived... lol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It's huge. Too huge.
I set it to the event's maximum allowed size and added flame-retardant treatment.

My Illustrator license had already expired (Adobe tax is too high), so I made it in PowerPoint, and it turns out you can make these rainbow text effects in PowerPoint. No wonder PowerPoint slides tend to look cheesy.

To be clear, I don't like incorporating this kind of design into products. I prioritized visibility over aesthetics here. I'm not choosing this design because I like it.


## August 26: Ordering product V1

Although things were looking promising, I identified some improvements. There were no screw holes, so you couldn't attach a 3D-printed cover or hang it around your neck.

After considering shape changes, I added four screw holes, a strap hole for wearing it around the neck, and extra GPIO pins so customers who buy it can flash their own programs.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
AI did all of this for me again, which is amazing. By the way, I chose black for the color.

### Forced to change footprints

However, when I tried to order, I got an error: the parts used in the previous successful prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire, this was bad.

Since I was asking JLCPCB to assemble the parts, I either had to wait for restocking or find substitutes. I found substitutes with slightly lower performance (less memory) but sufficient to operate, so I selected and ordered those.

As a result, the order was delayed and it became uncertain whether the boards would arrive in time for MFT.


## August 28: Customs paperwork
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me they got a suspicious letter from China, so I picked it up.

Inside it said I had to pay ¥5,500. Is this a scam? Turns out it was just the invoice for the e-paper I ordered.

When I previously ordered e-paper via China Post it took over a month, so I used FedEx this time, but I didn't expect to pay ¥5,500...

So far I've spent over ¥150,000 and I'm in a tight financial spot. At this cost, even if I sold all 30 pieces at ¥5,000 each at Maker Faire, I probably wouldn't break even.

But excluding learning costs, the cost for learning might not be that big. It'll be okay. ¥150,000 will pay back in no time in the future.
(That said, I only have about ¥300,000 in total assets right now, so I'm secretly about to cry.)

Even though I let AI do most of the work, I still need to understand what AI says to some extent, clarify unknowns, and give directions.

I didn't study how to make schematics from scratch, but by deciding what hardware I wanted, building everything (mostly with AI), making it usable by others, and releasing it, I could control the whole process. And if that cost only ¥150,000... maybe that's dirt cheap.


## August 29: Worried it won't arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
The previous order arrived at my home in four days, so I thought this would be fine, but due to the parts and color choices this time, production is taking longer. Still... it should arrive within a week, right?

I've been checking JLCPCB's order screen about every two hours, but it hasn't progressed from “manufacturing data finished.” Maybe because it's Saturday, production won't start until Monday...? Worst case, the boards might arrive after MFT ends. That's bad.

...but there isn't much I can do. Pushing them probably won't help.


## August 30: Cutting it close isn't good
### I ended up pushing them

I said yesterday that pushing wouldn't help, but I tried pushing anyway.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a)
It probably didn't mean much, but I got a human-like (or LLM-like) response and
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
manufacturing time estimates started showing up.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
But PCB assembly is scheduled for September 2. I need to receive things by around September 4 (the day before), so it's pretty tight. Reality sank in and my panic doubled.

### Banner

To make matters worse, I realized I hadn't enabled flame-retardant treatment on the banner I bought (I thought I had, but the setting seems to have been lost—my mistake). I had to order it again. I considered using flyers, but the banner still seemed cheaper in comparison, so I ordered another. My family told me not to bring more junk into the house since I already have a huge non-fireproof banner. What should I do with the non-fireproof one...


## September 5: Day 1 finished!

I was so busy I couldn't continue writing. Basically until the 4th I was dealing with logistics and assembling the delivered name-card boards (meaning they arrived and I assembled them successfully).


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://x.com/hashtag/MFTokyo2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFTokyo2026</a> Day 1 finished! A lot of people came to see it! I want to write so many things I can't fit here!<br><br>Software people can now pretty well use AI to turn ideas into products like this... actually, I was able to do it this morning. <br>Human work is to show what we make and engage with people <a href="https://t.co/eO8R892Y0I">pic.twitter.com/eO8R892Y0I</a></p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I couldn't write everything in X because of character limits, so I'll write it here.

Day 1 finished! A lot of people came to see it! I want to write so many things I can't fit here! Software people can now pretty well use AI to turn ideas into products like this... actually, I was able to do it this morning. (GPT-6 Astra)

I think human work is about showing what we make, letting people touch it, and communicating. Hardware makes these interactions even easier than software, so it's been a tremendously fun experience. I want to be able to understand what AI produces and hold the reins.

By the way, sales went reasonably well. Honestly, I thought maybe none would sell or only a few acquaintances would buy them, but various people purchased units.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I bought Soumame's NFC business card <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">They say you can rewrite e-paper with only the tiny induced power from NFC—so it changes with just a little power! <a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I'm so happy people posted about it online!

Because this is my first time selling hardware, I'm nervous. What if the hardware or firmware breaks...? I've tested many times, but unlike software you can't just replace it easily.

I work part-time at Melt Interface Technologies (a Maker Faire sponsor), and being a software engineer gives me a perspective you can't get otherwise. If something breaks, you can fix it, but you can't easily replace something once it's sold; recovering from that takes a huge cost.

I wondered how people sell things in this world, but it's incredibly rewarding to have something tangible that people use.

To be honest, I set the selling price at ¥5,000 per unit, which I think is quite high. Of course there's no legal warranty for things sold at this kind of event, but I'm putting my name on the product, so if it breaks, it's a problem. People who paid ¥5,000 might feel cheated. It's a heavy responsibility.

That said, the price includes development and research expenses, and I'm probably still at a loss... At Maker Faire, I'll sell all finished units.

However, considering the encounters and experience, it might be hugely profitable in non-monetary terms. I'll do my best tomorrow as well.

