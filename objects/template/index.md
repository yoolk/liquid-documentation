---
  layout: nav_basics
  title: template - instant website - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">template</h2>

The <code>template</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        template.name
      </li>
      <li>
        template.description
      </li>
      <li>
        template.is_responsive
      </li>
      <li>
        <a href="#industries">template.industries</a>
      </li>
      <li>
        <a href="#pages">template.pages</a>
      </li>
      <li>
        <a href="#thumbnail">template.thumbnail</a>
      </li>
      <li>
        <a href="#cover_photo">template.cover_photo</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="industries">template.industries</h2>

Returns an array of template industries. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
 {{ template.industries | join: ', ' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
 "Clothing & Fashion, Media & Advertising, Optical Products"
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="pages">template.pages</h2>

Returns an array of page name of the current template. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ template.pages | join: ', ' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
"Galleries, Products, About Us, Announcements, People, Contact Us"
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="thumbnail">template.thumbnail</h2>

Returns template thumbnail. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ template.thumbnail.url }}
# => http://s-staging-yoolk-assets.s3.amazonaws.com/global/instant_website/templates/original/1404789996/57.png?1404789996
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="cover_photo">template.cover_photo</h2>

Returns cover photo of current template. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ template.cover_photo.url }}
# => http://s-staging-yoolk-assets.s3.amazonaws.com/global/instant_website/template_cover_photos/original/1406775868/7.png?1406775868
{% endraw %}{% endhighlight %}
  </div>
</div>