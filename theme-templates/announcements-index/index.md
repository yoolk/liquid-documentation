---
  layout: nav_basics
  title: announcements/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">announcements/index.liquid</h2>

The `announcements/index.liquid` template is used to render the `announcements` of the current listing.

![announcements]({{ '/images/theme-templates/announcements-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Paginating_

Yoolk limits the number of announcements that can be output per page to **12**. For this reason, collections with more than **12** announcements, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.announcements by 25 %}
      {% for announcement in paginate.collection %}
        <!--show announcement details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **announcements/index.liquid** template of your theme must meet the following conditions:

* Announcements are listed with the following attributes of the [announcements]({{ '/objects/announcement' | prepend: site.baseurl }}) variable output:

  * `announcement.text`
  * `announcement.image` (links to announcement.url)
  * Show time ago with friendly tooltip to show `announcement.updated_at`