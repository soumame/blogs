---
title: "HTMLさえわかればできる！Astroでブログサイトを作ってみよう！"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-05-12"
---

# HTMLさえわかればできる！Astroでブログサイトを作ってみよう！

[![Image from Gyazo](https://i.gyazo.com/e010985632217bb795333cd12915bf36.png)](https://gyazo.com/e010985632217bb795333cd12915bf36)

なんかブログサイト作りたい、っていうときありますよね。

ある程度の規模のサイトなら、わざわざWordpressなどを使わなくても自分好みのウェブサイトがすぐに作れる時代となりました。今回は、今流行りのフレームワーク、**Astro**を使って、1時間程度でブログウェブサイトを作ってみます。

## Astroとは？
Astroは、主にコンテンツ配信（ブログ、記事等）を目的とした高速なウェブサイトを構築するための**フレームワーク**です。主に閲覧を目的としたサイトに適しています。
また、**アイランド**という概念を取り入れて、**サイトの一部分**だけJavascriptを読み込んでボタンを押したら何かが起きる、みたいなことも出来ちゃう便利なものです。細かいところは省きますが、要するに、**簡単にサイトが作れて、かつ拡張性が高い**、初心者にうってつけのフレームワークという事です。

### フレームワークってなんだよ！
フレームワークと聞くと、なんだろう？ってなる方もいると思いますが、簡単に言えば、いろいろと**便利な機能を詰め合わせたアプリ開発セット**のようなものです。これを使うことで、色々な**下準備などを全部スキップ**した状態で始められるわけです。

## ウェブサイトを作る準備
では早速、ウェブサイトを作ってみましょう。まずは必要なものを用意していきます。大丈夫。すぐ終わります。

### 必要なモノ
**パソコンかMac**があればOKです。ない場合は、一応[StackBlitz](https://stackblitz.com/)などのブラウザ上で動く開発ツールを使用すればできますが、今回はパソコンのローカルで開発する場合のみ紹介します。

### Node.jsのインストール
まずは、**Node.js**というものをインストールします。これはいわゆる実行環境（アプリが動く土台のようなもの）で、Astroはこの上でしか使うことができません。新しいバージョンであれば動くので、リンク先にあるダウンロードボタンを押してダウンロードしましょう。その後は、手順に従いインストールして下さい。

[https://nodejs.org/](https://nodejs.org/)

### VS Codeのインストール
HTMLを書くときにはメモ帳でもなんとかできるかもしれませんが、それよりももっと便利なものがあります。**VS Code**というアプリを使えば、書いたコードにハイライトなどがついて**わかりやすく開発を行う**ことができます。また、VS Codeは**拡張機能**を導入することができ、公式からAstro向けのものが公開されているため、そちらからのインストールも行います。
以下のリンクからインストールを行い、手順に従ってインストールを行います。言語設定などは、ほかのサイトで説明されているので、そちらを参照してください。（めんどくs…)

[https://code.visualstudio.com/](https://code.visualstudio.com/)

インストールしたら、アプリを開いて、拡張機能の導入を行います。

[![Image from Gyazo](https://i.gyazo.com/6224c4baea1d8dd736f04485edaaf7bc.png)](https://gyazo.com/6224c4baea1d8dd736f04485edaaf7bc)

*起動するとこんな感じの画面が出ます。*

画面の左側のサイドバーにある、拡張機能のボタンを押して開いたタブにある検索窓に、「Astro」と入力して検索してください。

[![Image from Gyazo](https://i.gyazo.com/a86114a4ab2ec8ce567b851b6d975e60.png)](https://gyazo.com/a86114a4ab2ec8ce567b851b6d975e60)

*拡張機能を選択*

[![Image from Gyazo](https://i.gyazo.com/2c6bf8567f554948caa167c2122d6e4d.png)](https://gyazo.com/2c6bf8567f554948caa167c2122d6e4d)

*インストール！*

出てきたら、インストールを行います。これでVs Codeの準備は完了です。

### GitHubの準備
> こちらの作業はサイトが完成した後でも問題ありませんが、今回は先に説明します。

今回は、サイトの内容を保管したりする際にGitHubを使用します。これは、プログラムのコードを保存したり公開することができたりするツールで、これを使うことでバージョン管理や、サイトの公開が簡単に行うことができます。こちらにアカウント登録を行ってください。（やり方は割愛します。めんどk…殴）

[https://github.com/](https://github.com/)

GitHubに登録/ログインすると、このような画面になります。

[![Image from Gyazo](https://i.gyazo.com/5a5e9afab5f3131d7e677841129b765f.png)](https://gyazo.com/5a5e9afab5f3131d7e677841129b765f)

画面の左側のこの緑色のNewというボタンから新しいリポジトリの作成を行います。保管場所のようなものだと思ってください。

[![Image from Gyazo](https://i.gyazo.com/60834beeae01e0c39cc7eb95605c891b.png)](https://gyazo.com/60834beeae01e0c39cc7eb95605c891b)

作成画面はこのようになります。赤枠のところで、リポジトリ名（プロジェクト名）と、公開設定（公開か非公開か）を選択することができます。公開にすると、自分のつくったものがすべて公開されますので、注意してください。ウェブサイト自体の公開設定には影響しません。それ以外の項目では、リポジトリの説明や、READMEの設定、ライセンス（著作権関連）などの設定を行うことができます。設定ができたら、ページ下部の「Create repository」をクリックしましょう。

[![Image from Gyazo](https://i.gyazo.com/067294127a58396aee726d0e8bfa3793.png)](https://gyazo.com/067294127a58396aee726d0e8bfa3793)

するとこのような画面が出てきます。これで、準備は完了です。

[![Image from Gyazo](https://i.gyazo.com/c5e5c3b61c90595efea492050c7f01d1.png)](https://gyazo.com/c5e5c3b61c90595efea492050c7f01d1)

*リポジトリの作成が完了！*

## ウェブサイトをローカル環境で開発
### リポジトリの読み込み
では、早速作成したリポジトリを読み込みましょう。
リポジトリの画面に表示されているリンクをコピーして、VS Codeの「Gitリポジトリのクローン」に貼り付けます。（VS CodeにGitHubアカウントでログインされている場合は、そちらから複製を行うこともできます。）

[![Image from Gyazo](https://i.gyazo.com/16f534159ebe0084899da6a4f556ae4c.png)](https://gyazo.com/16f534159ebe0084899da6a4f556ae4c)

*画面の真ん中あたりに表示されているリンクをコピーして…*

[![Image from Gyazo](https://i.gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56.png)](https://gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56)

*上に入力欄が出てくるので、そこに張り付ける*

複製するフォルダー（ローカル環境での保存場所）を聞かれるので、好きな場所に設定しておきましょう。GitHubのフォルダーを作って、そこに保存するのがおすすめです。

### Astroをインストールする
複製したら、このような画面が出てくるはずです。基本的に開発はこの画面で行います。

[![Image from Gyazo](https://i.gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f.png)](https://gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f)

画面が開けたら、ターミナルを使用して、Astroのインストールを行います。
画面上部の「ターミナル」から、「新しいターミナル」を選択します。Macの場合は、メニューバーにあります。

[![Image from Gyazo](https://i.gyazo.com/d0a879d378d922abbf27730de064b9b7.png)](https://gyazo.com/d0a879d378d922abbf27730de064b9b7)

ターミナルが開けたら、表示された自分の居場所を確認します。私の場合は、このようなディレクトリでしたので、今いるディレクトリ（フォルダの位置）にそのままインストールしていきます。もし違う場合は、cdコマンドを使って移動します。

```
フォルダ一覧 ls フォルダにに移動する cd フォルダ名 一つ上の階層に移動する cd .. インストールする位置を決める。 C:\Users\souto\public\Astro-tutorial>
```

場所が確定したら、そこに **npm create astro@latest ./** と入力してEnterを押しましょう。これは、Astroの最新版を ./（今いる場所）にインストールするという意味のコマンドです。

```
npmコマンドを使用して今いるフォルダ内にインストールする npm create astro@latest ./ 今いるフォルダ内に新しいフォルダを作成し、そこにインストールする npm create astro@latest [フォルダ名]
```

上手くいけば、こんな感じの選択肢が画面に現れます。**矢印キーで操作**を行って、選択していきます。今回は、ブログを作るので。下へ移動して、「use blog template」を選択します。

[![Image from Gyazo](https://i.gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5.png)](https://gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5)

その後は、すべてEnterを押して大丈夫です。

```
tmpl How would you like to start your new project? Use blog template ts Do you plan to write TypeScript? Yes use How strict should TypeScript be? Strict deps Install dependencies? Yes しばらくするとインストールが完了する next Liftoff confirmed. Explore your project! Run npm run dev to start the dev server. CTRL+C to stop. Add frameworks like react or tailwind using astro add. Stuck? Join us at https://astro.build/cat npm run devでサーバーを起動すると...? astro v4.8.2 ready in 243 ms ┃ Local http://localhost:4321/ ┃ Network use --host to expose 22:50:46 watching for file changes...
```

インストールが完了したら、アクセスしてみましょう。Astroの開発モードを起動するには、**「npm run dev」**とコンソールにに入力します。表示されたURLにアクセスしてみましょう。

[![Image from Gyazo](https://i.gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac.png)](https://gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac)

*できた！簡単！*

### Astroの仕組み
ファイル一覧を見るとたくさんファイルがあって驚きますが、実際に開発でメインでいじるのは、publicとsrc内のファイルだけです。

Astroは、それ自体がウェブサイトになるわけではなく、**.astroファイルに書かれた内容をもとにHTMLファイルを生成**します。srcディレクトリにある内容は、レンダリング設定を変えない限りページの生成時にjavascriptなどは自動的にHTMLに変換されます。

つまり、ページ内でブログの記事一覧を取得するプログラムを書くと、サイトとして公開する（**ビルド**と呼びます）タイミングで取得され、その後、HTMLに変換されます。Astroではこれを**事前レンダリング**と呼んでいます。この仕様は、ページが高速になる反面、**リアルタイムで更新を行うことができません。**ここは注意する必要があります。一方で、Astroはページにアクセスされるたびに情報を読み込みなおすオンデマンドレンダリングも提供していますが、今回は、前者の事前レンダリングを使います。個人ブログならこの程度で十分。

[![Image from Gyazo](https://i.gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6.png)](https://gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6)

### コンポーネントの概念
Astroでは、コンポーネントの思想を用いています。これは、いわゆる部品の使い回し的なことができるやつで、例えば「メニューバー」のコンポーネントを作ったら、それをすべてのページで使い回すことができます。また、コンポーネントの中にコンポーネントを入れることもできるので、入れ子式で大きい箱の中に小さいものを入れていき、作った小さい箱を使い回す、みたいな感じでウェブサイトを作成することができます。

下のコードはその例です。レイアウトのファイルでメニューやフッターなどを読み込んだうえで、そのレイアウトをほかのページで読み込むと、すべてのページでメニューやフッターがついたまま読み込まれます。
いちいちメニューやフッターなどを書かなくても、レイアウトを読み込むだけで全部持ってくることができるわけです。メニューの内容が変えたくなっても、そのファイルだけ変更すれば、サイト全体に適用できるってわけです。

```
//レイアウトファイル(Layout.astro) import Header from 'Header.astro'; import Footer from 'Footer.astro'; <html> <head> <Header/> </head> <body> <slot> //スロットを使用して、内容をここに埋め込む <Footer/> </body> </html>
```

```
//ページのファイル(index.astro) import Layout from 'Layout.astro'; <Layout> ...ページの内容 </Layout>
```

```
//ブログ一覧 import Layout from 'Layout.astro'; <Layout> ...ブログ一覧 </Layout>
```

### srcフォルダ
基本的にsrcフォルダの中身の構造は自由ですが、このテンプレートではコンポーネント、コンテンツ、レイアウト、ページ、スタイルの5つが用意されています。それぞれ詳しく見ていきましょう。

<figure name="f5a67263-2138-44cc-bd01-86c0f7ce0588" id="f5a67263-2138-44cc-bd01-86c0f7ce0588">

> このガイドでは、Astroコミュニティでよく使われている慣習について説明していますが、Astroが予約しているディレクトリはsrc/pages/とsrc/content/だけです。その他のディレクトリは、自分にとって最適な方法で、自由に名前を変更したり再編成しても構いません。

<figcaption>Astro公式Docs</figcaption>

</figure>

**/pages(必須、予約済み)**
Pagesは、Astroのシステムが予約している必須のディレクトリとなります。これは特別なフォルダとなっており、サイト上に作成するページはすべてここの中に入れる必要があります。

**/content(予約済み)**
こちらは予約されたディレクトリですが、必須ではありません。コンテンツコレクションというAstroに備わっている機能を利用してブログなどの記事の内容を入れておくことができます。今回のプロジェクトではこちらを使用してブログの記事の管理などを行います。

**/Components
**コンポーネントは、先ほど説明したコンポーネントとして作成したAstroファイルを置くときに使える場所です。必要な時に、ほかのAstroファイルから呼び出したりするときに使います。必須ではないので、別に名前が違ったりしても問題ありません。

**/layouts**
レイアウトは、複数のページ間で使用するようなテンプレートを定義するのに使用します。こちらも必須ではありません。

**/styles**
CSSなどのファイルを格納するのに使います。こちらも必須ではありません。

### Publicフォルダ
Publicディレクトリに格納したファイルは、AstroがHTMLを生成したりする際に処理がスキップされるようになります、ここにフォントやサイトのアイコン、robots.txt(必要な場合)などを格納しておくことで、そのままサイトをビルド（生成）したときに使うことができます。
CSSやJavascriptなどを格納してそのまま読み込むこともできますが、最適化の対象外になるので公式としては非推奨のようです。

### 少しいじってみよう
全部作り変えるとものすごく長くなってしまうので、少しいじって公開するところまで説明します。まずは、ユーザーが初めに訪れるページを編集してみましょう。VS Codeでindex.astroを開いてください。

[![Image from Gyazo](https://i.gyazo.com/08c75cf4a1ecbab656b842db87c14c15.png)](https://gyazo.com/08c75cf4a1ecbab656b842db87c14c15)

*index.astro*

```
--- import BaseHead from '../components/BaseHead.astro'; import Header from '../components/Header.astro'; import Footer from '../components/Footer.astro'; import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <p> Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro. </p> <p> This template comes with a few integrations already configured in your <code>astro.config.mjs</code> file. You can customize your setup with <a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind, React, or Vue to your project. </p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>Edit the site header items in <code>src/components/Header.astro</code></li> <li>Add your name to the footer in <code>src/components/Footer.astro</code></li> <li>Check out the included blog posts in <code>src/content/blog/</code></li> <li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li> </ul> <p> Have fun! If you get stuck, remember to <a href="https://docs.astro.build/" >read the docs </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions. </p> <p> Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template" >astro-blog-template </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>. </p> </main> <Footer /> </body> </html>
```

ファイルの構造はこのようになっています。私の自己紹介のページにするので、以下のように書き換えてみました。

```
--- import BaseHead from "../components/BaseHead.astro"; import Header from "../components/Header.astro"; import Footer from "../components/Footer.astro"; import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>そうまめのサイト</h1> <p> そうまめのサイトへようこそ！このページはAstroのblogテンプレートを使用して作成しました。 </p> </main> <Footer /> </body> </html>
```

書き換えて、保存するとこんな感じに自動的に更新されるはずです。これがAstroでウェブサイトを作る方法となります。書き方はHTMLと同じなので、普段使われている方はあまり抵抗なく書けるかと思います。

[![Image from Gyazo](https://i.gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9.png)](https://gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9)

では、今度はブログ一覧を更新してみましょう。/src/content/blogディレクトリに移動します。

[![Image from Gyazo](https://i.gyazo.com/cd697ca81518d5fafbed77278bc495e8.png)](https://gyazo.com/cd697ca81518d5fafbed77278bc495e8)

*/src/content/blog*

.mdで終わるファイルにブログが格納されいます。開いてみましょう。

[![Image from Gyazo](https://i.gyazo.com/df6b79449f0da30fca7a080173ce7ed2.png)](https://gyazo.com/df6b79449f0da30fca7a080173ce7ed2)

このように上にメタデータが書かれたMarkdownファイルが開けるはずです。Astroでは、これをフロントマターと呼んでおり、/contentディレクトリ内に配置されたブログの記事などは、このフロントマターを使用してデータの管理を行うことができます。
このAstroのブログのテンプレートでは、タイトル、説明、投稿日時、画像が設定できます。フロントマターを以下のように変えてみましょう。

```
--- title: '初めてのAstroブログ！' description: 'AstroとVercelを利用して、簡単に無料のサイトを作成！' pubDate: 'May 12 2024' heroImage: '/blog-placeholder-3.jpg' ---
```

画像に関しては、publicディレクトリなどに入れた画像を呼び出すことで使用することができますが、今回は割愛します。

[![Image from Gyazo](https://i.gyazo.com/2f7a239c5ac481deef6255acf21c202e.png)](https://gyazo.com/2f7a239c5ac481deef6255acf21c202e)

このように内容が変更できるはずです。
ここまでできれば、あとは必要なところを変更するだけで自分のサイトを作ることができます！

### Tailwind CSSを導入してCSSをカスタマイズする
また、このプロジェクトでは通常のCSSを使用して見た目を変更していますが、Tailwind CSSというものを導入してより分かりやすい見た目の編集を行うことができます。Astroではこれらをインテグレーションと呼んでおり、追加で様々な機能を追加することができるので、必要な方は各自追加を行ってください。

[https://docs.astro.build/ja/guides/integrations-guide/](https://docs.astro.build/ja/guides/integrations-guide/)

## ウェブサイトを公開してみる
自分のサイトが完成したら、それを公開してみましょう。今回は、Vercelを、GitHubと連携したうえで公開してみましょう。

### GitHubとローカルの同期
まずは、ローカル環境で開発したものをいったんGitHubと同期する必要があります。VS Codeの「ソース管理」タブからコミットをクリックして、その後、同期します。また、同期する際に、変更を加えて点などをメッセージとして残しておいてください。入力せずにコミットすることはできないので、空のままコミットを押すと入力が求められます。

[![Image from Gyazo](https://i.gyazo.com/08bab3c34d2e3f97668f296b3f983cac.png)](https://gyazo.com/08bab3c34d2e3f97668f296b3f983cac)

*コミット前の画面。変更を加えたファイルなどが表示される。初回はすべてのファイルをアップロードする。*

コミットした後、プッシュという動作を行うと、GitHubにそれが反映されます。プッシュした後、GitHubを確認すると、ファイルが閲覧できるようになっているはずです。

[![Image from Gyazo](https://i.gyazo.com/6bfb3da069ce66508f2c312b787e908a.png)](https://gyazo.com/6bfb3da069ce66508f2c312b787e908a)

### Vercelを使用して無料でホストする
Vercelを使用して、ウェブサイトのホストを行います。Vercelは、GitHubなどと連携を行うことで簡単にウェブアプリなどを公開することができるサービスです。Vercelのサイトにアクセスして、登録を行ってください。**登録には、GitHubアカウントを使用してください。**

[https://vercel.com/](https://vercel.com/)

[![Image from Gyazo](https://i.gyazo.com/09c816cd3eee8740b564994845f30603.png)](https://gyazo.com/09c816cd3eee8740b564994845f30603)

登録を行うと、ダッシュボードにアクセスできるので、そちらにある「Add new…」をクリックして、Projectを選択します。選択すると、紐づけたGitHubアカウントにあるリポジトリが一覧として表示されるので、作成したAstroのリポジトリを選択します。

[![Image from Gyazo](https://i.gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa.png)](https://gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa)

特に追加で行う設定はないので、そのまま「Deploy」を押してください。これだけでサイトを公開することができます。簡単！

[![Image from Gyazo](https://i.gyazo.com/ef971e1941a9aab8d03b4f80912a88b1.png)](https://gyazo.com/ef971e1941a9aab8d03b4f80912a88b1)

サイトが公開できたら、アクセスしてみましょう。

[![Image from Gyazo](https://i.gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f.png)](https://gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f)

[https://astro-tutorial-six-peach.vercel.app/](https://astro-tutorial-six-peach.vercel.app/)

これで、サイト制作を一通りすることができました。ご自身の造りたい内容に合わせてカスタマイズしてみてください！

### Vercelに独自ドメインを追加する
ドメイン(example.comのようなサイト名)をすでに持っている方であれば、Vercelに追加することができます。Vercelのダッシュボードからプロジェクトを選択し、Domainsをクリックします。

[![Image from Gyazo](https://i.gyazo.com/485e09882c4130b5a7690c3bef03b293.png)](https://gyazo.com/485e09882c4130b5a7690c3bef03b293)

そうすると、検索窓のようなところがありますので、そちらをクリックして所有するドメインを入力すると、ドメインを接続するためのガイドが表示されます。こちらの手順にしたがい、ドメインを追加してください。

[![Image from Gyazo](https://i.gyazo.com/2149206be7b4a50138796cc4c6aa4ffe.png)](https://gyazo.com/2149206be7b4a50138796cc4c6aa4ffe)

## おわりに
一応これでウェブサイトを一通り作ることができたはずです。Astroだけでなく、Next.jsなどのような様々なフレームワーク等もこれと似たようなやり方でできますので、ぜひ色々試してみて、ご自身にあった方法でウェブサイトを作ってみてください！ぜひSNS等フォローお願いします！（あ、ちなみにこの下のサイトもAstro製です。）

[https://so-bean.work/ja](https://so-bean.work/ja)