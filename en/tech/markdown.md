---
emoji: ✒️
isTranslated: true
published_at: 2025-10-05T00:00:00.000Z
sourceHash: a96cbe01a79cb877a6f423bd1217a8309bb059c54609349e3bfd00cd3dd8987d
sourcePath: ja/tech/markdown.md
tags:
  - dev
title: Markdown Syntax Cheat Sheet (Super Simple)
---

If you've used Google Docs or Word,&#x20;

[![Image from Gyazo](../../media/aae82d737abd7d18b18d59cb73520e1d467c86aea99344130906af22a9771786.png)](../../media/aae82d737abd7d18b18d59cb73520e1d467c86aea99344130906af22a9771786.png)

&#x20;you can select bold, italic, headings and so on like this.

However, when using editors for writing code, such buttons are often not available, or you may not be able to select text with a mouse.

Markdown is a language ([[en/misc/markup|markup language]]) that lets you represent headings, emphasis, and lists by adding simple characters to text.

You often use it in editors like [[en/misc/vs-code|VS Code]], Notion, Obsidian, so I made a cheat sheet (there are many like this on the web, but I wanted something a bit simpler).

## Headings

Headings use `#`.

```
## タイトル
```

You type it like this&#xA;

[![Image from Gyazo](../../media/4e8f7c759927ff3c2510d0357bd4ab2bdaedbca5e60632d9b368739f59d6014f.png)](../../media/4e8f7c759927ff3c2510d0357bd4ab2bdaedbca5e60632d9b368739f59d6014f.png)

***

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

***

## Text formatting

### Bold

```md
**太字にしたい文字**
```

***

## **This becomes bold**

### Italic

```md
_斜体にしたい文字_
```

***

## _This becomes italic_

### Lists

```md
- `-`を入れた後にスペースを入れると
- 箇条書きになります
```

***

- If you put `-` followed by a space
- it becomes a list

***

## Links

```md
[リンクテキスト](https://example.com)
```

***

## [Link text](https://example.com)

***

There are many other syntaxes, but if you cover these, you can look up the rest when needed.
