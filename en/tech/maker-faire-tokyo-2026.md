---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I casually submitted the first hardware I made and ended up getting accepted!? A software-background person exhibited at Maker Faire Tokyo."
isTranslated: true
isDraft: false
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "66e6be0a606018e97a192104b76aae4bb0ed69ec109bc4afa75e163535a62e57"
---

# Exhibition Overview

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                |
| ------- | ------------------------------------------------------------------------------ |
| 📛 出店名称 | そうまめの部屋(Soumame's room)                                                        |
| 📍 場所   | B-07-08                                                                        |
| 🛒 出展物  | ワイヤレス給電で書き換え可能な電子ペーパー名刺(Wirelessly-rewritable E-paper name badge (card style)) |
| 販売情報    | 1日目、2日目に分けて、電子ペーパー名刺（すぐに使用可能）とソフトウェア                                           |

## Exhibition Details
### Highlight: E-paper name badges for sale
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I’m introducing e-paper name badges that operate via wireless power and can be rewritten from your smartphone whenever you like, and I’ll be selling a limited quantity (planned: 30 units)! These are really expensive to produce, and I’ve had quite a hard time. At the moment I’m still performing operational checks, but if they don’t work, I may have to give up on selling them.

### NFC play area
Since I’ve been playing around with NFC this spring and found it interesting, I’ll also exhibit some NFC-related demos showing what you can do with it.

### Talk about AI and the PCB implementation
The NFC PCB I mentioned earlier was something I implemented with AI, so I’d like to talk about that as well. I already use AI as a matter of course when writing software, and hardware design tools are getting easier to use too—what I built this time feels like something anyone could make now.


---

# Diary
> I’ll record everything about how this project started here.
## August 11, 2025: Hardware that runs on a single PCB looks so cool

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DEFCON楽しかったぞ〜ってことで日本に帰ります。<br><br>(これは <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> で買ったads-b/ATC(航空機の位置情報や、無線)を受信するやつを、使おうとしている様子) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’d never actually made hardware before, and I thought people who can do this must live in another world—I couldn’t do it.

DEF CON has a culture called BadgeLife where people parade around the event with all kinds of badges. Many badges are PCB-based and have features—some flash LEDs, others can do fairly advanced computations (some even have displays running Linux).

Maker Faire isn’t as feverish as that, but there are people like that here too, albeit fewer. Also, Japan has a strong business card culture—businesspeople basically carry business cards everywhere, and engineers are no exception.

So this time I decided not to make a big badge but to intentionally keep it small, card-sized like a business card, and make a kit that lets you show off a cool PCB in everyday life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and became involved mainly with the software for Melt Mouse, an HID device.

I’d had few opportunities to interact with hardware folks before, so it felt very fresh. There are insanely skilled hardware engineers and students working part-time who are fluent with CAD and schematics—it’s like a team of monster engineers.

Even though I’d never touched hardware, I realized I needed to understand it, so I decided it was worth spending some money to learn and that being in an environment where I could easily gain knowledge was a great opportunity.


## April 1: The AI-designed name card worked!? The start of PCB creation

But I’m lazy by nature and thought, “Can I dump all the tedious work on AI?” That laziness hasn’t gone away—the reason I started making software was partly due to that same laziness.

Learning normally would be fine, but I thought maybe I could have AI design the PCB while I gradually learned. I showed Gemini the KiCad design UI and completed a PCB with its help.

As mentioned earlier, I was interested in making a badge or business-card-like PCB to show off yourself, so I decided to make a business-card PCB and put a display on it.

Then I thought, if the display is e-paper, there’s no battery worry and you can rewrite the content anytime.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is the moment when I told Gemini about it and it taught me. For some reason it started praising me a lot midway. Is it an educator that grows people through praise?


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">LLMに指示を仰いだらなんか最強の名刺ができたかもしれない？（AI基板設計）<br>果たして動くのか... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

The result: I at least completed something that can be rewritten—an MVP... (though it hardly feels like one).

Of course it doesn’t work perfectly—basically, write data via NFC and the e-paper updates. That’s the level it’s at.


## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized that this fumi is the fumi from [[en/works/keio|Keio SFC]]...!? I can’t believe someone like that is on the same campus... amazing.

My motivation for the PCB business card skyrocketed.


## April 22: I applied anyway.

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn’t sure if they’d accept a half-finished card, but I thought having a goal and working toward it would be good, so I applied.


## May 28: No way!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it was accepted. My motivation multiplied by about five, but I was too busy with university to make progress...


## May 31: Losing my way
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which includes fixes up to V2 and is closest to the current prototype.

The idea is to harvest power received via NFC, run the circuit, and update the e-paper screen. It’s contactless and battery-free, so it can be thin—perfect for a business-card-like device.

When I actually made it, I could update the screen. However, even consulting with AI, a power shortage problem emerged.

So I reviewed the circuit. I had to re-investigate how much power NFC can supply and how to store it, which led to a lot of trial and error.


## August 16: Ordered V4

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn’t work, it’ll be really bad, but I ordered anyway. I significantly increased the number of capacitors and reselected footprints. I again used AI to automatically choose suitable footprints from LCSC (JLCPCB) stock lists and had it run simulations.

No amount of simulation guarantees hardware will work, so I’m not sure it’ll definitely run, but reliability should be better than before.

I also tore apart an ezsign e-paper card to study how it works.

Existing ezsign product:

https://amzn.asia/d/04zeppW6

I thought if it had a writable memory region for a URL, it would be perfect, but oh well...

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)

This is pretty amazing—you can write to it using an app from the app store.

If you hold it for about 20 seconds, it rewrites like this.
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I disassembled it to check antenna shape and how much charge storage it had.

I didn’t fully understand “storage” at first, but I think I learned a bit through this.

I also discovered their design was far more efficient than mine. They used dedicated chips and sometimes rely on continuously received power to communicate rather than storing charge. Incredible.


## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)

I flashed firmware onto the delivered boards and when I held a phone over one, it worked. I felt relieved more than happy. If this hadn’t worked, selling working units at Maker Faire would have been really difficult.


## August 23: App development

Since it worked, I decided to make an app. I’d built web apps before but never handled NFC, so this was a new challenge.

By having AI write much of the code, I managed to get a long way. Modern AI is at a level where I sometimes feel humans might not be needed; since I knew what frameworks existed, I instructed the AI on the approach and had it implement it.

One problem: on iOS you can’t use NFC for development unless you enroll in the Apple Developer Program and pay $99—even for development—which is a baffling restriction. So I had to give up on Apple initially, and the app I planned to sell was going to be Android only.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)

There weren’t many hard parts, but a few UX aspects mattered. Balancing image quality and write time was important. If you want high image quality, you have to hold the phone over it for about a minute; on the faster setting it still takes around 15 seconds. Commercial products take about 15 seconds too, so that’s acceptable.

However, because writing requires holding the phone steadily for about 15 seconds, the software needed robust error handling. After tweaking a lot, it stabilized enough to make sales feasible.


## August 25: Banner

I’d noticed in past years that free booth spaces at Maker Faire look pretty bare—tables and chairs aren’t provided without additional fees—so I thought about how to decorate the space cheaply.

In the end I found a huge banner stands out more than printing flyers, and bringing my own table and chairs was cheaper (I have a car). Today the ordered banner arrived... lol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It’s massive. Too massive.

I made it to the event’s maximum allowed size and with fireproofing. My Adobe Illustrator license had expired (Adobe tax is too high), so I made the design in PowerPoint, and PowerPoint can make these rainbow-style letters—no wonder PowerPoint slides tend to look tacky.

For the record, I don’t like incorporating this kind of design into a product. This was purely to attract attention; I’m not choosing it out of preference.


## August 26: Ordered production V1

Although things looked promising, there were still improvements to be made. There were no screw holes for 3D-printed covers or a strap hole to wear it around the neck.

After considering shape changes, I added four screw holes, a strap hole for wearing around the neck, and extra GPIO pins so purchasers could flash their own programs.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
AI did all of this for me, which is amazing. I chose black for the color.

### Forced footprint changes

But when I tried to order, there was an error: parts used in the working prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire—that’s rough.

Since I asked JLCPCB to assemble parts, I either had to wait for restocking or find substitutes. I found alternative parts with slightly lower specs (less memory) but likely sufficient, so I chose those and ordered.

As a result, the order was delayed and I worried whether it would arrive by MFT.


## August 28: Customs paperwork
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me there was a suspicious letter from China and handed it to me.

Inside it said I had to pay ¥5,500. Is this a scam? It turned out to be a customs fee for the e-paper I’d ordered.

Previously, China Post took over a month, so I chose FedEx and assumed it would be faster, but they still charged ¥5,500...

So far I’d spent over ¥150,000 and money was tight. At this cost, even selling all 30 units for ¥5,000 each at Maker Faire might not cover costs.

Still, if you exclude the learning costs, the expense for learning might not be that large. It’s fine—¥150,000 will be paid back quickly in the future. (Though at the moment I only have about ¥300,000 total, so I was internally freaking out.)

Even though I told AI to do everything, I still need to understand what AI says to some extent, double-check things I don’t understand, and give instructions.

I didn’t learn how to make schematics from scratch, but by deciding the hardware I wanted to build and making everything myself (mostly with AI), including the software, I could create something people can use and release it to the world—at only ¥150,000, which might be insanely cheap if you think about it that way.


## August 29: Worrying whether it will arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
The last batch arrived in 4 days previously, so I thought there was time, but due to the parts and color I ordered, production might take longer. Surely it’ll arrive in a week... right?

I kept checking the JLCPCB order status every two hours, but it stalled at “manufacturing data finished.” Maybe because it was Saturday, production would start Monday? Worst case, the boards would arrive after MFT. That would be bad.

There wasn’t much I could do—hurrying probably wouldn’t help.


## August 30: Don’t push deadlines too close
### I ended up pushing anyway
I said yesterday that pushing wouldn’t help, but I tried pushing anyway.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a)
It probably didn’t do anything, but I got a human-like (or LLM-like) response,
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
and an estimated delivery time appeared.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
However, PCB assembly was scheduled for September 2. I needed to receive it by around September 4 (the day before), so that was tight and my panic doubled.

### Banner
To make matters worse, the banner I previously bought hadn’t been given fireproofing (I thought I had set it but it seems the setting got lost), so I had to reorder. I thought flyers might be fine, but compared costs and the banner seemed cheaper, so I ordered again. My family told me not to fill the house with more junk since the non-fireproof giant banner was already at home. What should I do with the unprotected one...


## September 5: Day 1 complete!

I’d been so busy I hadn’t finished writing. It was finally MFT day. Up until the 4th I worked on the logic and assembled the delivered name card boards (so they arrived and I could assemble them).

[![Image from Gyazo](https://i.gyazo.com/3b3a335539975fab86c3b1f2258ffcc4.JPG)](https://gyazo.com/3b3a335539975fab86c3b1f2258ffcc4)
Assembly looked like this: attach the e-paper to the delivered boards, flash firmware, and it’s done!


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://x.com/hashtag/MFTokyo2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFTokyo2026</a> 1日目終了！ということで、たくさんのかたに見てもらえました！ここに書ききれないくらいいろいろ話したい！<br><br>ソフトウェアの人でもいい感じにAIを使ってこういったプロダクトに落とせる時代になってきた...というか、今朝できるようになりましたね。<br>人間の仕事は、こうしたところで自分の作ったものを見せて、手に取ってもらって、コミュニケーションを取っていくことなのかなーと勝手に思っています。ハードウェアってソフトウェア以上にこういうことがやりやすいから、めちゃめちゃ楽しい経験だし、AIが作ったものを理解して、ちゃんと手綱を握れるようになりたいなと思った。</p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I wrote that on X, but the character limit was brutal so I’ll write more here.

Day 1 finished! A lot of people saw it and I want to share so many stories I can’t fit here. It’s finally an era where software folks can use AI and turn ideas into products... or rather, it became possible this morning. (GPT-6 Astra)

I think the human job is to show what you make, have people hold it, and communicate. Hardware makes this easier than software, so it was an amazing experience. I want to understand what AI produces and be able to hold the reins properly.

By the way, sales went reasonably well. I honestly thought maybe none would sell or just a few friends would buy them, but many people bought them.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">そうまめさんのNFC名刺を購入 <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">NFCの電磁誘導のわずかな電力だけで電子ペーパーを書き換えられるらしい、そんなちょろっとで書き換えられるんだ！<a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’m really happy people posted about it online.

Selling hardware for the first time made me nervous—what if the hardware or firmware breaks? I tested a lot, but unlike software, you can’t just replace a unit easily. If something’s broken after selling it, returning it is costly.

I work part-time at [[melt-interface-technologies | Melt Interface Technologies]] (a Maker Faire sponsor), and being involved in hardware revealed things you don’t see as a pure software engineer. Once sold, items aren’t easy to replace or fix, and shipping them back costs a lot.

Still, selling something tangible and having people use it is incredibly rewarding.

Honestly, selling at ¥5,000 per unit feels really expensive from my perspective. There’s no legal warranty for items sold at events, but I’m selling them under my name—if something breaks, it’s a problem and buyers might feel cheated. That’s a heavy responsibility.

However, the price includes development and research costs, and I probably still lose money. At Maker Faire, I planned to sell all produced units.

But in terms of human encounters and experiences, it might be massively profitable. I’ll keep doing my best tomorrow.

[![Image from Gyazo](https://i.gyazo.com/9172d2fefb7dc938956b8972b892757e.JPG)](https://gyazo.com/9172d2d2fefb7dc938956b8972b892757e)


## September 6: Day 2, after Maker Faire

[![Image from Gyazo](https://i.gyazo.com/56d150efa4f05326bc56f89c2dd15a39.JPG)](https://gyazo.com/56d150efa4f05326bc56f89c2dd15a39)
### iOS app
I originally thought iPhone owners wouldn’t buy and I could give up on iOS, but surprisingly someone who paid ¥5,000 wanted iOS support, so I felt I had to make it. I had some funds from my part-time job to register as a developer (though at 19 my credit card limit delayed the payment). Even though I’d be in the red, sales covered part of development costs, so I managed to prepare.

Coincidentally, GPT-6 Astra was released by OpenAI on the 5th, and “Swift and the release procedures are tedious” was no longer a valid excuse.

I tried building with Vibe and within about 30 minutes had an app almost equivalent to Android’s. It even fixed Android bugs. Amazing.

Then I submitted to TestFlight—once approved, I could distribute a beta to purchasers.

> Edit: it was released

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">【Maker Faireで名刺基板を購入されたかたへ】<br>ご購入いただいた皆様のおかげで、iOS版を作ってTestFlightで公開できました！フォーム記入後に表示されるリンクからダウンロードしていただけます！<a href="https://t.co/SG3Hi27NEH">https://t.co/SG3Hi27NEH</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2097843944776458598?ref_src=twsrc%5Etfw">September 10, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

### Repository setup
Also, this project started as a quick experiment, but having a core group of a dozen or so users who were eagerly waiting made me want to clean up the repo properly. There are things to fix and improve, and attendees gave feedback—for example, stability, especially NFC, could be improved. A person who sounded like an NFC expert gave advice (I only understood about half), which was impressive. Maker Faire really brings all kinds of people.

Selling items brings responsibility and can deepen connections with people—someone won’t spend ¥5,000 on a device from a random person unless they trust you. That level of trust is meaningful.

[![Image from Gyazo](https://i.gyazo.com/74c314fd75813155ed979189a934bcc2.png)](https://gyazo.com/74c314fd75813155ed979189a934bcc2)


## September 12: Reflection
Exhibiting at Maker Faire was an amazing experience.

I’ve been a software engineer for a long time, but this time I exhibited something “made by AI,” sold it, and directly talked with people who tried it. When the exhibit was accepted, I wrestled with doubts: “I didn’t make this from zero, am I just taking credit?”

But actually exhibiting, I had nothing to worry about. No one said, “You didn’t make all of it” or “You don’t understand how it works.” Instead people offered suggestions like, “If you change this it might be better.” Buyers seemed to expect what I’d make next and were supportive. Being accepted like that felt great.

I wouldn’t criticize software engineers who rely heavily on AI—AI is a tool whether for software or hardware. I used AI because it made sense for what I wanted to build, and turning the idea into a tangible product had real meaning.

I also discovered gaps in my knowledge. Talking to the NFC expert made me realize AI outputs alone aren’t enough and I need more foundational knowledge to understand and use AI’s suggestions. Rather than being discouraged, I became more eager to study.

If you only sit in front of a screen as a software engineer, you might not realize what it means to build and sell hardware or how satisfying connecting with people through a physical product can be. Exhibiting helped reveal what I lacked and what I want to do next.

## What I want to say
Anyone can make things now if they have an idea, and that’s why sharing what you make at events like Maker Faire is so important!

Exhibiting taught me a lot and was an invaluable experience.

Honestly, the exhibition and development costs were substantial and I’m in the red financially. Still, people came, touched the product, and I recovered part of the cost, so it was worth it.

Now anyone with an idea can make things. AI can help even with hardware PCB design. You don’t have to hand everything to AI—if you don’t have a teacher nearby, you can learn by interacting with an AI in your language. The barrier of “I don’t have the knowledge or skills” has lowered considerably; if you want to make something, the means to do so are available.

That’s why places like Maker Faire, where you can show & tell what you built and let people handle it, are increasingly important.

I don’t yet have the capacity to run a big event myself, so I participated as an exhibitor this time. Someday I’d like to create opportunities where people can share what they’ve made and inspire others to think, “I want to make something too!”