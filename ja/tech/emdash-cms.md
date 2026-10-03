---
title: EmDashに移行してみる
emoji: 📝
locale: ja
slug: emdash-cms
category: tech
tags:
  - CMS
  - dev
  - web
published_at: 2026-10-03T13:45:03.881Z
updated_at: 2026-10-03T13:48:01.413Z
description: 元々Obsidian / Gitで管理していたブログだけど、スマホでサクッと書くときに毎回Git操作するのが面倒なのと、ObsidianのUIがブログ向けに最適化されていないこともあり、Emdashに移行してみました
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

元々Obsidian / Gitで管理していたブログだけど、スマホでサクッと書くときに毎回Git操作するのが面倒なのと、ObsidianのUIがブログ向けに最適化されていないこともあり、EmDashに移行してみました

### Emdashとは？

[![EmDash CMS](../../media/d84cfefe3f3b049c93eb29d03478cc26723f5d2b4720ca99fe3088e9fc7a9b25.png)](https://emdashcms.com/)

[EmDash CMS](https://emdashcms.com/)

An open source Astro CMS built for humans and agents.

EmDashは、Wordpressで有名なCMS（コンテンツ管理システム）の一種です。AstroというJSの読み込みを極力排除するような思想のフレームワーク（という認識）の上でいい感じに動くようになっているみたい。

[![プラグインセキュリティを解決するWordPressの精神の後継、EmDashの紹介](../../media/459248a1a132f4ea841817e77afb2557352034277eec289a18bfc1438cc4d287.png)](https://blog.cloudflare.com/ja-jp/emdash-wordpress/)

[プラグインセキュリティを解決するWordPressの精神の後継、EmDashの紹介](https://blog.cloudflare.com/ja-jp/emdash-wordpress/)

本日、Astro 6.0上に構築されたフルスタックのサーバーレスJavaScript CMSであるEmDashのベータ版の提供を開始します。従来のCMSの機能と最新のセキュリティを組み合わせ、サンドボックス化されたWorker Isolatesでプラグインを実行します。

Cloudflareとかでも紹介されている。っていうかAstro自体最近Cloudflare傘下になっているっぽい。

### 移行してみた感じ

![image.png](../../media/150464c57baa6193e540a3053e58a8fd5d8590df777b4e69a1181685e8e8b270.png)



使い勝手も悪くなくて、モダンな感じになっている。

また、移行したり改造するのも結構楽で、適当にAIエージェントに丸投げしたらGit同期も作ってくれた。なので、ページの見た目はそのままに、裏側だけEmDash+Cloudflareになった感じだ。

元々CF使っていたりした人は分かるが、最近はAIエージェントにCloudflareの権限を渡す（ちゃんとAI用の認証情報を作った上で）と、いい感じに全てやってくれる。Wranglerを触る必要すらないし、CI/CDも組んでくれる。

ただ、元々Astroのメリットであった、Javascriptの排除の考えに少し反する気はしているので、ぶっちゃけReactとかでもよくね？と思っていたりもする。どうなのだろうか、これ？まあ個人的にはそこまで速度の変化は感じないし、うまいことCloudflareがやってくれると勝手に思っている（わざわざAstroを傘下に入れているので）ので、しばらく使ってみようと思う。
