---
title: "How much machine learning does Duolingo use?"
emoji: "🦉"
tags:
  - "dev"
  - "llm"
published_at: "2025-12-02T00:00:00.000Z"
description: "I've heard that the language-learning app Duolingo uses machine learning everywhere — where exactly is it used? I looked into it."
isTranslated: true
sourcePath: "ja/tech/duolingo-machine-learning.md"
sourceHash: "d293b553c2a511e31b0414248c24b0a9ff4ef2cf922eaa3d19b2709a7ea4fca9"
---

> I wrote this blog post to deepen my own understanding of machine learning and share that knowledge with others. I'm not a machine learning expert, so I may be mistaken. This article is also published on my website ( https://tokumaru.work/ja )

As of 2025, applying machine learning to internet services has become so common that you can find plenty of examples just by searching. However, I think there are only a handful of services that truly leverage it well — services that successfully use it and have a solid user base.

The language-learning app Duolingo (many of you have probably seen it at least once) is a prime example. According to their official blog, they use machine learning in various scenarios.

https://www.duolingo.com/

In this article I’ll introduce how machine learning is used on the language-learning platform Duolingo[^1] and how it affects the product, referencing several features.

## What is machine learning?

Even when you say "machine learning" in one word, there are many ways to use it and definitions vary by person. For example, the judgment "That red, round thing is probably an apple" is a type of machine learning.

Machine learning can be seen as changing inputs into appropriate outputs based on data (at least as far as I understand).

### Types of machine learning

There are various kinds of machine learning. For example, depending on whether labeled data is available, it can be divided into supervised and unsupervised learning. Below are the main types of machine learning.

| Type | Description | Use cases |
| ------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Classification | Learn correct answers for inputs (output classes) | Email spam detection |
| Regression | Learn the correct value for inputs | Price estimation in real estate services (this place would be this price)<br>Predicting listing prices on Mercari -> used for listing price recommendations |
| Clustering | Unsupervised learning. Predict which cluster the data belongs to | Prevent the problem of duplicate news items about the same event (if this news is already out, you don't need another article from the same group) |
| Recommendation | Includes collaborative filtering and content-based filtering; recently most systems use both | Present items the user might like (people who bought this item also bought that item)<br><br>However, if an item hasn't sold, it can't be recommended, so content-based methods are often used too |
| Nearest-neighbor search | Find similar items. Similar technology to content-based filtering, using vector representations | Like word2vec. Used to find related articles, etc. |
| Anomaly detection | Detect outliers or change points | Stop the factory if odd numbers appear (not just a single parameter) |
| Reinforcement learning | Find optimal methods | Common in game AI (AlphaGo) and robot control; web site use cases are relatively rare |

#### The need for labeled data

Labeled data (supervised data) means providing input-output pairs as teachers to train a model. If there is no labeled data, it becomes unsupervised learning.

For example, with labeled data, you can train a model with examples like "this image is a cat," and then show a different cat later and have the model determine whether it's a cat. Without a teacher, you use it differently: there is no correct answer, but you can perform tasks like grouping similar news articles together to prevent duplicates.

Separately, there is reinforcement learning. Humans tend to improve when praised. In the same way, you give a machine a score (reward) for its actions and have it aim for actions that yield higher rewards, thereby finding optimal behaviors.

### Difference from deep learning

Deep learning, which came later as research progressed, learns more complex language, image, and video data at larger scale and automatically finds features. To be honest, I don't fully understand it, so I won't go into deep learning here. (Deep learning data itself tends to be somewhat of a black box, so explaining it here might be difficult.)

## Examples of usage in Duolingo

Let's look at some examples of how Duolingo uses machine learning. Recently, Duolingo has been offering a service called Duolingo Max[^2], which uses LLMs (large language models) and has attracted attention, but they are also working to improve service quality using other machine learning approaches. In fact, the basic service may rely on machine learning for almost everything.

### 1: Prioritizing course improvements

Duolingo has a system that lets users freely type words into input fields and then checks their answers. Unlike multiple-choice questions, users can enter whatever they like in the blanks, and the system needs to check the answer. Because users can input freely, it's rare for an answer to exactly match the pre-set correct answer. Therefore, the answer-checking system needs to be somewhat flexible. Duolingo uses machine learning to prioritize improvements to this system.[^3]

Before this system, there was a team that edited question answers, handled by volunteers (now discontinued) and staff. They also accepted user reports through a report button displayed after a user completed a question.

However, as the user base grew, the number of reports became enormous. Most reports are users reporting issues they actually experienced, and with such a large platform, it's hard to tell whether a reported problem is Duolingo's mistake or ~~the user reported it because they don't want to admit their own mistake~~ the user reported it incorrectly.

> These days, about 10% of the reports we get are correct and require a fix; most of the remaining 90% contain some kind of mistake.

Therefore, they use machine learning to find "the problems that really need fixing." It's a kind of classification model that determines whether "this report can be ignored or should be fixed." The model looks at text previously entered by the user, the user's credibility, the degree of divergence between the correct data and the user's text, and so on. It also detects characteristics of the errors (whether it's a grammar mistake, or a valid variation such as answering in American English when British English was expected).

By classifying reports in this way, most reports that can be ignored are filtered out, and staff can focus only on the issues that truly need attention.

Of course, depending on model accuracy, these systems can occasionally make mistakes and shouldn't be blindly trusted. However, given the huge volume of reports and that staff can't manually check them all, prioritizing the most frequently reported and highest-impact issues first is a reasonable approach.

According to the article, this improvement significantly increased the efficiency of course improvements.

https://blog.duolingo.com/how-machine-learning-helps-duolingo-prioritize-course-improvements/

### 2: Ad optimization

Duolingo serves ads to monetize the service. There are two types: internal ads that promote Duolingo's own services, and external ads that promote third-party services (affiliate ads). In Duolingo, in-app purchases and ad revenue are the main revenue sources.

Showing external ads in a free app is common these days, but excessive ads can harm user experience, increase churn, and ultimately reduce revenue.

In ad delivery, it's important to optimize the frequency and content of ads. As of 2025, Duolingo uses machine learning to decide whether to show internal or external ads.[^4]

Previously, they ran A/B tests and displayed ads conditionally based on the results, but after switching to this system, it produced tens of millions of dollars in additional annual revenue. The old system was fragmented across multiple systems, causing bugs and technical debt, but replacing them with a machine learning system made it simpler and more scalable.

> The impact was fast and impressive. In the first few months, the new model delivered millions of dollars in incremental annual revenue. After refining the model and fixing some pre-existing bugs, that number grew to tens of millions per year. Today, our ads decision space has become Duolingo’s largest revenue source, driving roughly a quarter of our year-over-year revenue growth.

They now model not only the decision between internal/external ads but also more complex decisions (for example, selecting which internal ad to show).

https://blog.duolingo.com/machine-learning-ads/

### 3: Getting users to open the app

To ease the narrative a bit, here’s a simpler and more tangible example of machine learning that affects user experience.

Anyone who has installed Duolingo knows they are very strategic about getting users to open the app. Beyond marketing with the green bird that runs wild on social media, they use email, background app notifications, and various other methods to prompt users to open the app. With so many apps on a smartphone, getting a user to tap an app that's tucked away on the home screen has become very difficult. Even if a user becomes engaged once they open the app, you first have to get them to open it.

Duolingo has built a notification algorithm using machine learning to make users open the app at all costs.[^6]

Duolingo sends users various notifications based on templates. Here are some examples:

> - _You’re on fire - Continue your 109 day Spanish streak on Duolingo._
> - _Streak wager reminder - You’re on day 2 of your 7-day streak wager! Now get to day 3!_
> - _Ready for your trip? - Take 5 minutes to practice Italiannow_

When choosing the most effective notifications, the multi-armed bandit problem usually appears. You might say, "I went to a pachinko parlor but don't know which machine will pay out. Should I try various machines to find one likely to hit, or should I stick with the machine that seems most likely to pay out based on what I currently know?" Replacing this with Duolingo, it becomes "Should we try various notifications to find which one has the most effect on users, or should we send the notification that seems most effective from what we currently know?"

However, when translating this into machine learning, a problem arises. ~~Humans are lazy creatures, so~~ people tend to become less likely to take action if sent the same unchanged thing repeatedly, so sending the same notification multiple times won't make them open the app. Even if you find the single most effective notification, sending it repeatedly will reduce its effectiveness.

So Duolingo developed a clever algorithm that gets users to open the app without sending the same notification over and over. In addition to the expected values obtained from the bandit algorithm, they take into account user forgetting and send notifications accordingly. They don't personalize heavily; instead they do things like, "This notification template is the most popular, but this person saw this notification last time and their score was low, so send a different one today," or "It's been a while since this notification was shown, so the score has recovered. Send the notification." It looks simple, but for a service with many users, reducing computational cost is crucial, so this approach seems very reasonable.

When I thought of machine learning, I imagined a model that you feed inputs to, but when you consider it, using daily-updated database data and user behavior logs to compute decisions and make choices is itself a solid example of machine learning.

https://research.duolingo.com/papers/yancey.kdd20.pdf

## Risks in operation

Using data-driven decision-making extensively like Duolingo does introduces various risks. For example, modeling the ad decision in Case 2 might increase revenue but could negatively affect session length.

### Risk mitigation: A/B testing

https://blog.duolingo.com/improving-duolingo-one-experiment-at-a-time/

Duolingo runs A/B tests and improves the system based on the results.[^5] They use an in-house testing tool to roll out new features and experiments to users and analyze the results to improve the system.

Their in-house tool sets key metrics that must always be monitored and additional metrics to monitor for each experiment, and by observing these they improve the system. This has enabled faster iteration of A/B tests.

## What value has Duolingo created through machine learning?

By heavily using machine learning, Duolingo has simplified and made its system flows sustainable while improving profitability. They also test how things change compared to the previous methods when introducing new approaches, minimizing negative impacts that may arise from system changes.

## References & Notes

[^1]: [Duolingo](https://www.duolingo.com/)
[^2]: [Duolingo Max](https://www.duolingo.com/max)
[^3]: WILL MONROE, PH.D., DECEMBER 16, 2019 - [how machine learning helps duolingo prioritize course improvements (Duolingo Blog)](https://blog.duolingo.com/how-machine-learning-helps-duolingo-prioritize-course-improvements/)
[^4]: NAVEEN SHANKAR, MARCH 18, 2025 - [how machine learning supercharged our revenue by millions of dollars](https://blog.duolingo.com/machine-learning-ads/)
[^5]: LAVANYA APRAMEYA, JANUARY 10, 2020 - [improving duolingo, one experiment at a time](https://blog.duolingo.com/improving-duolingo-one-experiment-at-a-time/)
[^6]:[A Sleeping, Recovering Bandit Algorithm for Optimizing	Recurring Notifications]((https://research.duolingo.com/papers/yancey.kdd20.pdf), JANUARY 10, 2020