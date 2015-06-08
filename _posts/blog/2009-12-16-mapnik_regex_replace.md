---
layout: 01_post
title: "Regex replace"
author: Artem Pavlenko
category: Mapnik
---

Regular expressions are very useful when working with text.

We already had 'match' operator which can be used in filter expressions. In <a href="/news/2009/12/08/future_mapnik2/">Mapnik2</a> we now also have:
<pre>
&lt;mapnik-expression&gt;.replace(&lt;regex&gt;,&lt;pattern&gt;)
</pre>

Here is a small example :

<pre>
from mapnik import *
f = Feature(1)
f["name"] = 'Mapnik'
expr = Expression("[name].replace('(\\B)|( )','$1 ')")
expr.evaluate(f)
</pre>

The above should result in:

<pre>
'M a p n i k'
</pre>