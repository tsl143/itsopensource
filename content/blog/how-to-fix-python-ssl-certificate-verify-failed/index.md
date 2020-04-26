---
title: 'How to fix Python SSL CERTIFICATE_VERIFY_FAILED'
date: "2019-12-12"
slug: 'How-to-fix-Python-SSL-CERTIFICATE_VERIFY_FAILED'
tags:
  - python
  - ssl
  - how-to
show: true
author: shivam
---

Recently after upgrading the python version to `3.6`, I started getting this error every time I am running any python script.

```bash
[SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed (_ssl.c:726)>
```

The reason behind this is Python 3.6 on macOS uses an embedded version of OpenSSL, which does not use the system certificate store. More information [here](https://bugs.python.org/issue28150).

Quick fix for this problem on macOS is to open Finder and double-clicking `Install Certificates.command`

![](1.png)

Or you can do this via terminal by:

```bash
open /Applications/Python\ 3.6/Install\ Certificates.command
```

Enjoy!