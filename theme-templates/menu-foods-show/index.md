---
  layout: nav_basics
  title: menu/foods/show.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">menu/foods/show.liquid</h2>

The `menu/foods/show.liquid` template is used to render the food details information. You can access the current `food` by invoking <code>{%raw%}{{ food }}{%endraw%}</code>.

![food detail]({{ '/images/theme-templates/menu-show.png' | prepend: site.baseurl }})

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **menu/foods/show.liquid** template of your theme must meet the following conditions:

* Food information
  * Non-truncated name
  * Price
  * Description
  * Properties
  * and more [attributes...]({{ '/objects/food' | prepend: site.baseurl }})
* Featured image is prominent
* Secondary images of food, shown as thumbnails
  * Different image ratios should not break the layout
  * Enlargeable via Lightbox or zooming with **large** style
* Social buttons for Twitter, Facebook, Pinterest, and Google+
* Output **image.alt** for all food images
