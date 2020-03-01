---
title: 'How to create gists from command line'
date: "2019-12-10"
slug: 'how-to-create-gists-from-command-line'
tags:
  - github
  - gists
show: true
author: shivam
---

Creating GitHub gists is always a problem if you want to share some changes in your code with someone else. First, you need to copy the changes from the terminal and then paste in [gist.github.com](https://gist.github.com/). This process is really time taking if you do it very often.

So, I was looking for some automated method to create gists, I stumbled upon [`pretty-diff`](https://github.com/scottgonzalez/pretty-diff), a single line command that will create a GitHub gist with the changes in your git repository.

## Install

Install [`pretty-diff`](https://www.npmjs.com/package/pretty-diff)

```bash
npm i -g pretty-diff
```

Now create a [Personal Access Token](https://github.com/settings/tokens) (make sure to check "Create gist"). After that run this command:

```bash
git config --global gist-diff.token "AccessToken"
```

Now you are ready to use `pretty-diff` and share the git changes.
Just run this command and it will upload the changes to GitHub gist.

```bash
gist-diff
```

`gist-diff` will create a gist and then opens the browser to the URL of the gist.

Happy sharing the code.
