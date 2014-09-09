---
layout: nav_basics
---

<h2 class="section-title">CSRF Meta Tag</h2>

Returns meta tags “csrf-param” and “csrf-token” with the name of the cross-site request forgery protection parameter and token, respectively.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% csrf_meta_tags %}
    {% endraw %}{% endhighlight %}
  </div>
</div>