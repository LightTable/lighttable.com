---
layout: post
title: Light Table Roadmap - 2017
author: Scott Bauer
tags: []
---

Light Table has grown quiet as of late and we aim to bring a much needed update on what our next steps are. The Core team: [Magnus](https://github.com/rundis), [Gabriel](https://github.com/cldwalker) and myself ([Scott](https://github.com/sbauer322)), have discussed these steps which fall under two main categories: Immediate Future and After That.

### Immediate Future

Work in the short term is about documenting, updating, and stabilizing Light Table. Essentially, we need to make working on, and contributing to, Light Table easier. Few are willing to spend hours frustrated over something that should be trivial.

Let us be clear: If these tasks are not met then the project will continue to stagnate.

#### Migrate docs to Gitbook

Rather than spend effort maintaining our current [user docs](http://docs.lighttable.com), we are migrating all guides and tutorials to Gitbook.

#### Documentation

It has been an ongoing need for a long time and a constant pain point. Documentation is one of our highest priorities.

We intend to take a three-pronged approach towards documentation:

- Improve the User Guide
- Create a Developer Guide
- Document our API

Magnus has produced a [great guide](https://rundis.gitbooks.io/elm-light-guide/content/) for the Elm plugin and is spearheading work on the Developer Guide.

I have been pursuing documentation for the API. Our API docs site will now render with markdown.

The User Guide has been ported over to Gitbook from docs.lighttable.com, merged with some wiki pages, and is undergoing updates before we replace the current User Guide.

#### Update Core Dependencies

This is another strong pain point. Our Clojurescript version is badly out of date. Our Electron version is out of date too. We adopted these technologies while they were young and there has since been breaking changes. They are fundamental to our project and require a deep knowledge of Light Table internals to update. They are also fantastic and deserve to be at the latest. The out of date dependencies have caused stagnation and are blocking significant possible improvements.

Once Clojurescript is updated then the Electron update will be handled, finally followed by CodeMirror.

>Note: Expect possible breaking changes to plugins due to these updates. Should this occur, we will provide advanced notice.

#### Outstanding Pull Requests

There are a number of outstanding pull requests. A few of them have been lingering for some time. We will be either merging or closing them.

#### Fix Updating

Not that you would notice if 0.8.1 was your first encounter with Light Table, but it used to be possible to update Light Table when a new version was released. Since there have not been any releases this has not been an issue, but will be in the future.

#### Regular Releases

As the number of maintainers and contributors of Light Table can highly vary, as well as their availability, we will no longer be making firm commitments as to what will be in each release. Instead, we will simply release what has been done since the last release. Sometimes this will be a lot... sometimes not. We are still deciding what frequency we aim to release with and will announce once we decide.

### After That

Once the above has been taken care of, Light Table will be in a solid position to encourage new growth and innovation. Areas to focus on at this point are as follows.

#### Testing

We need to catch bugs and regressions before they are released to users. While we can't catch them all, we also cannot spend excessive amounts of time performing manual QA. Thus, we will be pursuing automated testing of the UI as well as testing at the code level. Tests will provide an additional benefit of guiding future contributors and preventing regressions.

#### Actively Recruit

We need people. This is an open source project with (currently) no sponsorship - private or corporate. As such, everything is done through people's free time and time is always short.

From plugin authors to maintainers, we need everyone and anyone interested in the project to pitch in. Even opening a pull request to fix a typo in documentation is valuable.

#### Feature Parity

There are other editors we lag behind in certain ways. Common functionality found across other editors needs to be up to current standards (or better) for Light Table. This does not mean it will necessarily be in Light Table proper, but potentially a plugin.

Searching and autocomplete come to mind as obvious targets. Both need to be improved for users to have a pleasant experience. Our search functionality is simply inadequate when compared to Atom. Autocomplete is lacking when compared to others, such as [Cider](https://github.com/clojure-emacs/cider).

#### A Call for Ideas

Light Table is built on the idea of being a next generation editor. Many of our ideas were ported over to other editors and that is awesome! However, we need to keep innovating and want to hear from you. What would you like to see in an editor that you can't find elsewhere? What plugins don't yet exist?

-Scott
