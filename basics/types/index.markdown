---
layout: nav_basics
---
<h2 class="section-title">Types</h2>

Liquid objects can return one of six types: String, Number, Boolean, Nil, Array, or EmptyDrop. Liquid variables can be initialized by using the assign or capture tags.

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
      <li>
        <a href="#emptydrop">EmptyDrop</a>
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

Nil is treated as false in the conditions of {%raw%}{% if %}{%endraw%} blocks and other Liquid tags that check for the truthfulness of a statement. The example below shows a situation where a fulfillment does not yet have a tracking number entered. The if statement would not render the included text within it.

{% raw %}
  {% if fulfillment.tracking_numbers %}
    We have a tracking number!
  {% endif %}
{% endraw %}

Any tags or outputs that return nil will not show anything on the screen.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
    Tracking number: {{ fulfillment.tracking_numbers }}
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

<h2 class="tags" id="emptydrop">EmptyDrop</h2>

An EmptyDrop object is returned whenever you try to access a non-existent object (for example, a collection, page or blog that was deleted or hidden) by handle. In the example below, page_1, page_2 and page_3 are all EmptyDrop objects.

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% assign variable = "hello" %}
      {% assign page_1 = pages[variable] %}
      {% assign page_2 = pages["i-do-not-exist-in-your-store"] %}
      {% assign page_3 = pages.this-handle-does-not-belong-to-any-page %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

EmptyDrop objects only have one attribute, empty?, which is always true.

Collections and pages that do exist do not have an empty? attribute. Their empty? is “falsy”, which means that calling it inside an if statement will return false. When using an unless statement on existing collections and pages, empty? will return true.

<h5 class="sub-section-title">Applications in themes</h5>

Using the empty? attribute, you can check to see if a page exists or not before accessing any of its other attributes.

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% unless pages.frontpage.empty? %}
        <!-- We have a page with handle 'frontpage' and it's not hidden.-->
        <h1>{{ pages.frontpage.title }}</h1>
        <div>{{ pages.frontpage.content }}</div>
      {% endunless %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

It is important to see if a page exists or not first to avoid outputting empty HTML elements to the page, as follows:

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% unless pages.frontpage.empty? %}
        <h1></h1>
        <div></div>
      {% endunless %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

You can perform the same verification with collections as well:

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% unless pages.frontpage.empty? %}
        {% unless collections.frontpage.empty? %}
          {% for product in collections.frontpage.products %}
            {% include 'product-grid-item' %}
          {% else %}
            <p>We do have a 'frontpage' collection but it's empty.</p>
          {% endfor %}
        {% endunless %}
      {% endunless %}
    {% endraw %}{% endhighlight %}
  </div>
</div>