---
description: I liked Obsidian's graph view, so I implemented it on my own website.
emoji: 🗺️
isTranslated: true
published_at: 2025-10-29T00:00:00.000Z
sourceHash: 56019df901dd5fc03933bd77a6944e4b09742c6c94a4bed6a1bccdb7d154ea58
sourcePath: ja/tech/blog-graph-view.md
tags:
  - coding
  - web
title: Implemented a Graph View on My Blog
---

## What is the graph view

[![Image from Gyazo](../../media/46f77a621a0611419df35134c7dcd9de657e72fa9c538c8ea1549c7ba17c1387.png)](../../media/46f77a621a0611419df35134c7dcd9de657e72fa9c538c8ea1549c7ba17c1387.png)

&#xA;In the graph view, you can represent relationships between items in a graph like a correlation diagram.

The editor I use to write my blog, [[en/misc/obsidian|Obsidian]], has a similar feature. Obsidian Publish, which publishes Obsidian notes to the web, also includes this graph view and says it uses the same rendering engine as the graph view.

<https://www.reddit.com/r/ObsidianMD/comments/1mhujgy/what_does_obsidian_use_to_create_their_graph_view/>

[![Image from Gyazo](../../media/83307025ed893aeb33cdba2830aa2558169d933a990787aeac038abbe80f2303.png)](../../media/83307025ed893aeb33cdba2830aa2558169d933a990787aeac038abbe80f2303.png)

&#xA;It seems Obsidian implemented it themselves, but since the source code isn't public, I had no choice but to implement it on my own.

I don't have that many posts, so I didn't need to worry much about performance. I used a package called React-Force-Graph that bundles the d3.js library mentioned in the Reddit post above, and tweaked the force simulation and other settings.

<https://github.com/vasturiano/react-force-graph>

There is a similar library called vis.js, but I chose d3.js because it allows more complex interactions (vis.js is easier to get started with). Since many users browse on mobile, I made all features usable without hover interactions.

As the package name suggests, the graph view runs in React. This site is mostly static and uses Astro, so everything except the graph-view component is prebuilt.

At build time, I generate a JSON file that describes all posts and their relationships, and load it when the page loads.

If the number of pages grows a lot, this might become problematic, so I'll use this approach for a while and consider another method if it doesn't work out.
