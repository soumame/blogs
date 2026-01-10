---
title: "You Only Need HTML! Build a Blog Site with Astro!"
emoji: "🤖"
tags:
  - "web"
  - "dev"
published_at: "2024-05-12T00:00:00.000Z"
isTranslated: true
sourcePath: "ja/tech/astro-blog.md"
sourceHash: "e2faddd9b20ba37eae0b897806a4bf149c702369fe8f2390494d505f19bd4352"
---

# You Only Need HTML! Build a Blog Site with Astro!

[![Image from Gyazo](https://i.gyazo.com/e010985632217bb795333cd12915bf36.png)](https://gyazo.com/e010985632217bb795333cd12915bf36)

Sometimes you just feel like building a blog site.

For sites of a certain size, you don't need to go as far as using WordPress — nowadays you can quickly create a site you like. In this article, we'll use the trendy framework **Astro** to build a blog website in about an hour.

## What is Astro?

Astro is a **framework** for building fast websites primarily aimed at content delivery (blogs, articles, etc.). It's well suited for sites where users mainly read content.

It also adopts the concept of **Islands**, letting you load JavaScript only for parts of the site so you can have interactive elements (like a button that does something when clicked) without loading JS everywhere. Skipping the details, the point is that Astro makes it **easy to build sites while remaining highly extensible**, making it ideal for beginners.

### What's a framework?!

When you hear "framework" you might wonder what it means. Simply put, it's like a bundled app development kit full of **useful features**. Using it lets you **skip a lot of setup work** and get started quickly.

## Preparing to build the website

Let's start building the site right away. First, prepare what you need. Don't worry — it will be quick.

### What you'll need

If you have a **PC or Mac**, you're good to go. If not, you can use online dev tools like [StackBlitz](https://stackblitz.com/), but this guide covers local development on your computer.

### Installing Node.js

First, install **Node.js**. This is the runtime environment (the foundation that runs apps), and Astro runs on it. Newer versions will work, so click the download button on the site and install it following the instructions.

[https://nodejs.org/](https://nodejs.org/)

### Installing VS Code

You might be able to write HTML in Notepad, but there's a much nicer tool. Using **VS Code** gives you syntax highlighting and other features that make development easier. VS Code also supports **extensions**, and there's an official Astro extension you should install.

Install it from the link below and follow the setup instructions. For language settings and other preferences, consult other guides if needed (it's a bit of a pain...).

[https://code.visualstudio.com/](https://code.visualstudio.com/)

After installing, open the app and install extensions.

[![Image from Gyazo](https://i.gyazo.com/6224c4baea1d8dd736f04485edaaf7bc.png)](https://gyazo.com/6224c4baea1d8dd736f04485edaaf7bc)

_This is the screen you'll see when you launch it._

Click the Extensions button in the left sidebar, then type "Astro" in the search box in the opened tab.

[![Image from Gyazo](https://i.gyazo.com/a86114a4ab2ec8ce567b851b6d975e60.png)](https://gyazo.com/a86114a4ab2ec8ce567b851b6d975e60)

_Select the extension_

[![Image from Gyazo](https://i.gyazo.com/2c6bf8567f554948caa167c2122d6e4d.png)](https://gyazo.com/2c6bf8567f554948caa167c2122d6e4d)

_Click Install!_

Once it's installed, VS Code is ready.

### Preparing GitHub

> You can perform this step after finishing the site, but we'll cover it now.

We'll use GitHub to store and publish the site's files. GitHub lets you save and share code, and using it makes version control and deployment easy. Create an account there (I'll skip the detailed steps — it's a hassle).

[https://github.com/](https://github.com/)

After signing up or logging in to GitHub, you'll see a screen like this.

[![Image from Gyazo](https://i.gyazo.com/5a5e9afab5f3131d7e677841129b765f.png)](https://gyazo.com/5a5e9afab5f3131d7e677841129b765f)

Click the green "New" button on the left to create a new repository. Think of this as a storage space for your project.

[![Image from Gyazo](https://i.gyazo.com/60834beeae01e0c39cc7eb95605c891b.png)](https://gyazo.com/60834beeae01e0c39cc7eb95605c891b)

The creation screen looks like this. In the red box you choose the repository name and whether it's public or private. If public, everything you push will be visible — be careful. This doesn't directly affect the website's publishing settings. You can also set a description, initialize a README, choose a license, etc. When ready, click "Create repository" at the bottom.

[![Image from Gyazo](https://i.gyazo.com/067294127a58396aee726d0e8bfa3793.png)](https://gyazo.com/067294127a58396aee726d0e8bfa3793)

You should then see this screen. You're all set.

[![Image from Gyazo](https://i.gyazo.com/c5e5c3b61c90595efea492050c7f01d1.png)](https://gyazo.com/c5e5c3b61c90595efea492050c7f01d1)

_Repository creation complete!_

## Developing the website locally

### Cloning the repository

Now let's clone the repository you created. Copy the link shown on the repository page and paste it into VS Code's "Clone Git Repository". (If you're logged in to GitHub in VS Code, you can clone directly from there.)

[![Image from Gyazo](https://i.gyazo.com/16f534159ebe0084899da6a4f556ae4c.png)](https://gyazo.com/16f534159ebe0084899da6a4f556ae4c)

_Copy the link shown around the middle of the page..._

[![Image from Gyazo](https://i.gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56.png)](https://gyazo.com/f9e6bd9fb2444edd8691cc5a1ad09e56)

_A text box will appear at the top — paste it there._

Choose a folder on your machine to clone into. I recommend creating a "GitHub" folder and saving it there.

### Installing Astro

After cloning, you should see a screen like this in VS Code. This will be your main development view.

[![Image from Gyazo](https://i.gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f.png)](https://gyazo.com/c92ebb3a6f9a238ac4a56892579ea61f)

Open a terminal ("Terminal" → "New Terminal" from the menu). On macOS the menu is in the menu bar.

[![Image from Gyazo](https://i.gyazo.com/d0a879d378d922abbf27730de064b9b7.png)](https://gyazo.com/d0a879d378d922abbf27730de064b9b7)

Check your current directory in the terminal. In my case it looked like this, so I installed in the current folder. If it's different, use cd to change directories.

```
フォルダ一覧 ls フォルダにに移動する cd フォルダ名 一つ上の階層に移動する cd .. インストールする位置を決める。 C:\Users\souto\public\Astro-tutorial>
```

When the location is set, type **npm create astro@latest ./** and press Enter. This installs the latest Astro into ./ (the current folder).

```
npmコマンドを使用して今いるフォルダ内にインストールする npm create astro@latest ./ 今いるフォルダ内に新しいフォルダを作成し、そこにインストールする npm create astro@latest [フォルダ名]
```

If all goes well you'll see a series of prompts. Use the arrow keys to navigate. Since we're making a blog, move down and select "use blog template."

[![Image from Gyazo](https://i.gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5.png)](https://gyazo.com/fd1ea0696157123ba03b8d991bb5fdc5)

After that, you can just press Enter for the remaining prompts.

```
tmpl How would you like to start your new project? Use blog template ts Do you plan to write TypeScript? Yes use How strict should TypeScript be? Strict deps Install dependencies? Yes しばらくするとインストールが完了する next Liftoff confirmed. Explore your project! Run npm run dev to start the dev server. CTRL+C to stop. Add frameworks like react or tailwind using astro add. Stuck? Join us at https://astro.build/cat npm run devでサーバーを起動すると...? astro v4.8.2 ready in 243 ms ┃ Local http://localhost:4321/ ┃ Network use --host to expose 22:50:46 watching for file changes...
```

Once installation finishes, start the Astro dev server by running **npm run dev** in the console. Then open the displayed URL in your browser.

[![Image from Gyazo](https://i.gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac.png)](https://gyazo.com/c6a6ac61e4345699bf3c7e1cd07f97ac)

_Done! That was easy._

### How Astro works

You might be surprised by the many files generated, but in practice you'll mainly work in the public and src directories.

Astro itself isn't the website — it generates HTML files based on .astro files. The content in src is converted to HTML at build time unless you change rendering settings.

In other words, if you write code to fetch a list of blog posts, that data is fetched at build time and converted into HTML when you publish the site (a process called **building**). Astro calls this **pre-rendering**. This makes pages fast but means **you can't update content in real time** — keep that in mind. Astro also offers on-demand rendering, which fetches data on each request, but in this tutorial we'll use pre-rendering. For a personal blog, that's usually enough.

[![Image from Gyazo](https://i.gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6.png)](https://gyazo.com/b26ec95bc2bff275b507f3a118c3c1e6)

### The concept of components

Astro uses a component-based approach. Components let you reuse parts (for example, create a "menu bar" component and reuse it across pages). You can nest components too, building a hierarchy of reusable pieces.

Below is an example. If you create a layout file that imports a header and footer and then use that layout in other pages, every page will include the header and footer automatically. You don't have to write the header/footer on every page — changing the header file updates it across the site.

```
//レイアウトファイル(Layout.astro) import Header from 'Header.astro'; import Footer from 'Footer.astro'; <html> <head> <Header/> </head> <body> <slot> //スロットを使用して、内容をここに埋め込む <Footer/> </body> </html>
```

```
//ページのファイル(index.astro) import Layout from 'Layout.astro'; <Layout> ...ページの内容 </Layout>
```

```
//ブログ一覧 import Layout from 'Layout.astro'; <Layout> ...ブログ一覧 </Layout>
```

### The src folder

The structure inside src is flexible, but this template provides five directories: components, content, layouts, pages, and styles. Let's look at each.

<figure name="f5a67263-2138-44cc-bd01-86c0f7ce0588" id="f5a67263-2138-44cc-bd01-86c0f7ce0588">

> This guide explains conventions commonly used in the Astro community, but the only directories reserved by Astro are src/pages/ and src/content/. You are free to rename or reorganize the other directories however works best for you.

<figcaption>Astro official Docs</figcaption>

</figure>

**/pages (required, reserved)**
Pages is a directory reserved by Astro. All pages you create for the site must go here.

**/content (reserved)**
This directory is reserved (but not required). Using Astro's content collections feature, you can store blog posts and other content here. We'll use this directory to manage blog posts in this project.

**/Components**
Place Astro component files here. These are reusable parts you can import from other .astro files. This directory isn't required, so you can rename it if you want.

**/layouts**
Use layouts to define templates shared across multiple pages. This is optional as well.

**/styles**
Store CSS and related files here. Optional.

### Public folder

Files in the public directory are skipped by Astro's build processing and are served as-is. Put fonts, site icons, robots.txt (if needed), and other static assets here so they are available when you build the site.

You can also place CSS or JavaScript here and load them directly, but they won't be optimized by Astro, so the official recommendation is to avoid that when possible.

### Let's tweak it a bit

Rewriting everything would be too long, so let's make a few changes and publish. First, edit the page users first see. Open index.astro in VS Code.

[![Image from Gyazo](https://i.gyazo.com/08c75cf4a1ecbab656b842db87c14c15.png)](https://gyazo.com/08c75cf4a1ecbab656b842db87c14c15)

_index.astro_

```
--- import BaseHead from '../components/BaseHead.astro'; import Header from '../components/Header.astro'; import Footer from '../components/Footer.astro'; import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <p> Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro. </p> <p> This template comes with a few integrations already configured in your <code>astro.config.mjs</code> file. You can customize your setup with <a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind, React, or Vue to your project. </p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>Edit the site header items in <code>src/components/Header.astro</code></li> <li>Add your name to the footer in <code>src/components/Footer.astro</code></li> <li>Check out the included blog posts in <code>src/content/blog/</code></li> <li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li> </ul> <p> Have fun! If you get stuck, remember to <a href="https://docs.astro.build/" >read the docs </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions. </p> <p> Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template" >astro-blog-template </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>. </p> </main> <Footer /> </body> </html>
```

The file structure looks like this. I rewrote it to be my personal page like this:

```
--- import BaseHead from "../components/BaseHead.astro"; import Header from "../components/Header.astro"; import Footer from "../components/Footer.astro"; import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>そうまめのサイト</h1> <p> そうまめのサイトへようこそ！このページはAstroのblogテンプレートを使用して作成しました。 </p> </main> <Footer /> </body> </html>
```

After saving, the page should update automatically. That's the basic way to build a site with Astro. Since it's the same as writing HTML, those familiar with HTML should find it easy.

[![Image from Gyazo](https://i.gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9.png)](https://gyazo.com/d0aa8d2ee23eeaea30571c8b5ec6baa9)

Next, let's update the blog list. Navigate to /src/content/blog.

[![Image from Gyazo](https://i.gyazo.com/cd697ca81518d5fafbed77278bc495e8.png)](https://gyazo.com/cd697ca81518d5fafbed77278bc495e8)

_/src/content/blog_

Blog posts are stored in files ending with .md. Open one.

[![Image from Gyazo](https://i.gyazo.com/df6b79449f0da30fca7a080173ce7ed2.png)](https://gyazo.com/df6b79449f0da30fca7a080173ce7ed2)

You should see a Markdown file with metadata at the top. Astro calls this frontmatter. Blog posts in /content use this frontmatter to manage their metadata. In this template you can configure title, description, publish date, and images. Let's change the frontmatter like this:

```
--- title: '初めてのAstroブログ！' description: 'AstroとVercelを利用して、簡単に無料のサイトを作成！' pubDate: 'May 12 2024' heroImage: '/blog-placeholder-3.jpg' ---
```

For images, use files placed in the public directory, but we'll skip that for now.

[![Image from Gyazo](https://i.gyazo.com/2f7a239c5ac481deef6255acf21c202e.png)](https://gyazo.com/2f7a239c5ac481deef6255acf21c202e)

You should now be able to change the content as shown. From here, adjust whatever you need and your site will come together!

### Adding Tailwind CSS to customize styles

This project uses regular CSS for styling, but you can add Tailwind CSS for easier, utility-first styling. In Astro these additions are called integrations, and you can add various tools as needed.

[https://docs.astro.build/ja/guides/integrations-guide/](https://docs.astro.build/ja/guides/integrations-guide/)

## Publishing the website

Once your site is ready, let's publish it. We'll use Vercel and connect it to GitHub for deployment.

### Syncing GitHub with your local repo

First, sync your local changes with GitHub. In VS Code, use the Source Control tab to commit your changes, then sync. When committing, include a message describing the changes. You cannot commit without a message — you'll be prompted to enter one if you try.

[![Image from Gyazo](https://i.gyazo.com/08bab3c34d2e3f97668f296b3f983cac.png)](https://gyazo.com/08bab3c34d2e3f97668f296b3f983cac)

_This is the screen before committing. Modified files are listed. For the first commit, all files will be uploaded._

After committing, push the changes to GitHub. Then check GitHub to see the files.

[![Image from Gyazo](https://i.gyazo.com/6bfb3da069ce66508f2c312b787e908a.png)](https://gyazo.com/6bfb3da069ce66508f2c312b787e908a)

### Hosting for free with Vercel

Use Vercel to host the website. Vercel connects to GitHub and makes it easy to publish web apps. Sign up on Vercel and be sure to use your GitHub account to register.

[https://vercel.com/](https://vercel.com/)

[![Image from Gyazo](https://i.gyazo.com/09c816cd3eee8740b564994845f30603.png)](https://gyazo.com/09c816cd3eee8740b564994845f30603)

After registering, go to the dashboard and click "Add new…" → "Project". You'll see a list of repos from your connected GitHub account — select the Astro repository you created.

[![Image from Gyazo](https://i.gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa.png)](https://gyazo.com/1a2a87c4722cd1590c7d0e77e1161ffa)

There are no special settings needed — just click "Deploy". That's it; your site will be published.

[![Image from Gyazo](https://i.gyazo.com/ef971e1941a9aab8d03b4f80912a88b1.png)](https://gyazo.com/ef971e1941a9aab8d03b4f80912a88b1)

Once deployed, open the published site.

[![Image from Gyazo](https://i.gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f.png)](https://gyazo.com/b5b8ec70409bd2e5596a7ea86beb576f)

[https://astro-tutorial-six-peach.vercel.app/](https://astro-tutorial-six-peach.vercel.app/)

With that, you've covered the basics of building and publishing a site. Customize it to your needs!

### Adding a custom domain on Vercel

If you already own a domain (like example.com), you can add it in Vercel. In the Vercel dashboard, select your project and click "Domains." 

[![Image from Gyazo](https://i.gyazo.com/485e09882c4130b5a7690c3bef03b293.png)](https://gyazo.com/485e09882c4130b5a7690c3bef03b293)

Click the search box and enter your domain. Vercel will present a guide for connecting the domain — follow those steps to add it.

[![Image from Gyazo](https://i.gyazo.com/2149206be7b4a50138796cc4c6aa4ffe.png)](https://gyazo.com/2149206be7b4a50138796cc4c6aa4ffe)

## Conclusion

You should now be able to build a website from start to finish. Many other frameworks like Next.js follow similar workflows, so try different tools and find what suits you best. Follow me on social media if you'd like! (By the way, the site below is also made with Astro.)

[https://so-bean.work/ja](https://so-bean.work/ja)