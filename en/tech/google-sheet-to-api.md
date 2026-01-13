---
title: "Let's Read Google Sheets via API!"
emoji: "🤖"
tags:
  - "dev"
published_at: "2024-06-22T00:00:00.000Z"
isTranslated: true
sourcePath: "ja/tech/google-sheet-to-api.md"
sourceHash: "ca1dcaaab5e1ca5b733ccb734c1825632f18c9f0f6708f2e90d6a59cd7414e7c"
---

# Let's Read Google Sheets via API!

[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)

> This is a re-publication of an article I wrote on another site last year.

It's super easy. I'll explain how to read information written in Google Sheets using an API. With a little application, it can also be used as a simple CMS! It's super easy to use, so please take a look.

## Let's Create a Spreadsheet

It's obvious, but first you need to create a spreadsheet. To make it easier to understand, I recommend creating it as follows.

$$
\begin{array}{|c|c|c|c|c|} \hline
いつ（yyyy-mm) & どこで & 何を & どのように & リンク \\ \hline
2023-08 & 東京で & すしを食べた & もぐもぐ。 & url \\ \hline
2022-05 & マレーシアで & ナシレマを食べた & スプーンを使って食べた & url \\ \hline
\end{array}
$$

I wanted to create a page like a diary, so I made it this way. You might think, "Will the top row be read as well?" but it can be configured not to read it, so it's okay.

## Let's Try Using the API

### Enable Google Sheets API

First, enable the Google Sheets API from the following site.
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

Click the enable button to turn it on.

### Create an API Key

Go to the "API & Services" page, and create new credentials.

Click "Create API Key". Now everything is ready! Just send a request to the API!

### Sending a Request to the API

The Google Sheets API can be used by sending a request to sheets.googleapis.com. Below is the link including the necessary items for your retrieval. Please adjust it according to your own sheet.

```
<https://sheets.googleapis.com/v4/spreadsheets/{SheetID}/values/{SheetName!Start:End}/?key={APIKey}>
```

- Sheet ID

  - Enter your sheet's ID.

  - The part indicated in the address that appears when you open your spreadsheet is the Sheet ID. [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

- SheetName!Start:End

  - Input the sheet name displayed at the bottom. If there's only one sheet, you can leave it out.

- API Key

  - Enter the API key you just created.

## Done! Let's Send the API Request!

When you send the completed API request, the following message will appear on your screen. If it displays, you've succeeded! Yay!

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "東京で", "チキンを食べた", "もぐもぐ", "https://google.com", "bg-green" ] ] }
```