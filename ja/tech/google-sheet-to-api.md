---
title: GoogleスプレッドシートをAPI経由で読み込もう！
emoji: 🤖
tags:
  - dev
published_at: 2024-06-22
---

# Google スプレッドシートを API 経由で読み込もう！

[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)

> 去年別のサイトで書いた記事を再公開したものです。

超簡単です。Google スプレッドシートに書いた情報を API というものを使って読み込む方法を解説します。
応用すれば、簡易 CMS としても使用できます！コピペするだけで使えるのでぜひご覧ください。

## スプレッドシートを作成しよう

当たり前ですがまずはスプレッドシートを作成する必要があります。わかりやすくするために以下のように作ることをお勧めします。

$$
\begin{array}{|c|c|c|c|c|} \hline
いつ（yyyy-mm) & どこで & 何を & どのように & リンク \\ \hline
2023-08 & 東京で & すしを食べた & もぐもぐ。 & url \\ \hline
2022-05 & マレーシアで & ナシレマを食べた & スプーンを使って食べた & url \\ \hline
\end{array}
$$

試しに私は日記のようなページを作りたかったので、このようにしました。このようにした場合、「上の行も読み込んでしまうのではないか？」と思うかもしれませんが、読み込まないように設定できるので大丈夫です。

## API を使ってみよう

### Google Sheets API を有効化する

まずは Google Sheets API を以下のサイトより有効化します。
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

有効化ボタンを押して有効化します。

### API キーを作成する

「API とサービス」ページに行き、新しい認証情報を作成します。

「API キー」を押して作成します。これで準備は整いました！あとは API にリクエストを送ります！

### API にリクエストを送る

Google sheets API は sheets.googleapis.com にリクエストを送ることで使用できます。
以下は今回取得するのに必要なものを含めたリンクです。ご自分のシートに合わせて使ってください。

```
<https://sheets.googleapis.com/v4/spreadsheets/{シートID}/values/{シート名!始点:終点}/?key={APIキー}>
```

- シート ID

  - 自分のシートの ID を入力します。

  - 自分のスプレッドシートを開いた時に表示されるアドレスの、以下の下線部分がシート ID です。 [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

- シート名!始点:終点

  - 下部に表示されているシート名を入力します。シートが１つしかない場合は、入れなくても大丈夫です

- API キー

  - 先ほど作成した API キーを入力します。

## 完成！API を送ってみよう！

完成した API のリクエストを送ってみると、以下のような文章が画面に表示されます。表示されれば成功です！やったね！

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "東京で", "チキンを食べた", "もぐもぐ", "https://google.com", "bg-green" ] ] }
```
