---
title: "【Notion】How to create free automatic notifications using formulas"
emoji: "🤖"
tags:
  - "notion"
published_at: "2021-11-22T00:00:00.000Z"
isTranslated: true
sourcePath: "ja/tech/notion-notification-function.md"
sourceHash: "b426b06b18e5302c663048382fb70a4a3889b278157f15987e7e353bea8e5c57"
---

# 【Notion】How to create free automatic notifications using formulas

[![Image from Gyazo](https://i.gyazo.com/e3e188f6c332d548eae437e39be4a807.png)](https://gyazo.com/e3e188f6c332d548eae437e39be4a807)

Notion is convenient, isn't it? I migrated from Trello and find it extremely useful, but there's one thing that left me **a bit disappointed.**

## No notification when the time comes...

A few days after I started using it, I noticed that **reminders don't come through**.

Unlike Trello, Notion doesn't automatically remind you when you set a time — you need to either type `/remind` or toggle the switch when setting it from the calendar property.

[![Image from Gyazo](https://i.gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c.png)](https://gyazo.com/7fcf5777053ff01cb2eb4efcea5cbd4c)

If you're thinking, “Oh, it's just toggling a switch,”

**this feature is tricky**: when you're jotting down notes quickly and forget to toggle it, **you won't get any notification even when the due date arrives.** That's really inconvenient.

So I decided to fix this shortcoming by **relying on an external tool.**

## the:gist

By using **[the gist](https://www.thegist.so)**, you can create automatic reminders for **free**. This app is a service that **detects specific events** and sends notifications.

[![Image from Gyazo](https://i.gyazo.com/adeaa61701d46a54986681e355701023.png)](https://gyazo.com/adeaa61701d46a54986681e355701023)

> **“the:gist”**
> Price: Freemium (the first one is free)
> Functionality: Detects events in Notion

## Let's set up “the:gist”!

the:gist is a handy piece of software, but it requires **a bit of configuration** to use as a reminder. I couldn't find a clear guide on other websites, so I'm writing it down here.

## Settings on the Notion side

As mentioned earlier, the:gist is an app that **reacts to specific actions**, so you need to make Notion trigger a specific action when the time comes. For that, we'll use a **calendar and a Formula** property.

This time we want to remind 1 day before the due date, so we'll **use a dateBetween property to calculate the remaining days**, and when the remaining days equals 1, **the:gist will send a notification**.

First, **select Formula from the properties**.

[![Image from Gyazo](https://i.gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a.png)](https://gyazo.com/2c0fcdd9827bfc48dc9b431178fdbb8a)

Then, enter the dateBetween command into the property you created. **Replace the "日付？" part with the name of the calendar property you are using.**

```
dateBetween(prop("日付？"), now(), "days")
```

This lets you **calculate the remaining days**.

Next, set it to **trigger an action when the remaining days is 1**.

Add another Formula property as before, and **copy and paste the following**. Replace **(残り日数)** with the name of the dateBetween property you created earlier.

```
if(prop("残り日数") < 1, "yes", "no") == "yes"
```

This will check the box when the remaining days becomes 1!

## Settings on the the:gist side

Once you've done this, you're **almost finished**!

First, connect [the:gist](https://app.thegist.so/) following the steps (it will do this automatically). There's no need to explain how to do that here.

[![Image from Gyazo](https://i.gyazo.com/05aa0cf1bf34499e55102532c4f700ea.png)](https://gyazo.com/05aa0cf1bf34499e55102532c4f700ea)

> **Name:** Reminder name
> **In:** Database name
> **if:** What to detect. Set it so that the checkbox property name becomes ✅
> **then:** Action when detected. **Here set it to email when the checkbox is checked.**

If you enter the above, you should receive an email notification. Well done!

## There is an even easier way...

Actually, there is another external tool called **[Notion Automations](https://notion-automations.com/calendar/)** that can **sync with Google Calendar bidirectionally**. It's more convenient to use than the:gist. However, it costs about $5/month, which might be a bit much if you're using it only a little personally.

[![Image from Gyazo](https://i.gyazo.com/9c06dc485dfeef48bc92a8efcdde705d.png)](https://gyazo.com/9c06dc485dfeef48bc92a8efcdde705d)

> **“Notion Automations”**
> Price: $5 (¥500/month)
> Functionality: Bidirectional calendar sync

##