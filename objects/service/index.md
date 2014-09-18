---
  layout: nav_basics
  title: service - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Service</h2>

The <code>service</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">service.id</a>
      </li>
      <li>
        <a href="#name">service.name</a>
      </li>
      <li>
        <a href="#description">service.description</a>
      </li>
      <li>
        <a href="#properties">service.properties</a>
      </li>
      <li>
        <a href="#photos">service.photos</a>
      </li>
      <li>
        <a href="#created_at">service.created_at</a>
      </li>
      <li>
        <a href="#updated_at">service.updated_at</a>
      </li>
      <li>
        <a href="#url">service.url</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="photos">service.photos</h2>

Returns an array of the service's photos. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for photo in service.photos %}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/service_images/medium/1367097277/1250047?1367097277" />
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

<h2 class="tags" id="url">service.url</h2>

Returns the url of a service.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ service.url }}">{{ service.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/services/kh12806-office-rental-services/2-ground-floor">2 Ground Floor</a>
{% endraw %}{% endhighlight %}
  </div>
</div>