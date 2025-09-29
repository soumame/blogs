---
title: "Let's Read Google Spreadsheets via API!"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-06-22"
istranslated: true
---

# Let's Read Google Spreadsheets via API!

[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)

> This is a repost of an article I wrote on another site last year.

It's super easy! I'll explain how to read information from Google Spreadsheets using an API.
With some customization, you can even use it as a simple CMS! Just copy and paste to get started.

## Let's Create a Spreadsheet

Obviously, we first need to create a spreadsheet. For clarity, I recommend creating it like this:

$$
\begin{array}{|c|c|c|c|c|} \hline
When (yyyy-mm) & Where & What & How & Link \\ \hline
2023-08 & In Tokyo & Ate sushi & Nom nom. & url \\ \hline
2022-05 & In Malaysia & Ate Nasi Lemak & Ate with a spoon & url \\ \hline
\end{array}
$$

I wanted to create something like a diary page, so I did it this way. You might wonder "Won't it read the top row too?" but don't worry - we can configure it not to.

## Let's Use the API

### Enable Google Sheets API

First, enable the Google Sheets API from this site:
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

Click the enable button to activate it.

### Create an API Key

Go to the "APIs & Services" page and create new credentials.

Click "API Key" to create one. Now we're ready! All that's left is to send requests to the API!

### Send Requests to the API

You can use the Google Sheets API by sending requests to sheets.googleapis.com.
Here's the link format containing everything needed for retrieval. Please modify it according to your sheet:

```
<https://sheets.googleapis.com/v4/spreadsheets/{SheetID}/values/{SheetName!StartPoint:EndPoint}/?key={APIKey}>
```

- Sheet ID

  - Enter your sheet ID

  - In the address shown when you open your spreadsheet, the underlined part below is your sheet ID: [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

- SheetName!StartPoint:EndPoint

  - Enter the sheet name shown at the bottom. If you only have one sheet, you can skip this

- API Key

  - Enter the API key you just created

## Done! Let's Send the API Request!

When you send the completed API request, you'll see text like this on screen. If you see it, you've succeeded! Hooray!

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "In Tokyo", "Ate chicken", "Nom nom", "https://google.com", "bg-green" ] ] }
```
