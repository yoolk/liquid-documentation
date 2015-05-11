---
  layout: nav_basics
  title: galleries/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">galleries/index.liquid</h2>

The `galleries/index.liquid` template is used to render the `images` of current listing.

![galleries]({{ '/images/theme-templates/galleries-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Filtering by albums_

You can use albums to filter a collection into smaller subsets of galleries. For example, if you are in a collection and want to only show images with the album "Ground Floor", you can do so by appending the album's handle to the end of the galleries's URL.

<div class="panel">
  <div class="panel-body">
{% highlight django %}
http://my-shop.yoolk.com/galleries/<album-id>-ground-floor
{% endhighlight %}
  </div>
</div>

For more details and examples, see ([tutorial]({{ '/objects/gallery' | prepend: site.baseurl }})).

###_Paginating_

Yoolk limits the number of images that can be output per page to **25**. For this reason, collections with more than **25** images, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.images by 25 %}
      {% for image in paginate.collection %}
        <!--show image details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **galleries/index.liquid** template of your theme must meet the following conditions:

* Images are listed in a grid, with the following attributes of the [images]({{ '/objects/gallery/#images' | prepend: site.baseurl }}) variable output:
 
  * `{% raw %}{{ image | attachment_url: 'medium' | image_tag }}{% endraw %}`
  * `image.caption` (not break the layout when caption is long)
  * Different image ratios should not break the layout
  * Enlargeable via Lightbox or zooming with **large** style
  * Links for filtering a collection by albums ([tutorial]({{ '/objects/gallery' | prepend: site.baseurl }}))
  * Output **image.alt** for all images
  * Use proper [pagination]({{ '/objects/paginate' | prepend: site.baseurl }})
