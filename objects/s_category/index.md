---
  layout: nav_basics
  title: service_category - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Service Category</h2>

The <code>service_category</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">service_category.id</a>
      </li>
      <li>
        <a href="#alias_id">service_category.alias_id</a>
      </li>
      <li>
        <a href="#short_name">service_category.short_name</a>
      </li>
      <li>
        <a href="#description">service_category.description</a>
      </li>
      <li>
        <a href="#url">service_category.url</a>
      </li>
      <li>
        <a href="#current?">service_category.current?</a>
      </li>
      <li>
        <a href="#services">service_category.services</a>
      </li>
      <li>
        <a href="#created_at">service_category.created_at</a>
      </li>
      <li>
        <a href="#updated_at">service_category.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="services">service_category.services</h2>

Returns an array of the service_category's [services]({{ '/objects/service/' | prepend: site.baseurl }}). [*Optional*]

<h2 class="tags" id="url">service_category.url</h2>

Returns the url of a service_category.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ service_category.url }}">{{ service_category.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/services/kh12806-office-rental-services">Office Rental Services</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="current?">service_category.current?</h2>

Returns true if this service_category is the one which is currently displayed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul class="nav">
  {% for service_category in listing.service_categories %}
    <li>
      <a href="{{ service_category.url }}" {% if service_category.current? %}class="active"{% endif %}>{{ service_category.name }}</a>
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<ul class="nav">
  <li><a href="/products/1-shirt" class="active">Shirt</a></li>
  <li><a href="/products/2-shoe">Shoe</a></li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>