---
title: "Let's Do Team Development with GitHub"
emoji: "💻"
tags:
  - "coding"
  - "dev"
  - "team-dev"
published_at: "2025-10-06T00:00:00.000Z"
description: "This article briefly explains how to use GitHub for those who signed up but think they won't use it because they're not developers."
isTranslated: true
sourcePath: "ja/tech/github-team-dev.md"
sourceHash: "ca5e5315b14f203838664e0c0005f8957d6d0ce1f1c9e970037b77d4e0348df1"
---

> This content is aimed at participants of the TOMODACHI Boeing Entrepreneurship Seminar 2025, hosted by The America-Japan Society Foundation and operated by Code for Japan, but external readers are also welcome to view it

Hello. I'm Soumame.

You're about to spend two months building a product online together, and I wrote this note to share things that might be useful during that process. This time I'll explain GitHub. I'll cover it for people who have heard the name but never used it, or who are completely new.

By the way, [this note is also managed on GitHub.](https://github.com/soumame/blogs)

## What do we do with files when developing as a team?

When you create an app, the data for it is often called source code. When teams create documents, they often share them using cloud storage like Google Drive. But Google Drive can't always track file histories in detail, and imagine several people each start editing the same file on their own computers (think of a PDF rather than something openable in Google Docs), and then each uploads an overwrite to the cloud.

Person A edits the first paragraph and uploads first.
Person B edits the second paragraph and uploads third.
Person C edits the third paragraph and uploads second.

In this case, the final file will end up reflecting only B's changes to the second paragraph, because the computer B edited from didn't have A's and C's uploads reflected on it, and the file was entirely overwritten. No error occurs, so the upload goes through normally.

If everyone edited in strict order one at a time you could avoid this, but that's tedious. You'd have to coordinate with A and C each time you upload — that's too risky.

## What is Git

This is where Git comes in.
Git records and tracks file change history and makes version control easy. You can record who changed which files and what changed compared to previous content as a history (for a clear explanation see [What is GIT? Explaining GIT concepts - Qiita](https://qiita.com/a_goto/items/0fe40b17105d1ac1c40b)).
[![Image from Gyazo](https://i.gyazo.com/cdad597c48987e443027db40b14c2b39.png)](https://gyazo.com/cdad597c48987e443027db40b14c2b39)

With this system, repositories (places to store project files) are distributed. People edit their local repository (files on their own computer) directly, and when editing is finished they upload to a remote repository. This is called pushing.
Then you pull (fetch) the content uploaded to the remote repository to reflect it in your local repository.

Because pulling automatically could suddenly change your working files mid-task, users need to perform the pull operation themselves. For when to pull, check resources like [When to pull on GitHub](https://zenn.dev/nineball/articles/ca7ccee53791b2).

If edits overlap, a conflict mechanism prevents automatic overwrites. This helps protect everyone’s important work from being erased.

There are more concepts like branches and merges I could explain, but they're deep topics and would take endless time, so look them up when you need them.

## What is GitHub?

Then there's the question of where to put the remote repository. In most cases people use GitHub. You may have heard the name.
GitHub adds features beyond Git itself — documentation and project management, issue tracking, and more — making it very convenient. It was developed by GitHub, Inc. in the U.S., and since 2018 has been part of Microsoft.

## Let's write some code

You might be thinking, "Wait — code? I've never programmed!" That's okay. Once you learn the process, you can even have AI write programs for you. Eventually you'll need to understand what the AI is doing, but trying to learn everything from scratch during a two-month hackathon is unrealistic, so let's just get hands-on.

### Create an account

First, create a GitHub account. The official site explains how to do this, so follow their instructions:
[Creating an account on GitHub - GitHub Docs](https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github)

If you're unsure, this guide might help:
[How to create a GitHub account](https://zenn.dev/protoout/articles/50-howto-github-setup)

#### About the Student Pack

As a side note, if you're a student there's the Student Pack, which gives free access to many development tool subscriptions. Definitely apply.

[Apply to GitHub Education as a student - GitHub Docs](https://docs.github.com/ja/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student)

One of the most exciting tools available via the Student Pack is GitHub Copilot. GitHub Copilot is an AI assistant that helps while you write code in your IDE (described later) and answers questions.

## Install an editor to write code

Once you have a place to store code, next set up where you'll write it. It's common to use an IDE (Integrated Development Environment), which provides various features beyond just editing code. Modern editors are powerful; some with built-in AI can do tasks simply by describing what you want.

Here are IDEs likely to be used in this hackathon:

- [[vs-code|VS Code]]
  - The first choice for web app developers. An editor developed by Microsoft that runs on Windows, macOS, and Linux. Strictly speaking it's not an IDE, but with extensions you can use it like one.
  - Can also be used to develop cross-platform apps for Android/iOS.
  - Commonly used with TypeScript, JavaScript, Python, and similar languages.
- Cursor
  - An editor based on VS Code but with very strong AI features. It writes code for you automatically. These features are paid ($20/month).
- Xcode
  - The editor used to create iOS apps. If you're building apps in Swift, Apple's language, it's required. It only runs on macOS.
- Android Studio
  - The editor used to create Android apps. It includes all the tools needed for Android development.

If you haven't been writing code already, VS Code is likely the choice, so I'll assume VS Code for the rest of this guide.

## Create a remote repository

First, let's create a "remote repository" on GitHub to store source code. This is like a shared project folder everyone on your team can access. 🗂️

1. Log in to **GitHub**, click the "+" icon at the top-right, and select "New repository." 
2. Choose a **Repository name**. Enter a clear English name like your project name (e.g., `tomodachi-product-2025`).
3. In **Description**, write a brief explanation of the project (optional but helpful).
4. Choose the **visibility** setting. "Public" is viewable by anyone; "Private" is only visible to invited people. For team development, "Private" is fine at first.
5. Check **"Add a README file"**. This acts like a project manual; having one file from the start makes later operations easier.
6. Click "Create repository" and your remote repository is ready! 🎉

## Create a local repository (Clone)

Next, copy the remote repository on GitHub to your computer. This operation is called "clone."

1. Open the repository page you just created.
2. Click the green "<> Code" button, then click the copy icon next to the displayed URL to copy it.
   [![Image from Gyazo](https://i.gyazo.com/54bdbe8df972361aff0072ef3397c9d2.png)](https://gyazo.com/54bdbe8df972361aff0072ef3397c9d2)
3. Open VS Code.
4. From the top menu choose "View" → "Command Palette," type and select "Git: Clone."
   [![Image from Gyazo](https://i.gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9.png)](https://gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9)
5. Paste the URL you copied and press Enter.
   [![Image from Gyazo](https://i.gyazo.com/328a005494c8ae9b751d7d5f19d48597.png)](https://gyazo.com/328a005494c8ae9b751d7d5f19d48597)
6. Choose a location on your computer to save the project (desktop or Documents folder, for example).
7. When the clone finishes you'll be asked "Open the repository?" in the bottom-right — click "Open."

Now the project files (currently only README.md) are ready on your computer!

## Try editing

Now let's edit a file. Try writing a brief self-introduction.

1. In VS Code's explorer on the left, click to open the "README.md" file.
2. Add some text to the file. For example:

.md files differ from .txt files: they use Markdown syntax with symbols like `#` and * to set heading sizes and emphasis. For details, see [[markdown|Try writing in Markdown syntax]].

```
# TOMODACHI プロダクト

これは私たちのプロダクトです。

## メンバー
- そうまめ
```

[![Image from Gyazo](https://i.gyazo.com/a374a6c2163a1946e31155a80f0c2d39.png)](https://gyazo.com/a374a6c2163a1946e31155a80f0c2d39)

3. After editing and saving the file (Ctrl+S or Cmd+S), you'll see a badge on the source control icon (the branched tree icon) on the left side of VS Code indicating changed files. This means "there are changed files."
   [![Image from Gyazo](https://i.gyazo.com/3af3605b302306b0e7a92aa568b0565f.png)](https://gyazo.com/3af3605b302306b0e7a92aa568b0565f)

## Push

Now upload your edits to the remote repository on GitHub to share them with your team. This operation is called "push." Pushing is divided into several steps.
[![Image from Gyazo](https://i.gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c.png)](https://gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c)

1. Staging: Choose which changes to record. This is done locally and doesn't affect GitHub yet.

   - Open the Source Control panel, and the edited file (README.md) appears under "Changes."
   - Click the "+" icon to the right of the file name to stage the change.
   - The file moves to the "Staged Changes" list.

2. Commit: Add a message describing the change and record it in your local repository. This still doesn't affect GitHub.

   - Enter a short message in the message box above the staged changes describing what you changed (e.g., `Add my name to members`).
   - Click the "Commit" button. This records the change history on your computer.

3. Push: Send the committed changes from your local repository to the remote repository.
   - The "Commit" button changes to "Synchronize Changes" — click it.
   - Your changes are uploaded to GitHub. Reload the repository page in your browser to verify the update.

### Example: this blog site

[![Image from Gyazo](https://i.gyazo.com/38c29c9ab26710c7c68088c9c6f56b42.png)](https://gyazo.com/38c29c9ab26710c7c68088c9c6f56b42)
Even at the moment I upload this article I'm using Git. VS Code visually shows the information about staged changes like this.
Look at the staged changes: a red "D" indicates deleted content, and "R" indicates a rename.

## Pull (when there are remote changes)

When someone else on the team pushes, the remote repository may become newer than what you have locally. Pulling fetches that latest content to your machine.

Make it a habit to pull before you start working or at natural stopping points to reduce conflicts between others' changes and your work.

The operation is simple: press "Synchronize Changes" in VS Code's Source Control panel or run "Git: Pull" from the Command Palette. If there are new changes, your local files will update automatically. 🔄