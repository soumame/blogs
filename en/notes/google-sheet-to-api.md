Here's the English translation while maintaining the markdown formatting:

---
title: "Let's Read Google Sheets via API!"
emoji: "🤖"
tags:
  - "template"
published_at: "2024-06-22"
---

# Let's Read Google Sheets via API!

<figure name="98b2c5ec-2d37-43d9-867e-7fdef4229ee3">[![Image from Gyazo](https://i.gyazo.com/6a095cc268da576355197126bde0b519.png)](https://gyazo.com/6a095cc268da576355197126bde0b519)</figure>

<figure name="ec2fc191-047d-473e-922d-ed32d1ecbac0" id="ec2fc191-047d-473e-922d-ed32d1ecbac0">

> This is a repost of an article I wrote on another site last year.

</figure>

It's super easy. I'll explain how to read information written in Google Sheets using something called an API.
With some application, you can even use it as a simple CMS! You can use it just by copying and pasting, so please take a look.

## Let's Create a Spreadsheet {#00d4b71d-8a21-4a1a-b1c3-d7d9701adc4f}

Obviously, you first need to create a spreadsheet. For clarity, I recommend creating it like this:

$$
\begin{array}{|c|c|c|c|c|} \hline
When (yyyy-mm) & Where & What & How & Link \\ \hline
2023-08 & In Tokyo & Ate sushi & Nom nom. & url \\ \hline
2022-05 & In Malaysia & Ate Nasi Lemak & Ate with a spoon & url \\ \hline
\end{array}
$$

I wanted to create something like a diary page, so I did it this way. You might think "Won't it read the top row too?" but don't worry, we can set it up so it doesn't.

## Let's Use the API {#d4141c22-e8fc-4826-8868-ae7f26b4b823}

### Enable Google Sheets API {#0eb517b6-c0b0-427e-9f90-2e758f5a3d5b}

First, enable the Google Sheets API from the following site:
[Google Cloud console](https://console.cloud.google.com/apis/library/sheets.googleapis.com)

Press the enable button to activate it.

### Create an API Key {#7552e20d-7451-4fbb-a67f-78dcd0c75f8c}

Go to the "APIs & Services" page and create new credentials.

Click on "API key" to create one. Now the preparation is complete! All that's left is to send requests to the API!

### Send Requests to the API {#a7ac33a2-8657-4bab-a20e-53920bed9510}

You can use the Google Sheets API by sending requests to sheets.googleapis.com.
Here's the link that includes everything needed for retrieval. Please use it according to your sheet:

```
<https://sheets.googleapis.com/v4/spreadsheets/{SheetID}/values/{SheetName!StartPoint:EndPoint}/?key={APIKey}>
```

* Sheet ID

    * Enter your sheet ID

    * The underlined part in the address shown when you open your spreadsheet is the sheet ID: [https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080](https://docs.google.com/spreadsheets/d/**xxxxx-xxxxxxxxxx**/edit#gid=1472330080)

* SheetName!StartPoint:EndPoint

    * Enter the sheet name shown at the bottom. If you only have one sheet, you don't need to include this

* API Key

    * Enter the API key you created earlier

## Done! Let's Send the API Request! {#576a607d-f104-458a-b583-467f6038d481}

When you send the completed API request, text like this will appear on the screen. If it displays, you've succeeded! Hooray!

```
{ "range": "Japanese!A2:F10", "majorDimension": "ROWS", "values": [ [ "2023-08", "In Tokyo", "Ate chicken", "Nom nom", "https://google.com", "bg-green" ] ] }
```
