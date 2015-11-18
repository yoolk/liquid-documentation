---
  layout: nav_basics
  title: products/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">products/index.liquid</h2>

The `products/index.liquid` template is used to render the `products` of current listing. The primary purpose of this page is to list the products within a collection, often presented as a grid of images with product names and prices.

![products]({{ '/images/theme-templates/products-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Filtering by categories_

You can use product categories to filter a collection into smaller subsets of products. For example, if you are in a collection and want to only show products with the category "cars", you can do so by appending the category's handle to the end of the products's URL.

<div class="panel">
  <div class="panel-body">
{% highlight django %}
http://my-shop.yoolk.com/products/<product-id>-cars
{% endhighlight %}
  </div>
</div>

For more details and examples, see ([tutorial]({{ '/objects/p_category' | prepend: site.baseurl }})).

###_Paginating_

Yoolk limits the number of products that can be output per page to **12**. For this reason, collections with more than **12** products, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.products by 25 %}
      {% for product in paginate.collection %}
        <!--show product details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

###_Full/Crop Image Usage_

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
  <div class="boxify-item">
  <div class="{{listing.instant_website.cropped_type}}-wrapper">
    <div class="{{listing.instant_website.cropped_type}}-image">
      <a href="{{ product.url | within: product_category }}">
        <img src="{{ product.cover_photo | attachment_url: 'x_medium' }}" alt="{{ product.name}}" class="image-scale-center" />
      </a>
    </div>
  </div>
</div>
{% endraw %}{% endhighlight %}
  </div>
</div>

Note: {{listing.instant_website.cropped_type}} will produced css class name: `[boxify-full or boxify-crop]` base on setting.


Javascript section:

* If you want to target a specific parent to resize to, use the parent parameter:

<div class="panel">
  <div class="panel-body"> 
{% highlight django%}{% raw %}
  $('.image-scale-center').resizeToParent({parent: '.boxify-crop-image'});
{% endraw %}{% endhighlight %}
  </div>
</div>

###_Discount Badge_

The discount badge will display inside product box when its have discount.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    <div class="product-box ecommerce-discount-tip">
  {{ product.discount_in_percentage | discount_badge: 'waterdrop' }}
  <!--product image here -->
  </div>
    {% endraw %}{% endhighlight %}
  </div>
</div>

Note: There are three styles to apply discount bage `[circle, waterdrop, rectangle]` circle is the default one.


<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **products/index.liquid** template of your theme must meet the following conditions:

* Products are listed in a grid or list, with the following attributes of the [product]({{ '/objects/product' | prepend: site.baseurl }}) variable output:

  * `product.name` (not break the layout when name is long and links to product.url)
  * `product.price`
  * `product.cover_photo`

* Must have a link to download catalog if current listing have [product catalog pdf]({{ '/objects/listing/#product_catalog_pdf' | prepend: site.baseurl }})
* Product grid must not break even with product images of varying aspect ratios
* Links for filtering a collection by product categories ([tutorial]({{ '/objects/p_category' | prepend: site.baseurl }}))
* Use proper [pagination]({{ '/objects/paginate' | prepend: site.baseurl }})