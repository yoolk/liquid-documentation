---
  layout: nav_basics
---

<h2 class="section-title">Misc Filters</h2>
provides miscellaneous filters.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#random">random</a>
      </li>
      <li>
        <a href="#toggle_class_name">toggle_class_name</a>
      </li>
      <li>
        <a href="#default">default</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title">random</h5>
generate random numbers.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 5 | random }}
# => 4 (the result is randomly print)
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">toggle_class_name</h5>
Return class_name if condition evaluate to true otherwise nil is returned.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'active' | toggle_class_name: true }}
# => 'active'
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">default</h5>
Sets a default value for any variable with no assigned value. Can be used with strings, arrays, and hashes.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
Dear {{ customer.name | default: "customer" }}
{% endraw %}{% endhighlight %}
  </div>
</div>
<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
<!-- if customer.name is nil -->
Dear customer
{% endraw %}{% endhighlight %}
  </div>
</div>