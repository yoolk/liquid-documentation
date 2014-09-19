---
  layout: nav_basics
  title: Misc Filters
---

<h2 class="section-title">Misc Filters</h2>
Provides miscellaneous filters.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#date">date</a>
      </li>
      <li>
        <a href="#random">random</a>
      </li>
      <li>
        <a href="#toggle_class_name">toggle_class_name</a>
      </li>
      <li>
        <a href="#default">default</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title" id="date">date</h5>
Converts a timestamp into another date format.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ listing.created_at | date: "%a, %b %d, %y" }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
Tue, Apr 22, 14
{% endraw %}{% endhighlight %}
  </div>
</div>

The date parameters are listed below:

<table class="table" rules="all" frame="void">
  <tr>
    <td>%a</td>
    <td>
      <p>Abbreviated weekday.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%a" }}
<!-- Sat -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%A</td>
    <td>
      <p>Full weekday name.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%A" }}
<!-- Tuesday -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%b</td>
    <td>
      <p>Abbreviated month name.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%b" }}
<!-- Jan -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%B</td>
    <td>
      <p>Full month name</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%B" }}
<!-- January -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%c</td>
    <td>
      <p>Preferred local date and time representation</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%c" }}
<!-- Tue Apr 22 11:16:09 2014 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%d</td>
    <td>
      <p>Day of the month, zero-padded (01, 02, 03, etc.).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%d" }}
<!-- 04 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%-d</td>
    <td>
      <p>Day of the month, not zero-padded (1,2,3, etc.).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%d" }}
<!-- 4 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%D</td>
    <td>
      <p>Formats the date (dd/mm/yy).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%D" }}
<!-- 04/22/14 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%e</td>
    <td>
      <p>Day of the month, blank-padded ( 1, 2, 3, etc.).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%e" }}
<!-- 3 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%F</td>
    <td>
      <p>Returns the date in ISO 8601 format (yyyy-mm-dd).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%F" }}
<!-- 2014-04-22 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%H</td>
    <td>
      <p>Hour of the day, 24-hour clock (00 - 23).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%H" }}
<!-- 15 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%I</td>
    <td>
      <p>Hour of the day, 12-hour clock (1 - 12).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%H" }}
<!-- 7 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%j</td>
    <td>
      <p>Day of the year (001 - 366).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%j" }}
<!-- 245 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%k</td>
    <td>
      <p>Hour of the day, 24-hour clock (1 - 24).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%k" }}
<!-- 14 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%m</td>
    <td>
      <p>Month of the year (01 - 12).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%m" }}
<!-- 04 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%M</td>
    <td>
      <p>Minute of the hour (00 - 59).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%M" }}
<!-- 53 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%p</td>
    <td>
      <p>Meridian indicator (AM/PM).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%p" }}
<!-- PM -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%r</td>
    <td>
      <p>12-hour time (%I:%M:%S %p)</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%r" }}
<!-- 03:20:07 PM -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%R</td>
    <td>
      <p>24-hour time (%H:%M)</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%R" }}
<!-- 15:21 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%T</td>
    <td>
      <p>24-hour time (%H:%M:%S)</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%T" }}
<!-- 15:22:13 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%U</td>
    <td>
      <p>The number of the week in the current year, starting with the first Sunday as the first day of the first week. </p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%U" }}
<!-- 16 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%W</td>
    <td>
      <p>The number of the week in the current year, starting with the first Monday as the first day of the first week.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%W" }}
<!-- 16 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%w</td>
    <td>
      <p>Day of the week (0 - 6, with Sunday being 0).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%w" }}
<!-- 2 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%x</td>
    <td>
      <p>Preferred representation for the date alone, no time. (mm/dd/yy).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%x" }}
<!-- 15:22:13 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%X</td>
    <td>
      <p>24-hour time (%H:%M:%S)</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%X" }}
<!-- 13:17:24 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%y</td>
    <td>
      <p>Year without a century (00.99).</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%T" }}
<!-- 14 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%Y</td>
    <td>
      <p>Year with a century.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%T" }}
<!-- 2014 -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td>%Z</td>
    <td>
      <p>Time zone name.</p>
      <div class="panel">
        <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ listing.created_at | date: "%Z" }}
<!-- EDT -->
{% endraw %}{% endhighlight %}
        </div>
      </div>
    </td>
  </tr>
</table>

<h5 class="sub-section-title" id="random">random</h5>
generate random numbers.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 5 | random }}
# => 4 (the result is randomly print)
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="toggle_class_name">toggle_class_name</h5>
Return class_name if condition evaluate to true otherwise nil is returned.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'active' | toggle_class_name: true }}
# => 'active'
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="default">default</h5>
Sets a default value for any variable with no assigned value. Can be used with strings, arrays, and hashes.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
Dear {{ person.name | default: "person" }}
{% endraw %}{% endhighlight %}
  </div>
</div>
<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight ruby %}{% raw %}
<!-- if person.name is nil -->
Dear person
{% endraw %}{% endhighlight %}
  </div>
</div>