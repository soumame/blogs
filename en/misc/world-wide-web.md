---
title: "WWW Notes"
emoji: "🌐"
tags:
  - "web"
  - "template"
published_at: "2025-10-30T00:00:00.000Z"
description: "The World Wide Web (WWW) came up in class, so I took notes and decided to publish them on the web."
isTranslated: true
sourcePath: "ja/misc/world-wide-web.md"
sourceHash: "e5c35623b21ece7e119f7c09b59bfe3e92f777231268bed26baafbdd4d048d20"
---

https://ja.wikipedia.org/wiki/World_Wide_Web

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

https://qiita.com/yangyooji/items/703ef69d4502fb92d5ea

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

https://caniuse.com

### OSS (Open Source)
- Among the organizations there's a group called Mozilla
- It embodies the idea of collaborative development
	- The things they create are public and can be improved by everyone
	- The Firefox browser they create is open source
	- They are highly transparent