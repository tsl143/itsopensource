---
title: 'How to Reduce Node Docker Image Size by Ten Times'
date: "2020-07-03"
description: Reduce Node Docker Image Size by Ten Times.
tags:
  - docker
  - tricks
  - how-to
show: true
author: shivam
---

If we generally see the node docker image size of the applications , its over 1 GB most of the time because of lots of reason. 

Dockerizing an application is simple, but optimizing the size of Docker Image is the tricky part. Docker is easy to use but once your application reaches a certain level, you generally face these problems:

* Long build durations
* Large docker image sizes

### Why the Size matters

1. Bigger image takes more space means more expensive and time consuming to use those images with the time.

2. It takes longer time to push the images over network and impact your CI Pipeline badly.

### Let’s Start The Optimization

Here our [demo application](https://github.com/championshuttler/fluentbit-dashboard) built using the VueJS Application. 

Here is the initial Dockerfile.

```console
FROM node:10

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install http-server -g

RUN npm install && npm run build

CMD http-server ./dist
```

The size of this image is:

![docker1](./docker1.png)

It is 1.34GB! Whoops!

Lets start optimizing step by step

1) Use Multi-Stage Docker Builds

Multi-stage builds made easy to optimize Docker images by using multiple intermediate images in a single Dockerfile. You can read more about it [here](https://docs.docker.com/develop/develop-images/multistage-build/). By using multi-stage builds, we can install all dependencies in the build image and copy them to the runtime image.

```console
FROM node:10 AS BUILD_IMAGE

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install && npm run build

FROM node:10

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm i -g http-server

CMD http-server ./dist
```

Now the size of this image is 1.24GB:

![docker2](./docker2.png)

2) Remove Development Dependencies and use Node Prune Tool

node-prune is an open-source tool for removing unnecessary files from the node_modules folder. Most of the developers forget test files, markdown files, typing files and *.map files in Npm packages. By using node-prune we can safely delete them.

We can use this to remove Development Dependencies:

```console
npm prune --production
```

After making these changes `Dockerfile` will look like:

```console
FROM node:10 AS BUILD_IMAGE

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install && npm run build

# remove development dependencies
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

FROM node:10

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm i -g http-server

CMD http-server ./dist
```

By using this we reduced the overall size to 1.09GB

![docker3](./docker3.png)

3) Choose Smaller Base Image As Possible

When dockerizing a node application, there are lots of [base images](https://hub.docker.com/_/node/) available we can choose from.

Here we will use alpine image.

```console
FROM node:10 AS BUILD_IMAGE

RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY . /app

EXPOSE 8080

RUN npm install && npm run build

# remove development dependencies
RUN npm prune --production

# run node prune
RUN /usr/local/bin/node-prune

FROM node:10-alpine

WORKDIR /app

# copy from build image
COPY --from=BUILD_IMAGE /app/dist ./dist
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules

RUN npm i -g http-server

CMD http-server ./dist
```

By using this `Dockerfile` the image size is dropped to `157MB` \o/


![docker4](./docker4.png)

### Conclusion

By applying these 3 simple steps, we made our docker image size 10 times lesser.

Cheers!