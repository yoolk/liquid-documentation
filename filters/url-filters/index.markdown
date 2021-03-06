---
  layout: nav_basics
  title: URL Filters
---

<h2 class="section-title">URL Filters</h2>
URL filters output links to assets. They are also used to create links for filtering collections and blogs.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#asset_url">asset_url</a>
      </li>
      <li>
        <a href="#attachment_url">attachment_url</a>
      </li>
      <li>
        <a href="#link_to">link_to</a>
      </li>
      <li>
        <a href="#mail_to">mail_to</a>
      </li>
      <li>
        <a href="#link_to_office">link_to_office</a>
      </li>
      <li>
        <a href="#link_to_home">link_to_home</a>
      </li>
      <li>
        <a href="#link_to_galleries">link_to_galleries</a>
      </li>
      <li>
        <a href="#link_to_people">link_to_people</a>
      </li>
      <li>
        <a href="#link_to_products">link_to_products</a>
      </li>
      <li>
        <a href="#link_to_services">link_to_services</a>
      </li>
      <li>
        <a href="#link_to_menu">link_to_menu</a>
      </li>
      <li>
        <a href="#link_to_announcements">link_to_announcements</a>
      </li>
      <li>
        <a href="#link_to_brochures">link_to_brochures</a>
      </li>
      <li>
        <a href="#link_to_map">link_to_map</a>
      </li>
      <li>
        <a href="#link_to_about_us">link_to_about_us</a>
      </li>
      <li>
        <a href="#link_to_contact_us">link_to_contact_us</a>
      </li>
      <li>
        <a href="#link_to_sign_in">link_to_sign_in</a>
      </li>
      <li>
        <a href="#link_to_links">link_to_links</a>
      </li>
      <li>
        <a href="#link_to_videos">link_to_videos</a>
      </li>
      <li>
        <a href="#link_to_attachments">link_to_attachments</a>
      </li>
      <li>
        <a href="#within">within</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="asset_url">asset_url</h2>
Returns the URL of a file in the "assets" folder of a theme. You should prefix with your theme name.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ 'sample/all.css' | asset_url }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
http://s-iw-frontend-statics.s3.amazonaws.com/assets/sample/all-f9546da5db22e729f10b1aae62a16311.css
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="attachment_url">attachment_url</h2>
Returns the URL of an attachment. Accepts a size as a parameter. The `attachment_url` filter can be used on any objects that have attachment(s). They have different attachment sizes. For example:

* [catalog_item]({{ '/objects/catalog_item' | prepend: site.baseurl }})
* [brochure]({{ '/objects/brochure' | prepend: site.baseurl }})
* [announcement]({{ '/objects/announcement' | prepend: site.baseurl }})
* [image]({{ '/objects/image' | prepend: site.baseurl }})
* [service.photos]({{ '/objects/service' | prepend: site.baseurl }})
* [product.photos]({{ '/objects/product' | prepend: site.baseurl }})
* [food.photos]({{ '/objects/food' | prepend: site.baseurl }})

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ catalog_item | attachment_url: 'large' | image_tag }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<img src="http://s-yoolk-images1.yoolk.com/kh/catalog_item_images/large/1367097277/1250047?1367097277" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to">link_to</h2>
Generate HTML anchor tag

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'yoolk' | link_to: 'http://www.yoolk.com' }}
# => <a href="http://www.yoolk.com">yoolk</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="mail_to">mail_to</h2>

Creates a mailto link tag to the specified email_address, which is also used as the name of the link unless name is specified. Additional HTML attributes for the link can be passed in html_options.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'info@yoolk.com' | mail_to: 'Contact Information', alt: "alt of mail", title: "title of mail" }}
# => <a alt="alt of mail" href="mailto:info@yoolk.com" title="title of mail">Contact Information</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_office">link_to_office</h2>
Generate HTML anchor tag for office path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'office' | link_to_office }}
# => <a href="/office">office</a>

{{ 'office' | link_to_office: class: "class_office", id: "id_office" }}
# => <a class="class_office" href="/office" id="id_office">office</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_home">link_to_home</h2>
Generate HTML anchor tag for home path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'home' | link_to_home }}
# => <a href="/">home</a>

{{ 'home' | link_to_home: class: "class_home", id: "id_home" }}
# => <a class="class_home" href="/" id="id_home">home</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_galleries">link_to_galleries</h2>
Generate HTML anchor tag for galleries path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'galleries' | link_to_galleries }}
# => <a href="/galleries">galleries</a>

{{ 'galleries' | link_to_galleries: class: "class_galleries", id: "id_galleries" }}
# => <a class="class_galleries" href="/galleries" id="id_galleries">galleries</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_people">link_to_people</h2>
Generate HTML anchor tag for people path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'people' | link_to_people }}
# => <a href="/people">people</a>

{{ 'people' | link_to_people: class: "class_people", id: "id_people" }}
# => <a class="class_people" href="/people" id="id_people">people</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_products">link_to_products</h2>
Generate HTML anchor tag for products path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'products' | link_to_products }}
# => <a href="/products">products</a>

{{ 'products' | link_to_products: class: "class_products", id: "id_products" }}
# => <a class="class_products" href="/products" id="id_products">products</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_services">link_to_services</h2>
Generate HTML anchor tag for services path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'services' | link_to_services }}
# => <a href="/services">services</a>

{{ 'services' | link_to_services: class: "class_services", id: "id_services" }}
# => <a class="class_services" href="/services" id="id_services">services</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_menu">link_to_menu</h2>
Generate HTML anchor tag for menu path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'menu' | link_to_menu }}
# => <a href="/menu">menu</a>

{{ 'menu' | link_to_menu: class: "class_menu", id: "id_menu" }}
# => <a class="class_menu" href="/menu" id="id_menu">menu</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_announcements">link_to_announcements</h2>
Generate HTML anchor tag for announcements path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'announcements' | link_to_announcements }}
# => <a href="/announcements">announcements</a>

{{ 'announcements' | link_to_announcements: class: "class_announcements", id: "id_announcements" }}
# => <a class="class_announcements" href="/announcements" id="id_announcements">announcements</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_brochures">link_to_brochures</h2>
Generate HTML anchor tag for brochures path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'brochures' | link_to_brochures }}
# => <a href="/brochures">brochures</a>

{{ 'brochures' | link_to_brochures: class: "class_brochures", id: "id_brochures" }}
# => <a class="class_brochures" href="/brochures" id="id_brochures">brochures</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_map">link_to_map</h2>
Generate HTML anchor tag for map path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'map' | link_to_map }}
# => <a href="/map">map</a>

{{ 'map' | link_to_map: class: "class_map", id: "id_map" }}
# => <a class="class_map" href="/map" id="id_map">map</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_about_us">link_to_about_us</h2>
Generate HTML anchor tag for about us path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'about us' | link_to_about_us }}
# => <a href="/about_us">about us</a>

{{ 'about us' | link_to_about_us: class: "class_about_us", id: "id_about_us" }}
# => <a class="class_about_us" href="/about_us" id="id_about_us">about us</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_contact_us">link_to_contact_us</h2>
Generate HTML anchor tag for contact us path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'contact us' | link_to_contact_us }}
# => <a href="/contact_us">contact us</a>

{{ 'contact us' | link_to_contact_us: class: "class_contact_us", id: "id_contact_us" }}
# => <a class="class_contact_us" href="/contact_us" id="id_contact_us">contact us</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_sign_in">link_to_sign_in</h2>
Generate HTML anchor tag for sign in path.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'sign in' | link_to_sign_in }}
# => <a href="/office">sign in</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_links">link_to_links</h2>
Generate HTML anchor tag for links path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'links' | link_to_links }}
# => <a href="/links">links</a>

{{ 'links' | link_to_links: class: "class_links", id: "id_links" }}
# => <a class="class_links" href="/links" id="id_links">links</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_videos">link_to_videos</h2>
Generate HTML anchor tag for videos path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'videos' | link_to_videos }}
# => <a href="/videos">videos</a>

{{ 'videos' | link_to_videos: class: "class_videos", id: "id_videos" }}
# => <a class="class_videos" href="/videos" id="id_videos">videos</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="link_to_attachments">link_to_attachments</h2>
Generate HTML anchor tag for attachments path, optional <code>options</code> is provided

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{{ 'attachments' | link_to_attachments }}
# => <a href="/attachments">attachments</a>

{{ 'attachments' | link_to_attachments: class: "class_attachments", id: "id_attachments" }}
# => <a class="class_attachments" href="/attachments" id="id_attachments">attachments</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="within">within</h2>

###_Product URL_

Creates a product URL by prepending "/products-categories/product-category/" to a product URL, where "product_category" is the handle of the product category that is currently being viewed.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="{{ product.url | within: product_category }}">{{ product.name }}</a>
# => <a href="products-categories/1161-cars/products/2183-defender">Defender</a>
{% endraw %}{% endhighlight %}
  </div>
</div>

###_Food URL_

Creates a food URL by prepending "/menu-categories/food-category/" to a food URL, where "food_category" is the handle of the food category that is currently being viewed.

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
<a href="{{food.url | within: food_category}}">{{ food.name }}</a>
# => <a href="menu-categories/1161-cars/menu/2183-combo-plater">Combo Plater</a>
{% endraw %}{% endhighlight %}
  </div>
</div>    