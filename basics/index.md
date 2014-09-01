---
layout: nav_basics
---
###Introduction
Liquid is an open-source, Ruby-based template language created by Shopify. It is the backbone of Shopify themes and is used to load dynamic content on storefronts.

iframe

***\{\{*** 'sales' \| append: '.jpg' ***\}\}*** *\<!-- Output: sales.jpg \-->*

{% highlight html%}{% raw %}
  {{ product.title }} <!-- Output: Awesome T-Shirt-->
{% endraw %}{% endhighlight %}


{% raw %}
  {{ 'sales' | append: '.jpg' }} \<!-- Output: sales.jpg \-->
{% endraw %}

Liquid uses a combination of tags, objects, and filters to load dynamic content. They are used inside Liquid template files, which are a group of files that make up a theme. For more information on the available templates, please see [Theme Development](#).

- Tags
- Objects
- Filters

---

## Tags

Tags make up the programming logic that tells templates what to do.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

[read more][1]

---

## Objects

Objects contain attributes that are used to display dynamic content on the page.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

[read more][1]

---

## Filters

Filters are used to modify the output of strings, numbers, variables, and objects.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

[read more][1]

[1]: http://www.google.com/ "Goto Read More"