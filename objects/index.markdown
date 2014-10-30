---
  layout: nav_basics
  title: Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Objects</h2>

Liquid objects contain attributes to output dynamic content on the page. For example, the <code>listing</code> object contains an attribute called `name` that can be used to output the <code>name</code> of a listing.

Liquid objects are also often refered to as Liquid variables.

To output an object's attribute on the page, wrap them in {% raw %}<code>{{</code> and <code>}}</code>{% endraw %}, as shown below:

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.name }}
#=> <!-- Output: “Yellow Tower” -->
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 id="global-objects" class="tags">Global Object</h2>
**Global Object** can be used and accessed from **any file** in your theme, and are defined as **global objects**, or global variables. They are [listing]({{ '/objects/listing/' | prepend: site.baseurl }}), [request]({{ '/objects/request/' | prepend: site.baseurl }}), [current_account]({{ '/objects/account/' | prepend: site.baseurl }}), [current_domain]({{ '/objects/domain/' | prepend: site.baseurl }}), and [current_template]({{ '/objects/template/' | prepend: site.baseurl }}).