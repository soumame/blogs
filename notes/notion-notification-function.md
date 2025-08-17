---
title: "【Notion】関数を使って無料で自動通知を作る方法"
emoji: "🤖"
tags:
  - "template"
published_at: "2021-11-22"
---

# 【Notion】関数を使って無料で自動通知を作る方法

[![Image from Gyazo](https://i.gyazo.com/e3e188f6c332d548eae437e39be4a807.png)](https://gyazo.com/e3e188f6c332d548eae437e39be4a807)

Notion、便利ですよね。私もTrelloから移行して、非常に便利なのですが、一つだけ**ガッカリなところがあるんです。**

## 時間になっても通知が来ない...

使い始めて数日して、**リマインダーが来ない**ことに気がつきました。

NotionにはTrelloのように時刻を設定したら**勝手にリマインドするのではなく**、/remindと打つか、カレンダープロパティから設定するときに**スイッチをトグルする必要があります**。

[![Image from Gyazo](https://i.gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c.png)](https://gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c)

「なんだ、ただトグルするだけじゃん」と思っているそこのあなた！

**この機能が曲者**で、パッとメモを取っているときに忘れると、**期日になっても何も通知が来なくなる**んです。これがすごい不便なんです。

そこで、**外部ツールなどに頼ること**で、この欠点を解消することにしました。

## the:gist

**「[the gist](https://www.thegist.so)」**を使えば、**無料**で自動リマインダーが作れます。このアプリは、**特定のイベントを検知**して、通知を送ってくれるサービスです。

[![Image from Gyazo](https://i.gyazo.com/adeaa61701d46a54986681e355701023.png)](https://gyazo.com/adeaa61701d46a54986681e355701023)

> **「the:gist」**
> 価格:フリーミアム（最初の１つのみ無料）
> 機能:Notionのイベントを検知

## 「the:gist」をセットアップしよう！

the:gistは便利なソフトウェアですが、リマインダーとして使うには**少し設定が必要**です。他のウェブサイトでも**見つけられなかった**ので、ここに書いておくことにしました。

## Notion側の設定

先ほど言ったように、the:gistは**特定のアクションに反応するアプリ**なので、Notion側で時間になったら特定のアクションを起こす必要があります。そのためには、**カレンダーと関数**(Formula)を使用します。

今回は期限の**１日前**にリマインドするので**datebetweenプロパティで残り日数を計算**し、残りが１日になったら**the:gistで通知を送る**ようにします。

まず、**プロパティから関数を選択**します。

[![Image from Gyazo](https://i.gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a.png)](https://gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a)

そして、作成したプロパティにdatebetweenコマンドを入力します。**"日付？"という部分にはあなたが使用しているカレンダープロパティの名前を入れます。**

```
dateBetween(prop("日付？"), now(), "days")
```

こうすることで、**残り日数を計算できるようになりました。**

次に、残り日数が１日になったら、**アクションを起こすように設定**します。

先程と同じように関数(Formula)プロパティを追加して、**下のものをコピペ**します。**(残り日数)**のところは、この前に作った**datebetweenのプロパティ名**を入れます。

```
if(prop("残り日数") < 1, "yes", "no") == "yes"
```

こうすることで、残り日数が１日になるとチェックが入るようになりました！

## **the:gist側の設定**

ここまでできれば、**もうあと少し**です！

まず、[the:gist](https://app.thegist.so/)を手順通り（自動的にやってくれる）連携します。やり方は説明するまでもありません。

[![Image from Gyazo](https://i.gyazo.com/05aa0cf1bf34499e55102532c4f700ea.png)](https://gyazo.com/05aa0cf1bf34499e55102532c4f700ea)

> **Name:**リマインダーの名前
> **In:**データベース名
> **if:検知する内容。チェックボックスのプロパティ名 is ✅になるように設定**
> **then:**検知した際の動作。**ここではemailをチェックが入った時に設定。**

**上の通りに入力すれば、Emailで通知がくるはずです。お疲れ様でした！**

## もっと簡単な方法もあります...

**実は他にも、「[Notion Automations](https://notion-automations.com/calendar/)」**という外部ツールがあり、これを使えば**Googleカレンダーと双方向で同期**することができます。「the:gist」より使い勝手も良いです。ただし、月500円という価格設定であり、個人で少しだけ使うのは少し勿体無いと思います。

[![Image from Gyazo](https://i.gyazo.com/9c06dc485dfeef48bc92a8efcdde705d.png)](https://gyazo.com/9c06dc485dfeef48bc92a8efcdde705d)

> **「Notion Automations」**
> 価格:５ドル（月５００円）
> 機能:カレンダーの双方向同期

##