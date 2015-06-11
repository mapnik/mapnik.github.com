# mapnik.org

Home for the Mapnik project on the web.

Uses [jekyll](https://github.com/mojombo/jekyll).

[![Build Status](https://travis-ci.org/mapnik/mapnik.github.com.svg?branch=master)](https://travis-ci.org/mapnik/mapnik.github.com)

## Setup

### Install jekyll (depends on Ruby, rubygems and Ruby development packages)

    sudo gem install jekyll

### Markdown options

There are many. We default to using rdiscount (ruby wrapper around Discount)
as it is faster than maruku:

    export CC=gcc
    export CXX=g++
    sudo gem install rdiscount

Why forcing gcc? (https://github.com/Orc/discount/pull/35)

### Run jekyll

    jekyll serve

### View the site at:

    http://localhost:4000/
