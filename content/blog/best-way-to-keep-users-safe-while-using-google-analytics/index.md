---
title: 'Best way to keep users safe while using Google Analytics'
date: '2020-07-05'
description: 'something very descriptive'
tags:
  - javascript
  - analytics
  - privacy
show: true
author: trishul
---

Google analytics is the most used analytics over the web, Google is made it pretty easy and pretty effective in terms of implementation and dashboard UI.
The most common way to enable google analytics on any website is adding the tag manager (the code snippet provided) to the website. This is basically allowing google to inject code on your website.
Now based on the selections on the analytics UI, this tag manager inserts code in to your websites.
The google tag manager sends all the data even if it contains personal identifiable information
Some URL like -> https://xyzzsomethingconfedential.com/username=XXX&password=XXX&customerId=XXX
This goes to google and is tracable on dashboard too.

As a developer we always want to control whatever content is being served on our website.
Google tag managers kind of blow this up

There are several alternatives to google analytics check this(link to alternatives)
But if you still want to use google analytics, then instead of using google tag manager the more dev controlled option is using Google Measurement Protocol
All we need to do is to send XHR request to google analytics from our code (generally at page load)
With this, you can totally control what user data is being sent to google 
Some intresting parameters which can be controlled are
dr - document referrer
dl - document location - the exact URL

This is a post request with all parameters in URL
like 
```BASH
POST /collect HTTP/1.1
Host: www.google-analytics.com

payload_data
```

Mandatory params are 
```
v=1              // Version.
&tid=UA-XXXXX-Y  // Tracking ID / Property ID.
&cid=555         // Anonymous Client ID.
&t=              // Hit Type
```
Google provides a number of parameters in case you want more detailed analytics, check the parameter guide [here](https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide)

Google also provides a tool to check and create a proper hit [Hit Builder](https://ga-dev-tools.appspot.com/hit-builder/)

If you still find this a bit exhausting, then atleast follow this to make sure You are not sending user data to google
https://support.google.com/analytics/answer/6366371#page-url

