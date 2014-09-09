---
  layout: nav_basics
---

<h2 class="section-title">Filters</h2>

Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag {% raw %}<code>{{</code> <code>}}</code>{% endraw %} and are separated with a pipe character {% raw %}<code>|</code>{% endraw %}.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      <!-- product.title = "Awesome Shoes" -->
      {{ product.title | upcase }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      AWESOME SHOES
    {% endraw %}{% endhighlight %}
  </div>
</div>

In the example above, product is the object, title is its attribute, and upcase is the filter being applied.

Some filters require a parameter to be passed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {{ product.title | remove: "Awesome" }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      Shoes
    {% endraw %}{% endhighlight %}
  </div>
</div>

Multiple filters can be used on one output. They are applied from left to right.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      <!-- product.title = "Awesome Shoes" -->
      {{ product.title | upcase | remove: "AWESOME"  }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      SHOES
    {% endraw %}{% endhighlight %}
  </div>
</div>