---
  layout: nav_basics
  title: services/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">services/index.liquid</h2>

The `services/index.liquid` template is used to render the services of current listing.

![services]({{ '/images/theme-templates/services-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Filtering by tags_

You can use serivce categories to filter a collection into smaller subsets of serivces. For example, if you are in a collection and want to only show serivces with the category "car rental", you can do so by appending the category's handle to the end of the serivces's URL.

<div class="panel">
  <div class="panel-body">
{% highlight django %}
http://my-shop.yoolk.com/services/<service-id>-car rental
{% endhighlight %}
  </div>
</div>

For more details and examples, see ([tutorial]({{ '/objects/s_category' | prepend: site.baseurl }})).

###_Paginating_

Yoolk limits the number of serivces that can be output per page to **12**. For this reason, collections with more than **12** serivces, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.serivces by 25 %}
      {% for serivce in paginate.collection %}
        <!--show serivce details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **serivces/index.liquid** template of your theme must meet the following conditions:

* Serivces are listed in a grid or list, with the following attributes of the [serivce]({{ '/objects/serivce' | prepend: site.baseurl }}) variable output:

  * `serivce.name` (not break the layout when name is long and links to serivce.url)
  * `serivce.price`
  * `service.description`
  * `serivce.cover_photo`

* Must have a link to download catalog if current listing have [service catalog pdf]({{ '/objects/listing/#service_catalog_pdf' | prepend: site.baseurl }})
* Serivce grid must not break even with serivce images of varying aspect ratios
* Service grid must not break even `service.description` or `service.cover_photo` is blank 
* Links for filtering a collection by serivce categories ([tutorial]({{ '/objects/s_category' | prepend: site.baseurl }}))
* Use proper [pagination]({{ '/objects/paginate' | prepend: site.baseurl }})

