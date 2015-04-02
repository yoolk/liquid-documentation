---
  layout: nav_basics
  title: food - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Food</h2>

The <code>food</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">food.id</a>
      </li>
      <li>
        <a href="#name">food.name</a>
      </li>
      <li>
        <a href="#price">food.price</a>
      </li>
      <li>
        <a href="#description">food.description</a>
      </li>
      <li>
        <a href="#delivery">food.delivery</a>
      </li>
      <li>
        <a href="#properties">food.properties</a>
      </li>
      <li>
        <a href="#photos">food.photos</a>
      </li>
      <li>
        <a href="#cover_photo">food.cover_photo</a>
      </li>
      <li>
        <a href="#created_at">food.created_at</a>
      </li>
      <li>
        <a href="#updated_at">food.updated_at</a>
      </li>
      <li>
        <a href="#url">food.url</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="properties">food.properties</h2>
Returns an array of properties. Each property has `name` and `value`.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for property in food.properties %}
    <li>
      <span>{{ property.name }}</span>
      <span>{{ property.value }}</span>
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
    <span>Type</span>
    <span>Ice Cream</span>
  </li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="photos">food.photos</h2>

Returns an array of the food's photos. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for photo in food.photos %}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/food_images/medium/1367097277/1250047?1367097277" />
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
    <td>50 x 50</td>
  </tr>
  <tr>
    <td>small</td>
    <td>196 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>364 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>

<h2 class="tags" id="cover_photo">food.cover_photo</h2>
Returns the first photo of a food.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ food.cover_photo | attachment_url: 'medium' | image_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<img src="http://s-yoolk-images0.yoolk.com/kh/menu/foods/medium/1406022689/1145?1406022689" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="url">food.url</h2>

Returns the url of a food.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ food.url }}">{{ food.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/menu/9200-soft-drinks/3852-coke">Coke</a>
{% endraw %}{% endhighlight %}
  </div>
</div>