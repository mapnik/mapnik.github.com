---
layout: post
title: "Windows binaries (Release Candidate 0)"
author: Artem Pavlenko
---

Hello, Windows users! Thank you for your patience.

Following 2.0 release, we have been working hard to port more features, support more compilers, and ultimately to make the whole process of building and using Mapnik on Windows more fun.

So, here are the <a href="https://github.com/downloads/mapnik/mapnik/mapnik-2.0.1rc0.zip">latest Windows 32-bit binaries (RC0) </a>. They are built with Visual C++ 2008 Express and require vc90 runtime. Download the C++ runtimes from: [http://www.microsoft.com/en-us/download/details.aspx?id=29](http://www.microsoft.com/en-us/download/details.aspx?id=29). The provided python bindings support for now just Python version 2.7 32 bit (not 64 bit) which can be downloaded from [here](http://www.python.org/ftp/python/2.7.2/python-2.7.2.msi). 

### Cairo backend support

This feature has been around for a while in Mapnik but was missing from Windows binaries.
Now it's possible to generate PDF, PS and SVG on Windows, too.

### Microsoft SQL Server

Currently through the Mapnik OGR plug-in it's possible to load spatial data from MSSQL.

<i>(Tested with Microsoft SQL Server 2012 RC0)</i>

Layer options might look like:

<pre>
mapnik.Ogr(string='MSSQL:server=VISTA\SQLEXPRESS;database=osm;trusted_connection=yes',layer='roads',encoding="latin1")
</pre>

Give it a try and give us feedback!

PS. There is more "Windows" news on the way, so stay tuned.

### Setup

Simply unzip the archive into: `c:/mapnik-2.0.1rc0` and set your `%PATH%` to point to `c:/mapnik-2.0.1rc0`:

<pre>
set PATH=%PATH%;c:\mapnik-2.0.1rc0\lib
</pre>

Then you should be able to run the demo program:

<pre>
cd c:\mapnik-2.0.1rc0\demo\c++
rundemo ..\..\lib\mapnik
</pre>

If you want to use the python bindings then enable them like:

<pre>
set PYTHONPATH=%PYTHONPATH%;c:\mapnik-2.0.1rc0\python\2.7\site-packages;
</pre>

And make sure Python27 is on your path:

<pre>
set PATH=%PATH%;c:\Python27
</pre>

Then you should be able to run the python demo:

<pre>
cd c:\mapnik-2.0.1rc0\demo\python
python rundemo.py
</pre>






