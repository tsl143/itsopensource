---
title: 'How to open files always in a new tab in Visual Studio Code'
date: "2020-01-18"
slug: 'how-to-open-files-always-in-a-new-tab-in-visual-studio-code'
description: Solution to open files always in a new tab in Visual Studio Code
  - vscode
  - tricks
show: true
author: shivam
---


If you are Visual Code fan, and use it as your primary editor to write the code it always sucks to open a file in new tab, everytime you have to either right click on the tab and choose `keep open` or use the shortcut `cmd + k` `enter`. This all happens because of the preview mode of VS Code.

To fix this, the solution is to open `setting.json` file, add the following:


```code
"workbench.editor.enablePreview": false
```

Cheers