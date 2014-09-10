---
  layout: nav_basics
---

<h2 class="section-title">Translate Filters</h2>

Apply locale translation.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'welcome' | translate: 'km' }}
{% endraw %}{% endhighlight %}
  </div>
</div>
<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
សូមស្វាគមន៏
{% endraw %}{% endhighlight %}
  </div>
</div>