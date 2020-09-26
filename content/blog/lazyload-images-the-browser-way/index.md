---
title: 'Lazyload images the browser way'
date: "2020-02-21"
description: Enough of lazyloading libraries, finally browser supports lazyloading natively.
tags:
  - HTML
  - Javascript
show: true
author: trishul
---

One of the biggest performance wins for image-extensive webpages is `lazy loading`. Normally, the browser fetches all the required resources from the server as soon as possible. When the website has lots of images this goes against the speed and performance of the website. Consider a page loading 100s of [dog images](https://itsopensource.com/demos/lazyload/), there will be 100 asynchronous http requests. The more the http requests, the slower the website.

All images are required for the functionality of the website, but they might NOT be required on the FIRST load. Here `Lazy loading` does the magic— images will be fetched only when they are required for the content in the current view port. So for a long image-extensive page, the images which are required by the top part of a website will be initially fetched on the first load and as the website is scrolled down, the respective images are fetched.

This has been practiced for a while and various Javascript libraries are built to achieve this.
* [Jquery Lazyload](https://plugins.jquery.com/lazyload/)
* [Vanilla Lazyload](https://github.com/verlok/lazyload)
* [LazySizes](https://github.com/aFarkas/lazysizes)

The list goes on. But the good news is the specification for native image lazyloading has been merged into the HTML standards. Check [HTML standard repo](https://github.com/whatwg/html/pull/3752#issuecomment-585202516).

Official specs - <a target="_blank" href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes" >https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes</a>

With this we don't need any lazy loading libraries anymore and all we need to do is the following:

```HTML
<img loading="lazy" src="https://placedog.net/400/400/random" alt="doggo">
```

Notice the `loading` attribute, this is the magic keyword. It accepts 3 values `auto`, `lazy`, `eager`

* `auto` - this is equivalent to not including the `loading` attribute. This sets the default browser behavior for images.
* `lazy` - fetches images only when the element is in/near the viewport.
* `eager` - fetches the images immediately.


`Lazyload` will soon be supported in all major browsers by default. But if you want to test it, you can turn on the browser's experimental flags:

**Firefox (>=75):**
1. Goto `about:config`
2. Set `dom.image-lazy-loading.enabled` to `true`

**Chrome (>=76):**
1. Goto `chrome://flags`
2. Set `Enable lazy image loading` to `Enabled`


Demo: <a href="https://itsopensource.com/demos/lazyload/" target="_blank">https://itsopensource.com/demos/lazyload/</a>

<center><sub>Lazyload in action</sub></center>

![Lazyload in action](./lazyload.gif)
