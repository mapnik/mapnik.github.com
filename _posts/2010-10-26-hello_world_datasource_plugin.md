---
layout: post
title: "A simplest Mapnik plugin"
author: Dane Springmeyer
---

We have a new ultra simple "hello world" plugin in Mapnik.

This should be useful for anyone interested in adding new datasource plugins for any fancy new formats that come online.

To build it you need Mapnik >= 2.0 and a custom build flag:

<pre>
./configure SAMPLE_INPUT_PLUGINS=True
</pre>

See the basic intro to the idea of ["template" plugins](https://github.com/mapnik/mapnik/blob/master/plugins/input/templates/README.md), see the "hello world" plugin [readme](https://github.com/mapnik/mapnik/blob/master/plugins/input/templates/helloworld/README.md) find the [code](https://github.com/mapnik/mapnik/tree/master/plugins/input/templates/helloworld).

To test the plugin you can render a map like:

<pre>
cd plugins/input/templates/helloworld
nik2img.py test.xml hello.png -d 256 256
</pre>

Which should produce:

<img src="/images/hello.png" style="border:1px solid;"/>

