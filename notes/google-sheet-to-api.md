---
title: "GoogleスプレッドシートをAPI経由で読み込もう！"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-06-22"
---

# GoogleスプレッドシートをAPI経由で読み込もう！

<figure name="98b2c5ec-2d37-43d9-867e-7fdef4229ee3">[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)</figure>

<figure name="ec2fc191-047d-473e-922d-ed32d1ecbac0" id="ec2fc191-047d-473e-922d-ed32d1ecbac0">

> 去年別のサイトで書いた記事を再公開したものです。

</figure>

超簡単です。Googleスプレッドシートに書いた情報をAPIというものを使って読み込む方法を解説します。
応用すれば、簡易CMSとしても使用できます！コピペするだけで使えるのでぜひご覧ください。

## スプレッドシートを作成しよう {#00d4b71d-8a21-4a1a-b1c3-d7d9701adc4f}

当たり前ですがまずはスプレッドシートを作成する必要があります。わかりやすくするために以下のように作ることをお勧めします。

$$
\begin{array}{|c|c|c|c|c|} \hline
いつ（yyyy-mm) & どこで & 何を & どのように & リンク \\ \hline
2023-08 & 東京で & すしを食べた & もぐもぐ。 & url \\ \hline
2022-05 & マレーシアで & ナシレマを食べた & スプーンを使って食べた & url \\ \hline
\end{array}
$$

試しに私は日記のようなページを作りたかったので、このようにしました。このようにした場合、「上の行も読み込んでしまうのではないか？」と思うかもしれませんが、読み込まないように設定できるので大丈夫です。

## APIを使ってみよう {#d4141c22-e8fc-4826-8868-ae7f26b4b823}

### Google Sheets APIを有効化する {#0eb517b6-c0b0-427e-9f90-2e758f5a3d5b}

まずはGoogle Sheets APIを以下のサイトより有効化します。
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

有効化ボタンを押して有効化します。

### APIキーを作成する {#7552e20d-7451-4fbb-a67f-78dcd0c75f8c}

「APIとサービス」ページに行き、新しい認証情報を作成します。

「APIキー」を押して作成します。これで準備は整いました！あとはAPIにリクエストを送ります！

### APIにリクエストを送る {#a7ac33a2-8657-4bab-a20e-53920bed9510}

Google sheets APIはsheets.googleapis.comにリクエストを送ることで使用できます。
以下は今回取得するのに必要なものを含めたリンクです。ご自分のシートに合わせて使ってください。

```
<https://sheets.googleapis.com/v4/spreadsheets/{シートID}/values/{シート名!始点:終点}/?key={APIキー}>
```

* シートID

    * 自分のシートのIDを入力します。

    * 自分のスプレッドシートを開いた時に表示されるアドレスの、以下の下線部分がシートIDです。 [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

* シート名!始点:終点

    * 下部に表示されているシート名を入力します。シートが１つしかない場合は、入れなくても大丈夫です

* APIキー

    * 先ほど作成したAPIキーを入力します。

## 完成！APIを送ってみよう！ {#576a607d-f104-458a-b583-467f6038d481}

完成したAPIのリクエストを送ってみると、以下のような文章が画面に表示されます。表示されれば成功です！やったね！

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "東京で", "チキンを食べた", "もぐもぐ", "https://google.com", "bg-green" ] ] }
```