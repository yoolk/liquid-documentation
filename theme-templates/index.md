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

* about_us/index.liquid
* announcements/
  * index.liquid
  * show.liquid
* brochures/index.liquid
* contact_us/index.liquid
* feedback/index.liquid
* galleries/
  * index.liquid
  * show.liquid
* home/index.liquid
* layouts/theme_name.liquid
* map/index.liquid
* menu/
  * categories/show.liquid
  * foods/show.liquid
  * index.liquid
* people/index.liquid
* products/
  * categories/show.liquid
  * index.liquid
  * show.liquid
* reservation/index.liquid
* services/
  * categories/show.liquid
  * index.liquid
  * show.liquid