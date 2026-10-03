---
title: You Only Need HTML! Build a Blog Site with Astro!
emoji: 🤖
locale: en
slug: astro-blog
category: tech
tags:
  - dev
  - web
published_at: 2024-05-12T00:00:00.000Z
updated_at: 2024-05-12T00:00:00.000Z
description: You Only Need HTML! Build a Blog Site with Astro! Image from Gyazo Sometimes you just feel like building a blog site. For sites of a certain size, you don't nee
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: true
translation_of: 01M3S3KMH8RG2T03SXNWF7XGX3
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

# You Only Need HTML! Build a Blog Site with Astro!

[![Image from Gyazo](../../media/4f94facb82ddf6423699bc708eabd0b360cdd4629851507bd4f16523e9a6afd1.png)](../../media/4f94facb82ddf6423699bc708eabd0b360cdd4629851507bd4f16523e9a6afd1.png)

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

[![Node.js — Run JavaScript Everywhere](../../media/936bd6468cf060e0837231bddef8cded67d28b360efb0c18a42ce67d4c08b539.png)](https://nodejs.org/)

[Node.js — Run JavaScript Everywhere](https://nodejs.org/)

Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

### Installing VS Code

You might be able to write HTML in Notepad, but there's a much nicer tool. Using **VS Code** gives you syntax highlighting and other features that make development easier. VS Code also supports **extensions**, and there's an official Astro extension you should install.

Install it from the link below and follow the setup instructions. For language settings and other preferences, consult other guides if needed (it's a bit of a pain...).

[![Visual Studio Code - The open source AI code editor | Your home for multi-agent development](../../media/be56697a088e3fcd71febd7afeb4f82e66906c18f1ade495a994b4f0c8b23836.png)](https://code.visualstudio.com/)

[Visual Studio Code - The open source AI code editor | Your home for multi-agent development](https://code.visualstudio.com/)

Visual Studio Code is a free, open source AI code editor. Build with AI agents that plan, code, and debug for you. Manage multi-agent workflows across environments on Linux, macOS, and Windows.

After installing, open the app and install extensions.

[![Image from Gyazo](../../media/37f04bf1a80a9b4e96e5f47612ed4ff312ca21ad007dbe85011daa760efa7223.png)](../../media/37f04bf1a80a9b4e96e5f47612ed4ff312ca21ad007dbe85011daa760efa7223.png)

_This is the screen you'll see when you launch it._

Click the Extensions button in the left sidebar, then type "Astro" in the search box in the opened tab.

[![Image from Gyazo](../../media/653b469da843f8e0850d8c5dbcc81a7c39d320da0374e835072be5ee808598f3.png)](../../media/653b469da843f8e0850d8c5dbcc81a7c39d320da0374e835072be5ee808598f3.png)

_Select the extension_

[![Image from Gyazo](../../media/a940a0d969f094c93f0b2d4de7a30ffb3847b18ad4a33b8211dd44c7b53d8e0a.png)](../../media/a940a0d969f094c93f0b2d4de7a30ffb3847b18ad4a33b8211dd44c7b53d8e0a.png)

_Click Install!_

Once it's installed, VS Code is ready.

### Preparing GitHub

> You can perform this step after finishing the site, but we'll cover it now.

We'll use GitHub to store and publish the site's files. GitHub lets you save and share code, and using it makes version control and deployment easy. Create an account there (I'll skip the detailed steps — it's a hassle).

[![GitHub · Change is constant. GitHub keeps you ahead.](../../media/4362e0f40c55899efa413782c16570754ad2ca800bd3bb6232df46ca7269107d.png)](https://github.com/)

[GitHub · Change is constant. GitHub keeps you ahead.](https://github.com/)

Join the world's most widely adopted, AI-powered developer platform where millions of developers, businesses, and the largest open source community build software that advances humanity.

After signing up or logging in to GitHub, you'll see a screen like this.

[![Image from Gyazo](../../media/5d84c928c1e8954c76c7ac8701391aaa634c787197bb85034006edbd35f0eac4.png)](../../media/5d84c928c1e8954c76c7ac8701391aaa634c787197bb85034006edbd35f0eac4.png)

Click the green "New" button on the left to create a new repository. Think of this as a storage space for your project.

[![Image from Gyazo](../../media/9505d4ed8121620a730fa108734eb0e566e6a93c5aa00e07e6941b1361a9879e.png)](../../media/9505d4ed8121620a730fa108734eb0e566e6a93c5aa00e07e6941b1361a9879e.png)

The creation screen looks like this. In the red box you choose the repository name and whether it's public or private. If public, everything you push will be visible — be careful. This doesn't directly affect the website's publishing settings. You can also set a description, initialize a README, choose a license, etc. When ready, click "Create repository" at the bottom.

[![Image from Gyazo](../../media/af40d0f3adbcb3e55a3cc0b97477b150e4a2a3b2479eda64799e68ebbd8d614e.png)](../../media/af40d0f3adbcb3e55a3cc0b97477b150e4a2a3b2479eda64799e68ebbd8d614e.png)

You should then see this screen. You're all set.

[![Image from Gyazo](../../media/faadf7a219526231901a3bf5995daf29e0b01244d47f002d980bc2b26975c052.png)](../../media/faadf7a219526231901a3bf5995daf29e0b01244d47f002d980bc2b26975c052.png)

_Repository creation complete!_

## Developing the website locally

### Cloning the repository

Now let's clone the repository you created. Copy the link shown on the repository page and paste it into VS Code's "Clone Git Repository". (If you're logged in to GitHub in VS Code, you can clone directly from there.)

[![Image from Gyazo](../../media/5432108b140cd06bac38904e6f51452949deb6fd229006bfe8b5183366b21554.png)](../../media/5432108b140cd06bac38904e6f51452949deb6fd229006bfe8b5183366b21554.png)

_Copy the link shown around the middle of the page..._

[![Image from Gyazo](../../media/fe02adc4b95d94714a11eaa61f30ddd11f7efc1a91abe5ff18b488ead460e20a.png)](../../media/fe02adc4b95d94714a11eaa61f30ddd11f7efc1a91abe5ff18b488ead460e20a.png)

_A text box will appear at the top — paste it there._

Choose a folder on your machine to clone into. I recommend creating a "GitHub" folder and saving it there.

### Installing Astro

After cloning, you should see a screen like this in VS Code. This will be your main development view.

[![Image from Gyazo](../../media/1cfc3b02b3c6fda8a22bb48e6ca025d22f015b601ad10723470ed8ee12b35e6a.png)](../../media/1cfc3b02b3c6fda8a22bb48e6ca025d22f015b601ad10723470ed8ee12b35e6a.png)

Open a terminal ("Terminal" → "New Terminal" from the menu). On macOS the menu is in the menu bar.

[![Image from Gyazo](../../media/7ff8aa1497fe102f27867a982137545e4ed414100695712743a81f7d1cf9ee56.png)](../../media/7ff8aa1497fe102f27867a982137545e4ed414100695712743a81f7d1cf9ee56.png)

Check your current directory in the terminal. In my case it looked like this, so I installed in the current folder. If it's different, use cd to change directories.

```
フォルダ一覧 ls フォルダにに移動する cd フォルダ名 一つ上の階層に移動する cd .. インストールする位置を決める。 C:\Users\souto\public\Astro-tutorial>
```

When the location is set, type **npm create astro\@latest ./** and press Enter. This installs the latest Astro into ./ (the current folder).

```
npmコマンドを使用して今いるフォルダ内にインストールする npm create astro@latest ./ 今いるフォルダ内に新しいフォルダを作成し、そこにインストールする npm create astro@latest [フォルダ名]
```

If all goes well you'll see a series of prompts. Use the arrow keys to navigate. Since we're making a blog, move down and select "use blog template."

[![Image from Gyazo](../../media/75c37ef48750fa6c79003bc59618c1c7a7e1ac4ce7bec98120f2cf6c9b95dd69.png)](../../media/75c37ef48750fa6c79003bc59618c1c7a7e1ac4ce7bec98120f2cf6c9b95dd69.png)

After that, you can just press Enter for the remaining prompts.

```
tmpl How would you like to start your new project? Use blog template ts Do you plan to write TypeScript? Yes use How strict should TypeScript be? Strict deps Install dependencies? Yes しばらくするとインストールが完了する next Liftoff confirmed. Explore your project! Run npm run dev to start the dev server. CTRL+C to stop. Add frameworks like react or tailwind using astro add. Stuck? Join us at https://astro.build/cat npm run devでサーバーを起動すると...? astro v4.8.2 ready in 243 ms ┃ Local http://localhost:4321/ ┃ Network use --host to expose 22:50:46 watching for file changes...
```

Once installation finishes, start the Astro dev server by running **npm run dev** in the console. Then open the displayed URL in your browser.

[![Image from Gyazo](../../media/943b02380c9152d445f006fbe35bb81a90cc52bf7512f9d7bbb9526151588f6f.png)](../../media/943b02380c9152d445f006fbe35bb81a90cc52bf7512f9d7bbb9526151588f6f.png)

_Done! That was easy._

### How Astro works

You might be surprised by the many files generated, but in practice you'll mainly work in the public and src directories.

Astro itself isn't the website — it generates HTML files based on .astro files. The content in src is converted to HTML at build time unless you change rendering settings.

In other words, if you write code to fetch a list of blog posts, that data is fetched at build time and converted into HTML when you publish the site (a process called **building**). Astro calls this **pre-rendering**. This makes pages fast but means **you can't update content in real time** — keep that in mind. Astro also offers on-demand rendering, which fetches data on each request, but in this tutorial we'll use pre-rendering. For a personal blog, that's usually enough.

[![Image from Gyazo](../../media/4388099487581d6d18895835aa6fce2b9bbc7ab27f79d6afe73398331c7d2a73.png)](../../media/4388099487581d6d18895835aa6fce2b9bbc7ab27f79d6afe73398331c7d2a73.png)

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

[![Image from Gyazo](../../media/ba436f3b92fbd89def4cc221b8d22abb84f2eb4834035774499ae5f837c07f6a.png)](../../media/ba436f3b92fbd89def4cc221b8d22abb84f2eb4834035774499ae5f837c07f6a.png)

_index.astro_

```
--- import BaseHead from '../components/BaseHead.astro'; import Header from '../components/Header.astro'; import Footer from '../components/Footer.astro'; import { SITE_TITLE, SITE_DESCRIPTION } from '../consts'; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <p> Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro. </p> <p> This template comes with a few integrations already configured in your <code>astro.config.mjs</code> file. You can customize your setup with <a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind, React, or Vue to your project. </p> <p>Here are a few ideas on how to get started with the template:</p> <ul> <li>Edit this page in <code>src/pages/index.astro</code></li> <li>Edit the site header items in <code>src/components/Header.astro</code></li> <li>Add your name to the footer in <code>src/components/Footer.astro</code></li> <li>Check out the included blog posts in <code>src/content/blog/</code></li> <li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li> </ul> <p> Have fun! If you get stuck, remember to <a href="https://docs.astro.build/" >read the docs </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask questions. </p> <p> Looking for a blog template with a bit more personality? Check out <a href="https://github.com/Charca/astro-blog-template" >astro-blog-template </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>. </p> </main> <Footer /> </body> </html>
```

The file structure looks like this. I rewrote it to be my personal page like this:

```
--- import BaseHead from "../components/BaseHead.astro"; import Header from "../components/Header.astro"; import Footer from "../components/Footer.astro"; import { SITE_TITLE, SITE_DESCRIPTION } from "../consts"; --- <!doctype html> <html lang="en"> <head> <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} /> </head> <body> <Header /> <main> <h1>そうまめのサイト</h1> <p> そうまめのサイトへようこそ！このページはAstroのblogテンプレートを使用して作成しました。 </p> </main> <Footer /> </body> </html>
```

After saving, the page should update automatically. That's the basic way to build a site with Astro. Since it's the same as writing HTML, those familiar with HTML should find it easy.

[![Image from Gyazo](../../media/ee439c8ea6ba71e833f765832cef7aee232adc61a02e274926ea7b752cc6b006.png)](../../media/ee439c8ea6ba71e833f765832cef7aee232adc61a02e274926ea7b752cc6b006.png)

Next, let's update the blog list. Navigate to /src/content/blog.

[![Image from Gyazo](../../media/ac5ff1886598b61de8d02a5349d1918471e76f61eaa2ecdedda84427c2484318.png)](../../media/ac5ff1886598b61de8d02a5349d1918471e76f61eaa2ecdedda84427c2484318.png)

_/src/content/blog_

Blog posts are stored in files ending with .md. Open one.

[![Image from Gyazo](../../media/cf2fab671f762d7e1129d994b532e06b91e1dbac9fb75ba112c130a9b2fae586.png)](../../media/cf2fab671f762d7e1129d994b532e06b91e1dbac9fb75ba112c130a9b2fae586.png)

You should see a Markdown file with metadata at the top. Astro calls this frontmatter. Blog posts in /content use this frontmatter to manage their metadata. In this template you can configure title, description, publish date, and images. Let's change the frontmatter like this:

```
--- title: '初めてのAstroブログ！' description: 'AstroとVercelを利用して、簡単に無料のサイトを作成！' pubDate: 'May 12 2024' heroImage: '/blog-placeholder-3.jpg' ---
```

For images, use files placed in the public directory, but we'll skip that for now.

[![Image from Gyazo](../../media/04d88ad12b62e5e883b9dac7d40c9789200598e5c7e24793b0f55773f44ee043.png)](../../media/04d88ad12b62e5e883b9dac7d40c9789200598e5c7e24793b0f55773f44ee043.png)

You should now be able to change the content as shown. From here, adjust whatever you need and your site will come together!

### Adding Tailwind CSS to customize styles

This project uses regular CSS for styling, but you can add Tailwind CSS for easier, utility-first styling. In Astro these additions are called integrations, and you can add various tools as needed.

[![Working with integrations](../../media/ec06780b7caf949a55a5d32c021c06bf1d229a4de1371bb5799635467ff37adf.webp)](https://docs.astro.build/ja/guides/integrations-guide/)

[Working with integrations](https://docs.astro.build/ja/guides/integrations-guide/)

Learn how to add, configure, and build integrations for your Astro project.

## Publishing the website

Once your site is ready, let's publish it. We'll use Vercel and connect it to GitHub for deployment.

### Syncing GitHub with your local repo

First, sync your local changes with GitHub. In VS Code, use the Source Control tab to commit your changes, then sync. When committing, include a message describing the changes. You cannot commit without a message — you'll be prompted to enter one if you try.

[![Image from Gyazo](../../media/5a08929c4fb7906a195afacf10a4c7770854dfe57d13bc804a6cc2f7f899b964.png)](../../media/5a08929c4fb7906a195afacf10a4c7770854dfe57d13bc804a6cc2f7f899b964.png)

_This is the screen before committing. Modified files are listed. For the first commit, all files will be uploaded._

After committing, push the changes to GitHub. Then check GitHub to see the files.

[![Image from Gyazo](../../media/fe37b8e3be46ab7490f138b4bdef471799cb8c9656367346fe9d4be639668a05.png)](../../media/fe37b8e3be46ab7490f138b4bdef471799cb8c9656367346fe9d4be639668a05.png)

### Hosting for free with Vercel

Use Vercel to host the website. Vercel connects to GitHub and makes it easy to publish web apps. Sign up on Vercel and be sure to use your GitHub account to register.

[![Agentic Infrastructure - Vercel](../../media/a66f342d9d6366154945c50f0cb19c2ad7476222df94711d28c0bd3c40087916.png)](https://vercel.com/)

[Agentic Infrastructure - Vercel](https://vercel.com/)

The autonomous stack for every app and agent.

[![Image from Gyazo](../../media/50041d274e326594d913d6dddb500a1a4a10f36311f488b8124bbdbab39187fe.png)](../../media/50041d274e326594d913d6dddb500a1a4a10f36311f488b8124bbdbab39187fe.png)

After registering, go to the dashboard and click "Add new…" → "Project". You'll see a list of repos from your connected GitHub account — select the Astro repository you created.

[![Image from Gyazo](../../media/caeb9e137620027b93943a45a1a77fcf107a3406ccb0a1d0a44215cd150a81fc.png)](../../media/caeb9e137620027b93943a45a1a77fcf107a3406ccb0a1d0a44215cd150a81fc.png)

There are no special settings needed — just click "Deploy". That's it; your site will be published.

[![Image from Gyazo](../../media/96a42ee8226dae15fa0e43fcd20a55ab25453d36d77f5609fb240ed49e5ee32f.png)](../../media/96a42ee8226dae15fa0e43fcd20a55ab25453d36d77f5609fb240ed49e5ee32f.png)

Once deployed, open the published site.

[![Image from Gyazo](../../media/5e9cd4b7e62eadfa272a3658f5571bf95634fe2f11a6aa65fc2b5f236136f495.png)](../../media/5e9cd4b7e62eadfa272a3658f5571bf95634fe2f11a6aa65fc2b5f236136f495.png)

[Astro Blog](https://astro-tutorial-six-peach.vercel.app/)

Welcome to my website!

With that, you've covered the basics of building and publishing a site. Customize it to your needs!

### Adding a custom domain on Vercel

If you already own a domain (like example.com), you can add it in Vercel. In the Vercel dashboard, select your project and click "Domains."

[![Image from Gyazo](../../media/02306d88c9b92f4ca7a7d2455c1331e5f29202b85f650795dcfd7300a5a118e1.png)](../../media/02306d88c9b92f4ca7a7d2455c1331e5f29202b85f650795dcfd7300a5a118e1.png)

Click the search box and enter your domain. Vercel will present a guide for connecting the domain — follow those steps to add it.

[![Image from Gyazo](../../media/49cc4f626c3d6129e3a9ae5fcf4f2b4cd7992cd61dcea54d158ec6a02d74832b.png)](../../media/49cc4f626c3d6129e3a9ae5fcf4f2b4cd7992cd61dcea54d158ec6a02d74832b.png)

## Conclusion

You should now be able to build a website from start to finish. Many other frameworks like Next.js follow similar workflows, so try different tools and find what suits you best. Follow me on social media if you'd like! (By the way, the site below is also made with Astro.)

<https://so-bean.work/ja>
