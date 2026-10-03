---
title: HTMLとは
emoji: 🗒️
locale: ja
slug: html
category: misc
tags:
  - coding
  - dev
published_at: 2025-10-05T00:00:00.000Z
updated_at: 2025-10-05T00:00:00.000Z
description: HTMLの役目 HTMLは、HyperText Markup Languageと言って、ハイパーテキストを記述する言語。 で、ハイパーテキストっていうのは、今は当たり前となったリンクを通して他の文書と紐づけることができる仕組みがあるテキストファイル。 テキストファイルっていうのは文字を書いておくファイル。(.txtみた
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: false
translation_of: null
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

## HTMLの役目

HTMLは、**HyperText Markup Language**と言って、ハイパーテキストを記述する言語。

で、ハイパーテキストっていうのは、今は当たり前となったリンクを通して他の文書と紐づけることができる仕組みがあるテキストファイル。

テキストファイルっていうのは文字を書いておくファイル。(`.txt`みたいな。)

で、[[ja/misc/world-wide-web|World Wide Web]]の仕組みとして、そういうのがあるので、みんなはリンクをぽちぽちするだけで別のページに移動できる

## なぜプログラミング言語じゃない？

テキストファイルって言われれば、確かに文字が写るだけだからテキストファイルなんだけど、ここまで高機能だと、プログラミング言語って言っちゃうのも自然な気がする。

ただ、HTMLだけでは「ボタンを押したら何かが起きる」実装はできない。何かが起きるようにするためにはJavascriptなどの、HTMLの書き方で定義されていること以外の方法を使わないといけない。

まあ現代のブラウザでは、基本的にHTML, CSS, Javascriptとかを一緒に合わせて読み込むので、ボタンを押したら何かが起きるのが当たり前になっている。

基本的には、(まあ最近はCSSで演算もできるので定義は難しいけど)

- HTMLが、文章の内容を書いておく場所
- CSSが、その文章の見た目を決める場所
- Javascriptが、ボタンを押したら何が起きるかを命令する場所
  みたいな理解でいいのかな。
