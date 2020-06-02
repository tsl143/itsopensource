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

While working with git, we always type `git push origin master` to push commit the to remote branch, while working on a feature branch we type `git push origin JIRA-1`, sometimes the name of the feature branch can be big, say `git push origin this-branch-will-do-something`.  
In each case, we are copy-pasting or typing branch name which is redundant and annoying as we have to remember the exact branch name or we might end up pushing the code to the wrong branch.  

This can be handled by just with following command:

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

We can directly modify in `.gitconfig` too.

Post this, every time while pushing change, all we need to do is:

```bash
git push origin
```


**Note** - If this is done inside a git repo, the change will only be available for that repo, if you want to do it globally then add ``--global`` flag:

```bash
git config --global push.default current
```


This will make these changes to be set globally across all the git repos you are using.

Happy git!
