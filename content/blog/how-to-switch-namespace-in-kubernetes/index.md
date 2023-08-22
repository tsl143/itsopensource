---
title: 'How to Switch Namespaces in Kubernetes'
date: "2023-08-23"
slug: 'how-to-switch-namespace-in-kubernetes'
tags:
  - devops
  - kubernetes
  - how-to
show: true
author: shivam
---


## What is Namespace in Kubernetes?

In simple words, namespaces offer a means of segregating sets of resources within a unified cluster.


## Changing Namespaces Using the kubectl Command

We can change namespace with using `kubectl` cli tool like:

```
kubectl config set-context --current --namespace=<new-namespace>
```

### Verifying namespace change

With same `kubectl` tool we can verify easily with command:

```
kubectl config view --minify --output 'jsonpath={..namespace}'
```

<center>Hope this helps 🙏🙏🙏</center>