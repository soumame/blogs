---
title: "About Exhibiting at Maker Faire Tokyo 2026"
emoji: "🔧"
tags:
  - "essay"
published_at: "2026-08-17T00:00:00.000Z"
description: "I somehow submitted the first hardware I made and it got accepted!?"
isTranslated: true
isDraft: true
sourcePath: "ja/tech/maker-faire-tokyo-2026.md"
sourceHash: "9371946ce4c0223c9d5084ad1ff3f573d7448ebae9635c3bac715d5cca5e1ab2"
---

> I'm updating the story of how I came to exhibit at Maker Faire Tokyo as I go. It's very much a work in progress, so I'll finish it by the day of the event

# Announcement of the exhibition and overview
The exhibition details have been published! Come see it!

https://makezine.jp/event/makers-mft2026/m0232/

|            |                                                                                |
| ---------- | ------------------------------------------------------------------------------ |
| 📛 Booth name    | そうまめの部屋(Soumame's room)                                                        |
| 📍 Location      | B-07-08                                                                        |
| 🛒 Submitted item | Wirelessly-rewritable E-paper name badge (card style) |

---
## Profile

I'm Tokumaru, aka Soumame, a first-year student in Keio University's Faculty of Environment and Information Studies! I've been doing software development for a long time, but recently I got interested in hardware and have been studying a lot!

- Web: [https://tokumaru.work](https://tokumaru.work/)
- X: [@so_toku](https://twitter.com/so_toku)

## Exhibition details
### Highlight: E-paper business card sales
[![](https://i.gyazo.com/5ce08d454c244c9f428ee89669c03ed4.jpg)](https://gyazo.com/5ce08d454c244c9f428ee89669c03ed4)
I'll introduce an e-paper business card that runs on wireless power and whose content you can rewrite from your smartphone whenever you like, and I'll sell a limited number **(planned: 30 units)**!
This thing is seriously expensive to make, and it's been quite a struggle. **I'm currently running functional tests, but if it doesn't work, I may have to give up on selling them.**

### A display to play with NFC
Since I have the chance, I'll also exhibit things you can do with NFC that I found interesting after playing with it around this spring.

### Talk about AI and the PCB implementation
Also, the NFC PCB mentioned earlier is something I implemented together with AI, so I hope to talk about that as well. AI is already commonplace when writing software, but using AI for hardware design is also becoming easier, and I feel like the project I made this time shows that anyone can start building things like this now.


---

# Journal
> I'll write down everything about how I started this project here.
## 2025-08-11: Hardware that runs on a single PCB looks so cool

https://x.com/So_to9/status/1954792229806936385?s=20

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">DEF CON was fun — I'm heading back to Japan.<br><br>(This is me trying to use the ADS-B/ATC receiver I bought from <a href="https://x.com/SecureAerospace?ref_src=twsrc%5Etfw">@SecureAerospace</a> to receive aircraft position info and radio) <a href="https://t.co/6MNufnrjJ1">pic.twitter.com/6MNufnrjJ1</a></p>&mdash; Soumame (@So_to9) <a href="https://x.com/So_to9/status/1954792229806936385?ref_src=twsrc%5Etfw">August 11, 2025</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

I had never really made hardware before, and I thought people who could do things like this lived in some other realm and I couldn't do it.

At DEF CON there's a culture called BadgeLife where everyone shows off a bunch of badges at the event. Many badges are based on PCBs and have some function — things like flashy LEDs, or even advanced devices that can do complex calculations (some even have screens and run Linux).

Maker Faire doesn't have that same level of intensity, but there are still a few people like that. Also, Japan has a strong business-card culture, and businesspeople carry business cards everywhere. Engineers are the same.

So this time, instead of a huge badge-sized device, I decided to intentionally keep it small in business-card size and make a kit that lets you casually show off a cool PCB in everyday life.


## February: Joined [[en/works/diver-x|Diver-X (now Melt Interface Technologies)]]

I joined as a software engineer and got involved mainly with the software around the Melt Mouse HID device.

Until now I had been in the software world and rarely had opportunities to interact with hardware people, so it felt very refreshing. There are insanely skilled hardware engineers and even students working part-time who are proficient with CAD and schematics. It felt like a team of monster engineers.

Even though I hadn't touched hardware before, I found I needed to understand it, so I decided it was worth spending some money to learn and to put myself in an environment where I could easily gain that knowledge — now feels like the chance to do that!


## 2026-04-01: The business card designed with AI worked!? The start of PCB creation

However, my lazy streak made me think, "Can't I just throw all the tedious work at AI?" That laziness hasn't gone away; in fact, the reason I started writing software was partly due to that tendency.

Learning normally is fine, but I thought maybe I could have AI design the PCB while I gradually learned. I showed Gemini the KiCad design screen and, together with it, finished a single PCB.

As mentioned earlier, I was interested in making items like badge PCBs or business-card-style PCBs to show off, so I decided to make a business card PCB. Then the idea came to put a display on that business card PCB.

Furthermore, if the display were e-paper, there'd be no worry about the battery dying, and you could rewrite the content whenever you liked.

[![Image from Gyazo](https://i.gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec.png)](https://gyazo.com/1f708d335cf51ce5b2d5bb7f07e037ec)
This is what happened when I told Gemini that and got guidance. For some reason it started praising me a lot halfway through. Maybe it's the kind of educator that encourages by praising.


https://x.com/So_to9/status/2039325011564269822?s=20

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I asked an LLM for guidance and might've ended up making the ultimate business card? (AI PCB design)<br>Will it actually work... <a href="https://t.co/WDZVj5H4B9">pic.twitter.com/WDZVj5H4B9</a></p>&mdash; Soumame (@So_to9) <a href="https://x.com/So_to9/status/2039325011564269822?ref_src=twsrc%5Etfw">April 1, 2026</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>

As a result, I at least completed an MVP that can be rewritten...(though it might not even qualify as an MVP).

Of course it doesn't work perfectly; it's at the level of "I wrote data via NFC and the e-paper updated!"


## 2026-04-18: Drone business card!? Too cool

https://fumimaker.net/entry/2026/04/18/202824

> Wait, isn't this fumi-san from [[en/works/keio|Keio SFC]]...!? I realized later. I can't believe someone like that is at the same school... amazing.

My motivation for the PCB business card rose.

## 2026-04-22: I applied anyway.

[![Image from Gyazo](https://i.gyazo.com/4930496183247744f54fcb46b88e50df.png)](https://gyazo.com/4930496183247744f54fcb46b88e50df)

I wasn't sure if it would be okay to exhibit a half-finished business card, but it felt good to set a goal and work toward it, so I applied.

## 2026-05-28: Really!?
[![Image from Gyazo](https://i.gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783.png)](https://gyazo.com/988af3d7a88fb0bf9609fd4bec9b2783)
To my surprise, it got accepted. My motivation increased about fivefold, but my university schedule was so busy that I couldn't work on it much...

## 2026-05-31: Starting to go off track
[![](https://i.gyazo.com/9d1378128adf9f528d5c852f454c5505.png)](https://gyazo.com/9d1378128adf9f528d5c852f454c5505)
This is V3, which includes fixes I wanted up to V2, and it's closest to the current prototype.

The idea is to use power harvested from NFC to drive the circuit and rewrite the e-paper (display) — a mechanism that updates an E-ink display contactlessly using power generated by NFC. Because it operates battery-free, it can be made thin and is ideal for devices like business cards. The circuit is driven by power generated from NFC, and the E-ink display is updated contactlessly. Because it operates battery-free, it can be made thin and is ideal for devices like business cards.

When I actually built it, I was able to rewrite the screen correctly, but even while consulting with AI, I ran into a problem with insufficient power capacity.

Therefore, I had to review the circuit design and investigate from scratch how power capacity and energy storage in NFC-powered systems work, and I went through a lot of trial and error.

## 2026-08-16: V4 ordered

[![Image from Gyazo](https://i.gyazo.com/c9930131e17dfda62e445dde5148fc88.png)](https://gyazo.com/c9930131e17dfda62e445dde5148fc88)

If this doesn't work, it's going to be pretty bad, but I ordered it anyway. I greatly increased the number of capacitors compared to last time and reselected footprints.
Here again I used AI to automatically choose suitable footprints based on LCSC (JLCPCB) stock lists and ran automatic simulations based on those footprints.

Hardware can fail no matter how much you simulate, so I can't be sure it will definitely work, but reliability should be higher than before.

Also, to make this, I tore apart an ezsign e-paper card to study how it works.

Existing ezsign product:

https://amzn.asia/d/04zeppW6

If it had a memory area I could write a URL into it and have it scan perfectly... sigh.

[![Image from Gyazo](https://i.gyazo.com/9b051ddbd437a69b7777f07867d00829.png)](https://gyazo.com/9b051ddbd437a69b7777f07867d00829)

This thing is pretty amazing — you can actually write to it using an app from an app store.

If you hold it close for about 20 seconds it rewrites like this:
[![Image from Gyazo](https://i.gyazo.com/275e8abc4c7e6563241a766758e41355.jpg)](https://gyazo.com/275e8abc4c7e6563241a766758e41355)
I took it apart to check the antenna shape and how much storage capacity it has.

I didn't fully understand the term "energy storage" at first, but I feel like I learned a bit through this.

I also found out that their design is far more efficient than what I designed. They use dedicated chips and sometimes use a method of communicating using continuously received power rather than storing it — super impressive.
