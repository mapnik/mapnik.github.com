---
layout: 01_page
title: Downloads
---

## Latest Release

The latest release is Mapnik v4.0.2.

## Mapnik 4.0.2

Release Date: 21 Augiust 2024

### Source Installation (using SCons)

To build Mapnik v4.0.2 from source either download the [v4.0.2 tarball](https://github.com/mapnik/mapnik/releases/download/v4.0.2/mapnik-v4.0.2.tar.bz2) or pull directly from github:

    git clone https://github.com/mapnik/mapnik.git
    cd mapnik
    git checkout v4.0.2
    git submodule update --init
    python3 ./scons/scons.py configure
    python3 ./scons/scons.py install -j8

For source install help see the [Install docs](https://github.com/mapnik/mapnik/blob/v4.0.2/INSTALL.md)

You can also use git to fetch the latest code (will default to `master` branch):

    git clone https://github.com/mapnik/mapnik.git

Browse the code at [github](https://github.com/mapnik/mapnik).

Download a snapshot as a [zip archive](https://github.com/mapnik/mapnik/archive/master.zip).
