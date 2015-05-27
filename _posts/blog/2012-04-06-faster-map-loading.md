---
layout: post
title: "Faster Map Loading"
comments : true
author: Dane Springmeyer                                                                                                               
---

## Optimizing map parsing performance

Much of my performance work on Mapnik in the recent year has focused on render-time speed.

But with the fast and wide adoption of [TileMill](http://tilemill.com) as a style authoring environment, more and more people are demanding not only fast rendering but fast reloads for quick feedback on edits.

TileMill under the hood uses the [Carto library](https://github.com/mapbox/carto) to turn CSS into Mapnik XML. Although there is some overhead in this conversion, profiling shows most time is taken in transforming the XML into Mapnik C++ objects (into a mapnik.Map object). And of that time most is taken either in parsing filter rules or in parsing styles.

The two biggest problems turned out to be fairly low level:

### Mutex locking in the std::locale constructor

This github [ticket](https://github.com/mapnik/mapnik/issues/1055) has details.

Basically, most C++ implementations have a global mutex that protects from race conditions if a locale is changed. This has a major impact on multithreaded programs that work with formatting strings (basically everything!). But TileMill's usage of Mapnik is particularly susceptible to this problem because TileMill, when you hit save, immedially goes off and requests mapnik to load multiple maps in parallel to set up for parallel rendering threads. The large amount of string parsing to handle the map XML and rapid locking in multiple threads leads to unneeded and costly contention.

Since one cannot upgrade the libstdc++ (to use the new version that has a workaround for this bug) I mitigated the impact of these locks but removing all other potential uses of mutexes in Mapnik that might be contending. While you will not see many mutexes in Mapnik invoked during map loading we do use boost::lexical_cast in a number of places. It turns out boost::lexical cast is both very inefficient and uses exceptions and locking internally more than is needed. Replacing boost::lexical cast with faster type conversion has been promising in reducing the impact of locale locking.

### Boost spirit grammars are expensive to create (and destroy)

This github [ticket](https://github.com/mapnik/mapnik/issues/1028) has details.

Basically, we use Boost spirit quite a bit to handle expression parsing and it is quite fast. But it turns out that the grammars used to guide the parsing have a non-trivial cost to create and destroy. In the case of mapnik.Color parsing creating the grammar took longer than the parsing. So, with the help of Herm, I refactored our parsing calls to create and reuse grammars once per map load rather than per parsed string.

### Numbers

So, how much did this help?

Well, in an informal benchmark I took a large XML stylesheet used to style OSM data I had on hand.

The stylesheet is ~50,000 lines long and 3.1 MB in size.

I used node-mapnik (which supports loading maps synchronously and asynchronously) and timed loading this map 10 times using both methods.

With Mapnik [2.0.x](https://github.com/mapnik/mapnik/tree/2.0.x) (upcoming 2.0.1 release) (that is not optimized) the results were:

    async: 19 seconds
    sync: 31 seconds

But, with the optimized Mapnik 2.x code (current master, and upcoming 2.1 release) as of today the results were:

    async: 3.5 seconds
    sync: 7.2 seconds
