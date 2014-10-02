---
  layout: nav_basics
  title: gallery - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Gallery</h2>

The <code>gallery</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">gallery.id</a>
      </li>
      <li>
        <a href="#name">gallery.name</a>
      </li>
      <li>
        <a href="#display_order">gallery.display_order</a>
      </li>
      <li>
        <a href="#images">gallery.images</a>
      </li>
      <li>
        <a href="#created_at">gallery.created_at</a>
      </li>
      <li>
        <a href="#updated_at">gallery.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">listing.galleries</h2>
Returns all albums of that listing.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for listing in listing.galleries %}
    <li>{{ gallery.name }}</li>
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
  <li>Album1</li>
  <li>Album2</li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="images">gallery.images</h2>

Returns an array of the gallery's [images]({{ '/objects/image/' | prepend: site.baseurl }}). Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for image in gallery.images %}
  {{ image | attachment_url: 'medium' | image_tag }}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/gallery_images/medium/1367097277/1250047?1367097277" />
{% endraw %}{% endhighlight %}
  </div>
</div>