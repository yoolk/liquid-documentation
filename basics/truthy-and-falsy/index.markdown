---
layout: nav_basics
title: Truthy and Falsy - Basics - Yoolk Instant Website Themes
---

<h2 class="section-title">Truthy and Falsy in Liquid</h2>

In programming, we describe “truthy” and “falsy” as anything that returns true or false, respectively, when used inside an if statement

<h2 class="tags" id="tags">What is truthy?</h2>

All values in Liquid are truthy, with the exception of nil and false. <br>

In the example below, the text “Tobi” is not a boolean, but it is truthy in a conditional


<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign tobi = 'Tobi' %}
{% if tobi %}
  This will always be true.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

Strings, even when empty, are truthy. The example below will result in empty HTML tags if email.value is empty:

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign email = listing.email %}
{% if email.value %}
  <h1>{{ email.value }}</h1>
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
  <h1></h1>
{% endraw %}{% endhighlight %}
  </div>
</div>

To avoid this, you can check to see if the string is blank, as follows:

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign email = listing.email %}
{% unless email.value == blank %}
  <h1>{{ email.value }}</h1>
{% endunless %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="objects">What is falsy?</h2>

The only values that are falsy in Liquid are nil and false. <br>

nil is returned when a Liquid object doesn't have anything to return. For example, if a catalog_item doesn't have an image, catalog_item.image will be set to nil. Since that is “falsy”, you can do this:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if catalog_item.image %}
  <!-- output catalog_item image -->
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

The value false is returned through many Liquid object properties such as product.delivery.

<h2 class="tags" id="objects">Summary</h2>


The table below summarizes what is truthy or falsy in Liquid

<table class="table" rules="all" frame="void">
  <tr>
    <th></th>
    <th>truthy</th>
    <th>falsy</th>
  </tr>
  <tr>
    <td width="30%">true</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>false</td>
    <td></td>
    <td>x</td>
  </tr>
  <tr>
    <td>nil</td>
    <td></td>
    <td>x</td>
  </tr>
  <tr>
    <td>string</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>empty string</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>0</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>1 or 2 or 3.14</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>array</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>empty array</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>listing</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>listing with no products</td>
    <td>x</td>
    <td></td>
  </tr>
  <tr>
    <td>page</td>
    <td>x</td>
    <td></td>
  </tr>
</table>