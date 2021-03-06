---
  layout: nav_basics
  title: food_category - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Food Category</h2>

The <code>food_category</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">food_category.id</a>
      </li>
      <li>
        <a href="#name">food_category.name</a>
      </li>
      <li>
        <a href="#url">food_category.foods_url</a>
      </li>
      <li>
        <a href="#current?">food_category.current?</a>
      </li>
      <li>
        <a href="#foods">food_category.foods</a>
      </li>
      <li>
        <a href="#created_at">food_category.created_at</a>
      </li>
      <li>
        <a href="#updated_at">food_category.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="foods">food_category.foods</h2>

Returns an array of the food_category's [foods]({{ '/objects/food/' | prepend: site.baseurl }}). [*Optional*]

<h2 class="tags" id="url">food_category.foods_url</h2>

Returns the url of a food_category.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<a href="{{ food_category.foods_url }}">{{ food_category.name }}</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="/menu/9200-soft-drinks">Soft Drinks</a>
{% endraw %}{% endhighlight %}
  </div>
</div>


<h2 class="tags" id="current?">food_category.current?</h2>

Returns true if this food_category is the one which is currently displayed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul class="nav">
  {% for food_category in listing.food_categories %}
    <li>
      <a href="{{ food_category.foods_url }}" {% if food_category.current? %}class="active"{% endif %}>{{ food_category.name }}</a>
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
<ul class="nav">
  <li><a href="/menu/1-drinks" class="active">Drinks</a></li>
  <li><a href="/menu/2-sea-foods">Sea Foods</a></li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>