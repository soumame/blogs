---
title: "How to Make Bitcoin Transactions Without Using Blockchain (Off-chain)"
emoji: "🤖"
tags:
  - "template"
published_at: "2023-05-09"
---

# How to Make Bitcoin Transactions Without Using Blockchain (Off-chain)

> This is a reupload of an article I wrote quite a while ago.

When people hear about cryptocurrency, many probably think of blockchain. I recently researched transactions that don't use blockchain, so I'll summarize what I learned.

## What is Blockchain
In simple terms, blockchain in the real world is like...

[![Image from Gyazo](https://i.gyazo.com/9713f36f1f5ee01a3ecf8e13bc08659a.png)](https://gyazo.com/9713f36f1f5ee01a3ecf8e13bc08659a)

Something like this.

First, Person A makes a transaction with Person B.

Since the transaction was done correctly, it needs to be recorded.

The record is very important, and it would be disastrous if stolen. So, the transaction record is stored in multiple safes among many that exist worldwide.

The safes are made of reinforced glass, so everyone can see them.

This makes it difficult to tamper with transaction records. All's well that ends well.

...This way of using blockchain is called on-chain.

What? If there's "on," is there "off" too?

Don't worry. There certainly is.

## What is Off-chain
Now, here's the main topic. What is off-chain?

Off-chain is a way of conducting transactions without using blockchain as explained earlier.

Records are stored in an internal database. This means that security-wise, it's overwhelmingly inferior on its own. However, since it doesn't need to save everything to the blockchain, transaction speeds are much faster. What used to take 10-20 minutes can be completed in seconds.

[![Image from Gyazo](https://i.gyazo.com/7dfd830ae8c57ca3ce21ba993c1f51c7.png)](https://gyazo.com/7dfd830ae8c57ca3ce21ba993c1f51c7)

Still, since it's dangerous to leave it unprotected, encryption technology is incorporated. A payment channel is created where Person A, B, and C are present. Everyone has a key, and transactions can't be completed without all three people. When this payment channel starts, if Person A has 10,000 yen and Person B has 10,000 yen, when a transaction is completed, the internal distribution ratio changes. For example, Person A: 0 yen, Person B: 20,000 yen. By uploading this final distribution ratio to the blockchain, fees are minimal and transfers are quick.

## Off-chain Application Example 1
Exchanges conduct countless transactions per second. Since cryptocurrency values fluctuate quickly, it's safer to conduct transactions as fast as possible. Also, since data uploaded to blockchain is difficult to delete, if personal information is accidentally uploaded, it's irreversible. Therefore, cryptocurrency exchanges apparently decided to only upload final results to the blockchain.

## Off-chain Application Example 2
I've been using something called a Lightning wallet recently, which also uses off-chain. You might think it's just because it has "Lightning" in the name, but it's better to think of it as something completely different. While wallets record every transaction, this only records the final result. This is more convenient for sending small amounts.

The benefits of off-chain transactions are lower fees and quick transfers.

On-chain requires paying miners who create the blockchain where transactions are stored. That's why fees are incurred.

However, being just off-chain would risk tampering, so encryption technology is used to maintain security.
