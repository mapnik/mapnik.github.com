---
layout: post
title: "Mapnik Code Sprint 2012 - Day 1 Recap"
author: Dane Springmeyer
---

Yesterday was the first day of the June 2012, Washington DC Mapnik code sprint.

We kicked off the morning with a remote skype call and IRC sharing session with community members around the world.

<a href="https://p.twimg.com/AvhgqEwCIAEUX8g.jpg">
<img src="https://p.twimg.com/AvhgqEwCIAEUX8g.jpg" width="450"/>
</a>

It was an enjoyable and spirited time sharing ideas for new features and connecting on the details of recent stuff that has landed and needs documented. The remote group included [Steve Chilton](https://twitter.com/#!/steev8), [Darafei "Komяpa" Praliaskouski](https://github.com/Komzpa), [Nikolai Lebedev](https://github.com/nlebedev), [Mickey Rose](https://github.com/lightmare), [Michal Migurski](https://github.com/migurski), [Bill Morris](https://github.com/wboykinm), and [Konstantin Käfer](https://github.com/kkaefer). In we had DC [Artem Pavlenko](Artem Pavlenko), [Lars Ahlzen](https://github.com/ahlzen), [Serge Wroclawski](https://github.com/emacsen), [AJ Ashton](https://github.com/ajashton), [Tom MacWright](https://github.com/tmcw), and [Will White](https://github.com/willwhite), and [Dane Springmeyer](https://github.com/springmeyer).

## Big needs
Topics that received strong attention in the discussion were supporting better text and marker placement, more data-driven/dynamic symbolizers, and CSS natively. Fortunately each of these tasks, while very large, are in process and solidly on the roadmap.

Mapnik 2.1 will include a re-written placement system by Hermann Krause, supporting alternative placements and fallbacks - the task before release is to document how it works.

A big step forward to more dynamic symbolizers was achieved last week thanks to the team at [mirecta](https://github.com/mirecta)/[mapy.cz](http://www.mapy.cz/) who landed expressions support for [svg transforms](https://github.com/mapnik/mapnik/pull/1243), and markers sizes will also soon be able to be [data-driven](https://github.com/mapnik/mapnik/pull/1255). But, much work and energy remains to properly design and support more symbolizers - work that will likely take another 6 months or so and will not appear until after the Mapnik 2.1 release.

Native CSS support awaits free time from developers to pick up on the excellent work by [Colin Rundel](https://github.com/mapnik/carto-parser) during Google Summer of Code 2011, but this should be feasible within the next year.

## Fun Hacking

In the afternoon everyone split off to experiment with new ideas and play with new features.

<img src="http://toposm.com/logo_small.png" />

Lars started upgrading [TopOSM](http://www.TopOSM.com/) to the latest Mapnik 2.1.0-pre code, which natively supports compositing operations between features and styles. Lars hopes by leveraging compositing natively in Mapnik he can radically speed up his existing rendering workflow. Along the way he found [a few bugs](https://github.com/mapnik/mapnik/issues/1256) in SVG parsing that I was able to fix promptly and he discovered some interesting design issues around ["Smart Halos"](https://github.com/mapnik/mapnik/issues/1259), that will help guide the refinement of this experimental feature.

It was a joy to see the real-time collaboration with remote participants, as Bill Morris commented on the subtleties of [TopOSM rendering vs. google's terrain](http://farm8.staticflickr.com/7073/7381097632_b8b78c237d_z.jpg), and better approaches were discussed on IRC.

Tom and Artem spent most of the day brainstorming and experimenting with [HSL (hue, saturation, and lightness)](http://en.wikipedia.org/wiki/HSL_and_HSV) color transformations in Mapnik. HSL rotation could perhaps be a new kind of blend mode or standalone symbolizer - imagine being able to rotate hue in your entire map (or by feature) like:

![HSL rotation](http://upload.wikimedia.org/wikipedia/commons/6/6e/Hue.gif)

To implement this Artem started researching the Boost.GIL IO extensions by [Christian Henning](http://lists.boost.org/boost-users/2008/09/40737.php), which have recently been [accepted into Boost](http://mateusz.loskot.net/2011/01/27/boost-gil-io-and-toolbox-extensions-accepted-into-boost/).

AJ started messing with new bezier smoothing features that Artem added to Mapnik as part of his push on Compositing in core. The goal was the [properly document](https://github.com/mapnik/reference.json/commit/66648bc7a403c6669f58dbb7e7cd404b55405232) the feature in [Mapnik's styling reference](https://github.com/mapnik/reference.json), but in testing AJ found the unintended uses of beziers (when they double back on themselves) can be gorgeous and give maps an hand drawn look:

<a href="http://a.tiles.mapbox.com/v3/aj.sketchy.html#4.00/-14.60/-218.65">
<img src="http://a.tiles.mapbox.com/v3/aj.sketchy/5/4/10.png" />
</a>

Or a trippy look:

<a href="http://dl.dropbox.com/u/2398828/scrot/smooth02.png">
<img src="http://dl.dropbox.com/u/2398828/scrot/smooth02.png" width="256" />
</a>

<a href="http://dl.dropbox.com/u/2398828/scrot/smooth01.png">
<img src="http://dl.dropbox.com/u/2398828/scrot/smooth01.png" width="256">
</a>


I enjoyed acting upon a few side project ideas. After getting Mapnik compiled and built against the iPhone Simulator SDK on OS X, I wrote a simple Objective C++ app to be able to stress-test Mapnik rendering. See a [video here](
http://f.cl.ly/items/1d3q2b1l2y0f0t2l2t0q/vector_ios_rendering.mov). I also started experimenting with wrapping Mapnik in a pure and simple C API. The motivation here is that a C API could provide a more stable endpoint for apps using Mapnik, could make things like [PyPy](http://pypy.org/) python bindings support (through ctypes, or [node-ffi](https://github.com/rbranson/node-ffi)) easy, and would allow ObjC iOS applications to call into Mapnik directly from C without needing to compile as ObjC++. It was great that just uttering my interest in this topic prompted some sage advise from [Howard Butler](https://github.com/hobu) about important design considerations for [theadsafe concurrency in C API's](https://twitter.com/howardbutler/status/214114362498101248).

## Thank you
Thanks to all the participants and especially [MapBox](https://twitter.com/#!/MapBox), for hosting us and [Bonnie](https://twitter.com/bonnie/status/213355117641084929) for organizing a delicious catered lunch from [Taylor Gourmet](http://www.taylorgourmet.com/)!










