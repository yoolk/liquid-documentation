---
  layout: nav_basics
  title: links - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Link</h2>

The <code>link</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">link.id</a>
      </li>
      <li>
        <a href="#title">link.title</a>
      </li>
      <li>
        <a href="#link">link.link</a>
      </li>
      <li>
        <a href="#description">link.description</a>
      </li>
      <li>
        <a href="#created_at">link.created_at</a>
      </li>
      <li>
        <a href="#updated_at">link.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">listing.links</h2>
Returns all links of that listing.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for link in listing.links %}
    <li>{{ link.title }}</li>
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
  <li>New Generation of Web 2.0</li>
  <li>Think pad, Idea pad</li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="title">link.title</h2>

Returns link's title as type of string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<h1>{{ link.title }}</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<h1>New Generation of Web 2.0</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link">link.link</h2>

Returns link's link (URL) as type of string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ link.link }}">Yellow Tower</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="http://yellow-tower.com/">Yellow Tower</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="description">link.description</h2>

Returns link's description as type of string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<p>{{ link.description }}</p>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<p>TODAY'S MOST READ 10 Mindsets
That Will Radically Improve Your Business The 10 Most Talked-About
Super Bowl Commercials of 2015 6 Things They Don't Tell You When You Leave the Big Corporate World for Your Own Business</p>
{% endraw %}{% endhighlight %}
  </div>
</div>