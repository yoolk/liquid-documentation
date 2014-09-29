---
  layout: nav_basics
  title: brochure - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Brochure</h2>

The <code>brochure</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">brochure.id</a>
      </li>
      <li>
        <a href="#name">brochure.name</a>
      </li>
      <li>
        <a href="#text">brochure.text</a>
      </li>
      <li>
        <a href="#description">brochure.description</a>
      </li>
      <li>
        <a href="#is_active">brochure.is_active</a>
      </li>
      <li>
        <a href="#image">brochure.image</a>
      </li>
      <li>
        <a href="#created_at">brochure.created_at</a>
      </li>
      <li>
        <a href="#updated_at">brochure.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">brochure.image</h2>

Returns an image of a brochure. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for brochure in listing.brochures %}
  {% if brochure.image %}
    {{ brochure | attachment_url: 'medium' | image_tag }}
  {% endfor %}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/brochure_images/medium/1367097277/1250047?1367097277" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">
  Parameters: image sizes
</h5>
<table class="table" rules="all" frame="void">
  <tr>
    <th height="56">styles</th>
    <th>size</th>
  </tr>
  <tr>
    <td>small</td>
    <td>196 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>322 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>