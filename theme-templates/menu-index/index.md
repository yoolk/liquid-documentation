---
  layout: nav_basics
  title: menu/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">menu/index.liquid</h2>

The `menu/index.liquid` template is used to render the `foods` of current listing.

![foods]({{ '/images/theme-templates/menu-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Filtering by tags_

You can use food categories to filter a collection into smaller subsets of foods. For example, if you are in a collection and want to only show foods with the category "ice-cream", you can do so by appending the category's handle to the end of the foods's URL.

<div class="panel">
  <div class="panel-body">
{% highlight django %}
http://my-shop.yoolk.com/menu/<food-id>-ice-cream
{% endhighlight %}
  </div>
</div>

For more details and examples, see ([tutorial]({{ '/objects/f_category' | prepend: site.baseurl }})).

###_Paginating_

Yoolk limits the number of foods that can be output per page to **12**. For this reason, collections with more than **12** foods, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.foods by 25 %}
      {% for food in paginate.collection %}
        <!--show food details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **menu/index.liquid** template of your theme must meet the following conditions:

* foods are listed in a grid or list, with the following attributes of the [food]({{ '/objects/food' | prepend: site.baseurl }}) variable output:

  * `food.name` (not break the layout when name is long and links to food.url)
  * `food.price`
  * `food.cover_photo`

* Must have a link to download catalog if current listing have [menu pdf]({{ '/objects/listing/#menu_pdf' | prepend: site.baseurl }})
* food grid must not break even with food images of varying aspect ratios
* Links for filtering a collection by food categories ([tutorial]({{ '/objects/f_category' | prepend: site.baseurl }}))
* Use proper [pagination]({{ '/objects/paginate' | prepend: site.baseurl }})