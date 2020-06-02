---
title: 'How to set your git.config'
date: "2020-06-01"
description: Setting git config to not do git push origin <branch> every time
tags:
  - git
  - how-to
show: true
author: shivam
---

We always type `git push origin master`, while working on feature branch we type `git push origin JIRA-1`, sometimes the names of the feature branch is not easy then we use `git push origin this-branch-will-do-something` to push the code over GitHub or any other hosting service. In each case, we are doing redundant work of copy-pasting or typing branch name which is redundant and annoying as you have to remember the branch name exactly or you might end up pushing the code to the wrong branch. This can be handled by just with one command,

```bash
git config push.default current
```

This command push changes to `.gitconfig` file and after execution `.gitconfig` file looks like this:

```vi
...
[user]
  name = author
  email = author@itsopensource.com

[push]
  default = current
  
...

You can directly append in git config too.

After this, all you need to do is:

```bash
git push origin
```


**Note** - If you do this inside a git repo, this will only be available for that repo, if you want to do it globally and add ``--global`` flag:

```bash
git config --global push.default current
```


This will make these changes to be set globally across all the git repos you are using.

Happy git!
