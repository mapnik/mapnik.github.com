---
layout: 01_post
title: "A simplest Mapnik plugin"
author: Dane Springmeyer
category: Mapnik
---

I've written a starter "hello world" datasource plugin (aka `input`) for Mapnik.

It should be useful as a starting point for anyone writing their own plugin. It also serves as an example of how to develop plugins that are standalone and do not live inside of Mapnik core. While we do maintain a handful of [plugins in core](https://github.com/mapnik/mapnik/blob/master/plugins/input/) the design is for plugins to be external to Mapnik.

It renders nothing more than:

<img src="/images/hello.png" style="border:1px solid;"/>

To get started developing see the sample repository at github: <https://github.com/mapnik/hello-world-input-plugin>.
