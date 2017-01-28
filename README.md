lighttable.com
===================

Light Table's official website

You can view it online at  http://www.lighttable.com

## Setup

To view changes locally:

* `gem install bundler && bundle install`
* `bundle exec jekyll server -w`
* Open the browser to http://localhost:4000/

## Add a Post

To add a post, simply create a file under the `_posts/` directory with the format `yyyy-mm-dd-\<title>.markdown` where `<title>` is the post's title.

Prepend the following block at the top of your file with the appropriate changes:

```
---
layout: post
title: "Super Neat Thing About Light Table"
author: John Smith
tags: []
---
```

> Note: Be sure there is no leading whitespace or newline above the block.

Afterwards, open a pull request for the post.
