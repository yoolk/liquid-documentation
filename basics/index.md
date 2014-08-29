---
layout: nav_basics
---
###Introduction
Liquid is an open-source, Ruby-based template language created by Shopify. It is the backbone of Shopify themes and is used to load dynamic content on storefronts.


***\{\{*** 'sales' \| append: '.jpg' ***\}\}*** *\<!-- Output: sales.jpg \-->*

{% highlight html%}{% raw %}
  {{ product.title }} <!-- Output: Awesome T-Shirt-->
{% endraw %}{% endhighlight %}


{% raw %}
  {{ 'sales' | append: '.jpg' }} \<!-- Output: sales.jpg \-->
{% endraw %}
