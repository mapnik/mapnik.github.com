#!/usr/bin/env python

import sys
import sqlite3
import  dateutil.parser
import re

def convert_image_url(m):
    return "/images/%s" % m.group(1)

if __name__ == "__main__" :
    
    if len(sys.argv) != 3:
        print ("Usage: %s <sqlite-db> <output-dir>" % sys.argv[0])
        sys.exit(1)
        
    print ("converting to jekkyl...")

    image_exp = re.compile("http://media.mapnik.org/images/?(\w+.(png|jpe?g))")
    conn = sqlite3.connect(sys.argv[1])
    c = conn.cursor()
    c.execute("select id,pub_date,slug,headline,author,body from news_entry")
    output_dir = sys.argv[2]
    for row in c:
        pub_date = dateutil.parser.parse(row[1])
        news_file = "%s-%02d-%02d-%s.html" % (pub_date.year,pub_date.month,pub_date.day,row[2])
        f = open(output_dir+"/" + news_file,"wb")
        f.write("---\n")
        f.write("layout: post\n")
        f.write("title: \"%s\"\n" % row[3])
        f.write("author: %s\n" % row[4])
        f.write("---\n")
        f.write("\n")
        body = image_exp.sub(convert_image_url,row[5])
        
        body = body.replace(u'\\r',"")
        body = body.replace(u'\\t',"")
        body = body.replace(u'\\n',"")
        body = body.encode("utf-8")
        f.write(body)
        f.write("\n\n")
        f.close()
        print "news file: %s" % (news_file)
