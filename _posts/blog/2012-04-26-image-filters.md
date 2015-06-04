---
layout: 01_page
title: "Using image filters and compositing together"
author: Artem Pavlenko
category: Mapnik
---

Following up last week's post about  [smart halos](http://mapnik.org/news/2012/04/20/smart-halos/), I wanted to share some ways of using compositing and filters together to achieve interesting effects.

As a starting point we use the [smart halos](http://mapnik.org/news/2012/04/20/smart-halos/) map from the previous posting. You can find the features used in this post <strike>in the [compositing branch](https://github.com/mapnik/mapnik/tree/compositing)</strike> Mapnik 2.1 release. Just be aware that these new features are work-in-progress and some syntax might change in future releases.

### Deep water

Here is the original style:

![Original](http://farm8.staticflickr.com/7097/7115591757_4694130077.jpg)

Let's look at water bodies and land. Solid fills are looking good, but what about adding some texture to the map? One way to add 'texture' is to use <pre>&lt;PolygonPatternSymbolizer/&gt;</pre>

Let's grab one of the [lovely watercolour patterns](http://content.stamen.com/watercolor_textures) and apply to 'water' features.

![Water pattern](http://farm9.staticflickr.com/8014/7115591987_19bb33e3e7.jpg)

Very nice so far, perhaps a bit flat. Now time to add some depth. One of the very useful image processing tools is the ability to apply various blurs. In this case I use 'agg-stack-blur' with both x/y radius' set to 10 pixels:

<pre>
&lt;Style name="water-shadow" image-filters="agg-stack-blur(10,10)" comp-op="dst-over"&gt;
	&lt;Rule&gt;
		&lt;Filter&gt;([HYC]=8)&lt;/Filter&gt;
		&lt;PolygonSymbolizer fill="lightblue" fill-opacity="0.4" smooth="0.7" transform="translate(0,0)" /&gt;
	&lt;/Rule&gt;
&lt;/Style&gt;
</pre>

![Deep water](http://farm9.staticflickr.com/8005/7115592183_a8e1f39488.jpg)


And lastly I add a bit of texture to the land fill to get that 'paper' feel to the final map :

![Final](http://farm8.staticflickr.com/7199/7115592503_8318044641.jpg)

I'm not sure the last step adds much to the cartography but it's good to try different things. So go ahead and grab <strike>the latest source from [compositing branch](https://github.com/mapnik/mapnik/tree/compositing)</strike> Mapnik 2.1 and have fun!

Ooh, one more.. I really like 'blur' filters, they seem to be so versatile. Here is a water-floating-shadow style using a combination of 'emboss' and 'agg-stack-blur' filters, and also applying transform on the shadow symbolizer 
<pre>transform="translate(10,10)"</pre>

### Floating water 

![Floating water](http://farm8.staticflickr.com/7060/6969593532_d6716f0234.jpg)

Note, that while the water is floating in the air, all roads are on top of it - funky :)








