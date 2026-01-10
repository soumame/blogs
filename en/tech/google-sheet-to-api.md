---
title: "Load Google Spreadsheets via the API!"
emoji: "🤖"
tags:
  - "dev"
published_at: "2024-06-22T00:00:00.000Z"
isTranslated: true
sourcePath: "ja/tech/google-sheet-to-api.md"
sourceHash: "ca1dcaaab5e1ca5b733ccb734c1825632f18c9f0f6708f2e90d6a59cd7414e7c"
---

# Load Google Spreadsheets via the API!

[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)

> This is a re-publication of an article I wrote on another site last year.

It's super simple. I'll explain how to read the information written in Google Sheets using something called an API. With some adaptation, you can even use it as a simple CMS! You can use it by copy-pasting, so please take a look.

## Create a spreadsheet

Obviously, you first need to create a spreadsheet. To make it easy to understand, I recommend creating it like the following.

$$
\begin{array}{|c|c|c|c|c|} \hline
When (yyyy-mm) & Where & What & How & Link \\ \hline
2023-08 & in Tokyo & ate sushi & nom nom. & url \\ \hline
2022-05 & in Malaysia & ate nasi lemak & ate it using a spoon & url \\ \hline
\end{array}
$$

For example, I wanted to create a page like a diary, so I did it like this. You might think, "Won't it also read the top row?" but you can set it not to read that, so it's fine.

## Let's use the API

### Enable the Google Sheets API

First, enable the Google Sheets API from the following site.
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

Click the enable button to enable it.

### Create an API key

Go to the "APIs & Services" page and create new credentials.

Click "API key" to create it. Now you're ready! Next, send a request to the API!

### Send a request to the API

You can use the Google Sheets API by sending requests to sheets.googleapis.com.
Below is a link that includes what you need to fetch this time. Use it according to your own sheet.

```
<https://sheets.googleapis.com/v4/spreadsheets/{sheetId}/values/{sheetName!start:end}/?key={APIKey}>
```

- Sheet ID

  - Enter your sheet's ID.

  - The underlined part of the address displayed when you open your spreadsheet is the sheet ID: [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

- sheetName!start:end

  - Enter the sheet name shown at the bottom. If you only have one sheet, you don't have to include this.

- API key

  - Enter the API key you created earlier.

## Complete! Let's send the API request!

If you send the completed API request, you'll see something like the following displayed. If it appears, you're successful! Yay!

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "in Tokyo", "ate chicken", "nom nom", "https://google.com", "bg-green" ] ] }
```