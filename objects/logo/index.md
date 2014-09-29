---
  layout: nav_basics
  title: logo - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Logo</h2>

The <code>logo</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        logo.created_at
      </li>
      <li>
        logo.updated_at
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="logo">listing.logo</h2>
Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ listing.logo | attachment_url: 'medium' | image_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<img src="http://s-yoolk-images1.yoolk.com/kh/logo_images/medium/1367097277/1250047?1367097277" />
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
    <td>50x50></td>
  </tr>
  <tr>
    <td>medium</td>
    <td>150x150></td>
  </tr>
  <tr>
    <td>large</td>
    <td>220x220></td>
  </tr>
</table>