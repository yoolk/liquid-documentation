---
layout: nav_basics
title: Types - Basics - Yoolk Instant Website Themes
---
<h2 class="section-title">Types</h2>

Liquid objects can return one of six types: String, Number, Boolean, Nil, or Array. Liquid variables can be initialized by using the assign or capture tags.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#strings">Strings</a>
      </li>
      <li>
        <a href="#numbers">Numbers</a>
      </li>
      <li>
        <a href="#booleans">Booleans</a>
      </li>
      <li>
        <a href="#nil">Nil</a>
      </li>
      <li>
        <a href="#arrays">Arrays</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="strings">Strings</h2>

Strings are declared by wrapping the variable's value in single or double quotes.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign my_string = "Hello World!" %}
{% endraw %}{% endhighlight %}
  </div>
</div>


<h2 class="tags" id="numbers">Numbers</h2>

Numbers include floats and integers.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign my_num = 25 %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="booleans">Booleans</h2>

Booleans are either true or false. No quotations are necessary when declaring a boolean

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign foo = true %}
{% assign bar = false %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="nil">Nil</h2>

Nil is an empty value that is returned when Liquid code has no results. It is __not__ a string with the characters "nil".

Nil is treated as false in the conditions of {%raw%}{% if %}{%endraw%} blocks and other Liquid tags that check for the truthfulness of a statement. The example below shows a situation where a listing does not yet have an email entered. The if statement would not render the included text within it.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if listing.email %}
We have an email address!
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

Any tags or outputs that return nil will not show anything on the screen.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Tracking number: {{ listing.email.value }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Tracking number:
{% endraw %}{% endhighlight %}
  </div>
</div>


<h2 class="tags" id="arrays">Arrays</h2>

Arrays hold a list of variables of all types.

<h5 class="sub-section-title">Accessing all items in an array</h5>

To access items in an array, you can loop through each item in the array using a for tag or a tablerow tag.


<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- if product.tags = "sale", "summer", "spring", "wholesale" -->
{% for tag in product.tags %}
  {{ tag }}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
sale summer spring wholesale
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">Accessing a specific item in an array</h5>

You can use square brackets ( [ ] ) notation to access a specific item in an array. Array indexing starts at zero.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- if product.tags = "sale", "summer", "spring", "wholesale" -->
{{ product.tags[0] }}
{{ product.tags[1] }}
{{ product.tags[2] }}
{{ product.tags[3] }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
sale
summer
spring
wholesale
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">Initializing an array</h5>

It is not possible to initialize an array in Liquid. For example, in Javascript you could do something like this:

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<script>
var cars = ["Saab", "Volvo", "BMW"];
</script>
{% endraw %}{% endhighlight %}
  </div>
</div>

In Liquid, you must instead use the split filter to break a single string into an array of substrings. See here for examples.