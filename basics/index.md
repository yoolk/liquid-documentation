---
layout: nav_basics
title: Basics - Yoolk Instant Website Themes
---

<h2 class="section-title">Introduction</h2>
Liquid is an open-source, Ruby-based template language created by Shopify. Yoolk uses this template language to allow external people to build Instant Website Theme.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul id="products">
  {% for product in products %}
    <li>
      <h2>{{ product.name }}</h2>
      Only {{ product.price | number_to_currency }}

      {{ product.description | simple_format }}
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

Liquid uses a combination of tags, objects, and filters to load dynamic content. They are used inside Liquid template files, which are a group of files that make up a theme. For more information on the available templates, please see [Theme Development](#).

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#tags">Tags</a>
      </li>
      <li>
        <a href="#objects">Objects</a>
      </li>
      <li>
        <a href="#filters">Filters</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="tags">Tags</h2>

Tags make up the programming logic that tells templates what to do.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{% if user.name == 'elvis' %}
  Hey Elvis
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<p class="read-more">
  <a href="/tags">read more &raquo;</a>
</p>


<h2 class="tags" id="objects">Objects</h2>

Objects contain attributes that are used to display dynamic content on the page.


<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ product.name }}
<!-- Output: Awesome T-Shirt-->
{% endraw %}{% endhighlight %}
  </div>
</div>

<p class="read-more">
  <a href="/objects">read more &raquo;</a>
</p>

<h2 class="tags" id="filters">Filters</h2>

Filters are used to modify the output of strings, numbers, variables, and objects.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ 'sales' | append: '.jpg' }}
<!-- Output: sales.jpg -->
{% endraw %}{% endhighlight %}
  </div>
</div>

<p class="read-more">
  <a href="/filters">read more &raquo;</a>
</p>