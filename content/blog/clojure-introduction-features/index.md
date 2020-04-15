---
title: 'An Introduction to Clojure, features, and usability'
date: "2020-04-14"
tags:
  - clojure
  - programming
show: true
author: sonia
---

The goal for the series is to introduce you to the fundamentals of the programming language,Clojure. This will be an ongoing and ever-evolving series as Clojure will continue to come out with more features.

My aim is to make this series digestible and easy for everyone to understand, whether you’re a complete beginner to coding or preparing for some interviews.


**What is Clojure?**

Clojure is a `general-purpose`, `dynamic`, `compiled`, and predominantly `functional programming language` from the Lisp family tree. It is completely dynamic, every feature supported by Clojure is supported during runtime.

Clojure is designed based on LISP programming language and has compilers that make it run on both `Java` and `.Net` runtime environment. LISP is the `second-oldest` high-level programming language after Fortran. Some features make LISP really likable:
- almost no syntax
- machine-independent
- macro-facility

For Ex: Perform mathematical expression (4+2) in LISP :

```Clojure
>> USER(1) (+ 4 2)
```

**Clojure Features:**


***1. Dynamic Development:*** Clojure is a dynamic programming language. Values have a type and their types are determined at run time. The type doesn't have to be explicitly specified.

While writing a function, we don’t have to specify the types of the function arguments. For example, 
Consider an expression that defines a function named `add-num` which receives three numeric arguments and returns their sum:


```Clojure
(defn add-num [a b c]
(+ a b c)) ;; a, b and c are the three arguments

(add-num 2 5 6) ;; returns 13
```

Clojure program is not something that you can compile and run, but something with which you can interact.

***2. Functional Programming:*** Clojure is a functional programming language. It provides functions as first-class objects, uses immutable data structures, and also, emphasizes on recursive iteration.

Since Clojure is functional the code is `robust`, we can control `functions` with the same freedom as we control `data`.

```Clojure
(defn rec-add-fn? [x]
  (let [y x]
    (fn [z] (+ y z))))
(def add2 (rec-add-fn? 2))
(add2 4)
-> 6
```

***3. Hosted on JVM:*** Clojure is often called **“functional LISP for the JVM”** . It’s a dialect of LISP for the JVM which allows Clojure to support following features:

1. Powerful macro-system
2. shares with Lisp the code-as-data philosophy
3. REPL environment that integrates with IDEs (Integrated development environments)

***4. Runtime Polymorphism:***  The systems which support runtime polymorphism are easier to change, extend and are able to handle different data-types with a uniform interface. Polymorphism isn’t just for object-oriented programming (OOP) languages. Clojure supports polymorphism in different ways :

1. Proxy: It supports the generation of implementations of Java Interfaces in Clojure.
2. Multimethods: Clojure supports sophisticated runtime polymorphism through a multimethod system that supports dispatching on types, values, attributes and metadata of, and relationships between, one or more arguments.
3. Protocols: These are a group of functions that have different implementations for different data types.

***5. Concurrent Programming:*** Concurrency is the ability to deal with multiple tasks at once, such as leveraging the power of multicore CPUs. Immutable data structures can easily be shared across multiple threads. Clojure widely supports concurrency.


**What is Clojure useful for?**

Clojure has support frameworks, tools, and a lot of language constructs like closures, functional programming, etc. Clojure is widely used to solve various real world problems such as:

1. Building websites
2. Shell Scripts
3. Scraping web pages
4. Data Mining
5. Writing async web servers
6. Running parallel tasks (fetching multiple URLs and process in parallel)

Apart from this, we can build systems from the ground up in Clojure without ever touching Java code directly. For more detail in depth, read [this](https://clojure.org/about/rationale#_why_clojure) documentation.

---
I hope you find Clojure's combination of facilities elegant, powerful, practical and fun to use.
---
