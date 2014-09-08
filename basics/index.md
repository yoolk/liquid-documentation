---
layout: nav_basics
---

##Introduction
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

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>Tags</li>
      <li>Objects</li>
      <li>Filters</li>
    </ul>
  </div>
</div>

<h2 class="tags">Tags</h2>

Tags make up the programming logic that tells templates what to do.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

<p class="read-more">
  <a href="/tags">read more &raquo;</a>
</p>


<h2 class="tags">Objects</h2>

Objects contain attributes that are used to display dynamic content on the page.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

<p class="read-more">
  <a href="/objects">read more &raquo;</a>
</p>

<h2 class="tags">Filters</h2>

Filters are used to modify the output of strings, numbers, variables, and objects.

{% raw %}
  {% if user.name == 'elvis' %}
    Hey Elvis
  {% endif %}
{% endraw %}

<p class="read-more">
  <a href="/filters">read more &raquo;</a>
</p>