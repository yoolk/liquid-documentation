---
  layout: nav_basics
  title: contact_us/index.liquid - Theme Templates - Yoolk Instant Website Themes
---

<h2 class="section-title">contact_us/index.liquid</h2>

The `contact_us/index.liquid` template is used to render the contact us page. It includes an HTML <code>&lt;form&gt;</code> that visitors use to contact with listing owner.

![contact us]({{ '/images/theme-templates/contact-us-index.png' | prepend: site.baseurl }})

<h2 class="section-title">Template Considerations</h2>

###_Map Section_
  * Render google map from the specifies latitude and longtitude

###_Contact Details Section_
  * Show [listing]({{ '/objects/listing/' | prepend: site.baseurl }}) address
  * Show listing communication such as phones, emails
  * Show [Business Hours]({{ '/objects/listing/#business_hours' | prepend: site.baseurl }})

###_Contact Form Section_

  * To output a form that visitors use to send an email to contact listing owner, initialize the form tag with the parameter [contact]({{ '/tags/theme-tags/#form' | prepend: site.baseurl }}). Within the form, include the following:

    * Input of type text with the name attribute `contact[name]`
    * Input of type text with the name attribute `contact[phone]`
    * Textarea with the name attribute `contact[body]`
    * Input of type _submit_ to submit the form.
    * Input of type _reset_ to reset the form.
    * [Error messages]({{ '/objects/form/#errors' | prepend: site.baseurl }}) are output properly
