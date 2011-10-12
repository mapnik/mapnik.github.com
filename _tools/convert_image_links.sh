#!/bin/bash 

OUTPUT_DIR="../images/"

for match in $(grep -rho --color -E 'http://media.mapnik.org/images/\w+.(png|jpe?g)' ../_posts) : 
do
    echo $match
    wget $match -P $OUTPUT_DIR
done