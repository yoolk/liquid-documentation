---
  layout: nav_basics
  title: Theme Development Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">Theme Templates</h2>

Yoolk liquid themes are made up of Liquid template files, each serving their own unique purpose. For example, products/index.liquid is used to display multiple products while products/show.liquid is used to show the details of a single product.

<h2 class="tags">Theme Structure</h2>

A Yoolk liquid theme consists of three folders: __assets__, __locales__ and __views__.

<h5 class="sub-section-title">assets</h5>

The assets folder contains all of the assets used in the theme, including images, stylesheets, javascript files, etc. Use the [asset_url]({{ '/filters/url-filters/#asset_url' | prepend: site.baseurl }}) filter to reference a theme asset in your templates.

<h5 class="sub-section-title">locales</h5>
The locales folder provides an easy-to-use and extensible framework for translating your application to a single custom language other than English or for providing multi-language support in your application.

<h5 class="sub-section-title">views</h5>
The templates folder contains all other Liquid templates, including:

* [home/index.liquid]({{ '/theme-templates/home-index' | prepend: site.baseurl }})
* [about_us/index.liquid]({{ '/theme-templates/about-us-index' | prepend: site.baseurl }})
* announcements/
  * [index.liquid]({{ '/theme-templates/announcements-index' | prepend: site.baseurl }})
  * [show.liquid]({{ '/theme-templates/announcements-show' | prepend: site.baseurl }})
* [brochures/index.liquid]({{ '/theme-templates/brochures-index' | prepend: site.baseurl }})
* [contact_us/index.liquid]({{ '/theme-templates/contact-us-index' | prepend: site.baseurl }})
* [feedback/index.liquid]({{ '/theme-templates/feedback-index' | prepend: site.baseurl }})
* galleries/
  * [index.liquid]({{ '/theme-templates/galleries-index' | prepend: site.baseurl }})
  * [show.liquid]({{ '/theme-templates/galleries-show' | prepend: site.baseurl }})
* [layouts/theme_name.liquid]({{ '/theme-templates/layouts-theme-name' | prepend: site.baseurl }})
* [map/index.liquid]({{ '/theme-templates/map-index' | prepend: site.baseurl }})
* menu/
  * [categories/show.liquid]({{ '/theme-templates/menu-categories-show' | prepend: site.baseurl }})
  * [foods/show.liquid]({{ '/theme-templates/menu-foods-show' | prepend: site.baseurl }})
  * [index.liquid]({{ '/theme-templates/menu-index' | prepend: site.baseurl }})
* [people/index.liquid]({{ '/theme-templates/people-index' | prepend: site.baseurl }})
* products/
  * [categories/show.liquid]({{ '/theme-templates/products-categories-show' | prepend: site.baseurl }})
  * [index.liquid]({{ '/theme-templates/products-index' | prepend: site.baseurl }})
  * [show.liquid]({{ '/theme-templates/products-show' | prepend: site.baseurl }})
* [reservation/index.liquid]({{ '/theme-templates/reservation-index' | prepend: site.baseurl }})
* services/
  * [categories/show.liquid]({{ '/theme-templates/services-categories-show' | prepend: site.baseurl }})
  * [index.liquid]({{ '/theme-templates/services-index' | prepend: site.baseurl }})
  * [show.liquid]({{ '/theme-templates/services-show' | prepend: site.baseurl }})