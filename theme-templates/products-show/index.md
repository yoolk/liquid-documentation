---
  layout: nav_basics
  title: products/show.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">products/show.liquid</h2>

The `products/show.liquid` template is used to render the product details information. You can access to the `current product` by invoking <code>{%raw%}{{ product }}{%endraw%}</code>.

![product detail]({{ '/images/theme-templates/products-show.png' | prepend: site.baseurl }})

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

If you're looking to submit your theme to the Yoolk Theme, the **products/show.liquid** template of your theme must meet the following conditions:

* Product information
  * Non-truncated name
  * Brand
  * Price
  * Description
  * Features
  * and more [attributes...]({{ '/objects/product' | prepend: site.baseurl }})
* Featured image is prominent
* Secondary images of product, shown as thumbnails
  * Different image ratios should not break the layout
  * Enlargeable via Lightbox or zooming with **large** style
* Output **image.alt** for all product images
* Social buttons for Twitter, Facebook, Pinterest, and Google+
* Ecommerce options: Payment, Delivery, Return Policy and Terms and Conditions
