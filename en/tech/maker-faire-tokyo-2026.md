---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I kind of put out hardware I made with Vibe and ended up exhibiting!? I showcased a batteryless, NFC-driven e-paper circuit-board business card made by someone from a software background at Maker Faire Tokyo."
isTranslated: true
isDraft: false
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "ecc5f1cc0250b0a0002b1df27334d51804df5593d121093815b5f83d02893bd7"
---

# Exhibition Overview

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                |
| ------- | ------------------------------------------------------------------------------ |
| 📛 Shop name | そうまめの部屋 (Soumame's room)                                                        |
| 📍 Location   | B-07-08                                                                        |
| 🛒 Exhibit  | Wirelessly-rewritable e-paper business card (card style) |
| Sales info    | Split across Day 1 and Day 2: e-paper business cards (ready to use) and software                                           |

## Exhibition Details
### Highlight: Selling e-paper business cards
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I'll be showcasing and selling a limited number (planned: 30 units) of e-paper business cards that operate via wireless power and can be rewritten from your smartphone whenever you like!
These are honestly expensive to produce, and it's been quite a struggle. At the moment we're still validating operation — if they don't work reliably, we may have to cancel the sale.

### An exhibit to play with NFC
Since I already spent time this spring experimenting with NFC and found it fun, I'll also show various things you can do with NFC.

### Talk about implementing the board with AI
The previously mentioned NFC board was designed with AI assistance, so I hope to talk about that as well. I already use AI as a matter of course when writing software, but AI is becoming more usable for hardware design too, and I feel things like what I made this time are becoming something anyone can build.

---

# Diary
> I'm leaving a full record here of why and how I started this project.
## August 11, 2025: Hardware that runs on a single PCB looks so cool

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Had a great time at DEF CON — heading back to Japan.<br><br>(This is me trying to use the ADS‑B/ATC receiver I bought from <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> to receive aircraft position data and radio) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I had never really made hardware before, and I thought people who could do this lived in another realm — I couldn't do it.

DEF CON has a culture called BadgeLife; everyone flaunts badges at the event. Many badges are based on PCBs and have some function: some are the flashy LED-blinking type, and others are highly capable (some even have displays and run Linux).

Maker Faire doesn't have that same intensity, but there are a few of those people here too. Also, Japan has a strong business card culture — almost every businessperson carries cards, and engineers are no exception.

So I decided not to make a big badge-sized board this time, but to deliberately keep it small, business-card sized, to make a kit that lets you show off a cool PCB in everyday life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and got involved mainly with the software around a HID device called Melt Mouse.

I hadn't had many opportunities to interact with hardware people before, so it felt very fresh. There are insanely skilled hardware engineers here, and even the students working part-time are proficient with CAD and schematics — it's like a team of monster engineers.

Even though I hadn't touched hardware, I needed to understand it, so I decided it was worth spending some money to learn, and being in an environment where I could easily acquire knowledge felt like a good chance.


## April 1: The AI-designed card worked!? The start of PCB creation

However, being lazy by nature, I wondered, “Can I just throw all the tedious work at AI?” That laziness was part of why I started writing software in the first place.

Instead of learning everything from scratch, I thought: why not have AI do the PCB design while I gradually learn alongside it? I showed Gemini the Kicad design app screen and managed to complete a circuit board with its guidance.

As I mentioned, I was interested in making badge-like or business-card-like items to show oneself off, so I decided to make a business card PCB, and then add a display to it.

If that display were e-paper, I wouldn't have to worry about batteries, and the content could be rewritten whenever I wanted.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is the moment I told Gemini what I wanted and it taught me. For some reason it started praising me a lot halfway through. Maybe it's the kind of educator that encourages by praising.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I asked an LLM for guidance and maybe created the ultimate business card? (AI PCB design)<br>Will it actually work... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

The result was a minimally viable product that can be rewritten (though it hardly feels like a full MVP).

Of course it wasn't perfect — basically you write data via NFC and the e-paper updates. That's it.

## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized this fumi person is the fumi from [[en/works/keio|Keio SFC]]...!? I couldn't believe there was someone like that at the same university.

My motivation for a PCB business card rose.

## April 22: I just applied for the event

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn't sure if a work-in-progress card would be acceptable, but I thought setting a goal and working toward it would be good, so I applied.

## May 28: Really!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it got accepted. My motivation multiplied by about five, but I was too busy with university to get much done.

## May 31: Starting to wander off course
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which includes fixes from V2 and is closest to the current prototype.

The idea is to harvest power from NFC, store it, run the circuit, and update the e-paper display. It's contactless and batteryless, allowing a thin form factor — perfect for a business-card device.

When I actually built it, I could update the screen. But even consulting with AI, I ran into power insufficiency issues.

So I reviewed the circuit. I had to research how much power you can actually get from NFC, how to store it, and so on, which involved a lot of trial and error.

## August 16: Ordered V4

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn't work, it's going to be bad, but I placed the order anyway. I greatly increased the number of capacitors and reselected footprints.
I used AI to automatically pick suitable footprints from LCSC (JLCPCB) stock lists and ran simulations.

No amount of simulation guarantees hardware will work, so it's still uncertain, but reliability should be better than before.

I also disassembled an ezsign e-paper card to study how it works while designing this.

ezsign's existing product:

https://amzn.asia/d/04zeppW6

If it had writable memory regions where I could put a URL, it would have been perfect since it can be written using apps from the app store.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)
This product is pretty amazing — you can write to it using ordinary apps from app stores.

If you hold it near for about 20 seconds it rewrites like this:
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I took it apart and checked the antenna shape and how much capacitance it had.

I didn't really understand "energy storage" at first, but I learned a bit from this.

It turned out much more efficient than my design. They use dedicated chips or a method that communicates continuously with the received power rather than storing it — really impressive.

## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)
I wrote the firmware to the delivered PCBs and when I held a phone near them, they worked. I felt relief more than joy. If this hadn't worked, selling functioning units at Maker Faire would have been very tough.

## August 23: App development
Now that it worked, I set out to build an app. I'd made web apps before, but I hadn't done NFC on mobile apps, so this was a challenge.

AI-assisted coding helped a lot. Modern AI is at a level that sometimes makes me wonder if humans are even necessary. Since I knew what frameworks existed, I could instruct the AI: "Make it this way," and it would do it.

One issue was that iOS requires joining the Apple Developer Program and paying $99 even for development use to access NFC — a baffling restriction. So I initially gave up on Apple and planned to ship only an Android app.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)
The implementation wasn't too difficult, but usability had important considerations. Balancing rewrite quality and convenience was key.

If you want better image quality on the e-paper, you need to hold the phone near for about a minute. Even in a faster setting it takes around 15 seconds. Commercial products also take about 15 seconds, so I considered that acceptable.

However, during writing you need to hold it steadily for that roughly 15 seconds, so I had to implement robust error handling in the software. After a lot of tweaking, it became stable enough for sale.

## August 25: Banner
I noticed that unpaid booth spaces at Maker Faire can look pretty bare. Even tables and chairs aren't provided unless you pay, so I thought about how to decorate the space affordably.

It turned out printing one huge banner stands out more than a bunch of flyers. Bringing my own table and chairs was cheaper for me since I have a car.

The banner I ordered arrived today... lol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It's huge — way too big.
I set it to be fire-retardant and as large as the allowed size for the event, but...

My Illustrator license expired (Adobe tax is too high), so I made the design in PowerPoint, and you can do these rainbow text effects there. No wonder PowerPoint slides often look tacky.

To be clear: I don't actually like incorporating designs like this into a product. This was purely to stand out. I'm not proud of the design aesthetic here.

## August 26: Ordering production V1
Although things looked promising, I saw some improvement points. There were no screw holes, no way to attach a 3D-printed cover, and no strap hole to hang it around the neck.

After considering shape changes, I added four screw holes, a strap hole, and extra GPIO pins so users who buy the product can program it themselves.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
AI did all of this — really impressive. I chose black for the color.

### Forced to change footprints
But when I tried to order, there was an error: parts used in the successful prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire, this was bad.

Since I'm asking JLCPCB to do part placement, I either had to wait for restock or find replacements. I found substitutes with slightly worse specs (less memory) but that should still work, so I reordered with those.

As a result, the order was delayed and I wasn't sure if it would arrive by MFT day.

## August 28: Customs document
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me there was a suspicious letter from China, and I got it.

Inside it said to pay ¥5,500. Is it a scam? It turned out to be a legitimate invoice for the e-paper I ordered.

When I ordered e-paper before via China Post it took over a month, so I used FedEx this time — but it still cost ¥5,500...

I've already spent over ¥150,000 and money is tight. At this cost, even if I sell all 30 units at ¥5,000 each, I probably won't break even.

That said, if you exclude learning costs, the direct cost of learning wasn't that large. It's fine — ¥150,000 should be repaid quickly in the future.
(That said, my total cash on hand is about ¥300,000, so I'm quietly panicking.)

Even if I let AI do everything, I still need to understand the AI's output to some extent, confirm unclear points, and give instructions.

I didn't study how to create schematics from scratch, but by deciding on the hardware I wanted and building everything (mostly with AI), including software, packaging it so people can use it, and shipping it to the world — all for about ¥150,000 — that feels insanely cheap.

## August 29: Worried it won't arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
The last time an order arrived at my home in 4 days, so I thought I had time, but the parts and color I ordered this time seem to take longer. Still — surely it'll arrive in a week, right?

I kept checking JLCPCB's order status every couple hours, but it stayed at "manufacturing data finished". Maybe because it was Saturday, production wouldn't start until Monday? In the worst case the boards might arrive after MFT, which would be awful.

There wasn't much I could do — hurrying them probably wouldn't help.

## August 30: Cutting it close is not good
### I ended up nudging them
I said yesterday that nudging probably wouldn't help, but I nudged them anyway.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)
Probably pointless, but a human-like (or LLM-like) reply came back,
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
and an estimated schedule started showing.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
But PCB assembly was scheduled for September 2. I needed to receive them around September 4 (the day before), so it was tight and my panic increased.

### Banner
To make things worse, the banner I ordered earlier wasn't set as fire-retardant due to a setting slip, so I had to reorder. I considered using flyers instead, but banners seemed more cost-effective, so I ordered another. My family scolded me for accumulating large junk at home — I already had a massive non-fireproof banner sitting there.

## September 5: Day 1 complete!

I hadn't had time to continue writing because things got hectic. It's finally MFT day. Up until the 4th I was working on logic and assembling the delivered business card PCBs (so they did arrive and I could assemble them).

[![Image from Gyazo](https://i.gyazo.com/3b3a335539975fab86c3b1f2258ffcc4.JPG)](https://gyazo.com/3b3a335539975fab86c3b1f2258ffcc4)
Assembly looked like this: attach the e-paper to the delivered PCB, write firmware, and it's done!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">#MFTokyo2026 Day 1 complete! We had a lot of visitors — there's so much I want to say that I can't fit it in X's character limit!<br><br>It's now possible for software people to leverage AI and turn ideas into products like this... I actually got it working this morning. <br>Human work might be about showing what you've made, letting people touch it, and communicating about it. <a href="https://t.co/eO8R892Y0I">pic.twitter.com/eO8R892Y0I</a></p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I wrote that on X, but the character limit made it hard to write everything, so I'll put it here.

Day 1 finished! Many people came to see it — there are so many stories I want to tell! It's now an era where software people can effectively use AI to turn ideas into products... or rather, I got it working this morning. (GPT‑6 Astra)

I think human work is about showing what you've built, letting people touch it, and communicating. Hardware makes that even easier than software, so it's been an incredibly fun experience. I want to understand AI-made outputs and be able to hold the reins properly.

Sales were decent. Honestly, I expected either no sales or only a few friends buying them, but various people bought them.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I bought Soumame's NFC business card <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">They say it can rewrite an e-paper using only the tiny amount of power induced by NFC — it rewrites with just that little power! <a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I'm super happy people posted about it online.

Also, selling hardware for the first time made me nervous — what if the hardware or firmware breaks? I've tested many times, but unlike software you can't just "replace it" easily: once sold, returning and replacing involves huge costs.

I work part-time at Melt Interface Technologies (a sponsor of Maker Faire), and being more involved than just as a software engineer lets you see things you wouldn't otherwise. Selling a real product and seeing people use it is incredibly rewarding.

Frankly, I priced them at ¥5,000 each — I think that's very expensive. There's no legal warranty here since it's sold at an event, but it's still my name on it, so if it breaks the buyer could feel cheated. That's a heavy responsibility.

I set the price to cover development and research costs, but it's probably still a loss. At Maker Faire I'll try to sell all completed units.

However, considering the people I met and the experiences I gained, it might be tremendously profitable in non-monetary terms. I'll keep going tomorrow.

[![Image from Gyazo](https://i.gyazo.com/9172d2fefb7dc938956b8972b892757e.JPG)](https://gyazo.com/9172d2fefb7dc938956b8972b892757e)

## September 6: Day 2, after Maker Faire

[![Image from Gyazo](https://i.gyazo.com/56d150efa4f05326bc56f89c2dd15a39.JPG)](https://gyazo.com/56d150efa4f05326bc56f89c2dd15a39)
### iOS app
At first I thought iPhone owners wouldn't buy and I'd skip iOS, but some people still paid ¥5,000, so I felt I had to make one. I thought hardly anyone would buy.

Fortunately, I earn a bit more from my part-time job than a typical student, so I could register for the Apple Developer Program (though at 19 my card limit meant I had to wait for billing). Even if it's a loss, sales covered some development costs so I managed to get the funds.

Just yesterday (the 5th), GPT‑6 Astra was released by OpenAI, so "Swift and the release process are annoying" was no longer a valid excuse.

I tried building with Vibe and produced an iOS app comparable to the Android version in about 30 minutes, plus Android bug fixes. Amazing.

Then I submitted it to TestFlight and could provide a beta to purchasers.

> Update: released

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">[For those who purchased the business card PCB at Maker Faire]<br>Thanks to everyone who bought one — I made an iOS version and published it on TestFlight! After filling the form you'll find the download link. <a href="https://t.co/SG3Hi27NEH">https://t.co/SG3Hi27NEH</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2097843944776458598?ref_src=twsrc%5Etfw">September 10, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

### Repository setup
Originally this project was messy, but having about a dozen core users eagerly waiting made me want to tidy the repo. There are things to fix and improve; people pointed out stability could be better and NFC areas could be enhanced. A kind-of NFC expert at the venue gave advice that I only half understood, but it was impressive. Maker Faire really attracts all kinds of people — I only realized that by exhibiting.

Selling physical things brings responsibilities and can bring people closer — after all, it's hard to ask someone to buy a ¥5,000 device from an unknown creator without seeing it. That level of trust felt meaningful.

[![Image from Gyazo](https://i.gyazo.com/74c314fd75813155ed979189a934bcc2.png)](https://gyazo.com/74c314fd75813155ed979189a934bcc2)

## September 12: Reflection
Exhibiting at Maker Faire was an amazing experience.

I've been a software engineer for a long time, but this time I presented "something made with AI" including hardware, sold it, and spoke directly with people who picked it up. When the exhibition acceptance came through I worried: "Is it right to exhibit something I didn't entirely make myself? Does it even make sense?"

But in reality, there was no one saying "You didn't make this yourself" or "You don't understand the mechanism." Instead people gave constructive advice like "If you change this it might be even better." Buyers seemed to support someone using AI to build things and were excited about what I'll build next. Being accepted and welcomed felt great and showed me exhibiting was the right choice.

Thinking more, I wouldn't criticize software engineers who heavily use AI. Whether software or hardware, AI is just a tool for making things. I used AI because it was the best available approach to build what I wanted, and actually turning that into a tangible product had value.

I also saw what I'm lacking. Talking to an NFC expert made me realize that AI alone isn't always enough and that I need stronger fundamentals to understand and apply AI's suggestions. Rather than feeling down, it made me want to study more.

If you only sit in front of a screen as a software engineer, you might never understand what it's like to make and sell hardware or the joy of connecting with people through your creation. Exhibiting and talking to many people clarified what's missing and what I want to do going forward.

## What I want to say
Anyone can make things if they have an idea, and that's why venues like Maker Faire, where you share what you made, matter!

Exhibiting at Maker Faire taught me a lot and was a great experience.

Financially, the exhibition and development costs were significant, and purely in terms of money it was a big loss. But people handling and buying the product helped recover some costs, so the value of participating was already more than justified.

Now, if you have an idea, anyone can make it. You can even rely on AI for PCB design. You don't have to fully hand everything over to AI; even without a local mentor you can self-learn by asking an AI in your language. The barrier "I can't make it because I lack knowledge" is much lower now — if you want to make something, there's a way.

That's why places like Maker Faire, where you can show & tell what you've made and let people touch it, and the skills to do so, will become increasingly important.

I don't yet have the means to run a big event like this myself, so I participated as an exhibitor this time. Someday I'd like to create opportunities where people can show what they've made and inspire others to say, "I want to make something too!"