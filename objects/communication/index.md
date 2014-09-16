---
  layout: nav_basics
  title: communication - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Communication</h2>

The <code>communication</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">communication.id</a>
      </li>
      <li>
        <a href="#type">communication.type</a>
      </li>
      <li>
        <a href="#value">communication.value</a>
      </li>
      <li>
        <a href="#is_first_line">communication.is_first_line</a>
      </li>
      <li>
        <a href="#image_url">communication.image_url</a>
      </li>
      <li>
        <a href="#created_at">communication.created_at</a>
      </li>
      <li>
        <a href="#updated_at">communication.updated_at</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="id">communication.id</h2>

Returns id of a communication.

<h2 class="tags" id="type">communication.type</h2>

Returns the type of a communication. Its value is one of these <code>["Tel", "Tel & Fax", "Fax", "Mobile Phone", "E-Mail", "Website", "P.O. Box"]</code>.

<h2 class="tags" id="value">communication.value</h2>

Returns the value of a communication.

<h2 class="tags" id="is_first_line">communication.is_first_line</h2>

Returns true if it is first line.

<h2 class="tags" id="image_url">communication.image_url</h2>

Returns the image_url of a communication. The value of this attribute is available when it is an email.

<h2 class="tags" id="created_at">communication.created_at</h2>

Returns the timestamp of when the communication was created. Use the [date]({{ '#' }}) filter to format the timestamp.

<h2 class="tags" id="updated_at">communication.updated_at</h2>

Returns the timestamp of when the communication was last updated. Use the [date]({{ '#' }}) filter to format the timestamp.