---
layout: post
title: "WKT geometry parsing benchmark"
author: Dane Springmeyer
---

In addition to beautiful rendering capabilities Mapnik also offers a fast C++ and Python API for working with raw geo features. You can create them on the fly from a variety of formats including wkt, wkb, and geojson. This feature allows creative programers to use Mapnik like you would OGR to read or create data and output it to other formats.

<script src="https://gist.github.com/springmeyer/5423500.js"></script>

## Geometry parsing for datasources and tests

The WKT and GeoJSON geometry parsing support in Mapnik core makes it easy to support for these formats in datasource plugins like the Mapnik [CSV plugin](https://github.com/mapnik/mapnik/wiki/CSV-Plugin). And because the CSV plugin supports inline WKT strings you can write simple, standalone test cases for Mapnik bugs as easily as [ticket #1484 demonstrates](https://github.com/mapnik/mapnik/issues/1484).

## Geometry parsing performance

As more people find the Mapnik CSV plugin they start throwing more and more data at it. We need to ensure that our parsing is as fast as possible. So today I started on some benchmarks to figure out baselines for performance. The questions I'm interested in are:

 - If parsing WKT across many threads does performance decline or improve? (We've found in the past that [std::locale locking can kill threaded performance](http://mapnik.org/news/2012/04/06/faster-map-loading) when parsing XML strings)

 - Does performance differ depending on the C++ library used? (the emergence of `clang++` and `libc++` on OS X make this an easy and relevant test)

 - How does Mapnik WKT parsing compare to other common libraries that people use for parsing WKT geometries?


## First look at benchmarking results

Today I created a first pass at a C++ benchmark. The code is on [github](https://github.com/springmeyer/wkt-parsing-benchmark). Please see the [README](https://github.com/springmeyer/wkt-parsing-benchmark/blob/master/README.md) for details on how to set it up and run the tests.

There are two tests of Mapnik and [GEOS](http://trac.osgeo.org/geos/) that parse a set of very simple WKT geometries 100 thousand times, one serially and the other broken into 10 threads of work that each parse 10 thousand times.

The results on my system (OS X 10.8 / `clang++`) were:

### mapnik compiled against libc++, using -std=c++11

    $ ./run
    1) threaded -> mapnik: 640 milliseconds
    2) threaded -> geos: 2470 milliseconds
    3) mapnik: 2800 milliseconds
    4) geos: 9150 milliseconds

CAVEAT: Geos is not linked against libc++ in this test

### mapnik compiled against libstdc++, using -ansi

    $ ./run
    1) threaded -> mapnik: 880 milliseconds
    2) threaded -> geos: 2520 milliseconds
    3) mapnik: 3440 milliseconds
    4) geos: 9200 milliseconds

NOTE: smaller numbers are better and indicate that the tests finished faster.

The results seem to indicate:

 - High concurrency, as you would hope and expect, does not hurt performance but rather helps. This is great, but not always the case in C++ when parsing strings. If your parsing code triggers mutex locks then concurrency like this can hurt.
 
 - Mapnik is more than 2x faster than GEOS for these simple [test cases](https://github.com/springmeyer/wkt-parsing-benchmark/blob/master/cases/wkt.csv). So, the next step here is to 1) figure out if Mapnik continues to perform well on larger WKT strings and 2) make sure we are using the GEOS API correctly.
 
 - Mapnik is slightly faster when compiled against [libc++](http://libcxx.llvm.org/) and built in C++11 mode (than if compiled against `libstdc++` in `-ansi` mode. This is great - will be interesting to learn why. My guess is that `boost::spirit`, which mapnik uses internally to parse WKT is benefiting from c++11 features. Or `libc++` is providing faster implementations of key functionality than the standard gnu `libstdc++`. Or both :)


Please feel free to check out the benchmarks, run them yourself, and suggest other caveats or improvements. File issues [here](https://github.com/springmeyer/wkt-parsing-benchmark/issues) to provide comments.
