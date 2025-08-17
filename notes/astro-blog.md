---
title: "HTMLさえわかればできる！Astroでブログサイトを作ってみよう！"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-05-12"
---

# HTMLさえわかればできる！Astroでブログサイトを作ってみよう！

<figure name="bb716fe7-6578-4cef-b9e2-c9709fbb18fd">[![Image from Gyazo](https://i.gyazo.com/e010985632217bb795333cd12915bf36.png)](https://gyazo.com/e010985632217bb795333cd12915bf36)</figure>

なんかブログサイト作りたい、っていうときありますよね。

ある程度の規模のサイトなら、わざわざWordpressなどを使わなくても自分好みのウェブサイトがすぐに作れる時代となりました。今回は、今流行りのフレームワーク、**Astro**を使って、1時間程度でブログウェブサイトを作ってみます。

## Astroとは？ {#28572507-ed4c-4fb7-8db0-050379e7f50c}

Astroは、主にコンテンツ配信（ブログ、記事等）を目的とした高速なウェブサイトを構築するための**フレームワーク**です。主に閲覧を目的としたサイトに適しています。
また、**アイランド**という概念を取り入れて、**サイトの一部分**だけJavascriptを読み込んでボタンを押したら何かが起きる、みたいなことも出来ちゃう便利なものです。細かいところは省きますが、要するに、**簡単にサイトが作れて、かつ拡張性が高い**、初心者にうってつけのフレームワークという事です。

### フレームワークってなんだよ！ {#5e61d161-8030-48e1-9e3d-e81d4987baf0}

フレームワークと聞くと、なんだろう？ってなる方もいると思いますが、簡単に言えば、いろいろと**便利な機能を詰め合わせたアプリ開発セット**のようなものです。これを使うことで、色々な**下準備などを全部スキップ**した状態で始められるわけです。

## ウェブサイトを作る準備 {#74aac171-4151-4d28-a3af-9ef032f1fd8b}

では早速、ウェブサイトを作ってみましょう。まずは必要なものを用意していきます。大丈夫。すぐ終わります。

### 必要なモノ {#999445ce-ebbf-4cda-86b1-d412e2b6d762}

**パソコンかMac**があればOKです。ない場合は、一応[StackBlitz](https://stackblitz.com/)などのブラウザ上で動く開発ツールを使用すればできますが、今回はパソコンのローカルで開発する場合のみ紹介します。

### Node.jsのインストール {#3b9b0935-0fdd-48c3-83fc-ecf5ad3a3b34}

まずは、**Node.js**というものをインストールします。これはいわゆる実行環境（アプリが動く土台のようなもの）で、Astroはこの上でしか使うことができません。新しいバージョンであれば動くので、リンク先にあるダウンロードボタンを押してダウンロードしましょう。その後は、手順に従いインストールして下さい。

[https://nodejs.org/](https://nodejs.org/)

### VS Codeのインストール {#92fa8979-8f73-43b5-b055-88e2fc9125bf}

HTMLを書くときにはメモ帳でもなんとかできるかもしれませんが、それよりももっと便利なものがあります。**VS Code**というアプリを使えば、書いたコードにハイライトなどがついて**わかりやすく開発を行う**ことができます。また、VS Codeは**拡張機能**を導入することができ、公式からAstro向けのものが公開されているため、そちらからのインストールも行います。
以下のリンクからインストールを行い、手順に従ってインストールを行います。言語設定などは、ほかのサイトで説明されているので、そちらを参照してください。（めんどくs…)

[https://code.visualstudio.com/](https://code.visualstudio.com/)

インストールしたら、アプリを開いて、拡張機能の導入を行います。

<figure name="0511d429-f057-44ff-8a57-40f23d5fbf7c" id="0511d429-f057-44ff-8a57-40f23d5fbf7c">[![Image from Gyazo](https://i.gyazo.com/6224c4baea1d8dd736f04485edaaf7bc.png)](https://gyazo.com/6224c4baea1d8dd736f04485edaaf7bc)

<figcaption>起動するとこんな感じの画面が出ます。</figcaption>

</figure>

画面の左側のサイドバーにある、拡張機能のボタンを押して開いたタブにある検索窓に、「Astro」と入力して検索してください。

<figure name="fe78d442-99db-40e0-baed-450eeb534971" id="fe78d442-99db-40e0-baed-450eeb534971">[![Image from Gyazo](https://i.gyazo.com/a86114a4ab2ec8ce567b851b6d975e60.png)](https://gyazo.com/a86114a4ab2ec8ce567b851b6d975e60)

<figcaption>拡張機能を選択</figcaption>

</figure>

<figure name="d11138ed-d335-4788-b6d7-a5a289f64e84" id="d11138ed-d335-4788-b6d7-a5a289f64e84">[![Image from Gyazo](https://i.gyazo.com/2c6bf8567f554948caa167c2122d6e4d.png)](https://gyazo.com/2c6bf8567f554948caa167c2122d6e4d)

<figcaption>インストール！</figcaption>

</figure>

出てきたら、インストールを行います。これでVs Codeの準備は完了です。

### GitHubの準備 {#8f3c6b17-7483-4baf-854a-1a6193c5f031}

<figure name="2c127d89-7977-4e9a-adb3-02990e4d4c89" id="2c127d89-7977-4e9a-adb3-02990e4d4c89">

> こちらの作業はサイトが完成した後でも問題ありませんが、今回は先に説明します。

</figure>

今回は、サイトの内容を保管したりする際にGitHubを使用します。これは、プログラムのコードを保存したり公開することができたりするツールで、これを使うことでバージョン管理や、サイトの公開が簡単に行うことができます。こちらにアカウント登録を行ってください。（やり方は割愛します。めんどk…殴）

[https://github.com/](https://github.com/)

GitHubに登録/ログインすると、このような画面になります。

<figure name="22431ad5-f1c3-459c-ac7e-d2b3f94794a5" id="22431ad5-f1c3-459c-ac7e-d2b3f94794a5">[![Image from Gyazo](https://i.gyazo.com/5a5e9afab5f3131d7e677841129b765f.png)](https://gyazo.com/5a5e9afab5f3131d7e677841129b765f)</figure>

画面の左側のこの緑色のNewというボタンから新しいリポジトリの作成を行います。保管場所のようなものだと思ってください。

<figure name="dc03561d-909d-4df2-850e-f07150955b1a" id="dc03561d-909d-4df2-850e-f07150955b1a">[![Image from Gyazo](https://i.gyazo.com/60834beeae01e0c39cc7eb95605c891b.png)](https://gyazo.com/60834beeae01e0c39cc7eb95605c891b)</figure>

作成画面はこのようになります。赤枠のところで、リポジトリ名（プロジェクト名）と、公開設定（公開か非公開か）を選択することができます。公開にすると、自分のつくったものがすべて公開されますので、注意してください。ウェブサイト自体の公開設定には影響しません。それ以外の項目では、リポジトリの説明や、READMEの設定、ライセンス（著作権関連）などの設定を行うことができます。設定ができたら、ページ下部の「Create repository」をクリックしましょう。

<figure name="de2d1839-2694-4ab0-a568-ca764eaca006" id="de2d1839-2694-4ab0-a568-ca764eaca006">[![Image from Gyazo](https://i.gyazo.com/067294127a58396aee726d0e8bfa3793.png)](https://gyazo.com/067294127a58396aee726d0e8bfa3793)</figure>

するとこのような画面が出てきます。これで、準備は完了です。

<figure name="0f3de892-f168-48a7-baf8-e7ef2b14f072" id="0f3de892-f168-48a7-baf8-e7ef2b14f072">[![Image from Gyazo](https://i.gyazo.com/c5e5c3b61c90595efea492050c7f01d1.png)](https://gyazo.com/c5e5c3b61c90595efea492050c7f01d1)

<figcaption>リポジトリの作成が完了！</figcaption>

</figure>

## ウェブサイトをローカル環境で開発 {#bc85fad9-8b04-44f8-bf34-e41b6a62fd1a}

### リポジトリの読み込み {#e64e2029-f5f1-43da-a26b-9e8ac3e273ef}

では、早速作成したリポジトリを読み込みましょう。
リポジトリの画面に表示されているリンクをコピーして、VS Codeの「Gitリポジトリのクローン」に貼り付けます。（VS CodeにGitHubアカウントでログインされている場合は、そちらから複製を行うこともできます。）

<figure name="e895b5d3-c182-4b5a-ad22-8733b31a85ae" id="e895b5d3-c182-4b5a-ad22-8733b31a85ae">[![Image from Gyazo](https://i.gyazo.com/16f534159ebe0084899da6a4f556ae4c.png)](https://gyazo.com/16f534159ebe0084899da6a4f556ae4c)

<figcaption>画面の真ん中あたりに表示されているリンクをコピーして…</figcaption>

</figure>

<figure name="99dc358f-9f5d-418c-ae02-0782a6981482" id="99dc358f-9f5d-418c-ae02-0782a6981482">[![Image from Gyazo](https://i.gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56.png)](https://gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56)

<figcaption>上に入力欄が出てくるので、そこに張り付ける</figcaption>

</figure>

複製するフォルダー（ローカル環境での保存場所）を聞かれるので、好きな場所に設定しておきましょう。GitHubのフォルダーを作って、そこに保存するのがおすすめです。

### Astroをインストールする {#9142fa95-d5d7-4c29-8956-5ce1fa821f43}

複製したら、このような画面が出てくるはずです。基本的に開発はこの画面で行います。

<figure name="72e8d9fa-1bc7-4076-bd2b-3588b0d976a6" id="72e8d9fa-1bc7-4076-bd2b-3588b0d976a6">[![Image from Gyazo](https://i.gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f.png)](https://gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f)</figure>

画面が開けたら、ターミナルを使用して、Astroのインストールを行います。
画面上部の「ターミナル」から、「新しいターミナル」を選択します。Macの場合は、メニューバーにあります。

<figure name="9d33193c-4c28-42b3-9800-8eee1a8340f9" id="9d33193c-4c28-42b3-9800-8eee1a8340f9">[![Image from Gyazo](https://i.gyazo.com/d0a879d378d922abbf27730de064b9b7.png)](https://gyazo.com/d0a879d378d922abbf27730de064b9b7)</figure>

ターミナルが開けたら、表示された自分の居場所を確認します。私の場合は、このようなディレクトリでしたので、今いるディレクトリ（フォルダの位置）にそのままインストールしていきます。もし違う場合は、cdコマンドを使って移動します。

```
フォルダ一覧 ls フォルダにに移動する cd フォルダ名 一つ上の階層に移動する cd .. インストールする位置を決める。 C:\Users\souto\public\Astro-tutorial>
```

場所が確定したら、そこに **npm create astro@latest ./** と入力してEnterを押しましょう。これは、Astroの最新版を ./（今いる場所）にインストールするという意味のコマンドです。

```
npmコマンドを使用して今いるフォルダ内にインストールする npm create astro@latest ./ 今いるフォルダ内に新しいフォルダを作成し、そこにインストールする npm create astro@latest [フォルダ名]
```

上手くいけば、こんな感じの選択肢が画面に現れます。**矢印キーで操作**を行って、選択していきます。今回は、ブログを作るので。下へ移動して、「use blog template」を選択します。

<figure name="a290475d-0dec-4fc3-8965-8b2c824799c2" id="a290475d-0dec-4fc3-8965-8b2c824799c2">[![Image from Gyazo](https://i.gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5.png)](https://gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5)</figure>

その後は、すべてEnterを押して大丈夫です。

```
tmpl How would you like to start your new project? Use blog template ts Do you plan to write TypeScript? Yes use How strict should TypeScript be? Strict deps Install dependencies? Yes しばらくするとインストールが完了する next Liftoff confirmed. Explore your project! Run npm run dev to start the dev server. CTRL+C to stop. Add frameworks like react or tailwind using astro add. Stuck? Join us at https://astro.build/cat npm run devでサーバーを起動すると...? astro v4.8.2 ready in 243 ms ┃ Local http://localhost:4321/ ┃ Network use --host to expose 22:50:46 watching for file changes...
```

インストールが完了したら、アクセスしてみましょう。Astroの開発モードを起動するには、**「npm run dev」**とコンソールにに入力します。表示されたURLにアクセスしてみましょう。

<figure name="928009f9-ea25-44a7-a17c-fdfafba57f62" id="928009f9-ea25-44a7-a17c-fdfafba57f62">[![Image from Gyazo](https://i.gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac.png)](https://gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac)

<figcaption>できた！簡単！</figcaption>

</figure>

### Astroの仕組み {#bb49b5eb-e042-44f4-b926-3ee04cde6e93}

ファイル一覧を見るとたくさんファイルがあって驚きますが、実際に開発でメインでいじるのは、publicとsrc内のファイルだけです。

Astroは、それ自体がウェブサイトになるわけではなく、**.astroファイルに書かれた内容をもとにHTMLファイルを生成**します。srcディレクトリにある内容は、レンダリング設定を変えない限りページの生成時にjavascriptなどは自動的にHTMLに変換されます。

つまり、ページ内でブログの記事一覧を取得するプログラムを書くと、サイトとして公開する（**ビルド**と呼びます）タイミングで取得され、その後、HTMLに変換されます。Astroではこれを**事前レンダリング**と呼んでいます。この仕様は、ページが高速になる反面、**リアルタイムで更新を行うことができません。**ここは注意する必要があります。一方で、Astroはページにアクセスされるたびに情報を読み込みなおすオンデマンドレンダリングも提供していますが、今回は、前者の事前レンダリングを使います。個人ブログならこの程度で十分。

<figure name="ae097b52-e5c0-4275-be25-7230f9676094" id="ae097b52-e5c0-4275-be25-7230f9676094">[![Image from Gyazo](https://i.gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6.png)](https://gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6)</figure>

### コンポーネントの概念 {#4a78cbb1-24af-4e1a-b445-bd7014214376}

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

### srcフォルダ {#2cf444ba-7741-4d85-93a6-c2103cdef049}

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

### Publicフォルダ {#7691fa62-080e-4d0a-aa59-72f18870791c}

Publicディレクトリに格納したファイルは、AstroがHTMLを生成したりする際に処理がスキップされるようになります、ここにフォントやサイトのアイコン、robots.txt(必要な場合)などを格納しておくことで、そのままサイトをビルド（生成）したときに使うことができます。
CSSやJavascriptなどを格納してそのまま読み込むこともできますが、最適化の対象外になるので公式としては非推奨のようです。

### 少しいじってみよう {#6eed5af1-73bd-4c5d-90cb-b0b54498a7ad}

全部作り変えるとものすごく長くなってしまうので、少しいじって公開するところまで説明します。まずは、ユーザーが初めに訪れるページを編集してみましょう。VS Codeでindex.astroを開いてください。

<figure name="dc5840f6-a62a-48e4-8c48-7ae1a9bbf52e" id="dc5840f6-a62a-48e4-8c48-7ae1a9bbf52e">[![Image from Gyazo](https://i.gyazo.com/08c75cf4a1ecbab656b842db87c14c15.png)](https://gyazo.com/08c75cf4a1ecbab656b842db87c14c15)

<figcaption>index.astro</figcaption>

</figure>

```
--- import BaseHead from '../components/BaseHead.astro'; import Header from '../components/Header.astro'; import Footer from '../components/Footer.astro'; import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <p> Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro. </p> <p> This template comes with a few integrations already configured in your <code>astro.config.mjs</code> file. You can customize your setup with <a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind, React, or Vue to your project. </p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>Edit the site header items in <code>src/components/Header.astro</code></li> <li>Add your name to the footer in <code>src/components/Footer.astro</code></li> <li>Check out the included blog posts in <code>src/content/blog/</code></li> <li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li> </ul> <p> Have fun! If you get stuck, remember to <a href="https://docs.astro.build/" >read the docs </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions. </p> <p> Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template" >astro-blog-template </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>. </p> </main> <Footer /> </body> </html>
```

ファイルの構造はこのようになっています。私の自己紹介のページにするので、以下のように書き換えてみました。

```
--- import BaseHead from "../components/BaseHead.astro"; import Header from "../components/Header.astro"; import Footer from "../components/Footer.astro"; import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>そうまめのサイト</h1> <p> そうまめのサイトへようこそ！このページはAstroのblogテンプレートを使用して作成しました。 </p> </main> <Footer /> </body> </html>
```

書き換えて、保存するとこんな感じに自動的に更新されるはずです。これがAstroでウェブサイトを作る方法となります。書き方はHTMLと同じなので、普段使われている方はあまり抵抗なく書けるかと思います。

<figure name="a477d2dd-02a9-45d5-a8b7-a002037f517b" id="a477d2dd-02a9-45d5-a8b7-a002037f517b">[![Image from Gyazo](https://i.gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9.png)](https://gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9)</figure>

では、今度はブログ一覧を更新してみましょう。/src/content/blogディレクトリに移動します。

<figure name="01ea0784-64d4-4325-966b-3a381ab43922" id="01ea0784-64d4-4325-966b-3a381ab43922">[![Image from Gyazo](https://i.gyazo.com/cd697ca81518d5fafbed77278bc495e8.png)](https://gyazo.com/cd697ca81518d5fafbed77278bc495e8)

<figcaption>/src/content/blog</figcaption>

</figure>

.mdで終わるファイルにブログが格納されいます。開いてみましょう。

<figure name="079f2f92-161f-4496-ae12-fbc51974a3dd" id="079f2f92-161f-4496-ae12-fbc51974a3dd">[![Image from Gyazo](https://i.gyazo.com/df6b79449f0da30fca7a080173ce7ed2.png)](https://gyazo.com/df6b79449f0da30fca7a080173ce7ed2)</figure>

このように上にメタデータが書かれたMarkdownファイルが開けるはずです。Astroでは、これをフロントマターと呼んでおり、/contentディレクトリ内に配置されたブログの記事などは、このフロントマターを使用してデータの管理を行うことができます。
このAstroのブログのテンプレートでは、タイトル、説明、投稿日時、画像が設定できます。フロントマターを以下のように変えてみましょう。

```
--- title: '初めてのAstroブログ！' description: 'AstroとVercelを利用して、簡単に無料のサイトを作成！' pubDate: 'May 12 2024' heroImage: '/blog-placeholder-3.jpg' ---
```

画像に関しては、publicディレクトリなどに入れた画像を呼び出すことで使用することができますが、今回は割愛します。

<figure name="c0e2a926-4e73-403b-bfc7-312c5278e05e" id="c0e2a926-4e73-403b-bfc7-312c5278e05e">[![Image from Gyazo](https://i.gyazo.com/2f7a239c5ac481deef6255acf21c202e.png)](https://gyazo.com/2f7a239c5ac481deef6255acf21c202e)</figure>

このように内容が変更できるはずです。
ここまでできれば、あとは必要なところを変更するだけで自分のサイトを作ることができます！

### Tailwind CSSを導入してCSSをカスタマイズする {#9716ca05-7544-4af3-98f3-6c1b8131e233}

また、このプロジェクトでは通常のCSSを使用して見た目を変更していますが、Tailwind CSSというものを導入してより分かりやすい見た目の編集を行うことができます。Astroではこれらをインテグレーションと呼んでおり、追加で様々な機能を追加することができるので、必要な方は各自追加を行ってください。

[https://docs.astro.build/ja/guides/integrations-guide/](https://docs.astro.build/ja/guides/integrations-guide/)

## ウェブサイトを公開してみる {#a32586e7-2bfd-47f5-95ea-0e8fb284156f}

自分のサイトが完成したら、それを公開してみましょう。今回は、Vercelを、GitHubと連携したうえで公開してみましょう。

### GitHubとローカルの同期 {#3a0a60b9-e39f-41ec-875d-f9f43fd17d1a}

まずは、ローカル環境で開発したものをいったんGitHubと同期する必要があります。VS Codeの「ソース管理」タブからコミットをクリックして、その後、同期します。また、同期する際に、変更を加えて点などをメッセージとして残しておいてください。入力せずにコミットすることはできないので、空のままコミットを押すと入力が求められます。

<figure name="86809b5e-1f28-466d-a9c4-41cefc1a8427" id="86809b5e-1f28-466d-a9c4-41cefc1a8427">[![Image from Gyazo](https://i.gyazo.com/08bab3c34d2e3f97668f296b3f983cac.png)](https://gyazo.com/08bab3c34d2e3f97668f296b3f983cac)

<figcaption>コミット前の画面。変更を加えたファイルなどが表示される。初回はすべてのファイルをアップロードする。</figcaption>

</figure>

コミットした後、プッシュという動作を行うと、GitHubにそれが反映されます。プッシュした後、GitHubを確認すると、ファイルが閲覧できるようになっているはずです。

<figure name="0578da65-a1fb-4821-9191-56355252c129" id="0578da65-a1fb-4821-9191-56355252c129">[![Image from Gyazo](https://i.gyazo.com/6bfb3da069ce66508f2c312b787e908a.png)](https://gyazo.com/6bfb3da069ce66508f2c312b787e908a)</figure>

### Vercelを使用して無料でホストする {#ae86419d-58af-4cb6-9dfd-4707cd88a4ee}

Vercelを使用して、ウェブサイトのホストを行います。Vercelは、GitHubなどと連携を行うことで簡単にウェブアプリなどを公開することができるサービスです。Vercelのサイトにアクセスして、登録を行ってください。**登録には、GitHubアカウントを使用してください。**

[https://vercel.com/](https://vercel.com/)

<figure name="0a0e56cb-741a-4ab3-8b69-c86d9ae34f03" id="0a0e56cb-741a-4ab3-8b69-c86d9ae34f03">[![Image from Gyazo](https://i.gyazo.com/09c816cd3eee8740b564994845f30603.png)](https://gyazo.com/09c816cd3eee8740b564994845f30603)</figure>

登録を行うと、ダッシュボードにアクセスできるので、そちらにある「Add new…」をクリックして、Projectを選択します。選択すると、紐づけたGitHubアカウントにあるリポジトリが一覧として表示されるので、作成したAstroのリポジトリを選択します。

<figure name="0d37f0a0-f22f-4619-be25-395d21e728db" id="0d37f0a0-f22f-4619-be25-395d21e728db">[![Image from Gyazo](https://i.gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa.png)](https://gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa)</figure>

特に追加で行う設定はないので、そのまま「Deploy」を押してください。これだけでサイトを公開することができます。簡単！

<figure name="9ea37717-c68c-4d76-a07d-042b6984bd14" id="9ea37717-c68c-4d76-a07d-042b6984bd14">[![Image from Gyazo](https://i.gyazo.com/ef971e1941a9aab8d03b4f80912a88b1.png)](https://gyazo.com/ef971e1941a9aab8d03b4f80912a88b1)</figure>

サイトが公開できたら、アクセスしてみましょう。

<figure name="f9d47233-8ad0-43f4-9b8c-d00a3b4fdf71" id="f9d47233-8ad0-43f4-9b8c-d00a3b4fdf71">[![Image from Gyazo](https://i.gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f.png)](https://gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f)</figure>

[https://astro-tutorial-six-peach.vercel.app/](https://astro-tutorial-six-peach.vercel.app/)

これで、サイト制作を一通りすることができました。ご自身の造りたい内容に合わせてカスタマイズしてみてください！

### Vercelに独自ドメインを追加する {#0af70176-dda6-4b4c-8163-69a0d98d38c2}

ドメイン(example.comのようなサイト名)をすでに持っている方であれば、Vercelに追加することができます。Vercelのダッシュボードからプロジェクトを選択し、Domainsをクリックします。

<figure name="588bb100-6686-4235-83af-bd90a71b96c8" id="588bb100-6686-4235-83af-bd90a71b96c8">[![Image from Gyazo](https://i.gyazo.com/485e09882c4130b5a7690c3bef03b293.png)](https://gyazo.com/485e09882c4130b5a7690c3bef03b293)</figure>

そうすると、検索窓のようなところがありますので、そちらをクリックして所有するドメインを入力すると、ドメインを接続するためのガイドが表示されます。こちらの手順にしたがい、ドメインを追加してください。

<figure name="a200f109-340b-4f46-ba32-9b5d7acffcac" id="a200f109-340b-4f46-ba32-9b5d7acffcac">[![Image from Gyazo](https://i.gyazo.com/2149206be7b4a50138796cc4c6aa4ffe.png)](https://gyazo.com/2149206be7b4a50138796cc4c6aa4ffe)</figure>

## おわりに {#8e138566-2e41-4984-8ea6-ea4183458514}

一応これでウェブサイトを一通り作ることができたはずです。Astroだけでなく、Next.jsなどのような様々なフレームワーク等もこれと似たようなやり方でできますので、ぜひ色々試してみて、ご自身にあった方法でウェブサイトを作ってみてください！ぜひSNS等フォローお願いします！（あ、ちなみにこの下のサイトもAstro製です。）

[https://so-bean.work/ja](https://so-bean.work/ja)