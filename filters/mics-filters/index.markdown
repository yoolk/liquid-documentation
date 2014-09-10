---
  layout: nav_basics
---

<h2 class="section-title">Misc Filters</h2>
provides miscellaneous filters.

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