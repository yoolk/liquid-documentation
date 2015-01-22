---
  layout: nav_basics
  title: extra_communication - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Extra Communication</h2>

The <code>extra_communication</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#id">extra_communication.id</a>
      </li>
      <li>
        <a href="#type">extra_communication.type</a>
      </li>
      <li>
        <a href="#label">extra_communication.label</a>
      </li>
      <li>
        <a href="#value">extra_communication.value</a>
      </li>
      <li>
        <a href="#created_at">extra_communication.created_at</a>
      </li>
      <li>
        <a href="#updated_at">extra_communication.updated_at</a>
      </li>
      <li>
        <a href="#is_email">communication.email?</a>
      </li>
      <li>
        <a href="#is_telephone">communication.telephone?</a>
      </li>
      <li>
        <a href="#is_website">communication.website?</a>
      </li>
      <li>
        <a href="#is_fax">communication.fax?</a>
      </li>
      <li>
        <a href="#is_facebook">communication.facebook?</a>
      </li>
      <li>
        <a href="#is_twitter">communication.twitter?</a>
      </li>
      <li>
        <a href="#is_address">communication.address?</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="id">extra_communication.id</h2>

Returns id of an extra_communication.

<h2 class="tags" id="type">extra_communication.type</h2>

Returns the type of an extra_communication. Its value is one of these <code>["Telex", "Head Office", "Business Hours", "Address", "Branch Office", "Swift Code", "Department", "MSN", "Twitter", "Facebook", "Google Talk", "Yahoo Messenger", "Skype", "CCC Box", "Extension"]</code>.

<h2 class="tags" id="label">extra_communication.label</h2>

Returns the label of an extra_communication.

<h2 class="tags" id="value">extra_communication.value</h2>

Returns the value of an extra_communication.

<h2 class="tags" id="created_at">extra_communication.created_at</h2>

Returns the timestamp of when the extra_communication was created. Use the [date]({{ '#' }}) filter to format the timestamp.

<h2 class="tags" id="updated_at">extra_communication.updated_at</h2>

Returns the timestamp of when the extra_communication was last updated. Use the [date]({{ '#' }}) filter to format the timestamp.

<h2 class="tags" id="is_email">communication.email?</h2>

Returns true only if communication type is `e-mail`.

<h2 class="tags" id="is_telephone">communication.telephone?</h2>

Returns true only if communication type is one of these <code>['tel', 'tel & fax', 'fax', 'mobile', 'mobile phone', 'toll free']</code> .

<h2 class="tags" id="is_website">communication.website?</h2>

Returns true only if communication type is `website`.

<h2 class="tags" id="is_fax">communication.fax?</h2>

Returns true only if communication type is one of these <code>['tel & fax', 'fax']</code>.

<h2 class="tags" id="is_facebook">communication.facebook?</h2>

Returns true only if communication type is `facebook`.

<h2 class="tags" id="is_twitter">communication.twitter?</h2>

Returns true only if communication type is `twitter`.

<h2 class="tags" id="is_address">communication.address?</h2>

Returns true only if communication type is `address`.