---
layout: nav_basics
title: Operators - Basics - Yoolk Instant Website Themes
---
<h2 class="section-title">Operators</h2>

Liquid has access to all of the logical and comparison operators. These can be used in tags such as [if](#) and [unless](#).

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#basic-operators">Basic Operators</a>
      </li>
      <li>
        <a href="#contains">The contains operator</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="basic-operators">Basic Operators</h2>

<table class="table" rules="all" frame="void">
  <tr>
    <td width="30%">==</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>!=</td>
    <td>does not equal</td>
  </tr>
  <tr>
    <td>></td>
    <td>greater than</td>
  </tr>
  <tr>
    <td><</td>
    <td>less than</td>
  </tr>
  <tr>
    <td>>=</td>
    <td>greater than or equal to</td>
  </tr>
  <tr>
    <td><=</td>
    <td>less than or equal to</td>
  </tr>
  <tr>
    <td>or</td>
    <td>condition A or condition B</td>
  </tr>
  <tr>
    <td>and</td>
    <td>condition A and condition B</td>
  </tr>
</table>

<h2 class="tags">examples</h2>

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.name == "Awesome Shoes" %}
  These shoes are awesome!
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

Operators can be chained together.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.name == "Shirt" or product.name == "Shoes" %}
  This is a shirt or a shoe.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="contains">The 'contains' Operator</h2>

contains checks for the presence of a substring inside a string.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.name contains 'Pack' %}
  This product's name contains the word Pack.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

contains can also check for the presence of a string in an array of strings.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- assume product.tags returns an array of tags. -->
{% if product.tags contains 'Hello' %}
  This product has been tagged with 'Hello'.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

You __cannot__ check for the presence of an object in an array of objects using contains. This will not work:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product_category.products contains 'Awesome Shoes' %}
  One of the products in this category is Awesome Shoes.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

This will work:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign in_product_category = false %}

{% for product in product_category.products %}
  {% if in_product_category == false and product.name == 'Awesome Shoes' %}
    {% assign in_product_category = true %}
  {% endif %}
{% endfor %}

{% if in_product_category %}
  One of the products in this category is Awesome Shoes.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>