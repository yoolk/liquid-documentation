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

###_Add Product to Cart_

Make sure Shopping Cart JavaScript/StyleSheet Libraries have been applied [see here]({{ '/theme-templates/layouts-theme-name/' | prepend: site.baseurl }}).

<div class="panel">
<div class="panel-body">
{% highlight django%}{% raw %}
{% if product.add_to_cart? %}
<div class="js-shopping-cart">
<div class="add-to-cart-wrapper clearfix">
  <div class="css-class">
    <input id="js-item-qty" type="text" name="quantity" class="form-control" value="1">
    <div class="input-group-btn-vertical">
      <button class="btn btn-default js-item-qty-up" type="button">
        <i class="fa fa-angle-up"></i>
      </button>
      <button class="btn btn-default js-item-qty-down" type="button">
        <i class="fa fa-angle-down"></i>
      </button>
    </div>
  </div>
  <a href="javascript:void(0)" class="btn btn-color js-add-to-cart" data-product-id='{{product.id}}'>
    {{ 'theme-name.ecommerce.add_to_cart' | translate }}
  </a>
  <div id="add-to-cart-errors" class="cart-errors text-danger"></div>
</div>
</div>
{% endif %}
{% endraw %}{% endhighlight %}
</div>
</div>

###_Apply Image Fly to Cart Effect_

Add `js-image-fly-to-cart` class to the big image.

<div class="panel">
<div class="panel-body">
{% highlight django%}{% raw %}
<div class="js-shopping-cart">
<img src="{{ image | attachment_url: 'large' }}" class="js-image-fly-to-cart" alt="{{ product.name }}" />
</div>
{% endraw %}{% endhighlight %}
</div>
</div> 

###_Apply Social Share_

<div class="panel">
<div class="panel-body">
{% highlight django%}{% raw %}
<div class="social-share">
  {% addthis_share %}
    {% facebook %}
    {% twitter %}
    {% g_plus %}
    {% pinterest %}
  {% endaddthis_share %}
</div>

Add {{ '//s7.addthis.com/js/300/addthis_widget.js' | javascript_include_tag }} at to bottom of the page
{% endraw %}{% endhighlight %}
</div>
</div> 

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