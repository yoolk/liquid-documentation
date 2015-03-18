---
  layout: nav_basics
  title: product - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Product</h2>

The <code>product</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">product.id</a>
      </li>
      <li>
        <a href="#name">product.name</a>
      </li>
      <li>
        <a href="#price">product.price</a>
      </li>
      <li>
        <a href="#description">product.description</a>
      </li>
      <li>
        <a href="#delivery">product.delivery</a>
      </li>
      <li>
        <a href="#features">product.features</a>
      </li>
      <li>
        <a href="#brand">product.brand</a>
      </li>
      <li>
        <a href="#photos">product.photos</a>
      </li>
      <li>
        <a href="#created_at">product.created_at</a>
      </li>
      <li>
        <a href="#updated_at">product.updated_at</a>
      </li>
      <li>
        <a href="#url">product.url</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="features">product.features</h2>
Returns an array of features. Each feature has `name` and `value`.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for feature in product.features %}
    <li>
      <span>{{ feature.name }}</span>
      <span>{{ feature.value }}</span>
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
    <span>Produced in</span>
    <span>Cambodia</span>
  </li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="photos">product.photos</h2>

Returns an array of the product's photos. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for photo in product.photos %}
  {{ photo | attachment_url: 'medium' | image_tag }}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/product_images/medium/1367097277/1250047?1367097277" />
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
    <td>thumbnail</td>
    <td>49 x auto</td>
  </tr>
  <tr>
    <td>small</td>
    <td>186 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>350 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>

<h2 class="tags" id="url">product.url</h2>

Returns the url of a product.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ product.url }}">{{ product.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/products/9200-pc-laptops-netbooks/3852-lenovo-z580">Lenovo Z580</a>
{% endraw %}{% endhighlight %}
  </div>
</div>