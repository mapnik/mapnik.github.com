---
layout: 01_post
title: "Simple Mapnik Python Installs"
author: Blake Thompson
category: Mapnik
---

I have been hard at work the past couple weeks trying to do something that has been asked for many times from people in the python community. A simple way for Python Mapnik to be installed via `pip` or `easy_install`. While we already had a way for a pypi package to be installed in [mapnik2](https://github.com/mapnik/pymapnik2) which is on [pypi](https://pypi.python.org/pypi/mapnik2) it took some time to configure everything properly.

I am proud to say it should now be as easy as:

{% highlight bash %}
pip install mapnik
{% endhighlight %}

This now works for OSX 10.8+ and some Linux systems through the magic of [python wheels](http://pythonwheels.com/). This requires zero compiling and includes all the binaries necessary for mapnik to work! 

## Python Bindings Moved

In order to get this all to work properly we took a series of steps. The first was that we spent a great deal of time working on a way to package and distribute binaries easily. The result of this has been [mason](https://github.com/mapbox/mason). This allowed us to make and distribute consistent prebuilt binaries to speed up development and make it easier for developers to configure a new environment. 

Once this was accomplished we were able to more easily seperate the [C++ mapnik core](https://github.com/mapnik/mapnik/) and establish a [new repository for python](https://github.com/mapnik/python-mapnik/).

## Expect Changes in Python API

While not much has changed yet about the Python mapnik API itself in this move, we do plan on making some changes to the bindings as we head towards a 1.0 release of the Mapnik Python. The goal of these changes will be to include many of the features already in [Node Mapnik](https://github.com/mapnik/node-mapnik/) such as vector tiles. Ideally we would like to have the APIs between the bindings be as similar as possible to make documentation and examples easier to write.

## Our Lack of Documentation

I know that currently we do not have great documentation for the python bindings, but we are determined to make this change at some point in the future. The wiki on the mapnik repository is very out of date. We know that users need better examples and a good API documentation. This is on our roadmap and constantly on our minds. Expect some more movement on this once we have an official Mapnik Core 3.0 Release.

## Please Post Issues

If you play around with the new Mapnik Python bindings or want to let us know what you think post an issues on the Github [issues page](https://github.com/mapnik/python-mapnik/issues).

