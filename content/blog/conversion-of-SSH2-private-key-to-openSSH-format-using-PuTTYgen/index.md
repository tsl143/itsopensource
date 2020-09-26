---
title: 'Conversion of SSH2 private key to openSSH format using PuTTYgen'
date: "2020-09-06"
description: Same Public Key can be reused for Windows & Linux
tags:
  - mercurial
  - hg
show: true
author: pallavi

---

### Problem Statement 
While working on mercurial(Version Control System), we need to generate different public/private keys for windows & Linux, which leads to have multiple keys for single user.


### Solution

If we want to access mercurial through Linux with your same key as Windows, then instead of generating a new rsa key pair ,we can reuse same public/private key pair to access mercurial from linux.
Hence same repository you can access via windows or linux without creating separate public/private key pair for both.

### STEPS :

Pre-requisite: There must a key pair existing in SSH2 format to access mercurial`

```
1. Open the PuTTY Key Generator
2. On the menu bar, click "File" -> "Load private key"
3. Select your <filename>.ppk file
4. On the menu bar, click "Conversions" -> "Export OpenSSH key"
5. Save the file as <filename> (without an extension) e.g. mercurial_rsa
```


You are all done. Same private key on windows can be reused(with above steps) with Linux.