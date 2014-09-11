---
  layout: nav_basics
---

<h2 class="section-title">Control Flow Tags</h2>

Control Flow tags determine which block of code should be executed based on different conditions.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#if">if</a>
      </li>
      <li>
        <a href="#elsif-else">elsif / else</a>
      </li>
      <li>
        <a href="#case-when">case/when</a>
      </li>
      <li>
        <a href="#unless">unless</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="if">if</h2>

Executes a block of code only if a certain condition is met

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.title == 'Awesome Shoes' %}
  These shoes are awesome!
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
  These shoes are awesome!
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="elsif-else">elsif / else</h2>

Adds more conditions within an if or unless block.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- If customer.name = 'anonymous' -->
{% if customer.name == 'kevin' %}
  Hey Kevin!
{% elsif customer.name == 'anonymous' %}
  Hey Anonymous!
{% else %}
  Hi Stranger!
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
  Hey Anonymous!
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="case-when">case/when</h2>

Creates a switch statement to compare a variable with different values. case initializes the switch statement, and when compares its values.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign handle = 'cake' %}
{% case handle %}
  {% when 'cake' %}
    This is a cake
  {% when 'cookie' %}
    This is a cookie
  {% else %}
    This is not a cake nor a cookie
{% endcase %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
  This is a cake
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="unless">unless</h2>

Similar to if, but executes a block of code only if a certain condition is not met

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% unless product.title == 'Awesome Shoes' %}
  These shoes are not awesome.
{% endunless %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
  These shoes are not awesome.
{% endraw %}{% endhighlight %}
  </div>
</div>

This would be the equivalent of doing the following:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.title != 'Awesome Shoes' %}
  These shoes are not awesome.
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>