---
  layout: nav_basics
  title: part - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">part</h2>

Each part returned by the [paginate.parts]({{ '/objects/paginate/#paginate.parts' | prepend: site.baseurl }}) array represents a link in the pagination's navigation. The part object is only accessible through the [paginate]({{ '/objects/paginate' | prepend: site.baseurl }}) object, and can only be used within [paginate]({{ '/objects/paginate' | prepend: site.baseurl }}) tags.

The example below shows how the `part` object's attributes can be accessed through a for loop that goes through the `paginate.parts` array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for part in paginate.parts %}
  {% if part.is_link %}
    {{ part.title | link_to: part.url}}
  {% endif %}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/galleries?page=1" title="">1</a>
<a href="/galleries?page=2" title="">2</a>
<a href="/galleries?page=3" title="">3</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

The **part** object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#part.is_link">part.is_link</a>
      </li>
      <li>
        <a href="#part.title">part.title</a>
      </li>
      <li>
        <a href="#part.url">part.url</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="part.is_link">part.is_link</h2>

Returns `true` if the part is a link, returns `false` if it is not.

<h2 class="tags" id="part.title">part.title</h2>

Returns the title of the part.

<h2 class="tags" id="part.url">part.url</h2>

Returns the URL of the part.