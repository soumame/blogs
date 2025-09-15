---
title: 【統合&amp;Java】無料でマイクラのワールドを3Dに変換！
emoji: 🤖
tags:
  - ゲーム
  - Blender
published_at: 2022-12-02
---

# 【統合&amp;Java】無料でマイクラのワールドを3Dに変換！

[![Image from Gyazo](https://i.gyazo.com/c4ca9b6081cf42b27472bb8e1cd58e18.png)](https://gyazo.com/c4ca9b6081cf42b27472bb8e1cd58e18)

結構この手の話はよく質問されるので、noteにまとめておきます。統合版は途中でJavaに変換するプロセスが必要なので両方のバージョンを購入している必要があります。

### 必要なもの
* マインクラフト Java Edition

* PC/Mac等アプリを使える端末

* Javaのランタイム環境

必要なものがない場合はインストールしてください。

統合版から変換する人は「Minecraft Bedrock edition」とWindows10以上のPCが必要になります

### ステップ１ - ワールドを準備する
（ワールドを 3Dにしに来たのに、ワールドが無いという事はないと思いますが…）
お試しでやりたい人は、適当なワールドを生成するのでも大丈夫です

Education Editionを使用している方は、MCpack化＆拡張子変換して中にあるDBファイルと呼ばれるファイルを取り出してそれを統合版のものに書き換える必要があります。**よくわからない場合はDBファイルには触れないことをお勧めします。マイクラのワールドが破損する可能性があります。**

### ステップ２(統合版のみ) - Java版のワールドに変換する
専用のアプリを使用してワールドを変換します。１つ目に紹介するのは""je2be"で無料です。２つ目のものは有料のUniversal Minecraft Toolというものです。ここでは１つ目のje2beを用いた手順を説明します。

[https://apps.microsoft.com/store/detail/je2be/9PC9MFX9QCXS?hl=ja-jp&gl=jp](https://apps.microsoft.com/store/detail/je2be/9PC9MFX9QCXS?hl=ja-jp&gl=jp)

[https://www.universalminecrafttool.com/](https://www.universalminecrafttool.com/)

インストール＆アプリを開き、「統合版からJavaへ」をクリックするとこのようにワールドのリストが表示されます。

[![Image from Gyazo](https://i.gyazo.com/851078a10a8c28b035f2b4eca81d290e.png)](https://gyazo.com/851078a10a8c28b035f2b4eca81d290e)

*選択画面*

表示されたワールドの中から目的のものを選択して変換を開始します。

[![Image from Gyazo](https://i.gyazo.com/049c57ad120123505f60ea260b1dc3bf.png)](https://gyazo.com/049c57ad120123505f60ea260b1dc3bf)

*変換中*

変換が終了するとJava版の形式で保存する画面が出ますので、お好きなところに保存してください。

> 保存した場所を見失うことが多いので、savesフォルダ(C:\Users\(ユーザー名)\AppData\Roaming\.minecraft\saves)に保存すると良いです。

保存が完了したら、変換のプロセスは終了です。簡単でしょ？（煽）

### ステップ3 - ワールドを3D形式に変換する
ここからが本題です。ここでは、マインクラフトのワールド取り出して3Dに変換するソフト「jmc2obj」を使用します。以下のリンクからダウンロードしてください

[https://github.com/jmc2obj/j-mc-2-obj/releases](https://github.com/jmc2obj/j-mc-2-obj/releases)

> jmc2objの使用方法の説明は、[https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started](https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started)
> から引用しています（英語）

1. ダウンロードしたフォルダーを好きなところに配置

2. "jMc2Obj-[バージョン].jar"となっているファイルを開く

3. 画像の[…]となっているボタンを押し、先ほど保存したJava版のワールドがあるファイルを選択(savesに保存した場合は設定の必要はないかと思われる)

4. ディレクトリの欄にある[∨]をクリックし、読み込みたいワールドを選択

5. その後、隣にある[Load]をクリックしてワールドをひらく

[![Image from Gyazo](https://i.gyazo.com/bb11a66978329fa3859a13702352196e.png)](https://gyazo.com/bb11a66978329fa3859a13702352196e)

*https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-startedから引用*

ワールドが正常に開けると下の画像のようになります。以下が手順です

1. ドラッグして範囲を選択し、[Export]をクリックするとエクスポート設定ができます。(推奨設定はoffsetを "Center"、"Create a separate object for each material"にチェックです。)
    他にも色々設定できますがここではすっ飛ばします。自分でググってください

2. 設定画面にある[export]をクリックすることで書き出しを開始します。選択した範囲や、書き出し設定によって書き出し時間は変化します。

3. 書き出しが完了したら保存画面が出るので好きな場所を選んで保存します。形式はOBJ,MTLで保存され、texファイルにテクスチャが保存されます（texファイルにテクスチャの一部が保存されます。）

[![Image from Gyazo](https://i.gyazo.com/508465d744c1cd1b25d9e680c2bb8d92.png)](https://gyazo.com/508465d744c1cd1b25d9e680c2bb8d92)

*ジャーン！これだけでもすごい！*

### ステップ４ - 3Dに変換したワールドをBlenderで読み込む
ここではBlenderという無料で使えるソフトウェアを使用して先ほど作成したデータを取り込みます。

> え…? Blender使ったことがない…?であれば、ごめんなさい。説明すると日が暮れます。まじで。とりあえず使い方は説明するけど、覚悟してください

データを取り込むために、mcprepという拡張機能（アドオン）を使用します。これによりマテリアルなどをセットアップせずにすぐに読み込むことができます

[https://theduckcow.com/free-download/](https://theduckcow.com/free-download/)

上のリンクからMCprepを選択してダウンロードします。
ダウンロードしたら、Blenderにアドオンとして追加します。

[![Image from Gyazo](https://i.gyazo.com/3fa8f57fc05a846b6e3459b12a2a8fb1.png)](https://gyazo.com/3fa8f57fc05a846b6e3459b12a2a8fb1)

*アドオン*

[https://styly.cc/ja/tips/nimi-blender-addon/#Blender](https://styly.cc/ja/tips/nimi-blender-addon/#Blender)

↑追加方法はこちらから

追加が完了したら、Blenderの右側にMCprepのタブが追加されます。このアドオンを使用して、テクスチャ割り当てを自動化します。

[jmc2obj]をクリックして、[import OBJ]をクリックして、ファイルをインポートします。

[![Image from Gyazo](https://i.gyazo.com/0a3076f2f6d698432ac493331e6c9ce6.png)](https://gyazo.com/0a3076f2f6d698432ac493331e6c9ce6)

*MCprepのボタンを押すと開けます*

[![Image from Gyazo](https://i.gyazo.com/9c5967c6a8a298a7b4f88c7b8b189ddd.png)](https://gyazo.com/9c5967c6a8a298a7b4f88c7b8b189ddd)

*ここをクリックします*

無事にワールドが開けたら成功です。右上のボールのボタンを押して、レンダリングビューにして見てみましょう。

[![Image from Gyazo](https://i.gyazo.com/12ee2d4e3fa8ee9c28473ef3585f36c1.png)](https://gyazo.com/12ee2d4e3fa8ee9c28473ef3585f36c1)

*左から順に、ワイヤーフレーム、ソリッドシェーディング、マテリアルプレビュー、レンダービューと段々きれいになっていきます。これを押すと…?*

[![Image from Gyazo](https://i.gyazo.com/6d2afc1661425647f2d1c642286c07bb.png)](https://gyazo.com/6d2afc1661425647f2d1c642286c07bb)

*うおっ！！きれいすぎっッ！！*

あとはお好みでライト、サンなどを足して、カメラを配置すれば完成です！

お疲れ様でした！

### 私が運営すしているチーム逸般人の宣伝
小中高生のぶっ飛んだ学生💥が集まったクリエイター集団
マインクラフト・3DCG・映像・教育などをテーマに活動中
🏆Minecraftカップ2021インプレス賞受賞🏆

[https://outstndrs.start.page/](https://outstndrs.start.page/)