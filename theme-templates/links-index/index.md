---
  layout: nav_basics
  title: links/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">links/index.liquid</h2>

The `links/index.liquid` template is used to render the `links` for the current listing.

![links]({{ '/images/theme-templates/links-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Paginating_

Yoolk limits the number of links that can be output per page to **20**. For this reason, collections with more than **20** links, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.links by 20 %}
      {% for link in paginate.collection %}
        <!--show links details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **links/index.liquid** template of your theme must meet the following conditions:

* links are listed with the following attributes of the [links]({{ '/objects/links' | prepend: site.baseurl }}) variable output:

  * `link.title` (links to link.link and target to `_blank`)
  * `link.link`
  * `link.description`

* always open link object in new tab.
