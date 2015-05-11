---
  layout: nav_basics
  title: people/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">people/index.liquid</h2>

The `people/index.liquid` template is used to render the `people` of current listing.

![people]({{ '/images/theme-templates/people-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Requirements for the Theme</h2>

If you're looking to submit your theme to the Yoolk Theme, the **people/index.liquid** template of your theme must meet the following conditions:

* People are listed in a grid or list, with the following attributes of the [person]({{ '/objects/person' | prepend: site.baseurl }}) variable output:

  * `person.full_name` (not break the layout when name is long)
  * `person.position_title`
  * `person.photo`
  * `person.communications`
  * Different communications should not break the layout

