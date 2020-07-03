---
title: 'How to call a function on URL change in javascript'
date: "2020-07-02"
tags:
  - javascript
  - react
show: true
author: trishul
---






### Problem
The `itsopensource.com` blog is built using gatsby, we wanted to add google analytics to this, but instead of using google tag manager, we tried to restrict what is sent to google and in this process we need to send XHR request on every page load. We created a function `sendTelemetry` and called it on `window.onload`. This works as expected, whenever the page is loaded the XHR is sent, but gatsby do not reload the page while changing the URL when any blog link is clicked, so XHR is sent only once per session and not on subsequent page loads.  
Javascript do not provide any native listener to path change (not hashchange).

### Solution

https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate