---
layout: post
title: "New year, same old plans"
author: Pratik Karki
tags: []
---

### The present...

The last time a major release of Light Table was in early 2016.
It's been 3 years.
3 years is **a lot** in developers time. Since, Light Table's last release,
[vscode](https://code.visualstudio.com/) has developed from `0.10.6` to `1.32.0`.
Amazing development happened in La La Clojure Land too, Clojure evolved from
version `1.8.0` to `1.10.1-beta` while ClojureScript developed from `1.7.228` to
`1.10.516`. I don't want to start on mentioning the advances on La La JS land,
because it's too much. It's even been 2 years to last 
[blog post](http://lighttable.com/2017/01/27/light-table-roadmap-2017/)
by Scott Bauer in which Scott had awesome plans to continue development of
Light Table.

### Introduction...

Most of the early users of Light Table have left Light Table and taken sanctuary in
other editors. Same thing happened to me. While starting to learn Clojure and
Clojure/script couple of years back, I found out Light Table.(Though, I was an emacs
user back then.)

I tried Light Table and loved it. Then, while working on some other
projects, I found Vim productive and have been using it. During 2018, I came across
Light Table once again.

I had to write Clojure in a friend's machine and I didn't
have enough time to configure editors. So, I decided to use Light Table, while
downloading it, I noticed the same old version, which I had used. No new releases.

So, at the end of '18, I decided to give back to the community and contribute to LT,
since, LT is a wonderful editor, I decided to update it.
I created a pull request, and notified the current maintainer Scott, I thought,
there weren't harder problems to update LT. But, while working on the `electron`
update, I began to notice, larger problems. Since, updating and actively developing
LT, was our common goal, Scott decided to pass the torch, and make me the new
maintainer of LT.

### Action...

So, I started to work on LT mostly during weekends, I added @Mouvedia as a collaborator,
to help me categorize the issues so, that I can focus on updating LT.
Now, while updating LT, these are the three crucial updates(not in that order):
1. Electron
2. CodeMirror
3. ClojureScript

LT uses `0.0-2138` version of ClojureScript and `0.34.5` version of Electron. And both
have undergone tremendous changes since then. The current road-blocking problem I'm
facing is not of electron but of ClojureScript. The "inline evaluation" feature which
we love of LT, is affected while updating ClojureScript.

I'll speed up developing process during this April, as I'll be working somewhat full-time
to update LT. Hopefully, by the end of April, we can cut a new release.
Additionally, I'll be updating this blog series on my progress, weekly so that, LT users,
can know beforehand about some regression or feature enhancement.

Stay hungry, stay foolish.

P.S. I've created a new repo in Light Table called `townhall`.
This repo will store all the issues and this will be the place, where feature requests
would be voted and planned by LT users. The issues section on the main LT repo would be
to track vulnerabilities in LT.

-Pratik
