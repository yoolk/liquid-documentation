---
  layout: nav_basics
  title: business hour - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Business Hour</h2>

A <code>listing</code> has many business hours. The `day` in `business_hours` object could be overlapped because it could have multiple sessions in a day. The <code>business_hour</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        business_hour.id
      </li>
      <li>
        <a href="#day">business_hour.day</a>
      </li>
      <li>
        <a href="#day_name">business_hour.day_name</a>
      </li>
      <li>
        <a href="#abbr_day_name">business_hour.abbr_day_name</a>
      </li>
      <li>
        <a href="#open">business_hour.open</a>
      </li>
      <li>
        <a href="#closed">business_hour.closed</a>
      </li>
      <li>
        <a href="#full_day?">business_hour.full_day?</a>
      </li>
      <li>
        <a href="#open?">business_hour.open?</a>
      </li>
      <li>
        <a href="#closed?">business_hour.closed?</a>
      </li>
      <li>
        business_hour.created_at
      </li>
      <li>
        business_hour.updated_at
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="day">business_hour.day</h2>

Returns the weekday from [0..6], where 0 is Sunday and 6 is Saturday.

<h2 class="tags" id="day_name">business_hour.day_name</h2>

Returns the localized weekday's long name.

<h2 class="tags" id="abbr_day_name">business_hour.abbr_day_name</h2>

Returns the localized weekday's short name.

<h2 class="tags" id="open">business_hour.open</h2>

Returns the open hour/minute. Use the [date]({{ '#' }}) filter to format the hour.

<h2 class="tags" id="closed">business_hour.closed</h2>

Returns the closed hour/minute. Use the [date]({{ '#' }}) filter to format the hour.

<h2 class="tags" id="open?">business_hour.open?</h2>

Returns true if it is opening.

<h2 class="tags" id="closed?">business_hour.closed?</h2>

Returns true if it is closed.

<h2 class="tags" id="full_day?">business_hour.full_day?</h2>

Returns true if it is opening 24 hours.