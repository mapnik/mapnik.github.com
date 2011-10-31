# mapnik.org

Home for the Mapnik project on the web.

Uses [jekyll](https://github.com/mojombo/jekyll).


## Setup

### Install jekyll (depends on Ruby and rubygems)

    sudo gem install jekyll

### Markdown options

There are many. We default to using rdiscount (ruby wrapper around Discount)
as it is faster than maruku:

    export CC=gcc
    export CXX=g++
    sudo gem install rdiscount

Why forcing gcc? (https://github.com/Orc/discount/pull/35)

### Run jekyll

    jekyll

### View the site at:

    http://localhost:4000/
