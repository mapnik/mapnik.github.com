---
layout: 01_post
title: "Latest from mapnik development team"
comments : true
author: Artem Pavlenko                                                                                                               
category: Mapnik
---

### Text placement re-factoring

Big merge this week : both text-placement ([Herm](https://github.com/herm)) and feature_impl branches got pushed to the [mapnik/master](https://github.com/mapnik/mapnik).

One of the goals for "text-placement" was to re-factor rather messy text placement code into more manageable chunks, and hopefully to make it easier to follow and implement new features. So, now we have a better framework for text labeling - let's use it. A classic example is labeling multipolygons that make up one geographical entity; country, county or state etc. Here are some maps to demonstrate how this would work for the US states :

1) Labeling regression (actually it never worked properly but changes to how multi-geometry is processed in Mapnik exposed this):

![regression](http://i.imgur.com/gASD6.png)

2) Try and label every polygon:

![all polygons](http://i.imgur.com/OqjaR.png)

3) Order polygons by "size" and place label in first largest polygon:

![largest-only](http://i.imgur.com/vfWd9.png)

[3] is now current default behaviour in master, giving a much better cartographic result. We need to expose other possible options in XML/Python/Node etc. 

### Feature concept changes

New 'context' based feature implementation landed in Mapnik. The interface was preserved as much as possible to make it easier to update existing code: the following Python code shows the differences with the new approach:


	>>> import mapnik
	>>> ctx = mapnik.Context() # create Feature context
	>>> ctx.push("NAME") # push some names, defining a schema 
	>>> f = mapnik.Feature(ctx, 1) # create feature by passing context and ID
	>>> f["NAME"] = "test"

The main gain here is a memory footprint and faster feature construction - no overhead of maintaining std::map per feature. Looking to the future, it will be interesting to see how we can leverage this for more robust/compact interchange formats.
