---
title: 'How to call a function on URL change in javascript'
date: "2020-07-03"
tags:
  - javascript
  - react
show: true
author: trishul
---

Modern JS frameworks tend not to reload the page but manipulate DOM and change URL path for internal navigation, for performance and smooth UX. But since there is no page reload, `window.onload` event does not get triggered for subsequent navigation. We run into a situation where we need to call a function whenever URL path changes (not the hash).

### Problem
The [`itsopensource.com`](https://itsopensource.com/) blog is built using [gatsby](https://www.gatsbyjs.org/), we wanted to add google analytics to this, but instead of using google tag manager, we tried to restrict what [data](https://github.com/tsl143/itsopensource/blob/master/src/html.js#L32) is sent to google and in this process, we need to send XHR request on every page load. We created a function `sendTelemetry` and called it on `window.onload`. This works as expected (partially), whenever the page is loaded the XHR is sent, but gatsby do not reload the page while changing the URL when any blog link is clicked, so XHR is sent only once per session and not on subsequent page loads.  
Javascript does not provide any native listener to path change (not hashchange).

### Solution
The `history` API maintains complete the navigation state. Whenever a new page is navigated `history.pushState` is called and page is added to the state. That means this event is called whenever the URL changes. We hooked our function on this, and done :)

```Javascript
(function(history){
    var pushState = history.pushState;
    history.pushState = function(state) {
      // YOUR CUSTOM HOOK / FUNCTION
      console.log('I am called from pushStateHook');
      return pushState.apply(history, arguments);
    };
})(window.history);
```

### Demo
A quick demo can be the following:
1. Open the browser console on this very page.
2. Paste the above-written code snippet.
3. Keep console open and navigate various pages on this blog
4. You should see a message in console on every navigation.

<br>

*The first choice for the title was `how to hook a function on history.pushState`.*  

Reference: [stackoverflow](https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate)  😉
