---
  layout: nav_basics
  title: portal - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Portal</h2>

The <code>portal</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        portal.abbreviation
      </li>
      <li>
        portal.domain_name
      </li>
      <li>
        portal.description
      </li>
      <li>
        portal.official_name
      </li>
      <li>
        portal.keywords
      </li>
      <li>
        portal.time_zone
      </li>
      <li>
        portal.listings_count
      </li>
      <li>
        portal.created_at
      </li>
      <li>
        portal.updated_at
      </li>
      <li>
        <a href="#country">portal.country</a>
      </li>
      <li>
        <a href="#listing_categories">portal.listing_categories</a>
      </li>
      <li>
        <a href="#language">portal.language</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="country">portal.country</h2>

Returns portal's country. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ portal.country.name }}
# => Cambodia
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="language">portal.language</h2>

Returns portal's language. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ portal.language.name }} ({{ portal.language.two_code }})
# => Cambodia (kh)
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="listing_categories">portal.listing_categories</h2>

Returns an array of listing categories. [*Optional*]

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% for category in portal.listing_categories %}
{{ category.alias_id }}
# => "kh1"
{{ category.name }}
# => "Office Rental Services"
{{ category.short_name }}
# => "Office Rental"
{{ category.keyword }}
# => "office, rental"
{{ category.description }}
# => "We provice the best office rental in Cambodia."
{{ category.display_on_web }}
# => "true"
{{ category.subcategories_count }}
# => "0"
{{ category.listings_count }}
# => "1"
{{ category.level }}
# => "1"
{{ category.short_description.text }}
# => "• Fresh and Clean Air\n• Constant Breeze\n• Lots of Natural Light\n"
{{ category.short_description.categories[0].text }} # return an array of short description categories.
# => "Office Rental Services"
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>