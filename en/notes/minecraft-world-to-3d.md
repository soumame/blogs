---
emoji: 🤖
isTranslated: true
published_at: 2022-12-02T00:00:00.000Z
sourceHash: 8704e654ab2983fc71e9d85e00dcb8e22f1ad809af0144cb8a405eb29c9343d0
sourcePath: ja/notes/minecraft-world-to-3d.md
tags:
  - game
title: 【Bedrock & Java】Convert a Minecraft World to 3D for Free!
---

# 【Bedrock & Java】Convert a Minecraft World to 3D for Free!

[![Image from Gyazo](../../media/d5af8c368dedc42894e3cb8dd173b5607204a9407025bb68f30d94c6dde01f0d.png)](../../media/d5af8c368dedc42894e3cb8dd173b5607204a9407025bb68f30d94c6dde01f0d.png)

This topic gets asked quite often, so I’m putting it together here on note. For Bedrock (the "統合版"), you need a process that converts it to Java along the way, so you must own both versions if you’re converting from Bedrock.

### What you need

- Minecraft Java Edition
- A device that can run apps (PC/Mac, etc.)
- A Java runtime environment

If you don’t have these, please install them.

If you’re converting from Bedrock, you need Minecraft Bedrock Edition (統合版) and a PC running Windows 10 or later.

### Step 1 - Prepare the world

(You probably already have a world if you came here to make one 3D…)
If you just want to try things out, feel free to generate a random world for testing.

If you’re using Education Edition, you need to unpack the MCpack & change the file extension to extract the file called a DB file, then replace it with the Bedrock version’s DB file. **If you’re not sure what you’re doing, I recommend not touching the DB files. You could corrupt your Minecraft world.**

### Step 2 (Bedrock only) - Convert the world to the Java edition

Use a dedicated app to convert the world. The first tool I’ll introduce is "je2be", which is free. The second option is the paid Universal Minecraft Tool. Here I’ll explain the procedure using the first tool, je2be.

<https://apps.microsoft.com/store/detail/je2be/9PC9MFX9QCXS?hl=ja-jp&gl=jp>

<https://www.universalminecrafttool.com/>

Install and open the app, click "From Bedrock to Java" and you’ll see a list of worlds like this.

[![Image from Gyazo](../../media/8dfd0d72989c8c1fd446537274d14de440e7d6f8f2941e533cb7716dbc40948f.png)](../../media/8dfd0d72989c8c1fd446537274d14de440e7d6f8f2941e533cb7716dbc40948f.png)

_Selection screen_

From the displayed worlds, choose the one you want and start the conversion.

[![Image from Gyazo](../../media/0655599239232171d83cb611af5b58a2236b73c8017f3ce5255f0c2f859f84ab.png)](../../media/0655599239232171d83cb611af5b58a2236b73c8017f3ce5255f0c2f859f84ab.png)

_Converting_

When conversion finishes, a dialog will prompt you to save in Java format — save it wherever you like.

> People often lose track of where they saved it, so it’s a good idea to save it in the saves folder (C:\Users(username)\AppData\Roaming.minecraft\saves).

Once saving is complete, the conversion process is done. Easy, right? (taunt)

### Step 3 - Convert the world into a 3D format

Now for the main part. Here we’ll use the tool jmc2obj to export the Minecraft world into 3D. Download it from the link below:

<https://github.com/jmc2obj/j-mc-2-obj/releases>

> The usage instructions for jmc2obj are quoted from <https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started> (in English)

1. Place the downloaded folder wherever you like.
2. Open the file named "jMc2Obj-\[version].jar".
3. Click the \[...] button shown in the image, and select the folder that contains the Java-format world you saved earlier (if you saved it in saves, you probably don’t need to change settings).
4. Click the \[∨] in the directory field and choose the world you want to load.
5. Then click \[Load] next to it to open the world.

[![Image from Gyazo](../../media/9168d083481632892d7cd5905687755c61bbcff3c0400114f971e14ee8279774.png)](../../media/9168d083481632892d7cd5905687755c61bbcff3c0400114f971e14ee8279774.png)

_Quoted from&#x20;_*<https://github.com/jmc2obj/j-mc-2-obj/wiki/Getting-started>*

When the world loads correctly, it will look like the image below. The steps are:

1. Drag to select a region, then click \[Export] to open the export settings. (Recommended settings: set offset to "Center", and check "Create a separate object for each material".)
   There are many other settings; I’ll skip them here. Google them yourself.
2. Click \[export] in the settings window to begin exporting. Export time varies depending on the selected area and export settings.
3. When the export is finished, a save dialog will appear. Choose a location to save. The export saves as OBJ and MTL files, and the textures are saved in a tex folder (part of the textures are saved in the tex files).

[![Image from Gyazo](../../media/414af300f427e292eff0d0b63e92ff732df769a3c8bb7f32822a4fdef702d80f.png)](../../media/414af300f427e292eff0d0b63e92ff732df769a3c8bb7f32822a4fdef702d80f.png)

_Tada! This alone is amazing!_

### Step 4 - Import the 3D-converted world into Blender

Here we’ll import the data you just created into Blender, a free 3D software.

> Wait… you’ve never used Blender? Sorry, explaining it would take all day. Really. I’ll explain how to import, but be prepared.

To import the data, use an add-on called MCprep. This lets you import without manually setting up materials.

<https://theduckcow.com/free-download/>

From the link above, choose MCprep and download it. Then add it to Blender as an add-on.

[![Image from Gyazo](../../media/3dba6f47cdda1ea3371252ae5eb67caafdff37ea6036c1d988fa5dbbd28f1952.png)](../../media/3dba6f47cdda1ea3371252ae5eb67caafdff37ea6036c1d988fa5dbbd28f1952.png)

_Add-on_

<https://styly.cc/ja/tips/nimi-blender-addon/#Blender>

↑ This link shows how to add it.

After adding, an MCprep tab will appear on the right side of Blender. Use this add-on to automate texture assignment.

Click \[jmc2obj], then click \[import OBJ] to import the file.

[![Image from Gyazo](../../media/2e3ea6ff748443f1b50561572de49402e20a2e338c68409a37932b57c23a0b1a.png)](../../media/2e3ea6ff748443f1b50561572de49402e20a2e338c68409a37932b57c23a0b1a.png)

_Click the MCprep button to open this_

[![Image from Gyazo](../../media/6121c1b9291d84dc1ef735ce85e49f1420f598e6664ddb6e56ddf346e8830447.png)](../../media/6121c1b9291d84dc1ef735ce85e49f1420f598e6664ddb6e56ddf346e8830447.png)

_Click here_

If the world loads successfully, you’re done. Click the sphere button in the top right to switch to Rendered view and take a look.

[![Image from Gyazo](../../media/1167d1c4a593e3063b4f6a105875a80dd5932beb8781c61aaf863669c17db72f.png)](../../media/1167d1c4a593e3063b4f6a105875a80dd5932beb8781c61aaf863669c17db72f.png)

_From left: Wireframe, Solid Shading, Material Preview, Rendered View — it gets progressively prettier. What happens if you press it…?_

[![Image from Gyazo](../../media/eadb737a1fb686f7db302b24f298311d8dd94829c98dbcc3ed0dab7b105d711f.png)](../../media/eadb737a1fb686f7db302b24f298311d8dd94829c98dbcc3ed0dab7b105d711f.png)

_Whoa!! So beautiful!!_

Now just add lights like lamps or suns and position a camera to finish.

Good work!

### Promotion for the team I run: 逸般人

A creative group made up of crazy elementary, middle, and high school students 💥
We work on themes like Minecraft, 3DCG, video, and education.
🏆 Winner of the Minecraft Cup 2021 Impress Award 🏆

<https://outstndrs.start.page/>
