---
  layout: nav_basics
---

## Filters

Filters are simple methods that modify the output of numbers, strings, variables and objects. They are placed within an output tag {% raw %}<code>{{</code> <code>}}</code>{% endraw %} and are separated with a pipe character {% raw %}<code>|</code>{% endraw %}.

<div class="panel">
  <div class="panel-header">
  <h3>input</h3>
  </div>
  <div class="panel-body">
    {% highlight django %}{% raw %}
    <!-- product.title = "Awesome Shoes" -->
    {{ product.title | upcase }}
    {% endraw %}{% endhighlight %}
  </div>
</div>