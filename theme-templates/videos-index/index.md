---
  layout: nav_basics
  title: videos/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">videos/index.liquid</h2>

The `videos/index.liquid` template is used to render the `videos` for the current listing.

![videos]({{ '/images/theme-templates/videos-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Paginating_

Yoolk limits the number of videos that can be output per page to **6**. For this reason, collections with more than **6** videos, must use the paginate tag to split the collection into multiple pages.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
    {% paginate listing.medias by 6 %}
      {% for video in paginate.collection %}
        <!--show videos details here -->
      {% endfor %}
    {% endpaginate %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="section-title">Requirements for the Theme</h2>

There is no special requirements for medias collection since this collection is an external iframe scription from third party provider such as youtube, vimeo, dailymotion, ...

If you're looking to submit your theme to the Yoolk Theme, the **videos/index.liquid** template of your theme must meet the following conditions:

* videos are listed with the following attributes of the [videos]({{ '/objects/medias' | prepend: site.baseurl }}) variable output:

  * `video.embed_script`
  * `video.title`
