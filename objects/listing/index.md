---
  layout: nav_basics
---

<h2 class="section-title">Listing</h2>

The <code>listing</code> object contains information about listing.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#location">location</a>
      </li>
      <li>
        <a href="#country">country</a>
      </li>
      <li>
        <a href="#telephone">telephone</a>
      </li>
      <li>
        <a href="#email">email</a>
      </li>
      <li>
        <a href="#website">website</a>
      </li>
      <li>
        <a href="#communications">communications</a>
      </li>
      <li>
        <a href="#extra_communications">extra_communications</a>
      </li>
      <li>
        <a href="#listing_categories">listing_categories</a>
      </li>

      <li>
        <a href="#catalog_items">catalog_items</a>
      </li>
      <li>
        <a href="#galleries">galleries</a>
      </li>
      <li>
        <a href="#images">images</a>
      </li>
      <li>
        <a href="#brochures">brochures</a>
      </li>
      <li>
        <a href="#announcements">announcements</a>
      </li>
      <li>
        <a href="#services">services</a>
      </li>
      <li>
        <a href="#service_categories">service_categories</a>
      </li>
      <li>
        <a href="#products">products</a>
      </li>
      <li>
        <a href="#product_categories">product_categories</a>
      </li>
      <li>
        <a href="#foods">foods</a>
      </li>
      <li>
        <a href="#food_categories">food_categories</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="location">location</h2>

Get location of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.location.name }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="country">country</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.country.name }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="telephone">telephone</h2>

Get telephone of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.telephone.value }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="email">email</h2>

Get email of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.email.value }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="website">website</h2>

Get website of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.website }}
# => Yoolk::Liquid::Listing::CommunicationDrop
{% endraw %}{% endhighlight %}
  </div>
</div>


<h2 class="tags" id="communications">communications</h2>

Get lists of communications of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.communications[0] }}
# => error: uninitialized constant Yoolk::Liquid::CollectionDrop
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="extra_communications">extra_communications</h2>

Get lists of extra communications of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.extra_communications[0] }}
# => Liquid error: undefined method `new' for nil:NilClass
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="listing_categories">listing_categories</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.listing_categories[0].alias_id }}
{{ listing.listing_categories[0].short_name }}
{{ listing.listing_categories[0].name }}
{{ listing.listing_categories[0].description }}
{{ listing.listing_categories[0].keyword }}
{{ listing.listing_categories[0].display_on_web }}
{{ listing.listing_categories[0].listings_count }}
{{ listing.listing_categories[0].sub_categories_count }}
{{ listing.listing_categories[0].level }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="catalog_items">catalog_items</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.catalog_items[0].title }}
{{ listing.catalog_items[0].html_text }}
{{ listing.catalog_items[0].show_image }}
{{ listing.catalog_items[0].published }}
{{ listing.catalog_items[0].display_order }}
{{ listing.catalog_items[0].created_at }}
{{ listing.catalog_items[0].updated_at }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="galleries">galleries</h2>

Get image albums of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}

{{ listing.galleries[0].name }}
{{ listing.galleries[0].display_order }}
{{ listing.galleries[0].to_param }}
{{ listing.galleries[0].created_at }}
{{ listing.galleries[0].updated_at }}
{{ listing.galleries[0].images }}

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="images">images</h2>

Get gallery images of the current listing object.

<h5 class="sub-section-title">
  <code>styles</code> option
</h5>
<table class="table" rules="all" frame="void">
  <tr>
    <th height="56">styles</th>
    <th>size</th>
  </tr>
  <tr>
    <td>small</td>
    <td>196 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>322 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>
<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}

{{ listing.image[0].caption }}
{{ listing.image[0].display_order }}
{{ listing.image[0].created_at }}
{{ listing.image[0].updated_at }}
{{ listing.image[0].styles }}
{{ listing.image[0].width }}
{{ listing.image[0].height }}
{{ listing.image[0].size }}
{{ listing.image[0].url }}

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="brochures">brochures</h2>

Get brochures of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.brochures[0].name }}
{{ listing.brochures[0].text }}
{{ listing.brochures[0].description }}
{{ listing.brochures[0].is_active }}
{{ listing.brochures[0].created_at }}
{{ listing.brochures[0].updated_at }}

{{ listing.brochures[0].image.content_type }}
{{ listing.brochures[0].image.styles }}
{{ listing.brochures[0].image.width }}
{{ listing.brochures[0].image.height }}
{{ listing.brochures[0].image.size }}
{{ listing.brochures[0].image.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="announcements">announcements</h2>

Get announcements of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.announcements[0].text }}
{{ listing.announcements[0].to_param }}
{{ listing.announcements[0].created_at }}
{{ listing.announcements[0].updated_at }}

{{ listing.announcements[0].image.content_type }}
{{ listing.announcements[0].image.styles }}
{{ listing.announcements[0].image.width }}
{{ listing.announcements[0].image.height }}
{{ listing.announcements[0].image.size }}
{{ listing.announcements[0].image.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="services">services</h2>

Get services of the current listing object.

<h5 class="sub-section-title">
  <code>styles</code> option
</h5>
<table class="table" rules="all" frame="void">
  <tr>
    <th height="56">styles</th>
    <th>size</th>
  </tr>
  <tr>
    <td>thumbnail</td>
    <td>50x50</td>
  </tr>
  <tr>
    <td>small</td>
    <td>196 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>364 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>
<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.services[0].name }}
{{ listing.services[0].description }}
{{ listing.services[0].properties }}
{{ listing.services[0].created_at }}
{{ listing.services[0].updated_at }}
{{ listing.services[0].to_param }}
{{ listing.services[0].photos }} => AttachmentDrop
{{ listing.services[0].url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="service_categories">service_categories</h2>

Get service_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.service_categories[0].alias_id }}
{{ listing.service_categories[0].short_name }}
{{ listing.service_categories[0].name }}
{{ listing.service_categories[0].description }}
{{ listing.service_categories[0].to_param }}
{{ listing.service_categories[0].services }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="products">products</h2>

Get products of the current listing object.

<h5 class="sub-section-title">
  <code>styles</code> option
</h5>
<table class="table" rules="all" frame="void">
  <tr>
    <th height="56">styles</th>
    <th>size</th>
  </tr>
  <tr>
    <td>thumbnail</td>
    <td>49 x auto</td>
  </tr>
  <tr>
    <td>small</td>
    <td>186 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>350 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>
<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.products[0].name }}
{{ listing.products[0].description }}
{{ listing.products[0].delivery }}
{{ listing.products[0].features }}
{{ listing.products[0].brand }}
{{ listing.products[0].to_param }}
{{ listing.products[0].created_at }}
{{ listing.products[0].updated_at }}
{{ listing.products[0].photos }}
{{ listing.products[0].url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="product_categories">product_categories</h2>

Get product_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.product_categories[0].name }}
{{ listing.product_categories[0].name_path }}
{{ listing.product_categories[0].to_param }}
{{ listing.product_categories[0].products }}
{{ listing.product_categories[0].url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="foods">foods</h2>

Get foods of the current listing object.

<h5 class="sub-section-title">
  <code>styles</code> option
</h5>
<table class="table" rules="all" frame="void">
  <tr>
    <th height="56">styles</th>
    <th>size</th>
  </tr>
  <tr>
    <td>thumbnail</td>
    <td>50x50</td>
  </tr>
  <tr>
    <td>small</td>
    <td>196 x auto</td>
  </tr>
  <tr>
    <td>medium</td>
    <td>364 x auto</td>
  </tr>
  <tr>
    <td>large</td>
    <td>994 x auto</td>
  </tr>
</table>

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.foods[0].name }}
{{ listing.foods[0].description }}
{{ listing.foods[0].delivery }}
{{ listing.foods[0].properties }}
{{ listing.foods[0].to_param }}
{{ listing.foods[0].created_at }}
{{ listing.foods[0].updated_at }}
{{ listing.foods[0].photos }}
{{ listing.foods[0].url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="food_categories">food_categories</h2>

Get food_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.food_categories[0].name }}
{{ listing.food_categories[0].to_param }}
{{ listing.food_categories[0].created_at }}
{{ listing.food_categories[0].updated_at }}
{{ listing.food_categories[0].foods }}
{{ listing.food_categories[0].url }}
{% endraw %}{% endhighlight %}
  </div>
</div>