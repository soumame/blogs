---
title: "Let's Try Team Development with GitHub"
emoji: "💻"
tags:
  - "coding"
  - "dev"
  - "team-dev"
published_at: "2025-10-06T00:00:00.000Z"
description: "A quick guide to using GitHub for those who signed up for an account but don't use it because they're not developers."
isTranslated: true
sourcePath: "ja/tech/github-team-dev.md"
sourceHash: "fd313b69b0c146afb6d47c1d5ec1edb3b8cb3cb6e22e9653291726a1fd08692e"
---

> This content is aimed at participants of the TOMODACHI Boeing Entrepreneurship Seminar 2025, organized by the U.S.-Japan Council Japan and run by Code for Japan, but others are welcome to view it.

Hello. I'm Soumame.
I'm writing this note to share tools that might be useful as everyone spends the next two months building a product online. This time I'll explain GitHub. I'll cover it for people who may have heard the name but never used it, or are completely new to it.

By the way, [I'm also managing this note on GitHub.](https://github.com/soumame/blogs)

## When developing as a team, what should you do with files?

When you create an app, the data for it is often called the source code. When working on documents as a team, people often share them using cloud storage like Google Drive. However, Google Drive can't always track file history in detail, and imagine multiple people start editing the same file (not something editable in Google Docs — think of a PDF) on their own computers and then each uploads an overwrite to the cloud.

Person A edits the first paragraph and uploads first
Person B edits the second paragraph and uploads third
Person C edits the third paragraph and uploads second

In this case, the final file will end up only containing B's edit to the second paragraph. That's because B's computer didn't have A's or C's uploads reflected on it, and the file gets entirely overwritten. No error occurs, so the upload succeeds normally.

If everyone edited in strict sequence this situation could be avoided, but that's inconvenient. Having to contact A and C every time to coordinate upload timing is far too risky if file contents could be wiped out.

## What is Git

This is where Git comes in.
Git records and tracks changes to files, making version control easy. It lets you record who changed which files and what changed compared to previous versions (for an easy-to-understand overview see [【初心者向け】GIT とは何か？GIT の概念を解説 Git - Qiita](https://qiita.com/a_goto/items/0fe40b17105d1ac1c40b)).
[![Image from Gyazo](https://i.gyazo.com/cdad597c48987e443027db40b14c2b39.png)](https://gyazo.com/cdad597c48987e443027db40b14c2b39)

With this system, repositories (the storage for a project's files) are distributed. Editors work on a local repository (files on their own computer) and, when finished, upload to a remote repository. This upload is called a push.
Then you can pull the contents uploaded to that remote repository to incorporate them into your local repository.

Because pulling automatically could suddenly change your working files while you're in the middle of something, users need to initiate the pull operation themselves. For when to pull, you might want to check resources like [【Github】pull のタイミングについて](https://zenn.dev/nineball/articles/ca7ccee53791b2).

If edits overlap, Git will report a conflict so that changes are not overwritten automatically. This helps prevent everyone's important work from accidentally being erased.

There are more concepts like branches and merges that I could explain, but those topics are deep and would take forever to cover. For now, look them up when you need them.

## What is GitHub?

So then you have the question of where to put the remote repository. In most cases, people use GitHub. You may have heard the name.
GitHub bundles not only Git functionality but also documentation and project management features, issue tracking, and more. It's very convenient. It was developed by GitHub, Inc. in the U.S., and has been under Microsoft since 2018.

## Let's write code

You might be thinking, "Write code already? I've never programmed!" — but don't worry. Once you learn the basics, you can even have AI write programs for you. Of course, you'll eventually need to understand what the AI is doing, but trying to understand everything from scratch during this two-month hackathon is unrealistic. For now, get hands-on.

### Creating an account

First, create a GitHub account. The official site explains how to do this, so please refer to it:
[Creating an account on GitHub - GitHub Docs](https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github)

If you need more help, this guide may be useful:
[How to create a GitHub account](https://zenn.dev/protoout/articles/50-howto-github-setup)

#### About the Student Pack

As a side note, if you're a student there's a great service called the Student Pack that gives you free access to many development tool subscriptions. Be sure to apply.

[Apply to GitHub Education as a student - GitHub Docs](https://docs.github.com/ja/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student)

One of the most exciting things in the Student Pack for many of you is GitHub Copilot. GitHub Copilot is a helpful AI assistant that can assist or answer questions while you write code in an IDE (described below).

## Install a code editor

Once you have a place to store code, next set up a place to write it. It's common to use an IDE (Integrated Development Environment), which provides many features beyond just editing. Modern code editors are powerful — some with AI can do most tasks just from your instructions.

Here are IDEs likely to be used in this hackathon:

- [[vs-code|VS Code]]
  - The first choice for web app developers. An editor developed by Microsoft that runs on most OSes like Windows, macOS, and Linux. Strictly speaking it's not an IDE, but with extensions it can be used like one.
  - It can also be used to build cross-platform apps for Android/iOS.
  - Often used with TypeScript, JavaScript, Python, and similar languages.
- Cursor
  - An editor based on VS Code but with very strong AI features. It can write code for you automatically. Those features are paid ($20/month).
- Xcode
  - The editor used to develop iOS apps. If you're building an app in Swift, Apple's language, Xcode is required. It runs only on macOS.
- Android Studio
  - The editor for developing Android apps. It includes all the tools needed to build Android applications.

Unless you already write code, you'll probably use VS Code, so the rest of this guide assumes VS Code.

## Create a remote repository

First, let's create a remote repository on GitHub to store source code. This will be a project storage area everyone on the team can access. 🗂️

1. **Log in to GitHub**, click the "+" icon in the top-right, and choose "New repository." 
2. Decide the **Repository name**. Enter an easy-to-understand name in English (e.g., `tomodachi-product-2025`).
3. Optionally add a short **Description** explaining the project.
4. Choose the **Visibility**. "Public" is visible to anyone; "Private" is only visible to invited people. For team development, "Private" is usually fine to start with.
5. Check **"Add a README file."** A README acts as a project manual and having this initial file makes later operations easier.
6. Finally, click the "Create repository" button — your remote repository is ready! 🎉

## Create a local repository (clone)

Next, copy the remote repository you created on GitHub to your own computer. This operation is called cloning.

1. Open the repository page you just created.
2. Click the green "<> Code" button and click the copy icon to the right of the URL to copy it.
   [![Image from Gyazo](https://i.gyazo.com/54bdbe8df972361aff0072ef3397c9d2.png)](https://gyazo.com/54bdbe8df972361aff0072ef3397c9d2)
3. Open VS Code.
4. From the top menu open "View" → "Command Palette," type "Git: Clone" and select it.
   [![Image from Gyazo](https://i.gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9.png)](https://gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9)
5. Paste the URL you copied earlier and press Enter.
   [![Image from Gyazo](https://i.gyazo.com/328a005494c8ae9b751d7d5f19d48597.png)](https://gyazo.com/328a005494c8ae9b751d7d5f19d48597)
6. Choose where on your computer to save the project (a clear location like Desktop or Documents).
7. Once cloning completes, you'll be prompted "Open the repository?" in the bottom-right — click "Open."

Now the project files (for now just the README.md) are on your computer!

## Try editing

Let's edit a file. Try writing a short self-introduction.

1. In VS Code's explorer on the left, click the "README.md" file to open it.
2. Add some text to the file. For example:

.md files are different from normal .txt files: they use Markdown syntax, where you can use symbols like `#` and \* to set headings and emphasis. For details, see [[markdown|Markdown記法で書いてみよう]].

```
# TOMODACHI プロダクト

これは私たちのプロダクトです。

## メンバー
- そうまめ
```

[![Image from Gyazo](https://i.gyazo.com/a374a6c2163a1946e31155a80f0c2d39.png)](https://gyazo.com/a374a6c2163a1946e31155a80f0c2d39)

3. After editing, save the file (Ctrl+S or Cmd+S). A badge will appear on the source control icon (the branched tree icon) on the left of VS Code. This indicates there are changed files.
   [![Image from Gyazo](https://i.gyazo.com/3af3605b302306b0e7a92aa568b0565f.png)](https://gyazo.com/3af3605b302306b0e7a92aa568b0565f)

## Pushing

Now upload your edits to the remote repository on GitHub so your team can see them. This is called a push. Pushing involves a few steps.
[![Image from Gyazo](https://i.gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c.png)](https://gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c)

1. **Staging**: Choose which changes to include in the record. This happens on your computer and doesn't affect GitHub yet.

   - Open the Source Control panel; the "Changes" list shows edited files (e.g., README.md).
   - Click the "+" icon to the right of the file name to stage the change.
   - The file moves to the "Staged Changes" list.

2. **Commit**: Record the staged changes to your local repository with a message. This still doesn't update GitHub.

   - In the message box above staged changes, enter a short message describing what you changed (e.g., `メンバーに自分の名前を追加`).
   - Click the "Commit" button. This records the change in your local history.

3. **Push**: Send the commits from your local repository to the remote repository.
   - The "Commit" button will change to "Synchronize Changes"; click it.
   - Your changes are uploaded to GitHub! Reload the repository page in your browser to confirm the update.

### Example: This blog site

[![Image from Gyazo](https://i.gyazo.com/38c29c9ab26710c7c68088c9c6f56b42.png)](https://gyazo.com/38c29c9ab26710c7c68088c9c6f56b42)
Even at the moment I'm uploading this article, I'm using Git. VS Code visually shows staged changes and other Git-related info.
Look at the staged changes section: red D indicates Deleted, and R indicates Rename.

## Pulling (when there are remote changes)

When someone else on the team pushes, the remote repository may become newer than the files on your computer. Fetching those latest changes into your local copy is called pulling.

Make it a habit to pull before you start work or at natural breakpoints to reduce conflicts between your work and others'.

It's simple: press the "Synchronize Changes" button in VS Code's Source Control panel or run "Git: Pull" from the Command Palette. If there are new changes, your files will be updated automatically. 🔄