---
  layout: nav_basics
  title: page - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Link</h2>

The <code>page</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>page.id</li>
      <li>page.name</li>
      <li>page.display_order</li>
      <li>page.description</li>
      <li>page.created_at</li>
      <li>page.updated_at</li>
      <li>
        <a href="#url">page.url</a>
      </li>
      <li>
        <a href="#active?">page.active?</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="url">page.url</h2>
Returns url of the page.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for page in listing.instant_website.pages %}
    <li>
      <a href="{{ page.url }}">{{ page.name }}</a>
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
<ul>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/about_us">About Us</a>
  </li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="active?">page.active?</h2>

Returns true if current request match current path.
For the common use case of using <code>active?</code> is for toggle class value of HTML element.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for page in listing.instant_website.pages %}
    <li>
      <a href="{{ page.url }}" class="{{ 'active' | toggle_class_name: page.active? }}">{{ page.name }}</a>
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
<ul>
  <li>
    <a href="/" class="active">Home</a>
  </li>
  <li>
    <a href="/about_us" class="">About Us</a>
  </li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>
