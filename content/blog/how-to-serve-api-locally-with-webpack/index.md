---
title: 'How to serve an API locally with webpack'
date: "2020-06-22"
tags:
  - javascript
  - webpack
show: true
author: trishul
---

While developing a data driven web-app, the frontend may need to fetch data from various APIs provided by backend which may not be ready at the given time. In this case, we need to mock the response and serve it via dummy server, either local or remote. With Webpack this can be achieved without any dummy server. Webpack devserver allows custom handlers which can be used to serve the API response.  

We need to add a `devServer` entry to the webpack config, which would look something like this:

```Javascript
const data = require("./data.json");

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  plugins: [],
  devServer: {
    before: function(app) {
      app.get("/getData", function(req, res) {
        res.json(data);
      });
    },
    open: true,
    port: 3000
  },
  resolve: {
    extensions: [".js"]
  },
  module: {}
};
```

There are various amazing things that we can do with devserver (check [here](https://webpack.js.org/configuration/dev-server/)), we consider three of them here
1. `open` - launch the browser once the app is compiled
2. `port` - set the port to serve the app
3. `before` - We can define custom paths with endpoints in this function, from the docs -  
> Provides the ability to execute custom middleware prior to all other middleware internally within the server. This could be used to define custom handlers.  

So for given webpack config, if the content of data.json is - `[{a: 1}, {b: 2}, {c: 3}]` then  response for `http://localhost:3000/getData` will be

```JSON
[
  { a: 1 },
  { b: 2 },
  { c: 3 }
]
```

The `app` param of `before` function can be considered as `express` object and be used in the same context, `app.get` has `req` and `res` params, which are `request` and `response` object for the API call made.  

> To see this in action please checkout [this project](https://github.com/tsl143/react-typescript-app) on github.  

**Bonus**: I use this technique to get around with CORS on my local setup, the following code does the trick for me:

```Javascript
  devServer: {
    before: function(app) {
      app.get('/api', async function(req, res) {
        try {
          const queryURL = req.query.q;
          const resp = await fetch(queryURL);
          const body = await resp.text();
          res.send(body);
        } catch (e) {
          res.status(500);
          res.send(e);
        }
      });
    }
  },
```

Here I fetch the remote URL on the server rather than the browser, so there is no CORS restriction and then serve on the response on the same server hence, eliminating CORS.

I highly recommend to look into [devserver options](https://webpack.js.org/configuration/dev-server/), this can save a lot of our efforts 😊