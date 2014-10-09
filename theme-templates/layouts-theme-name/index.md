---
  layout: nav_basics
  title: layouts/theme-name.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">layouts/theme-name.liquid</h2>

The `layouts/<theme-name>.liquid` can be thought of as the master template; all other templates are rendered inside of `layouts/<theme-name>.liquid`. Any elements that are repeated in a theme (ex: site navigations, header, footer, etc.) should be placed inside `layouts/<theme-name>.liquid`.

![layouts]({{ '/images/theme-templates/contact-us-index.png' | prepend: site.baseurl }})
