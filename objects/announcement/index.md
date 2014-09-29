---
  layout: nav_basics
  title: announcement - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Catalog Item</h2>

The <code>announcement</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">announcement.id</a>
      </li>
      <li>
        <a href="#text">announcement.text</a>
      </li>
      <li>
        <a href="#image">announcement.image</a>
      </li>
      <li>
        <a href="#created_at">announcement.created_at</a>
      </li>
      <li>
        <a href="#updated_at">announcement.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">announcement.image</h2>

Returns an image of a announcement. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for announcement in listing.announcements %}
  {% if announcement.image %}
    {{ announcement | attachment_url: 'medium' | image_tag }}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/announcement_images/medium/1367097277/1250047?1367097277" />
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
    <td>medium</td>
    <td>322 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>