# mapnik.org

Home for the Mapnik project on the web.

Uses [jekyll](https://github.com/mojombo/jekyll).

## Setup

### Install jekyll (depends on Ruby, rubygems and Ruby development packages)

    gem install jekyll nokogiri

### Run jekyll

    jekyll serve

### View the site at:

    http://127.0.0.1:4000/


### Update news posts:

Format `/news` posts as either `.html` or `.md` files. Code snippets should be wrapped in `highlight` liquid tags either with our without line numbers, outlined below. Replace `xml` with the code snippet type.

```
{% highlight xml %} 
	code here 
{% endhighlight %}
``` 

or 

```
{% highlight xml linenos %} 
	code here 
{% endhighlight %}
```
