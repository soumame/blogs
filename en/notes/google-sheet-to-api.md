---
title: "Let's Read Google Sheets via API!"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-06-22"
---

# Let's Read Google Sheets via API!

[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)

> This is a repost of an article I wrote on another site last year.

It's super easy. I'll explain how to read information written in Google Sheets using something called an API.
With some application, you can even use it as a simple CMS! You can use it just by copying and pasting, so please take a look.

## Let's Create a Spreadsheet

Obviously, you first need to create a spreadsheet. For clarity, I recommend creating it like this:

$$
\begin{array}{|c|c|c|c|c|} \hline
When (yyyy-mm) & Where & What & How & Link \\ \hline
2023-08 & In Tokyo & Ate sushi & Nom nom. & url \\ \hline
2022-05 & In Malaysia & Ate Nasi Lemak & Ate with a spoon & url \\ \hline
\end{array}
$$

I wanted to create something like a diary page, so I did it this way. You might think "Won't it read the top row too?" but don't worry, we can set it up so it doesn't.

## Let's Use the API

### Enable Google Sheets API

First, enable the Google Sheets API from the following site:
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

Press the enable button to activate it.

### Create an API Key

Go to the "APIs & Services" page and create new credentials.

Click on "API key" to create one. Now the preparation is complete! All that's left is to send requests to the API!

### Send Requests to the API

You can use the Google Sheets API by sending requests to sheets.googleapis.com.
Here's the link that includes everything needed for retrieval. Please use it according to your sheet:

```
<https://sheets.googleapis.com/v4/spreadsheets/{SheetID}/values/{SheetName!StartPoint:EndPoint}/?key={APIKey}>
```

- Sheet ID

  - Enter your sheet ID

  - The underlined part in the address shown when you open your spreadsheet is the sheet ID: [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

- SheetName!StartPoint:EndPoint

  - Enter the sheet name shown at the bottom. If you only have one sheet, you don't need to include this

- API Key

  - Enter the API key you created earlier

## Done! Let's Send the API Request!

When you send the completed API request, text like this will appear on the screen. If it displays, you've succeeded! Hooray!

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "In Tokyo", "Ate chicken", "Nom nom", "https://google.com", "bg-green" ] ] }
```
