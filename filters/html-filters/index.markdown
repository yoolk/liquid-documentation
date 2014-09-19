---
  layout: nav_basics
  title: HTML Filters
---

<h2 class="section-title">HTML Filters</h2>
HTML filters wrap assets in HTML tags. You should prefix with your theme name.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#image_tag">image_tag</a>
      </li>
      <li>
        <a href="#javascript_include_tag">javascript_include_tag</a>
      </li>
      <li>
        <a href="#stylesheet_link_tag">stylesheet_link_tag</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="image_tag">image_tag</h2>

Generates an image tag.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'sample/icon' | image_tag }}
# => <img alt="Icon" src="/assets/icon" />

{{ 'sample/icon.png' | image_tag }}
# => <img alt="Icon" src="/assets/icon.png" />

{{ 'sample/icon.png' | image_tag: size: '16x10', alt: 'Edit Entry' }}
# => <img src="/assets/icon.png" width="16" height="10" alt="Edit Entry" />

{{ 'sample/icons/icon.gif' | image_tag: size: '16' }}
# => <img src="/icons/icon.gif" width="16" height="16" alt="Icon" />

{{ 'sample/icons/icon.gif' | image_tag: height: '32', width: '32' }}
# => <img alt="Icon" height="32" src="/icons/icon.gif" width="32" />

{{ 'sample/icons/icon.gif' | image_tag: class: 'menu_icon' }}
# => <img alt="Icon" class="menu_icon" src="/icons/icon.gif" />

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="javascript_include_tag">javascript_include_tag</h2>

Generates a script tag.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ 'sample/all.js' | javascript_include_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<script src="http://s-iw-frontend-statics.s3.amazonaws.com/assets/sample/all-6719d4b05595163f54485d324a4b42ca.js"></script>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="stylesheet_link_tag">stylesheet_link_tag</h2>

Generates a stylesheet tag.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ 'sample/all.css' | stylesheet_link_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<script src="http://s-iw-frontend-statics.s3.amazonaws.com/assets/sample/all-6719d4b05595163f54485d324a4b42ca.css"></script>
{% endraw %}{% endhighlight %}
  </div>
</div>