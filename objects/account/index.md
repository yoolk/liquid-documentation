---
  layout: nav_basics
  title: account - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Account</h2>

The <code>account</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        account.id
      </li>
      <li>
        account.first_name
      </li>
      <li>
        account.last_name
      </li>
      <li>
        account.full_name
      </li>
      <li>
        account.gender
      </li>
      <li>
        <a href="#avatar">account.avatar</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="avatar">account.avatar</h2>

Returns an image of a sign in account. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ account.avatar | attachment_url: 'medium' | image_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<img src="http://s-yoolk-images1.yoolk.com/kh/person_avatar/medium/1367097277/1250047?1367097277" />
{% endraw %}{% endhighlight %}
  </div>
</div>