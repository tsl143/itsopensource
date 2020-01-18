---
title: 'How to open files always in a new tab in Visual Studio Code'
date: "2020-01-18"
description: Solution to open files always in a new tab in Visual Studio Code
  - vscode
  - tricks
show: true
author: shivam
---


If you are Visual Code fan, and use it as your primary editor to write the code it always sucks to open a file in new tab, everytime you have to either right click on the tab and choose `keep open` or use the shortcut `cmd + k` `enter`. This all happens because of the preview mode of VS Code.

The solution is way simpler than expected, just add the following line to your  `setting.json`
(Code Menu > Preferences > Setting)


```code
"workbench.editor.enablePreview": false
```

Cheers
