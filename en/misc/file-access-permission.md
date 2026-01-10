---
title: "File access permissions on UNIX-like systems such as Linux"
emoji: "👥"
tags:
  - "dev"
published_at: "2025-11-05T00:00:00.000Z"
description: "About access permissions for UNIX-like systems such as Linux"
isTranslated: true
sourcePath: "ja/misc/file-access-permission.md"
sourceHash: "71bfe87d85e5fabfd686b37f61eeed1c338242619f4e74592a60c7b1d5921a2b"
---

I researched file access permissions on UNIX-like systems such as Linux and am leaving a note here. Please tell me if anything is incorrect.

`ls -l`をMacOSでやると、こういうのが出てくる。
```bash
❯ ls -al
total 1632
drwxr-xr-x@ 206 my-name  staff   6592 Nov  5 16:17 .
drwx------@ 785 my-name  staff  25120 Nov  5 15:50 ..
-rw-r--r--@   1 my-name  staff  12292 Nov  5 16:18 .DS_Store
drwxr-xr-x@  80 my-name  staff   2560 Nov  5 16:16 001-039
-rw-rw-r--@   1 my-name  staff     32 Nov  5 16:00 001.csv
-rw-rw-r--@   1 my-name  staff     14 May 11  2022 001.txt
...
```

It's a command to list files, but what's that `-rw-rw-r--@` on the left?

## Permission notation on UNIX-like systems

According to what I found, UNIX-like OSes express permissions in this way. The leading `-` and the following three groups represent permissions for user, group, and others.

Breaking down `-rw-rw-r--@` gives `-` | `rw-` | `rw-` | `r--` | `@`.

- The first character is either `-` or `d`; `d` indicates the entry is a directory.
- The subsequent groups of three characters indicate permissions (described below).
	- The three-character group repeats three times. The first is the owning user, the next is the owning group, and the last is other users.
	- In the example `-rw-rw-r--@   1 my-name  staff     14 May 11  2022 001.txt`, my-name is the owner, and staff is the owning group.
	- If it's `rwxrwxrwx`, everything is permitted.
- The trailing `@` indicates extended attributes are present on certain OSes like macOS. (On some OSes it might be `+`?)
	- The rwxrwxrwx settings alone aren't always sufficient, so macOS adds extra information.
## Explanation of permission types

Their meanings are as follows:

| Character  | Meaning           |
| --- | ------------ |
| `-` | Not allowed        |
| `r` | Read - read permission  |
| `w` | Write - write permission |
| `x` | eXecute - execute permission |

If read and write are allowed but execute is not, it would look like `rw-`.