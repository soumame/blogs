---
title: "【Notion】How to Create Free Automatic Notifications Using Functions"
emoji: "🤖"
tags:
  - "template"
published_at: "2021-11-22"
---

# How to Create Free Automatic Notifications in Notion Using Functions

[![Image from Gyazo](https://i.gyazo.com/e3e188f6c332d548eae437e39be4a807.png)](https://gyazo.com/e3e188f6c332d548eae437e39be4a807)

Notion is convenient, isn't it? I also migrated from Trello and find it very useful, but there's **one disappointing thing.**

## No notifications when time comes...

After using it for a few days, I noticed that **reminders weren't coming**.

Unlike Trello, Notion doesn't automatically remind you when you set a time. You need to either type /remind or **toggle a switch** when setting it in calendar properties.

[![Image from Gyazo](https://i.gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c.png)](https://gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c)

For those thinking "Oh, it's just toggling a switch!"

This feature is **tricky** because if you forget while quickly taking notes, **you won't get any notifications when the due date comes**. This is very inconvenient.

So, I decided to solve this drawback by **using external tools**.

## the:gist

You can create automatic reminders for **free** using **"[the gist](https://www.thegist.so)"**. This app is a service that **detects specific events** and sends notifications.

[![Image from Gyazo](https://i.gyazo.com/adeaa61701d46a54986681e355701023.png)](https://gyazo.com/adeaa61701d46a54986681e355701023)

> **"the:gist"**
> Price: Freemium (First one free)
> Function: Detects Notion events

## Let's Set Up "the:gist"!

While the:gist is useful software, it **needs some setup** to use as a reminder. Since I **couldn't find this** on other websites, I decided to write it here.

## Notion Settings

As mentioned earlier, the:gist is an app that **reacts to specific actions**, so you need to make Notion perform a specific action when the time comes. For this, we'll use **calendar and formula** properties.

Since we want to remind **one day before** the deadline, we'll **calculate remaining days using the datebetween property** and send a notification through the:gist when one day remains.

First, **select Formula from properties**.

[![Image from Gyazo](https://i.gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a.png)](https://gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a)

Then, enter the datebetween command in the created property. **Replace "Date?" with the name of your calendar property.**

```
dateBetween(prop("Date?"), now(), "days")
```

This allows you to **calculate the remaining days.**

Next, set it to **trigger an action when one day remains**.

Add another Formula property like before and **copy-paste the following**. Replace **(remaining days)** with the **name of the datebetween property** you just created.

```
if(prop("remaining days") < 1, "yes", "no") == "yes"
```

Now a checkbox will be checked when one day remains!

## **the:gist Settings**

We're **almost there**!

First, connect [the:gist](https://app.thegist.so/) following the instructions (it's automatic). The process is self-explanatory.

[![Image from Gyazo](https://i.gyazo.com/05aa0cf1bf34499e55102532c4f700ea.png)](https://gyazo.com/05aa0cf1bf34499e55102532c4f700ea)

> **Name:** Reminder name
> **In:** Database name
> **if: Set the checkbox property name to become ✅**
> **then:** Action when detected. **Here, set email to be sent when checked.**

**If you input as above, you should receive email notifications. Good job!**

## There's an easier way too...

**Actually, there's another external tool called "[Notion Automations](https://notion-automations.com/calendar/)"** which allows **two-way synchronization with Google Calendar**. It's more user-friendly than "the:gist". However, it costs $5 per month, which might be a bit expensive for individual casual use.

[![Image from Gyazo](https://i.gyazo.com/9c06dc485dfeef48bc92a8efcdde705d.png)](https://gyazo.com/9c06dc485dfeef48bc92a8efcdde705d)

> **"Notion Automations"**
> Price: 5 dollars (500 yen per month)
> Function: Two-way calendar synchronization

##
