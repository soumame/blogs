---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I casually presented hardware I made with Vibe and ended up getting accepted!? I exhibited a batteryless e-paper NFC circuit-board business card made by a software person at Maker Faire Tokyo."
isTranslated: true
isDraft: false
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "ecc5f1cc0250b0a0002b1df27334d51804df5593d121093815b5f83d02893bd7"
---

# Exhibition Overview

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                |
| ------- | ------------------------------------------------------------------------------ |
| 📛 Booth name | そうまめの部屋 (Soumame's room)                                                        |
| 📍 Location   | B-07-08                                                                        |
| 🛒 Exhibit  | ワイヤレス給電で書き換え可能な電子ペーパー名刺 (Wirelessly-rewritable E-paper name badge (card style)) |
| Sales info    | On Day 1 and Day 2 I split sales between immediately usable e-paper business cards and software                                           |

## Exhibition Details
### Highlight: E-paper business card for sale
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I’m introducing a wirelessly powered e-paper business card that you can rewrite from your phone whenever you like, and I’ll be selling a limited quantity **(planned 30 units)**!
This thing is honestly expensive to produce, and it’s been a real struggle. **We are currently performing operation verification, but if it doesn’t work, we may have to abandon sales.**

### NFC play area
While I’m at it, I plan to exhibit various things you can do with NFC that I explored and found interesting around this spring.

### Talk about AI and board implementation
Also, the aforementioned NFC board is something I implemented with AI, so I’d like to talk about that too. I already use AI as a matter of course when writing software, and it’s getting easier to use for hardware design as well. I feel that things like what I made this time are becoming something anyone can create.


---

# Diary
> I’ll record everything here about how this project started.
## August 11, 2025: I love hardware that runs on a single board

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DEFCON楽しかったぞ〜ってことで日本に帰ります。<br><br>(これは <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> で買ったads-b/ATC(航空機の位置情報や、無線)を受信するやつを、使おうとしている様子) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’d never really built hardware before, and I thought people who can do this must live in another world — I couldn’t do it.

DEF CON has a BadgeLife culture where people flaunt their badges at the event. Many badges are based on circuit boards and have some functionality, from flashy LED blinkers to seriously capable devices (some even have screens and run Linux).

Maker Faire isn’t as intense as that, but there are still a few people like that. Also, Japan has a strong business card culture — most business people carry business cards everywhere. Engineers are the same.

So this time, instead of a large badge-sized thing, I decided to purposely keep it small, business-card sized, and make a kit that lets you show off a cool PCB in daily life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and got involved mainly with software around a HID device called Melt Mouse.

I’d had few chances to interact with hardware people until now, so it was really refreshing. There are insanely skilled hardware engineers, and even the students working part-time there are masters of CAD and schematics — it’s like a team of monster engineers.

Although I hadn’t handled hardware before, I realized I needed to understand it, so I decided to invest some of my own money to learn. Being in an environment where I can easily gain knowledge felt like a great opportunity.


## April 1: The AI-designed business card ran!? The start of board creation

However, my lazy streak made me wonder, “Can I throw all the tedious tasks to AI?” That laziness was part of how I started making software in the first place.

Learning normally is fine, but I thought it might be better to have AI design the board while I gradually understand it. I showed Gemini the KiCad design app screen and finished a PCB myself.

As I mentioned earlier, I was interested in making a badge or business-card-like item that showcases yourself, so I decided to make a business-card PCB and put a display on it.

Moreover, I realized that if I used an e-paper display, there’d be no worry about batteries running out and the content could be rewritten whenever.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is what I sent to Gemini and was taught. For some reason it started praising me a lot halfway through. Maybe it’s an educator who believes in praise to encourage growth.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">LLMに指示を仰いだらなんか最強の名刺ができたかもしれない？（AI基板設計）<br>果たして動くのか... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

As a result, an MVP that can be rewritten (though it hardly feels like a full MVP) was completed.

Of course it doesn’t work perfectly — it’s at the level of “NFC wrote data and the e-paper updated!”


## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized this fumi person is the fumi from [[en/works/keio|Keio SFC]]...!? I’m amazed there’s someone like that at the same university.

My motivation for PCB business cards rose.


## April 22: I applied anyway.

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn’t sure whether a work-in-progress business card would be accepted, but I felt it was good to set a goal and work toward it, so I applied.


## May 28: Seriously!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it was accepted. My motivation multiplied by about five, but I was so busy with university that I couldn’t work much...


## May 31: Getting off track
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which includes fixes up to V2 and is the closest to the current prototype.

The idea is to harvest power received via NFC, run a circuit, and rewrite an e-paper display. It’s rewritable non-contact and batteryless, so it can be thin — perfect for a business-card-like device.

When I actually built it, I could rewrite the screen. However, even while consulting with AI, I ran into a power insufficiency problem.

So I revised the circuit from scratch: how much power can you receive via NFC, and how to store it. I tested a lot and iterated.


## August 16: V4 ordered

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn’t work it’ll be really bad, but I ordered it anyway. I greatly increased the number of capacitors and reselected footprints.
I used AI again to automatically pick suitable footprints from LCSC (JLCPCB) stock lists and ran simulations with them.

No matter how much you simulate, hardware sometimes just won’t work—so I can’t guarantee it will definitely run, but the reliability should be better than before.

I also disassembled an ezsign e-paper card to study how it worked while creating this.

The ezsign product:

https://amzn.asia/d/04zeppW6

If it had a writable memory area I could’ve embedded a URL and made it scannable — that would’ve been perfect, I thought.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)
This is pretty amazing; you can write to it using a regular app from the app store.

Hold it for about 20 seconds and it rewrites like this:
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I disassembled it and checked the antenna shape and how much charge it could store.

I didn’t really understand the concept of energy storage at first, but I think I learned a bit through this.

I found out their design is way more efficient than what I designed. They use dedicated chips or a communication method that continuously uses the received power rather than storing it. Amazing.


## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)
When I flashed firmware onto the delivered board and waved it, it worked. I felt relieved more than happy. If this hadn’t worked, selling working units at Maker Faire would’ve been extremely difficult.


## August 23: App development
Since it worked, I decided to make an app. I’d made apps before, but they were web apps, and I’d never handled NFC in an app, so it was a new challenge.

By having AI write code I managed to get most of it done. Recent AIs are at a level that makes you wonder if humans are even necessary — I knew enough about frameworks to instruct the AI on what approach to use.

There was one problem: on iOS, you can’t use NFC for development without joining the Apple Developer Program and paying $99, which is a baffling restriction. So I gave up on Apple initially, and the app I planned to sell looked like it would be Android-only.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)

There weren’t that many hard parts to building it. Important UX considerations included how easy it is to rewrite the NFC business card board and balancing image quality.
If you try to improve the image quality, you have to hold the NFC for about a minute; even a fast setting takes around 15 seconds. Commercial products also take about 15 seconds, so I thought that was acceptable.
However, because writing requires holding the device steadily for about 15 seconds, the software needed robust error handling. After tweaking plenty, it became stable enough and sales became feasible, which was a relief.

## August 25: Banner
I’d observed that unpaid Maker Faire booths tend to look pretty shabby. Even tables and chairs aren’t provided unless you pay, so I thought about how to decorate a space fairly cheaply.

It turned out printing a huge banner is more eye-catching and cost-effective than flyers. Bringing the rest of the table stuff from home (I have a car) was cheaper.

When the banner I ordered arrived today... lololol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It’s huge. Way too big.
I made it right up to the event’s allowed size and with fire retardant treatment.

My Adobe Illustrator license had already expired (Adobe tax is too high), so I made it in PowerPoint — you can make rainbow-style text easily in PowerPoint. No wonder PowerPoint slides often look tacky.
Let me be clear: I don’t actually like incorporating this sort of design into products. This was purely to get attention. I’m not choosing this design out of preference.


## August 26: Ordered product V1
Although things looked on track, some improvements were needed. There were no screw holes, so you couldn’t add a 3D-printed cover, and you couldn’t hang it around your neck.

After considering shape changes, I added four screw holes, a strap hole to hang from the neck, and extra GPIO pins so buyers can flash their own programs.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
AI did all of this for me, which is truly amazing. I chose black as the color.

### Forced footprint changes
However, when I tried to order, I got an error: the parts used in the previous successful prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire, this is bad.

Since I asked JLCPCB to assemble parts, I either had to wait for restock or find substitutes. I found substitute parts with slightly lower specs (less memory) but that seemed sufficient, so I reordered with them.

As a result, the order was delayed and it became uncertain whether the boards would arrive by MFT.


## August 28: Customs paperwork
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me they received a suspicious letter from China and gave it to me.

Inside it said to pay 5,500 yen. Is it a scam? It turned out to be the invoice for the e-paper order.

Previously, when I ordered e-paper, China Post took over a month, so I used FedEx this time — but they still charged 5,500 yen...

So far I’ve sunk over 150,000 yen and it’s getting really tight financially. At this cost, even if I sold all 30 units at Maker Faire for 5,000 yen each, I probably wouldn’t break even.

That said, if you exclude the learning cost, the direct learning expense might not be that large. It’s fine. 150,000 yen will pay off in the future, I tell myself.
(That said, I currently only have about 300,000 yen in total, so I’m almost in tears inside.)

Even though I wanted AI to do everything, I still need to understand what AI says to some extent, check what I don’t understand, and give instructions.

I didn’t study how to make schematics from scratch, but by deciding the hardware I wanted and making everything including software (mostly via AI), packaging it so others can use it, and releasing it — that whole process is now in my hands. Considering it cost only 150,000 yen, it might actually be a bargain.


## August 29: Too worried about whether it will arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
Last time it arrived at my home in 4 days, so I thought I had margin, but due to the chosen parts and color this time it apparently takes longer. Still... it should arrive within a week, right...?

I kept checking JLCPCB’s order screen every couple of hours, but it wouldn’t move past “manufacturing data finished.” Maybe because it was Saturday, production wouldn’t start until Monday? Worst case, the boards might arrive after MFT ended — that would be bad.

There wasn’t much I could do. Pushing them probably wouldn’t speed things up.


## August 30: Don’t leave things to the last minute
### I ended up hurrying them
I said yesterday that hurrying wouldn’t help, but I still decided to bug them.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a)
It probably didn’t change anything, but I got a human-like (or LLM-like) response and
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
an estimated schedule appeared.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
But PCB assembly was scheduled for September 2. I needed to receive it by around September 4 (the day before), so this was tight and my panic increased.

### The banner
To make matters worse, the banner I bought earlier didn’t have fire retardant treatment applied (I thought I’d applied it, but probably the setting got lost — my mistake), so I had to reorder. At first I thought flyers would be fine, but comparing costs, another banner actually looked cheaper, so I ordered again. My family told me not to bring more junk home since I already had a huge non-fireproof banner. What should I do with the non-fireproof one...


## September 5: Day 1 finished!

I’d been so busy I hadn’t written more. It was finally MFT day. Until the 4th I worked on logic and assembled the delivered business-card PCBs (so they arrived and I could assemble them).

[![Image from Gyazo](https://i.gyazo.com/3b3a335539975fab86c3b1f2258ffcc4.JPG)](https://gyazo.com/3b3a335539975fab86c3b1f2258ffcc4)
Assembly looked like this: attach the e-paper to the delivered PCBs, flash firmware, and it’s done!


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr"><a href="https://x.com/hashtag/MFTokyo2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFTokyo2026</a> Day 1 finished! We had a lot of visitors and I want to tell so many things I can’t fit here!<br><br>Even software people can now use AI to ship products like this... or rather, it became possible this morning.<br>The work for humans is to show what they make and engage in communication <a href="https://t.co/eO8R892Y0I">pic.twitter.com/eO8R892Y0I</a></p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I wrote that on X, but the character limit was too restrictive so I’ll write more here.

Day 1 finished! We had a lot of visitors and I want to tell so many things I can’t fit here! Software people can now use AI to ship products like this... actually, it became possible this morning. (GPT-6 Astra)

I think a human’s job is to show the things they make, have people pick them up, and communicate. Hardware makes that easier than software, so it was an incredibly fun experience. I want to be able to understand what AI creates and hold the reins properly.

By the way, sales went fairly well. Honestly, I thought it might not sell at all or only to a few friends, but a variety of people bought them.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I bought Soumame’s NFC business card <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Apparently you can rewrite an e-paper with just a tiny bit of electromagnetic induction from NFC—so easy to rewrite! <a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I’m super happy people posted about it online!

Selling hardware for the first time made me very nervous. What if the hardware or firmware fails? I’ve tested many times, but unlike software you can’t just "replace it" easily.

I work part-time at Melt Interface Technologies (a Maker Faire sponsor), and being a software engineer there made me see things I wouldn’t notice otherwise. If something breaks you can fix it, but once you sell something it’s not easy to replace — shipping it back is costly.

I wondered how people sell things in this world, but I also felt great that people could use the thing I made.

Frankly, the selling price of 5,000 yen per unit felt very high to me. Of course there’s no legal warranty in this kind of sale, but I sold it under my name, so if it breaks that would be bad and buyers might feel cheated. Big responsibility.

That said, the price includes R&D costs and I’ll probably still be at a loss... I plan to sell all manufactured units at Maker Faire.

But in terms of connections and experience, it might be immensely profitable. I’ll do my best tomorrow too.

[![Image from Gyazo](https://i.gyazo.com/9172d2fefb7dc938956b8972b892757e.JPG)](https://gyazo.com/9172d2fefb7dc938956b8972b892757e)


## September 6: Day 2, after Maker Faire

[![Image from Gyazo](https://i.gyazo.com/56d150efa4f05326bc56f89c2dd15a39.JPG)](https://gyazo.com/56d150efa4f05326bc56f89c2dd15a39)
### iOS app
Initially I thought iPhone owners wouldn’t buy and I’d just give up on an iOS app, but some people paid 5,000 yen anyway, so I felt I had to make one. I didn’t expect buyers.

Fortunately, I earn a bit more from my part-time job than a typical student, so I had the funds to register (though at 19 my credit card hit its limit and I had to wait for a charge). Even if it resulted in a loss, I could use initial sales to cover part of the development cost, so I was able to prepare funds.

Coincidentally, GPT-6 Astra was released by OpenAI the day before (the 5th), so “Swift and the release procedures are annoying” was no longer an excuse.

I tried building with Vibe and produced a near-equivalent iOS app in about 30 minutes — it even fixed Android bugs. Incredible.

Then I submitted it to TestFlight and waited for release; then I could distribute a beta to buyers.

> Edit: It was released

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[To customers who bought the business-card PCB at Maker Faire]<br>Thanks to everyone who bought one, I was able to create an iOS version and publish it on TestFlight! You can download from the link shown after filling out the form! <a href="https://t.co/SG3Hi27NEH">https://t.co/SG3Hi27NEH</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2097843944776458598?ref_src=twsrc%5Etfw">September 10, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

### Repository setup
Also, although the project was put together haphazardly, I was happy that about a dozen core users were eagerly awaiting what I’d build, so I decided to clean up the repo AI had created.
There are things I want to fix and improve, and people pointed out issues. For example, stability can be improved, and NFC-related parts could be better — an NFC expert at the venue told me this (I only understood about half of what they said, but they were amazing). I realized how many kinds of people come to Maker Faire. Maybe that was the most eye-opening thing about exhibiting.
Selling things carries responsibility and, in some ways, brings you closer to people than just exhibiting would — after all, who would buy a 5,000 yen device from some unknown maker without getting closer? That’s a sign of trust.

[![Image from Gyazo](https://i.gyazo.com/74c314fd75813155ed979189a934bcc2.png)](https://gyazo.com/74c314fd75813155ed979189a934bcc2)


## September 12: Reflection
Exhibiting at Maker Faire was an incredibly valuable experience.

I’ve been a software engineer for a long time, but this time I shipped something that AI helped create, sold it, and talked directly with people who picked it up. When the exhibit was accepted I worried: “I didn’t make this from scratch — is it right to present it? Is it meaningful?”

But when I actually exhibited, those worries were mostly unfounded. No one said “You didn’t make it all yourself” or “You don’t understand the mechanism.” Instead, people gave constructive advice like “If you do this, it could be better.” Buyers were excited about me using AI to create things and about what I’ll make next. Being accepted and embraced felt great and validated my decision to exhibit.

On reflection, I wouldn’t criticize a software engineer who uses AI extensively. In both software and hardware, AI is just a tool. If you have something you want to make, and AI is the best tool available, use it. The fact that I could actually materialize something was meaningful.

I also recognized my own gaps. After talking with the NFC expert, I realized that what current AI produces isn’t always sufficient and that I lack the basic knowledge to understand and use AI’s suggestions fully. Rather than feeling discouraged, I want to study more.

If you only stare at a screen as a software engineer, you might not realize what it means to make and sell hardware or how enjoyable it is to connect with people through a physical product. Exhibiting and talking to people revealed what I lacked and what I want to do next.


## What I want to say
Anyone can make things now if they have ideas — which is why sharing what you make at events like Maker Faire is important!

Exhibiting taught me a lot and was a genuinely great experience.

Honestly, the exhibition and development costs were substantial and I’m likely in the red financially. However, having people come and pick up my product and recovering part of the costs made the effort worthwhile.

Now, if you have an idea, anyone can make it. You can even rely on AI for PCB design. You don’t have to hand everything to AI, and even without a teacher nearby you can self-learn with an AI at your side — especially since there are AIs that can communicate well in Japanese. The barrier of “I don’t have the knowledge or skills so I can’t make it” has lowered a lot; if you want to make something, the way to do it is within reach for anyone.

That’s why places like Maker Faire, where you can show & tell what you made and let people touch it, and the skills to do so, will become increasingly important.

I don’t yet have the capacity to run a big event like this myself, so I participated as an exhibitor this time. Someday I’d like to create a space or opportunity where everyone can show what they made and inspire others to say, “I want to make something too!”