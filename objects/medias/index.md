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
        <a href="#embed_script">media.embed_script</a>
      </li>
      <li>
        <a href="#is_active">media.is_active</a>
      </li>
      <li>
        <a href="#created_at">media.created_at</a>
      </li>
      <li>
        <a href="#updated_at">media.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="photos">media.embed_script</h2>

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