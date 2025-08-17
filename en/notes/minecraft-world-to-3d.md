Here's the English translation while maintaining the markdown formatting:

---
title: "【Bedrock & Java】Convert Minecraft Worlds to 3D for Free!"
emoji: "🤖"
tags:
  - "template"
published_at: "2022-12-02"
---

# 【Bedrock & Java】Convert Minecraft Worlds to 3D for Free!

[![Image from Gyazo](https://i.gyazo.com/c4ca9b6081cf42b27472bb8e1cd58e18.png)](https://gyazo.com/c4ca9b6081cf42b27472bb8e1cd58e18)

Since this topic is frequently asked about, I'm compiling it in a note. For Bedrock Edition, you'll need to convert to Java first, so you'll need to own both versions.

### Requirements
* Minecraft Java Edition
* PC/Mac or device that can run applications
* Java Runtime Environment

Please install anything you're missing.

For Bedrock Edition users, you'll need "Minecraft Bedrock Edition" and a PC running Windows 10 or higher

### Step 1 - Prepare Your World
(I assume you already have a world since you're here to convert it to 3D...)
If you want to try this out, you can generate any random world

For Education Edition users, you'll need to convert it to MCpack, change the extension, and extract the DB file to modify it for Bedrock Edition. **If you're unsure about this process, I recommend not touching the DB files as it might corrupt your Minecraft world.**

### Step 2 (Bedrock Only) - Convert to Java Edition
We'll use specialized apps to convert the world. The first one I'll introduce is "je2be" which is free. The second is Universal Minecraft Tool, which is paid. Here, I'll explain the process using je2be.

[https://apps.microsoft.com/store/detail/je2be/9PC9MFX9QCXS?hl=ja-jp&gl=jp](https://apps.microsoft.com/store/detail/je2be/9PC9MFX9QCXS?hl=ja-jp&gl=jp)

[https://www.universalminecrafttool.com/](https://www.universalminecrafttool.com/)

Install and open the app, click "Bedrock to Java" and you'll see a list of worlds like this:

[![Image from Gyazo](https://i.gyazo.com/851078a10a8c28b035f2b4eca81d290e.png)](https://gyazo.com/851078a10a8c28b035f2b4eca81d290e)

*Selection screen*

Select your desired world from the list and start the conversion.

[![Image from Gyazo](https://i.gyazo.com/049c57ad120123505f60ea260b1dc3bf.png)](https://gyazo.com/049c57ad120123505f60ea260b1dc3bf)

*Converting*

When the conversion is complete, you'll be prompted to save in Java format. Save it wherever you prefer.

> It's easy to lose track of where you saved it, so it's recommended to save in the saves folder (C:\Users\(username)\AppData\Roaming\.minecraft\saves)

Once saved, the conversion process is complete. Easy, right? (wink)

### Step 3 - Convert World to 3D Format
Now for the main part. We'll use "jmc2obj," a software that extracts Minecraft worlds and converts them to 3D. Download it from the following link:

[https://github.com/jmc2obj/j-mc-2-obj/releases](https://github.com/jmc2obj/j-mc-2-obj/releases)

> Instructions for using jmc2obj are quoted from [https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started](https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started)
> (in English)

1. Place the downloaded folder wherever you like

2. Open the file named "jMc2Obj-[version].jar"

3. Click the [...] button shown in the image and select the Java Edition world file you saved earlier (if saved in saves folder, this might not be necessary)

4. Click the [∨] in the directory field and select the world you want to load

5. Then click [Load] next to it to open the world

[![Image from Gyazo](https://i.gyazo.com/bb11a66978329fa3859a13702352196e.png)](https://gyazo.com/bb11a66978329fa3859a13702352196e)

*Quoted from https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started*

When the world opens successfully, it will look like the image below. Here are the steps:

1. Select an area by dragging and click [Export] to access export settings. (Recommended settings: offset to "Center" and check "Create a separate object for each material")
    There are other settings but we'll skip them here. You can Google them yourself

2. Click [export] in the settings screen to begin exporting. Export time varies depending on the selected area and export settings

3. When export is complete, choose where to save it. It will save in OBJ and MTL formats, with textures saved in the tex folder (some textures are saved in the tex folder)

[![Image from Gyazo](https://i.gyazo.com/508465d744c1cd1b25d9e680c2bb8d92.png)](https://gyazo.com/508465d744c1cd1b25d9e680c2bb8d92)

*Ta-da! Amazing already!*

### Step 4 - Import the 3D Converted World into Blender
Here we'll use Blender, a free software, to import the data we just created.

> What...? Never used Blender before? Sorry about that. It would take forever to explain everything. I'll explain the basics, but be prepared

We'll use an extension (addon) called mcprep to import the data. This allows us to load everything without manual material setup

[https://theduckcow.com/free-download/](https://theduckcow.com/free-download/)

Download MCprep from the link above.
After downloading, add it as an addon in Blender.

[![Image from Gyazo](https://i.gyazo.com/3fa8f57fc05a846b6e3459b12a2a8fb1.png)](https://gyazo.com/3fa8f57fc05a846b6e3459b12a2a8fb1)

*Addon*

[https://styly.cc/ja/tips/nimi-blender-addon/#Blender](https://styly.cc/ja/tips/nimi-blender-addon/#Blender)

↑Installation instructions here

Once added, the MCprep tab will appear on the right side of Blender. We'll use this addon to automate texture assignment.

Click [jmc2obj], then [import OBJ] to import your file.

[![Image from Gyazo](https://i.gyazo.com/0a3076f2f6d698432ac493331e6c9ce6.png)](https://gyazo.com/0a3076f2f6d698432ac493331e6c9ce6)

*Press the MCprep button to open*

[![Image from Gyazo](https://i.gyazo.com/9c5967c6a8a298a7b4f88c7b8b189ddd.png)](https://gyazo.com/9c5967c6a8a298a7b4f88c7b8b189ddd)

*Click here*

If the world opens successfully, you're done! Press the ball button in the top right to switch to render view.

[![Image from Gyazo](https://i.gyazo.com/12ee2d4e3fa8ee9c28473ef3585f36c1.png)](https://gyazo.com/12ee2d4e3fa8ee9c28473ef3585f36c1)

*From left to right: wireframe, solid shading, material preview, and render view - getting progressively better. What happens when you press this...?*

[![Image from Gyazo](https://i.gyazo.com/6d2afc1661425647f2d1c642286c07bb.png)](https://gyazo.com/6d2afc1661425647f2d1c642286c07bb)

*Wow!! So beautiful!!*

Now just add lights, sun, and place your camera as desired, and you're done!

Great work!

### Promoting My Team "Outstndr"
A creative group of amazing students from elementary to high school 💥
Active in Minecraft, 3DCG, video production, and education
🏆Won the Impress Award at Minecraft Cup 2021🏆

[https://outstndrs.start.page/](https://outstndrs.start.page/)
