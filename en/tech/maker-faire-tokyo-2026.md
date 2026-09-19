---
title: "Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I casually submitted the hardware I made for the first time and ended up exhibiting!? A software-background person tried exhibiting at Maker Faire Tokyo."
isTranslated: true
isDraft: false
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "66e6be0a606018e97a192104b76aae4bb0ed69ec109bc4afa75e163535a62e57"
---

# Exhibition Overview

https://makezine.jp/event/makers-mft2026/m0232/

|         |                                                                                |
| ------- | ------------------------------------------------------------------------------ |
| 📛 Booth name | そうまめの部屋 (Soumame's room)                                                        |
| 📍 Location   | B-07-08                                                                        |
| 🛒 Exhibit    | ワイヤレス給電で書き換え可能な電子ペーパー名刺 (Wirelessly-rewritable E-paper name badge (card style)) |
| Sales information    | The E-paper name badges (ready to use) and software will be sold across Day 1 and Day 2.                                           |

## Exhibition Details
### Main attraction: E-paper name badge sales
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I'm showcasing and selling a limited quantity (planning 30 units) of an e-paper name badge that runs on wireless power and can be rewritten from a smartphone whenever you like!
This thing is seriously expensive to produce, and it’s been quite a struggle. I am currently performing operational checks, but if it doesn't work properly, I may have to give up selling it.

### NFC playground exhibit
While I'm at it, I'll also display some of the fun things you can do with NFC, which I played around with and found interesting this spring.

### Talking about AI and the board implementation
Also, the NFC board mentioned earlier is something I implemented with AI, so I'd like to talk about that as well. I already use AI as a matter of course when writing software, and hardware design tools are getting easier to use too — I feel like things like what I made this time are becoming something anyone can create.


---

# Diary
> I'm going to document everything about how this project started here.
## August 11, 2025: I love hardware that runs on a single board

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">DEFCON was so fun — I'm heading back to Japan.<br><br>(This is me trying to use the ads-b/ATC receiver I bought from <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> to pick up aircraft position and radio signals) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I had never built hardware before, and I thought people who can do this live on another plane of existence — something I couldn’t do.

At DEF CON there's a culture called BadgeLife where everyone parades around badges at the event. Many badges are based on boards and have some function: the flashy LED-blinking types, or ones capable of heavy computation (some even have displays and run Linux).

Maker Faire doesn't have quite that intensity, but there are still a small number of such people. Also, Japan has a strong business card culture — businessmen pretty much carry their cards everywhere, and engineers are no exception.

So instead of making a large badge-size device, I intentionally kept it small at business-card size so people could casually show off cool boards in everyday life. I decided to make a kit like that.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and became mainly involved in the software around an HID device called Melt Mouse.

I've mostly been on the software side and haven't had many opportunities to work with hardware people, so it felt very fresh. The hardware engineers there are insanely skilled, and the students and part-timers are proficient with CAD and schematics — it's like a team of monster engineers.

Even though I hadn't touched hardware before, I needed to understand it, so I decided it was worth spending some money to learn and being in an environment where I could easily gain that knowledge felt like the right chance.


## April 1: The AI-designed name badge worked!? The start of board creation

But I have a lazy streak — I wondered if I could offload all the tedious tasks to AI. That laziness hasn't really gone away; in fact, part of why I started writing software was due to that trait.

Instead of learning everything conventionally, I thought, why not have AI design the board while I gradually learn? I showed Gemini the KiCad design app screen and finished a printed circuit board myself.

As mentioned, I was interested in making an item that showcases you — like a badge or a name card — so I decided to make a name-card board and planned to add a display to it.

I also thought, if the display is e-paper, I wouldn't have to worry about batteries and could rewrite the contents whenever I want.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is what it looked like when I told Gemini about this and it taught me. For some reason it started complimenting me a lot midway through. Maybe it's the educator type who believes in praising to foster growth.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I asked an LLM for directions and maybe ended up with the ultimate business card? (AI-designed PCB)<br>Will it actually work... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

As a result, I at least completed an MVP that can be rewritten (though it still feels like it barely qualifies as an MVP).

Of course it doesn't work perfectly — it's at the level of: write data via NFC and the e-paper updates!


## April 18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> I later realized that this fumi person is the fumi from [[en/works/keio|Keio SFC]]...!? I didn't know someone like this was on the same campus... amazing.

My motivation for the board name card rose.


## April 22: I applied just to try

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn't sure if it's okay to submit a half-finished name card, but I thought having a goal and working toward it would be good, so I applied.


## May 28: Really!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it got accepted. My motivation multiplied by about five, but I was so busy with university that I couldn't work much...


## May 31: Starting to wander off
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which incorporates fixes up to V2 and is the prototype closest to the current form.

The idea is to harvest the electricity received over NFC to power a circuit and rewrite an e-paper display. It's rewritable without contact and needs no battery, so it can be made thin — perfect for a business-card-like device.

When I actually made it, I could rewrite the screen. However, even working with AI, I ran into power insufficiency issues.

So I reviewed the circuit. I had to go back to basics and investigate how much power NFC can deliver and how to store it, which led to considerable trial and error.


## August 16: Ordered V4

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn't work, it's a big problem, but I ordered anyway. I significantly increased the number of capacitors and reselected footprints.
I used AI again to automatically pick suitable footprints from LCSC (JLCPCB) stock lists and to run simulations.

No matter how much you simulate, hardware sometimes just won't work, so I can't be certain it will definitely run, but reliability should be improved over earlier versions.

Also, while making this I disassembled an ezsign e-paper card to study how it works.

Existing ezsign product:

https://amzn.asia/d/04zeppW6

If it had accessible memory regions, I could have embedded a URL and made it fully functional with a scan... oh well.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)

This is pretty amazing — you can write to it using an app available on app stores.

After holding it near for about 20 seconds it rewrites like this:
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I tore it apart to check the antenna shape and how much charge capacity it has.

I didn't fully grasp the concept of charge storage at first, but I feel I learned a bit through this.

I also realized their design was far more efficient than mine. They use dedicated chips and sometimes use a method where they communicate using continuously received power rather than storing charge. Incredible.


## August 19: It finally worked
[![Image from Gyazo](https://i.gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08.jpg)](https://gyazo.com/6c1a8e4082e14d2f1e805cdb6863bd08)
I wrote firmware onto the arrived board, held it up, and it worked. I felt relieved more than happy. If this hadn't worked, selling working products at Maker Faire would have been very difficult.


## August 23: App development
Since it worked, I decided to build an app. I'd made web apps before, but never handled NFC; this was a new challenge.

However, by having AI write code, I managed to get it to work to a decent extent. Recent AIs are at a level where it feels like humans might not be necessary — I knew the available frameworks and instructed the AI on how to build it.

There was one problem: on iOS you can't use NFC for development without enrolling in the Apple Developer Program and paying $99, which is an absurd restriction. So I initially gave up on Apple and planned to provide the app for Android only.
[![Image from Gyazo](https://i.gyazo.com/db79a789837a1bbed2535b36212a3ced.png)](https://gyazo.com/db79a789837a1bbed2535b36212a3ced)

There weren't many difficult parts to building it, but usability had a few important considerations. Balancing ease of rewriting the NFC name-card board and display image quality was crucial.
If you aim for higher image quality, you have to hold the phone over it for about a minute. Even on faster settings it takes about 15 seconds. Commercial products also take around 15 seconds, so that's probably acceptable.

However, during writing you need the phone to be held steadily for about 15 seconds, so the software needed robust error handling. After tweaking many things, it became stable enough and selling seemed feasible, which was a relief.

## August 25: Banner
I observed that the Maker Faire booth areas look pretty bare if you don't pay for extras. Tables and chairs aren't even provided without paying, so I considered how to decorate the space at relatively low cost.

As a result, I found that making one huge banner is more noticeable and cheaper than printing lots of flyers. Bringing my own table and chairs (I have a car) also turned out to be more cost-effective.

The banner I ordered arrived today but... lol
[![Image from Gyazo](https://i.gyazo.com/a8ae86fd3bda5829af78b37f988c6880.png)](https://gyazo.com/a8ae86fd3bda5829af78b37f988c6880)
It's huge. Way too big.
I made it fireproof and sized it right up to the allowed dimensions for the event, but... lol

My Illustrator license had expired (Adobe tax is too high), so I made it in PowerPoint — you can make rainbow-style text like this in PowerPoint. No wonder PowerPoint slides tend to look cheesy.
Just to be clear, I don't like incorporating this kind of design into a product. This was chosen purely to stand out. I didn't pick it because I liked it.


## August 26: Ordered production V1
Although things were looking good, there were still improvement points. There were no screw holes, so you couldn't attach a 3D-printed cover, and there was no way to hang it around the neck.

After considering shape changes, I added four screw holes, a strap hole to hang it around the neck, and extra GPIO pins so purchasers could program the device themselves.
[![](https://i.gyazo.com/8b916a571b5f9215e48f39ac85a9bd79.png)](https://gyazo.com/8b916a571b5f9215e48f39ac85a9bd79)
It was amazing that AI did all of this. By the way, I chose black for the color.

### Forced to change footprints
However, when I tried to order, I got an error: the parts used in the previous working prototype (ST25 and STM32) were out of stock. Ten days before Maker Faire, this was pretty bad.

Since I asked JLCPCB to assemble the parts, I either had to wait for restocking or find substitute parts. I chose alternatives that had slightly lower specs (memory) but should still work.

As a result, ordering was delayed and it became questionable whether they'd arrive by MFT.


## August 28: Customs documents
[![Image from Gyazo](https://i.gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124.jpg)](https://gyazo.com/c05af8dcf6f8597e0d5969a5de6c2124)
My family told me they received a suspicious letter from China and gave it to me.

Inside it said I had to pay ¥5,500. Is this a scam? Turns out it was the invoice for the e-paper I ordered earlier.

Previously, ordering e-paper by China Post took over a month, so I used FedEx this time — but I didn't expect to be charged ¥5,500...

At this point I've already sunk more than ¥150,000, so it's financially tough. At this cost, even if I sold all 30 units at ¥5,000 each at Maker Faire, I might not break even.

That said, if you exclude learning costs, the cost for the learning itself might not be that big. It's fine — ¥150,000 should be paid back quickly in the future. (Honestly, with my total assets around ¥300,000 I'm a bit scared inside.)

Even if I let AI do everything, I still need to understand enough of what it says, verify unclear parts, and give instructions.

I didn't study how to draw schematics from scratch, but by deciding the hardware I wanted to make and building everything including software (mostly with AI), packaging it so people can use it, and releasing it to the world — all from my hands — feels amazing. Considering that it cost only ¥150,000, it might actually be a bargain.


## August 29: Worried it won't arrive in time
[![Image from Gyazo](https://i.gyazo.com/e7086daa4dc78f41244b02f1b607087a.png)](https://gyazo.com/e7086daa4dc78f41244b02f1b607087a)
Last time it took four days to arrive, so I thought we'd be fine, but due to the parts and color I ordered this time, it seems to take longer than usual. Still... it should arrive within a week, right?

I kept checking JLCPCB's order page every two hours, but it wouldn't move past "manufacturing data finished." Maybe because it was Saturday, production didn't start until Monday? Worst case, the boards might arrive after MFT. That's not good.

...but there's not much I can do. Rushing them probably won't help.


## August 30: Don't leave things to the last minute

### Ultimately I chased them up
Yesterday I said "rushing probably won't help" and went to sleep, but of course I couldn't help myself and chased them up.
[![Image from Gyazo](https://i.gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a.png)](https://gyazo.com/d98070e9d82ed4532f5b8dfa5b3d346a)
It probably didn't help, but I got a human-like (or LLM-like) reply and
[![Image from Gyazo](https://i.gyazo.com/abd9a5b93a49eb7e43efa231c59c8689.png)](https://gyazo.com/abd9a5b93a49eb7e43efa231c59c8689)
an estimated schedule started appearing.
[![Image from Gyazo](https://i.gyazo.com/44831e5245fdd9ac7376c60377e81728.png)](https://gyazo.com/44831e5245fdd9ac7376c60377e81728)
However, PCB assembly was scheduled for September 2. I needed to receive them by around September 4 (the day before), so it was tight — reality hit and anxiety spiked.

### The banner
To make things worse, the banner I bought earlier turned out to lack the fireproofing option (I thought I had enabled it but must have missed it). I had to reorder. I almost thought flyers would be fine, but comparing costs again, another banner seemed cheaper, so I ordered one. My family scolded me for bringing more junk home — I already have a huge non-fireproof banner at home. What should I do with that one...


## September 5: Day 1 finished!

I was so busy I couldn't continue writing. Finally, it's MFT day. Until the 4th I was working on logic and assembling the received name-card boards. (That means they arrived and I could assemble them.)

[![Image from Gyazo](https://i.gyazo.com/3b3a335539975fab86c3b1f2258ffcc4.JPG)](https://gyazo.com/3b3a335539975fab86c3b1f2258ffcc4)
Assembly looked like this: attach the e-paper to the received board and flash the firmware — done!


<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">#MFTokyo2026 Day 1 finished! We had lots of visitors! I want to write so much more than X's character limit allows!<br><br>Even software people can now use AI to deliver products like this... or rather, it only became possible this morning. <br>The human job is to show the things we make, have people hold them, and communicate <a href="https://t.co/eO8R892Y0I">pic.twitter.com/eO8R892Y0I</a></p>&mdash; そうまめ #MFTokyo2026 B-07-08 (@So_to9) <a href="https://x.com/So_to9/status/2096249111892869247?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I wrote that on X, but its character limit is so restrictive I couldn't express everything here.

Day 1 finished! We had many visitors! There's so much I want to talk about! It has become an era where software people can effectively use AI to bring products like this to life... or rather, it only became possible this morning. (GPT-6 Astra)

I think a human's role is to show what they've made, let people handle it, and communicate. Hardware makes this even easier than software, so it's an incredibly enjoyable experience. I want to understand AI-made outputs and hold the reins properly.

Sales went reasonably well. Honestly I expected either no sales or only a few friends buying, but many different people bought them.

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">I bought Soumame's NFC name card <a href="https://t.co/IP3tSUtVqk">pic.twitter.com/IP3tSUtVqk</a></p>&mdash; シルマ (@s1ruma) <a href="https://x.com/s1ruma/status/2096082221673357354?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Apparently the e-paper can be rewritten with the tiny amount of power induced by NFC — it rewrites with such a little amount of power! <a href="https://x.com/hashtag/MFT2026?src=hash&amp;ref_src=twsrc%5Etfw">#MFT2026</a> <a href="https://t.co/ajolNviS5F">pic.twitter.com/ajolNviS5F</a></p>&mdash; ぽん (@ammucha) <a href="https://x.com/ammucha/status/2096115412094288000?ref_src=twsrc%5Etfw">September 5, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I'm super happy people posted about it online!

Also, since this was my first time selling hardware, I was pretty nervous. What if the hardware or firmware breaks? I've tested a lot, but unlike software you can't just replace it on the spot.

I work part-time at Melt Interface Technologies (a Maker Faire sponsor), and being there made me notice things you can't see as just a software engineer. If something breaks you can fix it, but once it's sold you can't easily replace it; returning it costs a lot.

I wondered how people sell things in this world, but at the same time it's fantastic to sell something tangible and have people actually use it.

Honestly I priced each unit at ¥5,000 and felt that was very expensive. These items sold at events like this don't come with legal guarantees, but it's still my name on them — if they break, buyers who paid ¥5,000 might feel cheated. The responsibility is heavy.

That said, the price includes development and research costs, and even so it's probably at a loss. At Maker Faire I planned to sell everything I had made.

But considering the encounters and experiences, this might actually be hugely profitable in non-monetary terms. I'll keep going tomorrow.

[![Image from Gyazo](https://i.gyazo.com/9172d2fefb7dc938956b8972b892757e.JPG)](https://gyazo.com/9172d2fefb7dc938956b8972b892757e)


## September 6: Day 2, after Maker Faire

[![Image from Gyazo](https://i.gyazo.com/56d150efa4f05326bc56f89c2dd15a39.JPG)](https://gyazo.com/56d150efa4f05326bc56f89c2dd15a39)
### iOS app
At first I thought iPhone holders wouldn't buy, so I planned to forgo iOS support, but some people who paid ¥5,000 wanted iOS support and I felt I had to make it. I didn't expect buyers to show up.

Fortunately, I earn a bit more than a typical student from my part-time job, so despite "not having money" I could afford to register (though at 19 my credit card limit was hit and I had to wait for a charge). Even if it's a loss, the sales covered some development costs so I managed to prepare the funds.

Coincidentally, GPT-6 Astra was released by OpenAI yesterday (the 5th), so "Swift and release procedures are annoying" was no longer an excuse.

I tried building with Vibe and got an iOS app almost equivalent to Android in about 30 minutes, plus Android bug fixes. Amazing.

Then I submitted it to TestFlight and could distribute a beta to purchasers.

> Note: it was released

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">[To those who purchased the name-card PCB at Maker Faire]<br>Thanks to everyone who purchased, I was able to create an iOS version and publish it on TestFlight! After filling out the form you'll find the download link! <a href="https://t.co/SG3Hi27NEH">https://t.co/SG3Hi27NEH</a></p>&mdash; そうまめ (@So_to9) <a href="https://x.com/So_to9/status/2097843944776458598?ref_src=twsrc%5Etfw">September 10, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

### Repository setup
Originally this project was a mess, but there are over a dozen enthusiastic core users waiting for my next moves, and that made me decide to properly clean up the repo the AI had created.
There are things to fix and improve, and people pointed out issues. For instance, stability can still be improved, especially around NFC — experts at the venue said there was room for improvement (I only understood about half of what they said, but they seemed like NFC specialists). Maker Faire really attracts a wide range of people; I learned that by exhibiting.
Selling products carries responsibility and brings you closer to people — you can't expect people to buy a ¥5,000 device from a nobody without getting to know the maker a bit. It felt like people were trusting me that much.

[![Image from Gyazo](https://i.gyazo.com/74c314fd75813155ed979189a934bcc2.png)](https://gyazo.com/74c314fd75813155ed979189a934bcc2)


## September 12: Reflection
Exhibiting at Maker Faire was an incredibly valuable experience.

I've been a software engineer for a long time, but this time I exhibited something that was largely made by AI, sold it, and talked directly with people who picked it up. When my exhibit was accepted, I worried: “Is it okay to exhibit something I didn’t make from scratch? Am I just riding on someone else’s work?”

But actually exhibiting showed me I didn't need to worry. No one said, "You didn't make all of this yourself," or "You don't understand how it works." Instead, people gave advice like, "If you changed this it might be better." Buyers seemed to expect the things I'm going to make using AI. Being accepted and embraced like that made me glad I exhibited.

Thinking about it, I wouldn't criticize software engineers who heavily use AI either. Whether software or hardware, AI is a tool. I used AI because it seemed the best available method to create what I wanted. The fact that I could turn it into a tangible product mattered.

I also discovered my weaknesses. Talking with an NFC expert made me realize the AI's output alone isn't always enough, and I need more foundational knowledge to understand and apply AI's suggestions. But rather than being discouraged, I felt motivated to study more.

If you only stare at a screen as a software engineer, it's hard to understand what selling hardware really involves and how rewarding it is to connect with people through your product. Exhibiting and talking with many people revealed what I lacked and what I want to do next.


## What I want to say
Anyone can make things if they have an idea, and that's why it's important to share what you've made at events like Maker Faire!

Exhibiting at Maker Faire taught me so much and was a great experience.

Honestly, the exhibition and development costs were substantial and it's a big financial loss if you look only at the money. Still, people came, handled my products, and I recouped part of the cost — that alone made it worthwhile.

Now, if you have an idea, anyone can build something. You can even rely on AI for PCB design. Even without a nearby teacher, you can self-study by interacting with an AI that understands Japanese. The barrier "I don't have knowledge or skills so I can't make it" has dropped a lot; if you have the will to create, the means are available to everyone.

That's why places where you can show and tell what you've made, and let people touch it, will become even more important.

I don't yet have the capacity to organize a big event, so this time I participated as an exhibitor. But someday I'd like to create a place where people can show what they've made and inspire others to want to build things, too.