---
layout: 01_page
title: Downloads
---

## Latest Release

The latest release is Mapnik v4.1.1.

## Mapnik 4.1.1

Release Date: 27 June 2025

### Source Installation (using SCons)

To build Mapnik v4.1.1 from source either download the [v4.1.1 tarball](https://github.com/mapnik/mapnik/releases/download/v4.1.1/mapnik-v4.1.1.tar.bz2) or pull directly from github:

    git clone https://github.com/mapnik/mapnik.git
    cd mapnik
    git checkout v4.1.1
    git submodule update --init
    python3 ./scons/scons.py configure
    python3 ./scons/scons.py install -j8

For source install help see the [Install docs](https://github.com/mapnik/mapnik/blob/v4.1.1/INSTALL.md)

You can also use git to fetch the latest code (will default to `master` branch):

    git clone https://github.com/mapnik/mapnik.git

Browse the code at [github](https://github.com/mapnik/mapnik).

Download a snapshot as a [zip archive](https://github.com/mapnik/mapnik/archive/master.zip).
