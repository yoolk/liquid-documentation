---
  layout: nav_basics
  title: home/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">home/index.liquid</h2>

The `home/index.liquid` template renders the homepage of the listing website. The template is loaded when you go to the root ("/") of the website.

![announcements]({{ '/images/theme-templates/contact-us-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

Inside the home/index.liquid template, you may want to show the contents of a specific object base on your template category. For example, you may want to showcase the **Products** and **Galleries** on the homepage.

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **home/index.liquid** template of your theme must meet the following conditions:

* If you're including cover photo on the homepage, ensure that the following requirements are met:
  * Recommended dimensions of the cover photo can be provided
  * If there are more than one cover photos it will display as slideshow
  * Layout does not break when slides are a different height
* Products are listed in a grid or list, with the following attributes of the product variable output:
  * `product.name` (not break the layout when name is long and links to product.url)
  * `product.price`
  * `product.cover_photo`
* Show images of the galleries
  * Enlargeable via Lightbox
* Different image ratios should not break the layout
* Output image.alt for all images
* Each sections can point to its own page via a link.
