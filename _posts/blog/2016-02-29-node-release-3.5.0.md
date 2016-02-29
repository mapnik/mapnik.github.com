---
layout: 01_post
title: "Node Mapnik 3.5.0 Release"
author: Sam Matthews
category: Mapnik
---

We are happy to announce the newest release for Node Mapnik, version `3.5.0`! This is a significant moment in Mapnik's history. With the recent update to the [Mapbox Vector Tile Specification](https://github.com/mapbox/vector-tile-spec), we are now creating tiles according to the updated spec. This version is built with the recently released `1.0.0` version of [Mapnik Vector Tile](https://github.com/mapbox/mapnik-vector-tile) and against core Mapnik `3.0.10`, which was released last week.

## Download

You can download the latest version from [npm](https://www.npmjs.com/package/mapnik) or simply run `npm install mapnik`.

## What Changed

The updated Mapbox Vector Tile Specification is a major milestone for vector tile encoding. In general, the specification makes rules for generating vector tiles more explicit, with a focus on simple goemetry and implicit winding order to improve rendering speeds. For all the information on what changed in the API see the [v3.5.0 Changelog](https://github.com/mapnik/node-mapnik/blob/master/CHANGELOG.md#350).

We have also updated our documentation surrounding Node Mapnik! Check out [mapnik.org/node-mapnik](http://mapnik.org/node-mapnik) where we have introduced more general information and versioned API docs. 

## Looking Forward

We will be focusing on rounding up any bugs and potential regressions in regards to the `3.5.0` release. If you notice anything unusual, [open up an issue](https://github.com/mapnik/node-mapnik/issues)! 