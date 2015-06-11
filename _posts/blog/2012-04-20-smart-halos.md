---
layout: 01_post
title: "Cartographic trick of the day"
author: Artem Pavlenko
category: Mapnik
---

This is a short post to share some techniques I came up with while implementing compositing and image filtering in Mapnik core. 

The problem
===========

Text rendered on top of a 'busy' map can become difficult to read, it can make colours appear heavy. 
One use-case would be place names on top of a dense road network, another text on top of height contours. 

Consider the following map generated with :

<code>python mapnik/demo/python/rundemo.py</code>

![original](http://farm6.staticflickr.com/5350/7095837131_28deb77e38.jpg)


(I modified text size to be 14px for clarity)

As you can see, dark text interferes with dark-ish minor roads and also casings on bigger roads.

One way to address this is to use text halos :

![text halos](http://farm6.staticflickr.com/5465/6949765736_372626d08a.jpg)

Now we have nice 'punchy' text but the rest of the features are getting overwhelmed. This is a sub-optimal solution, though,  as halos saturate the image and attract far to much attention to the text items.
What we really want is to punch-out the interfering layers around the text but leave the background intact. 

![smart halos](http://farm6.staticflickr.com/5450/6949765624_21848c68c5.jpg)

This is better - now we have a map that is lighter on the eye and the text is easier to read. After all, this is the main purpose of a map - to convey information to the user.

Note that province and water polygons are underneath halos, while roads have been removed.

So how can we achieve this in Mapnik?

The solution
========

This is a well known cartographic issue and the solution in the paleo-geo world is referred to as ["variable-depth masking"](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//00s50000002v000000.htm). I call it 'smart-halo' but the principle is the same.

There are possibly multiple ways to solve this, but here is one solution based on recent 'compositing' work I was concentrating on in Mapnik.

So here are step-by-step maps demonstrating the process. 

1) We start with an empty map with fully transparent background - 'transparent' named colour or rgba(0,0,0,0). Then we render roads in the usual way.

<b>NOTE: black background is due to conversion to JPEG format which doesn't support alpha channel. It should appear as white</b>

![roads](http://farm8.staticflickr.com/7196/7095904293_5c421312c7.jpg)


2) Right after roads we insert 'smart-halo' layer with the following style

<pre>

&lt;Style name="smart-halo" comp-op="dst_out"&gt;
	&lt;Rule&gt;
       &lt;TextSymbolizer face-name="DejaVu Sans Book" halo-radius="3" halo-fill="white" fill="white"  size="14"&gt;[GEONAME]&lt;/TextSymbolizer&gt;
    &lt;/Rule&gt;
  &lt;/Style&gt;

</pre>

We use 'dst_out' compositing mode on this style to 'punch-out' roads or any other previously rendered objects.

![punched-roads](http://farm6.staticflickr.com/5315/6949832368_49d144cf96.jpg)

3) Now we add provinces and water polygons using "dst_over" compositing operator, e.g for water polygons:

<pre>
&lt;PolygonSymbolizer fill="rgb(153,204,255)" fill-opacity="1.0" smooth="0.7" comp-op="dst_over"/&gt;
</pre>

![dst_over polygons](http://farm8.staticflickr.com/7138/7095904439_8a5c6507ce.jpg)

4) And finally we render text and there you have it - smart-halos :D 

![smart halos](http://farm6.staticflickr.com/5450/6949765624_21848c68c5.jpg)

