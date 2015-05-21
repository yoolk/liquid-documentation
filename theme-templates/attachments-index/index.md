---
  layout: nav_basics
  title: attachments/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">attachments/index.liquid</h2>

The `attachments/index.liquid` template is used to render the `attachments` for the current listing.

![attachments]({{ '/images/theme-templates/attachments-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Paginating_

Yoolk limits the number of attachments that can be output per page to **30**. For this reason, collections with more than **30** attachments, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.attachments by 30 %}
      {% for attachment in paginate.collection %}
        <!--show attachments details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **attachments/index.liquid** template of your theme must meet the following conditions:

* attachments are listed with the following attributes of the [attachments]({{ '/objects/attachments' | prepend: site.baseurl }}) variable output:

  * `attachment.name` (links to attachment.url)
  * `attachment.file_size`
  * `attachment.updated_at`

* The proper way to list attachment object is using table and always open in new blank tab.
* You have to format attachment `file_size` and `updated_at` using `number_to_human_size` and `date` with format `%d %b %Y` respectively.
{% highlight django%}{% raw %}
{{ attachment.file_size  | number_to_human_size }}
{{ attachment.updated_at | date: '%d %b %Y' }}
{% endraw %}{% endhighlight %}
