---
title: Quickly Set Up a Minecraft Server on macOS + Docker
emoji: 🐳
locale: en
slug: minecraft-server-macos-with-docker
category: tech
tags:
  - dev
  - Minecraft
published_at: 2025-11-28T00:00:00.000Z
updated_at: 2025-11-28T00:00:00.000Z
description: "Operating a Minecraft server has become a fundamental skill it seems, so I'll jot down how to create one. (Source: Me) I hope to write a proper article someday, but for now, I'll just write it casually."
isDraft: false
hidden_from_listing: false
noindex: false
isTranslated: true
translation_of: 01M3TQXVJASQRE7M2SS1J9W1KJ
seo:
  title: null
  description: null
  image: null
  canonical: null
  noIndex: false
---

## Setting Up a Minecraft Server is a Hassle

It's nostalgic to think about the days of doing all sorts of things like Forge and Java. Fortunately, now you can run a Minecraft server, backups, and other features with just `docker compose up`. I think this is good enough for quickly setting up a server.

## Install Orbstack

This phrase might sound unfamiliar, but just think of it as Docker.

<https://orbstack.dev>

You can consider this a replacement for Docker Desktop that works on macOS.

## Create a Docker Compose

We will create a Docker compose file.

```yaml
version: "3.8"
networks:
  mc-network:
    name: mc-network
    driver: bridge
services:
  mc:
    image: itzg/minecraft-server:latest
    tty: **true**
    stdin_open: **true**
    ports:
      - "25565:25565"
      - "25575:25575"
    environment:
      EULA: "TRUE"
      TYPE: "FABRIC"
      VERSION: "1.20.1"
      
      # Various settings. Server configurations are specified as environment variables. Refer to the official documentation.
      FABRIC_LOADER_VERSION: "0.16.10"
      MEMORY: "16G"
      MAX_PLAYERS: "100"
      MOTD: "{Server Name}"
      ICON: "{Any Icon}"
      OVERRIDE_ICON: "true"
      ONLINE_MODE: "true"
      USE_AIKAR_FLAGS: "true"
      TZ: "Asia/Tokyo"
      FORCE_GAMEMODE: "true"
      SIMULATION_DISTANCE: "32"
      VIEW_DISTANCE: "32"
      SPAWN_PROTECTION: "0"
      PREVIEWS_CHAT: "true"
      ALLOW_FLIGHT: "true"
      RCON_PASSWORD: "admin"
    volumes:
      - "./data:/data"
    networks:
      - mc-network
  rcon-web:
      image: itzg/rcon
      restart: "always"
      ports:
        - "4336:4326"
        - "4337:4327"
      environment:
        RWA_USERNAME: admin
        RWA_PASSWORD: admin
        RWA_ADMIN: "TRUE"
        # Refers to the hostname of 'mc' compose service below
        RWA_RCON_HOST: mc
        # Must match the RCON_PASSWORD configured for the container
        RWA_RCON_PASSWORD: "admin"
      networks:
        - mc-network
  backups:
    image: itzg/mc-backup
    restart: "always"
    environment:
      INITIAL_DELAY: "1m"
      BACKUP_INTERVAL: "3h"
      RCON_HOST: mc
      RCON_PORT: "25575"
      RCON_PASSWORD: "admin"
    volumes:
      - ./data/world:/data
      - ./backups:/backups
    networks:
      - mc-network
# Volume settings (You don't have to change this if you don't care)
volumes:
  mc: {}
```

### Sample Images Used in YAML

This is just one example, so you can add various things to this or perhaps you only need the server part.

#### itzg/minecraft-server:latest

- The Minecraft server runs completely on this one image.
  <https://docker-minecraft-server.readthedocs.io/en/latest/#using-docker-compose>

#### itzg/mc-backup

- This image creates backups at regular intervals. There is a unique communication form called RCON (Remote Console) used by Minecraft, which saves the world automatically.

<https://qiita.com/h_tyokinuhata/items/85d855f88d5d33c21949>

#### itzg/rcon

- This allows you to use rcon on the web.
- You can send commands from the web and perform various operations, making it very convenient.
- It makes server management easier. You might also consider integrating with Cloudflare Tunnel.
