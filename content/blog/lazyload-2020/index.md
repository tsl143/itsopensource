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

One of the biggest performance win for image extensive webpages is `lazy loading`. Normally browser fetches all the required resources from the server as soon as possible. When the website has lots of images this goes against the speed and performance of website. Consider a page loading 100s of [dog images](https://itsopensource.com/demos/lazyload/), there will be 100 asynchronous http requests. More the http requests, slower the website.

All the images are required for the functionality of the website, but all the images might NOT be required at FIRST load. Here `Lazy loading` does the magic, the images will be fetched only when they are required for the content in current view port. So for a long image extensive page, the images which are required by the top part of website will be intially fetched on load and as website is scrolled down, the respective images are fetched.

This has been practiced for long and various Javascript libraries are built to achieve this.
* [Jquery Lazyload](https://plugins.jquery.com/lazyload/)
* [Vanilla Lazyload](https://github.com/verlok/lazyload)
* [LazySizes](https://github.com/aFarkas/lazysizes)

The list goes on. But the good news is the specification for native image lazy-loading has been merged into the HTML standards. Check [HTML standard repo](https://github.com/whatwg/html/pull/3752#issuecomment-585202516).

Official specs - <a target="_blank" href="https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes" >https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes</a>

WIth this we no more need any lazy loading libraries and all we need to do is following:

```HTML
<img loading="lazy" src="https://placedog.net/400/400/random" alt="doggo">
```

Notice the `loading` attribute, this is the magic keyword. It accepts 3 values `auto`, `lazy`, `eager`

* `auto` - this is as good as not mentioned `loading` attribute. This sets default browser behavior for images
* `lazy` - this enables lazy load ie. feth images only when its near viewport.
* `eager` - this fetches images immediately.


`Lazyload` will soon be supported in all major browsers by default. But if you want to test it you can turn on experimental flags

Firefox (>=74):
1. Goto `about:config`
2. Set `dom.image-lazy-loading.enabled` to `true`

Chrome:
1. Goto `chrome://flags`
2. Set `Enable lazy image loading` to `Enabled`


Demo: <a href="https://itsopensource.com/demos/lazyload/" target="_blank">https://itsopensource.com/demos/lazyload/</a>

<center><sub>Lazyload in action</sub></center>

![Lazyload in action](./lazyload.gif)