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

That’s it about LISP and I hope now you can have a better understanding of the useful features that define Clojure language.


**Clojure Features:**


***1. Dynamic Development:*** Clojure is a dynamic programming language. It means that values have a type and their types are determined at run time. Therefore, the type doesn't have to be explicitly specified by the developer.

When you write a function, you don’t have to specify the types of the function arguments. For example, here is an expression that defines a function named add-num that receive three numbers as arguments and return their sum:

```Clojure
(defn add-num [a b c]
(+ a b c)) ;; a, b and c are the three arguments

(add-num 2 5 6) ;; returns 13
```

Clojure program is not something that you can compile and run, but something with which you can interact.

***2. Functional Programming:*** Clojure is a functional programming language. It provides functions as first-class objects, uses immutable data structures, and also, emphasizes on recursive iteration.

In Clojure, we can manipulate function with the same freedom as we manipulate data. Since the programs are functional and we all know, the more programs are functional are more robust.

```Clojure
(defn rec-add-fn? [x]
  (let [y x]
    (fn [z] (+ y z))))
(def add2 (rec-add-fn? 2))
(add2 4)
-> 6
```

***3. Lisp and hosted on JVM:*** Clojure is often called **“functional LISP for the JVM”** and it’s a dialect of LISP for the JVM. Now, many of you wonder what does it mean to be a dialect of it? There are certain features supported by Clojure :

1. Powerful macro-system
2. shares with Lisp the code-as-data philosophy
3. REPL environment that integrates with IDEs (Integrated development environments)

All the above features supported by Clojure make it a dialect of it.

***4. Runtime Polymorphism:*** Note that Polymorphism isn’t just for object-oriented programming (OOP) languages. The systems which support runtime polymorphism are easier to change, extend and also, handles different data-types with a uniform interface. Clojure supports polymorphism in different ways :

1. Proxy: It supports the generation of implementations of Java Interfaces in Clojure.
2. Multimethods: Clojure supports sophisticated runtime polymorphism through a multimethod system that supports dispatching on types, values, attributes and metadata of, and relationships between, one or more arguments.
3. Protocols: These are a group of functions that have different implementations for different data types.

***5. Concurrent Programming:*** Concurrency is the ability to deal with multiple tasks at once, such as leveraging the power of multicore CPUs. Immutable data structures can easily be shared across multiple threads. Clojure widely supports concurrency.


**What is Clojure useful for?**

Clojure has a better support framework, tools, and a lot of language constructs: closures, functional programming, etc. then what real-world Applications are people using Clojure for?And could be that its future is as a language that is embedded in other systems?

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
