---
  layout: nav_basics
  title: people - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Person</h2>

The <code>person</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#title">person.title</a>
      </li>
      <li>
        <a href="#first_name">person.first_name</a>
      </li>
      <li>
        <a href="#last_name">person.last_name</a>
      </li>
      <li>
        <a href="#gender">person.gender</a>
      </li>
      <li>
        <a href="#position_title">person.position_title</a>
      </li>
      <li>
        <a href="#is_active">person.is_active</a>
      </li>
      <li>
        <a href="#sharing_status">person.sharing_status</a>
      </li>
      <li>
        <a href="#nationality">person.nationality</a>
      </li>
      <li>
        <a href="#created_at">person.created_at</a>
      </li>
      <li>
        <a href="#languages">person.languages</a>
      </li>
      <li>
        <a href="#photo">person.photo</a>
      </li>
      <li>
        <a href="#position_level">person.position_level</a>
      </li>
      <li>
        <a href="#communications">person.communications</a>
      </li>
    </ul>
  </div>
</div>


<h2 class="tags" id="nationality">person.nationality</h2>

Returns person nationality.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ person.nationality.name }}
# => Cambodia
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="languages">person.languages</h2>

Returns person languages.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for language in person.languages %}
  {{ language.name }} ({{ language.two_code }})
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
English (en)
Japan (jp)
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="photos">person.photos</h2>

Returns an array of the person's photos. Use the [attachment_url]({{ '/filters/url-filters/' | prepend: site.baseurl }}) filter to link to the image on Yoolk's Content Delivery Network. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for photo in person.photos %}
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
<img src="http://s-yoolk-images1.yoolk.com/kh/person_images/medium/1367097277/1250047?1367097277" />
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
    <td>x161</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>x239</td>
  </tr>
</table>

<h2 class="tags" id="position_level">person.position_level</h2>

Returns person's position level.

<div class="panel">
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ person.position_level.name }}
# => Director
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="communications">person.communications</h2>

Returns an array of the person's communications.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for com in person.communications %}
  Id: {{ com.id }}
  Type: {{ com.type }}
  Value: {{ com.value }}
  Is first line: {{ com.is_first_line }}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
Id: 1
Type: Mobile Phone
Value: 099 234 567
Is first line: true
{% endraw %}{% endhighlight %}
  </div>
</div>