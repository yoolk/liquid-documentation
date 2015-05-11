---
  layout: nav_basics
  title: services/show.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">services/show.liquid</h2>

The services/show.liquid template is used to render the service details information. You can access the `current service` by invoking <code>{%raw%}{{ service }}{%endraw%}</code>.

![service detail]({{ '/images/theme-templates/services-show.png' | prepend: site.baseurl }})

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **services/show.liquid** template of your theme must meet the following conditions:

* Service information
  * Non-truncated name
  * Price
  * Description
  * Properties
  * and more [attributes...]({{ '/objects/service' | prepend: site.baseurl }})
* Featured image is prominent
* Secondary images of service, shown as thumbnails
  * Different image ratios should not break the layout
  * Enlargeable via Lightbox or zooming with **large** style
* Social buttons for Twitter, Facebook, Pinterest, and Google+
* Output **image.alt** for all service images
