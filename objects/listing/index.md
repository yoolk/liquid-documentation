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
# => Phnom Penh
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="country">country</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.country.name }}
# => Cambodia
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="telephone">telephone</h2>

Get telephone of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.telephone }}
# => Yoolk::Liquid::Listing::CommunicationDrop
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="email">email</h2>

Get email of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.email }}
# => Yoolk::Liquid::Listing::CommunicationDrop
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
{{ listing.communications }}
# => error: uninitialized constant Yoolk::Liquid::CollectionDrop
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="extra_communications">extra_communications</h2>

Get lists of extra communications of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.extra_communications }}
# => Liquid error: undefined method `new' for nil:NilClass
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="listing_categories">listing_categories</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.listing_categories.alias_id }}
{{ listing.listing_categories.short_name }}
{{ listing.listing_categories.name }}
{{ listing.listing_categories.description }}
{{ listing.listing_categories.keyword }}
{{ listing.listing_categories.display_on_web }}
{{ listing.listing_categories.listings_count }}
{{ listing.listing_categories.sub_categories_count }}
{{ listing.listing_categories.level }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="catalog_items">catalog_items</h2>

Get country of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.catalog_items.title }}
{{ listing.catalog_items.html_text }}
{{ listing.catalog_items.show_image }}
{{ listing.catalog_items.published }}
{{ listing.catalog_items.display_order }}
{{ listing.catalog_items.created_at }}
{{ listing.catalog_items.updated_at }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="galleries">galleries</h2>

Get image albums of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.galleries.name }}
{{ listing.galleries.display_order }}
{{ listing.galleries.to_param }}
{{ listing.galleries.created_at }}
{{ listing.galleries.updated_at }}

{{ listing.galleries.images }}

  {{ listing.galleries.image.caption }}
  {{ listing.galleries.image.display_order }}
  {{ listing.galleries.image.created_at }}
  {{ listing.galleries.image.updated_at }}
  {{ listing.galleries.image.styles }}
  {{ listing.galleries.image.width }}
  {{ listing.galleries.image.height }}
  {{ listing.galleries.image.size }}
  {{ listing.galleries.image.url }}

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="images">images</h2>

Get gallery images of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.galleries.image.caption }}
{{ listing.galleries.image.display_order }}
{{ listing.galleries.image.created_at }}
{{ listing.galleries.image.updated_at }}
{{ listing.galleries.image.styles }}
{{ listing.galleries.image.width }}
{{ listing.galleries.image.height }}
{{ listing.galleries.image.size }}
{{ listing.galleries.image.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="brochures">brochures</h2>

Get brochures of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.brochures.name }}
{{ listing.brochures.text }}
{{ listing.brochures.description }}
{{ listing.brochures.is_active }}
{{ listing.brochures.created_at }}
{{ listing.brochures.updated_at }}

{{ listing.brochures.image.content_type }}
{{ listing.brochures.image.styles }}
{{ listing.brochures.image.width }}
{{ listing.brochures.image.height }}
{{ listing.brochures.image.size }}
{{ listing.brochures.image.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="announcements">announcements</h2>

Get announcements of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.announcements.text }}
{{ listing.announcements.to_param }}
{{ listing.announcements.created_at }}
{{ listing.announcements.updated_at }}

{{ listing.announcements.image.content_type }}
{{ listing.announcements.image.styles }}
{{ listing.announcements.image.width }}
{{ listing.announcements.image.height }}
{{ listing.announcements.image.size }}
{{ listing.announcements.image.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="services">services</h2>

Get services of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.services.name }}
{{ listing.services.description }}
{{ listing.services.properties }}
{{ listing.services.created_at }}
{{ listing.services.updated_at }}
{{ listing.services.to_param }}
{{ listing.services.photos }} => AttachmentDrop
{{ listing.services.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="service_categories">service_categories</h2>

Get service_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.service_categories.alias_id }}
{{ listing.service_categories.short_name }}
{{ listing.service_categories.name }}
{{ listing.service_categories.description }}
{{ listing.service_categories.to_param }}
{{ listing.service_categories.services }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="products">products</h2>

Get products of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.products.name }}
{{ listing.products.description }}
{{ listing.products.delivery }}
{{ listing.products.features }}
{{ listing.products.brand }}
{{ listing.products.to_param }}
{{ listing.products.created_at }}
{{ listing.products.updated_at }}
{{ listing.products.photos }}
{{ listing.products.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="product_categories">product_categories</h2>

Get product_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.product_categories.name }}
{{ listing.product_categories.name_path }}
{{ listing.product_categories.to_param }}
{{ listing.product_categories.products }}
{{ listing.product_categories.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="foods">foods</h2>

Get foods of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.foods.name }}
{{ listing.foods.description }}
{{ listing.foods.delivery }}
{{ listing.foods.properties }}
{{ listing.foods.to_param }}
{{ listing.foods.created_at }}
{{ listing.foods.updated_at }}
{{ listing.foods.photos }}
{{ listing.foods.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="food_categories">food_categories</h2>

Get food_categories of the current listing object.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ listing.food_categories.name }}
{{ listing.food_categories.to_param }}
{{ listing.food_categories.created_at }}
{{ listing.food_categories.updated_at }}
{{ listing.food_categories.foods }}
{{ listing.food_categories.url }}
{% endraw %}{% endhighlight %}
  </div>
</div>