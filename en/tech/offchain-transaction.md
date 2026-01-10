---
title: "How to Make Bitcoin Transactions Without Using the Blockchain (Off-Chain)"
emoji: "🤖"
tags:
  - "crypto"
published_at: "2023-05-09T00:00:00.000Z"
isTranslated: true
sourcePath: "ja/tech/offchain-transaction.md"
sourceHash: "cdca2f6f3d327da6aec04614ee07ee70568b95b6d554af9b082a2d5dd225ee29"
---

# How to Make Bitcoin Transactions Without Using the Blockchain (Off-Chain)

> This article is a re-upload of one I wrote quite a while ago.

When people hear "cryptocurrency", many probably think of the blockchain. I recently researched transactions that don't use the blockchain, so I've summarized what I found.

## What is the blockchain

To explain the blockchain simply in real-world terms...

[![Image from Gyazo](https://i.gyazo.com/9713f36f1f5ee01a3ecf8e13bc08659a.png)](https://gyazo.com/9713f36f1f5ee01a3ecf8e13bc08659a)

Like this.

First, person A makes a transaction with person B.

Because that transaction was correctly executed, it needs to be recorded.

The record is very important — if it's stolen it would be a disaster. So, we decide to use many safes around the world and store the transaction record in several of them.

The safes are made of reinforced glass, so everyone can see inside them.

This makes it difficult to tamper with the transaction records. And that's that.

...Doing it this way — using the blockchain — is called on-chain.

Huh? If there's "on", is there also "off"?

Don't worry. There definitely is.

## What is off-chain?

Now, to the main topic: what is off-chain?

Off-chain is a way of conducting transactions without using the blockchain as described above.

Records are stored in an internal database. That means, by itself, it's overwhelmingly inferior in terms of security. However, because you don't have to store each transaction on the blockchain, transaction speed becomes much faster. Something that took around 10–20 minutes can finish in a few seconds.

[![Image from Gyazo](https://i.gyazo.com/7dfd830ae8c57ca3ce21ba993c1f51c7.png)](https://gyazo.com/7dfd830ae8c57ca3ce21ba993c1f51c7)

Still, it's dangerous to do nothing, so cryptographic techniques are used. You create something called a payment channel, and in that room are A, B, and C. Everyone holds a key, and a transaction cannot be completed unless all three are present. When this payment channel is opened, A has ¥10,000 and B has ¥10,000; when transactions occur, the internal allocation changes — for example, A ¥0 and B ¥20,000. Finally, by uploading this allocation to the blockchain, the fees are minimal and transfers can be done quickly.

## Off-chain Use Case #1

Exchanges, for example, process countless trades per second. Because cryptocurrency values fluctuate quickly, it's prudent to execute trades as fast as possible. Also, data uploaded to the blockchain is hard to delete, so if personal information is accidentally uploaded, it cannot be undone. Therefore, cryptocurrency exchanges seem to choose to upload only the final results to the blockchain.

## Off-chain Use Case #2

Recently I've been using something called a Lightning wallet, which also uses off-chain mechanisms. You might think, "It's just got 'Lightning' in the name!" but I think it's better to consider them entirely different. A regular wallet records each individual transaction, whereas this records only the final result. If you're sending small amounts, this is more convenient.

The advantages of off-chain transactions are low fees and fast transfers.

On-chain transactions are stored on a blockchain created by miners, so you have to pay the miners. That's why there are fees.

However, if something is simply off-chain, there's a risk of tampering, so cryptographic techniques are used to maintain security.