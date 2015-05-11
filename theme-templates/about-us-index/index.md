---
  layout: nav_basics
  title: about_us/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">about_us/index.liquid</h2>

The `about_us/index.liquid` template is used to render the `catalog items` for the current listing.

![catalog items]({{ '/images/theme-templates/about-us-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Paginating_

Yoolk limits the number of catalog items that can be output per page to **12**. For this reason, collections with more than **12** catalog items, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.catalog_items by 5 %}
      {% for catalog_item in paginate.collection %}
        <!--show catalog_items details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **about_us/index.liquid** template of your theme must meet the following conditions:

* Show section of **Business Photo** at top of content, with the following attributes of the business photo variable [here]({{ '/objects/business_photos/' | prepend: site.baseurl }})
* Separate **Business Photo** and **About Us** section by section header
* About Us are listed in a grid or list, with the following attributes of the [catalog item]({{ '/objects/catalog_item/' | prepend: site.baseurl }}) variable output:

  * `catalog_item.title` (not break the layout when title is long)
  * `catalog_item.html_text`
  * `catalog_item.image` (not break the layout even `catalog_item.image` is blank)
* Different image ratios should not break the layout
  * Enlargeable via Lightbox or zooming with **large** style
* Different kind of `catalog_item.html_text` should not break the layout 
* Output **image.alt** for all images

