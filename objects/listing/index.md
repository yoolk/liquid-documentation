---
  layout: nav_basics
  title: listing - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Listing</h2>

The <code>listing</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#address">listing.address</a>
      </li>
      <li>
        <a href="#alias_id">listing.alias_id</a>
      </li>
      <li>
        <a href="#description">listing.description</a>
      </li>
      <li>
        <a href="#headline">listing.headline</a>
      </li>
      <li>
        <a href="#id">listing.id</a>
      </li>
      <li>
        <a href="#is_active">listing.is_active</a>
      </li>
      <li>
        <a href="#lat">listing.lat</a>
      </li>
      <li>
        <a href="#long">listing.long</a>
      </li>
      <li>
        <a href="#name">listing.name</a>
      </li>
      <li>
        <a href="#postal_code">listing.postal_code</a>
      </li>
      <li>
        <a href="#zoom_level">listing.zoom_level</a>
      </li>
      <li>
        <a href="#show_map_on_web">listing.show_map_on_web</a>
      </li>
      <li>
        <a href="#created_at">listing.created_at</a>
      </li>
      <li>
        <a href="#updated_at">listing.updated_at</a>
      </li>
    </ul>
  </div>
</div>

The <code>listing</code> object has the following associations:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#location">listing.location</a>
      </li>
      <li>
        <a href="#country">listing.country</a>
      </li>
      <li>
        <a href="#telephone">listing.telephone</a>
      </li>
      <li>
        <a href="#email">listing.email</a>
      </li>
      <li>
        <a href="#website">listing.website</a>
      </li>
      <li>
        <a href="#communications">listing.communications</a>
      </li>
      <li>
        <a href="#extra_communications">listing.extra_communications</a>
      </li>
      <li>
        <a href="#listing_categories">listing.listing_categories</a>
      </li>
      <li>
        <a href="#catalog_items">listing.catalog_items</a>
      </li>
      <li>
        <a href="#galleries">listing.galleries</a>
      </li>
      <li>
        <a href="#images">listing.images</a>
      </li>
      <li>
        <a href="#brochures">listing.brochures</a>
      </li>
      <li>
        <a href="#announcements">listing.announcements</a>
      </li>
      <li>
        <a href="#services">listing.services</a>
      </li>
      <li>
        <a href="#service_categories">listing.service_categories</a>
      </li>
      <li>
        <a href="#products">listing.products</a>
      </li>
      <li>
        <a href="#product_categories">listing.product_categories</a>
      </li>
      <li>
        <a href="#foods">listing.foods</a>
      </li>
      <li>
        <a href="#food_categories">listing.food_categories</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="address">listing.address</h2>

Returns the address of a listing.

<h2 class="tags" id="alias_id">listing.alias_id</h2>

Returns the alias_id of a listing.

<h2 class="tags" id="description">listing.description</h2>

Returns the description of a listing.

<h2 class="tags" id="headline">listing.headline</h2>

Returns the headline of a listing.

<h2 class="tags" id="id">listing.id</h2>

Returns the id of a listing.

<h2 class="tags" id="is_active">listing.is_active</h2>

Returns true if it is currently active listing.

<h2 class="tags" id="lat">listing.lat</h2>

Returns latitude of a listing.

<h2 class="tags" id="long">listing.long</h2>

Returns longitude of a listing.

<h2 class="tags" id="name">listing.name</h2>

Returns name of a listing.

<h2 class="tags" id="postal_code">listing.postal_code</h2>

Returns postal_code of a listing.

<h2 class="tags" id="zoom_level">listing.zoom_level</h2>

Returns zoom_level of a listing.

<h2 class="tags" id="show_map_on_web">listing.show_map_on_web</h2>

Returns true if it shows the map.

<h2 class="tags" id="created_at">listing.created_at</h2>

Returns the timestamp of when the listing was created. Use the [date]({{ '#' }}) filter to format the timestamp.

<h2 class="tags" id="updated_at">listing.updated_at</h2>

Returns the timestamp of when the listing was last updated. Use the [date]({{ '#' }}) filter to format the timestamp.

<h2 class="tags" id="location">listing.location</h2>

Returns [location]({{ '/objects/location' | prepend: site.baseurl }}) object of a listing. [*Mandatory*]

<h2 class="tags" id="country">listing.country</h2>

Returns [country]({{ '/objects/country' | prepend: site.baseurl }}) object of a listing. [*Mandatory*]

<h2 class="tags" id="telephone">listing.telephone</h2>

Returns [communication]({{ '/objects/communication' | prepend: site.baseurl }}) object which is a telephone of a listing. [*Optional*]

<h2 class="tags" id="email">listing.email</h2>

Returns [communication]({{ '/objects/communication' | prepend: site.baseurl }}) object which is an email of a listing. [*Optional*]

<h2 class="tags" id="website">listing.website</h2>

Returns [communication]({{ '/objects/communication' | prepend: site.baseurl }}) object which is a website of a listing. [*Optional*]

<h2 class="tags" id="communications">listing.communications</h2>

Returns an array of [communication objects]({{ '/objects/communication' | prepend: site.baseurl }}) of a listing. A `listing` has many `communication` objects. [*Optional*]

<h2 class="tags" id="extra_communications">listing.extra_communications</h2>

Returns an array of [extra_communication objects]({{ '/objects/extra_communication' | prepend: site.baseurl }}) of a listing. A `listing` has many `extra_communication` objects. [*Optional*]

<h2 class="tags" id="listing_categories">listing.listing_categories</h2>

Returns an array of [listing_category objects]({{ '/objects/listing_category' | prepend: site.baseurl }}) of a listing. A `listing` has many `listing_category` objects. [*Optional*]

<h2 class="tags" id="catalog_items">listing.catalog_items</h2>

Returns an array of [catalog_item objects]({{ '/objects/catalog_item' | prepend: site.baseurl }}) of a listing. A `listing` has many `catalog_item` objects. [*Optional*]

<h2 class="tags" id="galleries">listing.galleries</h2>

Returns an array of [gallery objects]({{ '/objects/gallery' | prepend: site.baseurl }}) of a listing. A `listing` has many `gallery` objects. A `gallery` has many `images` objects. [*Optional*]

<h2 class="tags" id="images">listing.images</h2>

Returns an array of [image objects]({{ '/objects/image' | prepend: site.baseurl }}) of a listing. A `listing` has many `images` objects. [*Optional*]

<h2 class="tags" id="brochures">listing.brochures</h2>

Returns an array of [brochure objects]({{ '/objects/brochure' | prepend: site.baseurl }}) of a listing. A `listing` has many `brochure` objects. [*Optional*]

<h2 class="tags" id="announcements">listing.announcements</h2>

Returns an array of [announcement objects]({{ '/objects/announcement' | prepend: site.baseurl }}) of a listing. A `listing` has many `announcement` objects. [*Optional*]

<h2 class="tags" id="service_categories">listing.service_categories</h2>

Returns an array of [service_category objects]({{ '/objects/service_category' | prepend: site.baseurl }}) of a listing. A `listing` has many `service_category` objects. A `service_category` has many `service` objects. [*Optional*]

<h2 class="tags" id="services">listing.services</h2>

Returns an array of [service objects]({{ '/objects/service' | prepend: site.baseurl }}) of a listing. A `listing` has many `service` objects. [*Optional*]

<h2 class="tags" id="product_categories">listing.product_categories</h2>

Returns an array of [product_category objects]({{ '/objects/product_category' | prepend: site.baseurl }}) of a listing. A `listing` has many `product_category` objects. A `product_category` has many `product` objects. [*Optional*]

<h2 class="tags" id="products">listing.products</h2>

Returns an array of [product objects]({{ '/objects/product' | prepend: site.baseurl }}) of a listing. A `listing` has many `product` objects. [*Optional*]

<h2 class="tags" id="food_categories">listing.food_categories</h2>

Returns an array of [food_category objects]({{ '/objects/food_category' | prepend: site.baseurl }}) of a listing. A `listing` has many `food_category` objects. A `food_category` has many `food` objects. [*Optional*]

<h2 class="tags" id="foods">listing.foods</h2>

Returns an array of [foods objects]({{ '/objects/foods' | prepend: site.baseurl }}) of a listing. A `listing` has many `food` objects. [*Optional*]