---
  layout: nav_basics
  title: instant website - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Instant Website</h2>

The <code>instant_website</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        instant_website.google_analytics_key
      </li>
      <li>
        instant_website.is_live
      </li>
      <li>
        instant_website.is_active
      </li>
      <li>
        instant_website.free_plan
      </li>
      <li>
        instant_website.created_at
      </li>
      <li>
        instant_website.updated_at
      </li>
      <li>
        <a href="#office_url">instant_website.office_url</a>
      </li>
      <li>
        <a href="#template">instant_website.template</a>
      </li>
      <li>
        <a href="#cover_photos">instant_website.cover_photos</a>
      </li>
      <li>
        <a href="#domains">instant_website.domains</a>
      </li>
      <li>
        <a href="#pages">instant_website.pages</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="office_url">instant_website.office_url</h2>

Returns office url of the instant website.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ instant_website.office_url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="template">instant_website.template</h2>

Returns [template]({{ '/objects/template' | prepend: site.baseurl }}) object which is a template of a listing. [*Optional*]

<h2 class="tags" id="cover_photos">instant_website.cover_photos</h2>

Returns [cover photos]({{ '/objects/cover_photo' | prepend: site.baseurl }}) object which are cover photos of a listing. [*Optional*]

<h2 class="tags" id="domains">instant_website.domains</h2>

Returns [domains]({{ '/objects/domain' | prepend: site.baseurl }}) object which are domains of a listing. [*Optional*]

<h2 class="tags" id="pages">instant_website.pages</h2>

Returns [pages]({{ '/objects/page' | prepend: site.baseurl }}) object which are website pages of a listing. These objects are the ordered menu navigation which the user can customized the label. By default, it's ordered by the previewed template or its template. [*Optional*]