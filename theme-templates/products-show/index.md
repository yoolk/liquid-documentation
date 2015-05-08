---
  layout: nav_basics
  title: products/show.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">products/show.liquid</h2>

The `products/show.liquid` template is used to render the product details information. You can access to the `current product` by invoking <code>{%raw%}{{ product }}{%endraw%}</code>.

![product detail]({{ '/images/theme-templates/products-show.png' | prepend: site.baseurl }})

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
  * Enlargeable via Lightbox or zooming
* Social buttons for Twitter, Facebook, Pinterest, and Google+
* Output **image.alt** for all product images
