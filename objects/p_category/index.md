---
  layout: nav_basics
  title: product_category - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Product Category</h2>

The <code>product_category</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">product_category.id</a>
      </li>
      <li>
        <a href="#name">product_category.name</a>
      </li>
      <li>
        <a href="#name_path">product_category.name_path</a>
      </li>
      <li>
        <a href="#url">product_category.url</a>
      </li>
      <li>
        <a href="#current?">product_category.current?</a>
      </li>
      <li>
        <a href="#products">product_category.products</a>
      </li>
      <li>
        <a href="#created_at">product_category.created_at</a>
      </li>
      <li>
        <a href="#updated_at">product_category.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="products">product_category.products</h2>

Returns an array of the product_category's [products]({{ '/objects/product/' | prepend: site.baseurl }}). [*Optional*]

<h2 class="tags" id="url">product_category.url</h2>

Returns the url of a product_category.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ product_category.url }}">{{ product_category.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/products/9200-pc-laptops-netbooks">PC Laptops & Netbooks</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="current?">product_category.current?</h2>

Returns true if this product_category is the one which is currently displayed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul class="nav">
  {% for product_category in listing.product_categories %}
    <li>
      <a href="{{ product_category.url }}" {% if product_category.current? %}class="active"{% endif %}>{{ product_category.name }}</a>
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