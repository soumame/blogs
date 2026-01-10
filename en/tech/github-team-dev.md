---
title: "Let's Try Team Development on GitHub"
emoji: "💻"
tags:
  - "coding"
  - "dev"
  - "team-dev"
published_at: "2025-10-06T00:00:00.000Z"
description: "For those of you who have registered an account on GitHub but haven't used it because you're not a developer, I've written a brief article explaining how to use it."
isTranslated: true
sourcePath: "ja/tech/github-team-dev.md"
sourceHash: "fd313b69b0c146afb6d47c1d5ec1edb3b8cb3cb6e22e9653291726a1fd08692e"
---

> This content is aimed at those participating in the TOMODACHI Boeing Entrepreneurship Seminar 2025 organized by the Public Interest Incorporated Foundation U.S.-Japan Council Japan and operated by the一般社団法人コード・フォー・ジャパン, but outsiders are also welcome to view it.

Hello, I’m Soumame.
In the next two months, everyone will be creating a product online, and I want to share some useful tools with you, so I'm writing this note. This time, I’ll explain GitHub. Even if you've heard the name, I'll explain it for those who haven't touched it before or those who are entirely new to it.

By the way, [this note is also managed on GitHub.](https://github.com/soumame/blogs)

## What to Do with Files When Developing in a Team?

When creating apps, we often refer to the data as source code. When teams create documents, we usually share these on a cloud storage service like Google Drive, right? However, Google Drive doesn't allow for detailed tracking of file history. What if multiple people start editing the same file contents (imagine something like a PDF, as opposed to what can be opened in Google Docs) on their individual computers simultaneously, and then each uploads their changes to the cloud?

- Person A edits the first paragraph and uploads it first.
- Person B edits the second paragraph and uploads it third.
- Person C edits the third paragraph and uploads it second.

In this case, the final file will only reflect the changes made by Person B to the second paragraph. This happens because the computer of Person B does not reflect the uploads from Persons A and C, and all files are overwritten. Of course, no error occurs, so the upload can happen normally. If everyone edits in turns, we can avoid this situation, but that’s quite cumbersome, right? It's too risky to have to coordinate with Persons A and C every time to sync uploads, lest file content gets wiped out.

## What is Git?

At this point, we introduce a system called Git. Git records and tracks file changes, making version management easy. It can keep a history of who changed what in which file and what differences were made from the previous content. (For more details, you can check this useful reference: [【Beginners Guide】What is GIT? An Explanation of GIT Concepts - Git - Qiita](https://qiita.com/a_goto/items/0fe40b17105d1ac1c40b))
[![Image from Gyazo](https://i.gyazo.com/cdad597c48987e443027db40b14c2b39.png)](https://gyazo.com/cdad597c48987e443027db40b14c2b39)
In this system, repositories (project file storage) are distributed. The person editing directly edits their local repository (the files on their computer) and uploads to the remote repository when finished. This is called a push. By pulling (fetching) the content added to the remote repository, it gets reflected in our local repository.

If pulling happens arbitrarily, the content might change suddenly while you're working, so users need to initiate the pull operation. For details on when to pull, you can take a look at [【Github】About the Timing of Pulls](https://zenn.dev/nineball/articles/ca7ccee53791b2).

In case of overlapping edits, a conflict prevents overwriting from occurring. This avoids the accidental deletion of everyone's important content.

There are more things I wish to explain, like branches and merges, but it’s too deep; explaining that would take an infinite amount of time. For now, please look that up when necessary.

## What is GitHub?

Now we have to consider where to place this remote repository, and in most cases, everyone uses something called GitHub. Some of you may have heard the name. It’s not just the Git mechanism; it also integrates features for document and project management, issue tracking, and is very convenient. It was developed by the American company GitHub and has been a subsidiary of Microsoft since 2018.

## Let's Write Some Code

What do you mean writing code all of a sudden!? I’ve never done any programming! But don’t worry. Once you learn how to do it, you can have AI write programs for you. Of course, there will eventually come a time when you need to understand what AI is doing, but trying to comprehend it all from scratch during this two-month hackathon is pretty impossible, so let's just get our hands moving for now.

### Creating an Account

First, create a GitHub account. Instructions on how to do this are explained on the official site, so please refer to that.
[Creating an Account on GitHub - GitHub Docs](https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github)

If you’re not sure how to do it, you might find this helpful.
[How to Create a GitHub Account](https://zenn.dev/protoout/articles/50-howto-github-setup)

#### About the Student Pack

As a side note, for students, there’s a helpful service called the Student Pack, which allows you to use various development tools for free. Be sure to apply!
[Apply for GitHub Education as a Student - GitHub Docs](https://docs.github.com/ja/education/about-github-education/github-education-for-students/apply-to-github-education-as-a-student)

One of the most exciting things available with the Student Pack is GitHub Copilot. GitHub Copilot is an AI assistant that provides help when you write code in an IDE (to be discussed later) and can answer various questions when asked.

## Installing a Code Writing Editor

Once you're prepared to create a place to store code, the next step is to set up a place to write the code. It’s common to use something called an IDE (Integrated Development Environment), which provides various functions beyond just writing code. Recent code editors are excellent and can perform everything just by writing what you want with AI.

Here’s a list of IDEs that might be used during this hackathon:

- [[vs-code|VS Code]]
    - The first choice for web application developers. This editor is developed by Microsoft and operates on most OS like Windows, MacOS, and Linux. It’s not strictly an IDE, but by adding extensions, you can use it effectively like one.
    - It can also be used to create cross-platform apps that are compatible with Android/iOS.
    - Frequently used with languages like Typescript, Javascript, and Python.
- Cursor
    - An editor based on VS Code but with very strong AI features. It writes code automatically, though such features are paid ($20/month).
- Xcode
    - An editor used to create iOS apps. Necessary for creating apps in Swift, a language developed by Apple. It only works on MacOS.
- Android Studio
    - An editor used to create Android apps. Contains all the tools necessary for Android app development.

If you’re not someone already writing code, it would most likely be VS Code, so from here onward, I’ll explain as if using VS Code.

## Creating a Remote Repository

First, let's create a "remote repository" on GitHub to store the source code. This is like a file storage for the project accessible to the whole team. 🗂️

1. **Log in to GitHub**, and click the “+” icon in the upper right corner, then select “New repository.”
2. Decide on a **repository name**. Enter a clear name in English, such as the project name (e.g., `tomodachi-product-2025`).
3. It’s helpful to write a brief description of what the project is in the **description** (optional).
4. Choose the **visibility setting**. “Public” means anyone can see it, while “Private” means only invited people can see it. For team development, it’s fine to start with “Private.”
5. Check the box for **“Add a README file.”** This serves as a guide for the project, and having at least one file initially makes future operations easier.
6. Finally, click the “Create repository” button, and the remote repository is complete! 🎉

## Creating a Local Repository (Cloning)

Next, let’s copy the remote repository we just created on GitHub to our computer. This operation is called **cloning**.

1. Open the page of the repository you just created.
2. Click the green “<> Code” button, and click the copy icon next to the displayed URL to copy it.
   [![Image from Gyazo](https://i.gyazo.com/54bdbe8df972361aff0072ef3397c9d2.png)](https://gyazo.com/54bdbe8df972361aff0072ef3397c9d2)
3. Open VS Code.
4. From the top menu, open “View” → “Command Palette,” and type “Git: Clone” to select it.
   [![Image from Gyazo](https://i.gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9.png)](https://gyazo.com/a2407b8bc6c88b1e3b214ecc240585b9)
5. Paste the URL you copied earlier and hit Enter.
   [![Image from Gyazo](https://i.gyazo.com/328a005494c8ae9b751d7d5f19d48597.png)](https://gyazo.com/328a005494c8ae9b751d7d5f19d48597)
6. When prompted where to save the project on your computer, choose a location that’s easy to understand (like the Desktop or Documents folder).
7. Once cloning is completed, it will ask you, “Do you want to open the repository?” Click “Open.”

Now, you have the project files (currently just README.md) ready on your computer!

## Let's Edit

Now, let's start editing the file. Let’s write a brief self-introduction.

1. In the Explorer on the left side of VS Code, click to open the “README.md” file.
2. Add some text to the file. For example, like this:

```
# TOMODACHI Product

This is our product.

## Members
- Soumame
```

.md files differ from regular .txt files in that they use Markdown notation, allowing you to set text size and emphasis using symbols like `#` and *. For more details, refer to the article [[markdown|Let’s Write Using Markdown]].

[![Image from Gyazo](https://i.gyazo.com/a374a6c2163a1946e31155a80f0c2d39.png)](https://gyazo.com/a374a6c2163a1946e31155a80f0c2d39)

3. After editing the file, save it (`Ctrl+S` or `Cmd+S`). You will see a badge like ① appear on the icon (Source Control) on the left side of VS Code, indicating that there are modified files.
   [![Image from Gyazo](https://i.gyazo.com/3af3605b302306b0e7a92aa568b0565f.png)](https://gyazo.com/3af3605b302306b0e7a92aa568b0565f)

## Pushing Your Changes

Now, let’s upload the edited content to the remote repository (on GitHub) and share it with your team members. This operation is called **pushing**. Pushing consists of several steps.
[![Image from Gyazo](https://i.gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c.png)](https://gyazo.com/6e3b9ee6936af1beb13238eeb9191a3c)

1. **Staging**: Select which changes you want to keep as a record. This is done locally on your computer, so nothing is reflected on GitHub at this stage.
   - Opening the Source Control panel will show the edited file (README.md) in the list of Changes.
   - Click the “+” icon (stage changes) next to the file name.
   - The file will then move to the list of Staged Changes.

2. **Committing**: Attach a message describing the changes and record it in your local repository. Again, nothing will be reflected on GitHub at this stage.
   - In the message box above the staged changes, enter a short message describing what you changed (e.g., `Added my name to the members`).
   - After entering, click the “Commit” button. Now, your local repository has the change history recorded.

3. **Pushing**: Send the changes you committed in the local repository to the remote repository.
   - The Commit button will change to “Synchronize Changes,” so click this.
   - Your changes are now uploaded to GitHub! Refresh the repository page on GitHub in your browser to see if the content has changed.

### Example: In the case of this blog site

[![Image from Gyazo](https://i.gyazo.com/38c29c9ab26710c7c68088c9c6f56b42.png)](https://gyazo.com/38c29c9ab26710c7c68088c9c6f56b42)
Even at the moment I’m uploading this article, I’m using Git. VS Code visually displays the staged content like this. Let’s take a look at the staged changes; the red D indicates deleted content (Deleted), while R indicates a rename (Rename).

## Pulling (If There Are Changes on the Remote)

If someone else on your team pushes, the content of the remote repository becomes newer than what you currently have on your computer. The operation to fetch that latest content is called **pulling**.

Making it a habit to pull before starting work or at a good stopping point will reduce the chances of a conflict between someone else’s changes and your own work.

The operation is simple: just press the “Synchronize Changes” button in the Source Control panel of VS Code, or execute “Git: Pull” from the command palette. If there are new changes, your computer files will automatically be updated. 🔄