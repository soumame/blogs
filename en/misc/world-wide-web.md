---
title: WWW Notes
emoji: 🌐
locale: en
slug: world-wide-web
category: misc
tags:
  - template
  - web
published_at: 2025-10-30T00:00:00.000Z
updated_at: 2025-10-30T00:00:00.000Z
description: The World Wide Web (WWW) came up in class, so I took notes and decided to publish them on the web.
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: true
translation_of: 01M3S3KME78YT9AJEJAN7FCFVR
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

[![World Wide Web - Wikipedia](../../media/cdb664f531528869c9047b774ea666ed581bf9cdb35ef924856a46b580b97d54.png)](https://ja.wikipedia.org/wiki/World_Wide_Web)

[World Wide Web - Wikipedia](https://ja.wikipedia.org/wiki/World_Wide_Web)

That said, most of it is covered there

### WWW

Invented by Tim Berners-Lee

- A URI defines where a document is located

- Describes the content of documents using the media format called HTML

- Delivers HTML using the application protocol HTTP
  - Uses URIs to control delivery

- This is something you don't often think about when using web apps as a matter of course, but in the end modern web apps haven't fundamentally changed; they extend this with CSS and JavaScript
  - To put it simply: JavaScript is a language for dynamically rewriting HTML, and CSS is a way to control the appearance of HTML elements in detail
  - To manipulate HTML documents there is a mechanism called the **Document Object Model**(DOM), and by manipulating it you can change elements.
  - With files like `.txt` it's not easy to know where things are, but HTML files have the convenient DOM mechanism so a program can read where content is written as a structure

### The JavaScript Era

- However, it's only relatively recently that this era emerged
  - Previously, browsers differed greatly in the features they supported and compatibility was terrible (the Internet Explorer era, for example)
  - JavaScript itself has existed for a long time, but it was hard to use, and development stagnated during the era when IE dominated
  - Therefore, many older websites were primarily written in HTML/CSS, and few used JavaScript
  - As the browser wars settled and Google Chrome gained dominance around 2008, JavaScript became strong again (maybe due to V8 and similar technologies)
  - Now it's just JavaScript everywhere...

[![JavaScriptとブラウザ戦争の関係を知りたい - Qiita](../../media/139bb0a6c7bfc3fa297fe040e84df5be8b9fb4848358017040f515a81b08dad4.jpg)](https://qiita.com/yangyooji/items/703ef69d4502fb92d5ea)

[JavaScriptとブラウザ戦争の関係を知りたい - Qiita](https://qiita.com/yangyooji/items/703ef69d4502fb92d5ea)

おはようございます！ 昨日からはJavaScriptをもっと知りたいというテーマで、現代の開発環境に至るまでの歴史を調べてみるという記事を書いています！ 歴史的な背景を知ることで、JavaScriptの理解を深めて開発に活かしたいというのが目的で、その中でも「モジュール」「...

### Standards bodies

- The standards body for HTTP is the IETF, which is straightforward, but HTML/CSS had two organizations: W3C and WHATWG (were there more?)
- W3C had been leading for a long time, but since 2021 it's been WHATWG
  - WHATWG took over from W3C
    - That said, it was originally started by people dissatisfied with W3C. It seems they now cooperate
    - During the W3C era it was called HTML5, but under WHATWG it became known as the Living Standard
  - Since WHATWG took over, it has been leading standardization for HTML, the DOM, etc.
  - CSS, SVG, accessibility, etc. are handled by W3C
- In the W3C era, as indicated by the name HTML5, the approach was to develop specifications and issue recommendations, but that was slow, so WHATWG adopted a continuously updated approach

There is a well-known site where you can check browser-specific progress for specifications:

[Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com)

"Can I use" provides up-to-date browser support tables for support of front-end web technologies on desktop and mobile web browsers.

### OSS (Open Source)

- Among the organizations there's a group called Mozilla
- It embodies the idea of collaborative development
  - The things they create are public and can be improved by everyone
  - The Firefox browser they create is open source
  - They are highly transparent
