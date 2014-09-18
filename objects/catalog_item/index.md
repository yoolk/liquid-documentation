---
  layout: nav_basics
  title: catalog_item - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Catalog Item</h2>

The <code>catalog_item</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">catalog_item.id</a>
      </li>
      <li>
        <a href="#title">catalog_item.title</a>
      </li>
      <li>
        <a href="#html_text">catalog_item.html_text</a>
      </li>
      <li>
        <a href="#show_image">catalog_item.show_image</a>
      </li>
      <li>
        <a href="#published">catalog_item.published</a>
      </li>
      <li>
        <a href="#display_order">catalog_item.display_order</a>
      </li>
      <li>
        <a href="#image">catalog_item.image</a>
      </li>
      <li>
        <a href="#created_at">catalog_item.created_at</a>
      </li>
      <li>
        <a href="#updated_at">catalog_item.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image">catalog_item.image</h2>

Returns an image of a catalog_item. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for catalog_item in listing.catalog_items %}
  {% if catalog_item.image %}
    {{ catalog_item.image | attachment_url: 'medium' | image_tag }}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/catalog_item_images/medium/1367097277/1250047?1367097277" />
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