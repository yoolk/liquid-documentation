---
  layout: nav_basics
  title: media - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Media</h2>

The <code>media</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        media.is_active
      </li>
      <li>
        media.created_at
      </li>
      <li>
        media.updated_at
      </li>
      <li>
        <a href="#embed_script">media.embed_script</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="embed_script">media.embed_script</h2>

Returns an iframe of embed script. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ media.embed_script }}
# => <iframe width="560" height="315" src="http://www.youtube.com/embed/DlayORza9gg" frameborder="0" allowfullscreen></iframe>
{% endraw %}{% endhighlight %}
  </div>
</div>