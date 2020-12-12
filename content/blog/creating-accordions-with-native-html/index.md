---
title: 'Creating accordions with native html'
date: "2020-12-07"
tags:
  - html
  - mindblowing
  - how-to
show: true
author: shivam
featuredImage: ../../assets/html5.png
---

Accordions are one of the most commonly used UI components for any website. For example FAQs section of the website, where only the question is shown, and when clicked the answer just opens up.
Generally, we handle this by creating 2 `divs` and adding some javascript to handle the open and close of the accordion. But recently I stumbled upon this hidden gem in HTML that eliminates the need of all this - [`<details>`](https://developer.mozilla.org/docs/Web/HTML/Element/details)

We can simply design a simple FAQ or summary section with `<details>` HTML tag without using Javascript!!! 🤯🤯🤯.
And the best part... it is supported by all the modern browsers (obviously except IE :( ) - [browser compatibility](https://caniuse.com/?search=details).  

### Using `<details>` tag

There are two elements here: `<details>` and `<summary>`. `<details>` is the wrapper for all the content you want to show and hide, and <summary> contains the — well, the summary and title of the section. `<summary>` is optional, if you do not add it, the browser will use some default text. For example, in Firefox and Chrome, it is `Details`. Below is a sample HTML markup:

```html
<details>
  <summary>Details</summary>
  <p>Something small enough to escape casual notice.</p>
</details>
```

And it will render like:

![part1](./1.gif)

This markup can be designed with CSS as any other HTML element. Now for creating beautiful accordions all you need is just HTML and CSS (and a will to let go of IE).

Demo: [https://itsopensource.com/demos/details/](https://bit.ly/htmldetails)


### References
* [MDN: details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)

Cheers.
