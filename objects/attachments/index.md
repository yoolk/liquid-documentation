---
  layout: nav_basics
  title: attachments - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">attachment</h2>

The <code>attachment</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">attachment.id</a>
      </li>
      <li>
        <a href="#name">attachment.name</a>
      </li>
      <li>
        <a href="#file_size">attachment.file_size</a>
      </li>
      <li>
        <a href="#extension">attachment.extension</a>
      </li>
      <li>
        <a href="#url">attachment.url</a>
      </li>
      <li>
        <a href="#created_at">attachment.created_at</a>
      </li>
      <li>
        <a href="#updated_at">attachment.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">listing.attachments</h2>
Returns all attachments of that listing.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for attachment in listing.attachments %}
    <li>{{ attachment.name }}</li>
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
  <li>burger.jpg</li>
  <li>drum.pdf</li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="name">attachment.name</h2>

Returns attachment's name with extension as type of string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<h1>{{ attachment.name }}</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<h1>burger.jpg</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="file_size">attachment.file_size</h2>

Returns attachment's file_size.


<h2 class="tags" id="url">attachment.url</h2>

Returns attachment's url (Amazon S3 attachment url).

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<p>{{ attachment.url }}</p>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="https://s-staging-yoolk-assets.s3.amazonaws.com/kh/attachments/kh54997/burger.jpg">burger.jpg</a>
{% endraw %}{% endhighlight %}
  </div>
</div>