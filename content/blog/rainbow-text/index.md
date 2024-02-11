---
title: 'Rainbow text with CSS'
date: "2024-02-11"
tags:
 - css
 - design
show: true
author: trishul
featuredImage: ../../assets/rainbow.png
---
 
Some designers can not get enough of colors and want the text not to be in solid color but rainbow colors. This traditional developers achieve by using a PNG image, something like this:
![Rainbow Text](./rainbow.png)

But with modern day CSS, this can be achieved with just few CSS rules. 

### How
1. Create a Div
2. Add some text
3. Add some basic styling like `font-size`, `line-height` etc.
4. Add a background color `background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);`: Rainbow 🌈 
5. Add this property to the div `background-clip: text`: This makes sure the background is only used for the available text
6. Add `color: transparent`: This makes sure that the clipped background on text is completely visible.
7. That's it 😎

#### Code
```CSS
.rainbow-text {
   background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
   background-clip: text;
   color: transparent;
   font-size: 40px;
}
```

#### DEMO
<style>
 .rainbow-text {
   background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
   background-clip: text;
   color: transparent;
   font-size: 60px;
   font-weight: 900;
   font-family: Montserrat, sans-serif;
}  
</style>
<div class="rainbow-text">Trishul Goel</div>

Right click and inspect the text above and observe the CSS in inspector.  

<center>Hope this helps 😊 </center>
<br/>
