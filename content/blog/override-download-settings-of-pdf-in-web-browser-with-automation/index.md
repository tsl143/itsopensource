---
title: 'Override download settings of pdf in web browser with automation'
date: "2020-09-13"
description: Using Selenium/Python automation, the settings of pdf download can be overriden, that already exist in browser(Firefox/Chrome).
tags:
  - Selenium
  - Python
  - automation testing
  - pdf setting
show: true
author: pallavi

---

### Changing pdf download settings in web browser using python-selenium 
Suppose in Firefox the default setting is:  whenever a pdf opens then download it in 'Downloads' folder.
But while running the automation script, we need to open the pdf in a browser rather the downloading it.

### Solution

You need to give below snippet in your function where you do the browser settings:


```
FIREFOX:
preference_option = driver.FirefoxProfile()
preference_option.set_preference("pdfjs.disabled", False)

```

pdfjs.disabled = False : pdf will be opened in browser while script execution
pdfjs.disabled = True: pdf will be downloaded in the specified location while script execution

```
CHROME:
preference_option = driver.ChromeOptions()
preference_option.add_experimental_option("prefs",
          {
            "plugins.always_open_pdf_externally": False
          })
```		  
		  
plugins.always\_open\_pdf\_externally = False : pdf will be opened in browser while script execution  
plugins.always\_open\_pdf\_externally = True: pdf will be downloaded in the specified location while script execution
		  

`NOTE: 
This setting will be only valid for your automation session. Once tear down happens, browser 
will regain its original pdf settings.`


So easy! Now you see how simple it is to change download settings of pdf in web browser by automation.