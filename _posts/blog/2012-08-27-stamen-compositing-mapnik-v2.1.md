---
layout: post
title: "Stamen, Compositing, and Mapnik 2.1"
author: Dane Springmeyer
---

What if software existed that combined the power of Photoshop-like image effects with Illustrator-like vector transformations that was fully open source, spatially capable, and could handle big data like OpenStreetMap? Well, hopefully this future will feel near as you start using Mapnik 2.1.

### A compositing framework in core

In time, Mapnik 0.7.x added support for blending modes in rasters thanks to the work of [Marcin Rudowski](http://mapa.ump.waw.pl/ump-www/). And as of last week, with the <a href="news/2012/08/24/release-2.1.0/">release of Mapnik 2.1</a> and a ton of work from Artem, we now support the `comp-op` property on all symbolizers (and Styles) making compositing possible for both vectors and rasters, together. This new support is a solid framework to build on, and more modes can now easily be added with few code changes.

### Thanks Stamen

Our friends at [Stamen Design](http://stamen.com) have been advocating for the value of Photoshop-like alpha blending in mapping for many years. As far back as 2008 Mike was already beautifully [working around](http://mike.teczno.com/notes/hillshading.html) limitations in Mapnik for terrain hillshading and proactively advocating for better support by writing new software like [TileStache](http://permalink.gmane.org/gmane.comp.gis.mapnik.devel/518). Shawn was instrumental in helping me see the viability of compositing in Mapnik by helping sketching out ideas [on the Mapnik wiki](https://github.com/mapnik/mapnik/wiki/Ideas_Compositing). Last week I saw [Shawn advocating](http://twitter.com/shawnbot/status/239186880762085377) for the full suite of advanced photoshop blend modes in the upcoming CSS Spec, which is awesome and something we can [also do in Mapnik](https://github.com/mapnik/mapnik/issues/1448).

### Revisting innovations

After reflecting on how far we've come in Mapnik and thinking of Shawn's work I was reminded of his sweet little project called [Trees, Cabs & Crime](http://content.stamen.com/trees-cabs-crime_in_venice) where he experimented with rendering three themes of point data and compositing them together using subtractive blending to bring out patterns of correlation.

<a href="http://content.stamen.com/trees-cabs-crime_in_venice" ><img alt="Trees, Cabs & Crime in San Francisco from Shawn Allen" src="http://farm8.staticflickr.com/7104/7190127927_09965a1701_n.jpg"/></a>

Now that Mapnik 2.1 is out I figured it should be doable to render Shawn's exact map with just a single Mapnik stylesheet.

### Trees, Cabs & Crime re-rendered in Mapnik 2.1

After finding [Shawn's makefiles](https://github.com/shawnbot/concoct/blob/master/Makefile) I saw the process should be as simple as reading data from three csv files and using a darkening blend mode as the canvas of each layer is rendered. Mapnik 2.1 newly supports reading direct from CSV files and one of the supported `comp-op` modes is `darken`, so matching Shawn's exact output was pretty straightforward. You can find the full Mapnik XML below:

<script src="https://gist.github.com/3491644.js?file=re-concoct.xml"></script>

### Folloups

And soon after this post [Shawn got things working in TileMill 0.10.0](https://twitter.com/shawnbot/status/244241515549974529) (which uses Mapnik 2.1).



