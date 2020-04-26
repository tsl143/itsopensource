---
title: 'How to remove all images and containers in Docker'
date: "2020-04-26"
description: Solution to remove all images/containers of Docker at once.
tags:
  - docker
  - tricks
  - how-to
show: true
author: shivam
---

Recently I started using Docker in my internship and sometimes you just mess up your docker images and containers, so you wanted to start from clean but first you need to remove all images and containers of Docker locally.


```bash
# Delete all Docker containers
docker rm -f $(docker ps -a -q)

# Delete all Docker images
docker rmi -f $(docker images -q)
```

Also there is a new docker command, that will delete all unused images and volumes.

```bash
docker system prune --all --force
```


You can read more about this command [here](https://docs.docker.com/engine/reference/commandline/system_prune/)

Cheers!

---
