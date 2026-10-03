---
title: ブログにグラフビューを実装してみた
emoji: 🗺️
locale: ja
slug: blog-graph-view
category: tech
tags:
  - coding
  - web
published_at: 2025-10-29T00:00:00.000Z
updated_at: 2025-10-29T00:00:00.000Z
description: Obsidianのグラフビューが気に入ったので自分のウェブサイトにも実装してみた
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

## グラフビューってなに

[![Image from Gyazo](../../media/46f77a621a0611419df35134c7dcd9de657e72fa9c538c8ea1549c7ba17c1387.png)](../../media/46f77a621a0611419df35134c7dcd9de657e72fa9c538c8ea1549c7ba17c1387.png)

&#xA;グラフビューでは、このように、相関図のようなグラフでアイテム間の関係性を表すことができる。

ブログを書くのに使っている[[ja/misc/obsidian|Obsidian]]というエディターに同様の機能が搭載されている。Obsidianの記事をwebで公開する、Obsidian Publishにもこのグラフビューが搭載されていて、グラフビューと同じレンダリングエンジンを使っていると言っている。

[Reddit](https://www.reddit.com/r/ObsidianMD/comments/1mhujgy/what_does_obsidian_use_to_create_their_graph_view/)

[![Image from Gyazo](../../media/83307025ed893aeb33cdba2830aa2558169d933a990787aeac038abbe80f2303.png)](../../media/83307025ed893aeb33cdba2830aa2558169d933a990787aeac038abbe80f2303.png)

&#xA;Obsidian ではどうやら自前で実装しているようだけど、ソースコードが公開されていないので、仕方なく自前で実装する。

記事数もそこまで多くないし、パフォーマンスについてはそこまで考えなくて良かったので、先程挙げたredditで言及されていたd3.js というライブラリを内包した、React-Force-Graph というパッケージを使って、力のシミュレーションとかを微調整している。

[![GitHub - vasturiano/react-force-graph: React component for 2D, 3D, VR and AR force directed graphs](../../media/9d32f510f5404c4d40e1f645ce2b2611f710fdf5e17dc925e5ecca625f354a37.png)](https://github.com/vasturiano/react-force-graph)

[GitHub - vasturiano/react-force-graph: React component for 2D, 3D, VR and AR force directed graphs](https://github.com/vasturiano/react-force-graph)

React component for 2D, 3D, VR and AR force directed graphs - vasturiano/react-force-graph

類似のもので、vis.js というものもあるが、d3.js の方がより複雑な操作ができるのでそっちを選択（なお、導入しやすさで言ったら vis.js）。モバイルでの閲覧が多いようなので、ホバー操作などをせずにすべての機能が利用できるようにした。

パッケージ名の通りグラフビューは React で動作している。このサイトはほとんどが Static で、Astro を使っているので、グラフビューのコンポーネント以外は全て事前にビルドしている。

ビルド時に、全ての記事と、その関係性を記述した JSON を作成し、ページ読み込み時にそれをロードしている。

これ、ページ数が増えまくったら結構厳しい気もするので、しばらくこれで使ってみて、ダメそうだったら別の方法を考えようと思う。
