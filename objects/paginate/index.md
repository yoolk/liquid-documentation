---
  layout: nav_basics
  title: paginate - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Paginate</h2>

The [paginate]({{ '/tags/theme-tags/#paginate' | prepend: site.baseurl }}) tag's navigation is built using the attributes of the paginate object. You can also use the [default_pagination]({{ '/filters/misc-filters/#default_pagination' | prepend: site.baseurl }}) filter for a quicker alternative. The `paginate` object can only be used within [paginate]({{ '/tags/theme-tags/#paginate' | prepend: site.baseurl }}) tags.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#paginate.current_page">paginate.current_page</a>
      </li>
      <li>
        <a href="#paginate.current_offset">paginate.current_offset</a>
      </li>
      <li>
        <a href="#paginate.items">paginate.items</a>
      </li>
      <li>
        <a href="#paginate.parts">paginate.parts</a>
      </li>
      <li>
        <a href="#paginate.next">paginate.next</a>
      </li>
      <li>
        <a href="#paginate.previous">paginate.previous</a>
      </li>
      <li>
        <a href="#paginate.page_size">paginate.page_size</a>
      </li>
      <li>
        <a href="#paginate.pages">paginate.pages</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="paginate.current_page">paginate.current_page</h2>

Returns the number of the current page.

<h2 class="tags" id="paginate.current_offset">paginate.current_offset</h2>

Returns the total number of items that are on the pages previous to the current one. For example, if you are paginating by 5 and are on the third page, `paginate.current_offset` would return `10`.

<h2 class="tags" id="paginate.items">paginate.items</h2>

Returns the total number of items to be paginated. For example, if you are paginating a collection of 120 products, `paginate.items` would return `120`.

<h2 class="tags" id="paginate.parts">paginate.parts</h2>

Returns an array of all [parts]({{ '/objects/part' | prepend: site.baseurl }}) of the pagination. A `part` is a component used to build the navigation for the pagination.

<h2 class="tags" id="paginate.next">paginate.next</h2>

Returns the [part]({{ '/objects/part' | prepend: site.baseurl }}) variable for the **Next** link in the pagination navigation.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% if paginate.next.is_link %}
  <a href="{{ paginate.next.url }}">{{ paginate.next.title }}</a>
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<!-- If we're not on the last page, and there still needs to be a Next link -->
<a href="/galleries?page=17">Next »</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="paginate.previous">paginate.previous</h2>

Returns the [part]({{ '/objects/part' | prepend: site.baseurl }}) variable for the **Previous** link in the pagination navigation.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% if paginate.previous.is_link %}
  <a href="{{ paginate.previous.url }}">{{ paginate.previous.title }}</a>
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<!-- If we're not on the first page, and there still needs to be a Previous link -->
<a href="/galleries?page=15">« Previous</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="paginate.page_size">paginate.page_size</h2>

Returns the number of items displayed per page.

<h2 class="tags" id="paginate.pages">paginate.pages</h2>

Returns the number of pages created by the pagination tag.