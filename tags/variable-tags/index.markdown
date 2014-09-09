---
  layout: nav_basics
---
<h2 class="section-title">Variable Tags</h2>
Variable Tags are used to create new Liquid variables

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#assign">assign</a>
      </li>
      <li>
        <a href="#capture">capture</a>
      </li>
      <li>
        <a href="#increment">increment</a>
      </li>
      <li>
        <a href="#decrement">decrement</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="assign">assign</h2>

Creates a new variable

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% assign my_variable = false %}
      {% if my_variable != true %}
      This statement is valid.
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
      This statement is valid.
    {% endraw %}{% endhighlight %}
  </div>
</div>

Use quotations (\"\") to save the variable as a string

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% assign foo = "bar" %}
      {{ foo }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      bar
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="capture">capture</h2>

Captures the string inside of the opening and closing tags and assigns it to a variable. Variables created through {% raw %} {% capture %} {% endraw %}  are strings

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% capture my_variable %}I am being captured.{% endcapture %}
      {{ my_variable }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      I am being captured.
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="increment">increment</h2>

Creates a new number variable, and increases its value by one every time it is called. The initial value is 0.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% increment variable %}
      {% increment variable %}
      {% increment variable %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      0
      1
      2
    {% endraw %}{% endhighlight %}
  </div>
</div>

Variables created through the increment tag are independent from variables created through assign or capture. <br>

In the example below, a variable named "var" is created through assign. The increment tag is then used several times on a variable with the same name. However, note that the increment tag does not affect the value of "var" that was created through assign.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% assign var = 10 %}
      {% increment var %}
      {% increment var %}
      {% increment var %}
      {{ var }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      0
      1
      2
      10
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="decrement">decrement</h2>

Creates a new number variable, and decreases its value by one every time it is called. The initial value is -1.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% decrement variable %}
      {% decrement variable %}
      {% decrement variable %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      -1
      -2
      -3
    {% endraw %}{% endhighlight %}
  </div>
</div>

Like increment, variables declared inside decrement are independent from variables created through assign or capture.
