---
layout: 01_page
title: Downloads
---

## Latest Release

The latest release is Mapnik v3.0.18.

## Mapnik 3.0.18

Release Date: 26 January 2018

### Prebuilt Binaries

We plan on providing prebuilt binaries soon for Mapnik 3.0.18.

### Source Installation

To build Mapnik v3.0.18 from source either download the [v3.0.18 tarball](https://github.com/mapnik/mapnik/releases/download/v3.0.18/mapnik-v3.0.18.tar.bz2) or pull directly from github:

    git clone https://github.com/mapnik/mapnik.git
    cd mapnik
    git checkout v3.0.18
    git submodule update --init
    ./configure && make && make test

For source install help see the [Install docs](https://github.com/mapnik/mapnik/blob/v3.0.18/INSTALL.md)

You can also use git to fetch the latest code (will default to `master` branch):

    git clone https://github.com/mapnik/mapnik.git

Browse the code at [github](https://github.com/mapnik/mapnik).

Download a snapshot as a [zip archive](https://github.com/mapnik/mapnik/archive/master.zip).


## Mapnik 2.2

Release Date: June 3rd, 2013

### Platforms

#### OS X

The recommend install method on OS X is `homebrew`. If you are running `homebrew` simply do:

    brew update && brew install mapnik

We also provide a pre-built [OS X 64 bit package](http://mapnik.s3.amazonaws.com/dist/v2.2.0/mapnik-osx-v2.2.0.dmg) that will install into the same place (`/usr/local`) as homebrew.

#### iOS

 * [3-way arch (i386/armv7/armv7s) SDK](http://mapnik.s3.amazonaws.com/dist/v2.2.0/mapnik-ios-v2.2.0.tar.bz2)
 * [Setup instructions](https://gist.github.com/springmeyer/5710531)

#### Windows

 * [Windows 32 bit Package](http://mapnik.s3.amazonaws.com/dist/v2.2.0/mapnik-win-v2.2.0.zip)
 * [Windows 32 bit SDK](http://mapnik.s3.amazonaws.com/dist/v2.2.0/mapnik-win-sdk-v2.2.0.zip)
 * [Setup instructions](https://gist.github.com/springmeyer/5651701)

#### Ubuntu

 * [Ubuntu PPA](https://launchpad.net/~mapnik/+archive/v2.2.0) ([more info](https://github.com/mapnik/mapnik/wiki/UbuntuInstallation))

### Source

To build Mapnik v2.2.0 from source either download the [v2.2.0 tarball](http://mapnik.s3.amazonaws.com/dist/v2.2.0/mapnik-v2.2.0.tar.bz2) or pull directly from github:

    git clone https://github.com/mapnik/mapnik.git
    git checkout v2.2.0

For source install help see the [Install docs](https://github.com/mapnik/mapnik/blob/v2.2.0/INSTALL.md)

###  Extra Installation Details

See platform specific notes at [Mapnik Wiki](https://github.com/mapnik/mapnik/wiki/Mapnik-Installation).

See also the detailed [Install guide](https://github.com/mapnik/mapnik/blob/master/INSTALL.md) for the development code.

##  Older releases

See the listing at [the download archive on s3](http://mapnik.s3.amazonaws.com/index.html?path=dist/).
