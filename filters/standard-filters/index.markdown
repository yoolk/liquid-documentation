---
  layout: nav_basics
---
<h2 class="section-title">Standard Filters</h2>

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#array_filters">Array Filters</a>
      </li>
      <li>
        <a href="#objects">Objects</a>
      </li>
      <li>
        <a href="#filters">Filters</a>
      </li>
    </ul>
  </div>
</div>

### size
<h2 class="tags" id="array_filters">Array Filters</h2>
Array filters are used to modify the output of arrays.

<h5 class="sub-section-title">size</h5>
Returns the size of a string or an array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {{ 'this is a 30 character string' | size }}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight django%}{% raw %}
    30
    {% endraw %}{% endhighlight %}
  </div>
</div>

<code>size</code> can be used in dot notation, in cases where it needs to be used inside a tag.

<div class="panel">
  <div class="panel-body">
    {% highlight django%}{% raw %}
      {% if collections.frontpage.products.size > 10 %}
          There are more than 10 products in this collection!
      {% endif %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

### downcase
 convert an input string to DOWNCASE

### upcase
 convert an input string to UPCASE

### capitalize
 capitalize words in the input centence

### escape

### escape_once

### url_encode

### slice

### truncate
 Truncate a string down to x characters

### truncatewords

### split
 Split input string into an array of substrings separated by given pattern.

### strip

### lstrip

### rstrip

### strip_html

### strip_newlines
 Remove all newlines from the string

### join
 Join elements of the array with certain character between them

### sort
 Sort elements of the array
 provide optional property with which to sort an array of hashes or drops

### uniq
 Remove duplicate elements from an array
 provide optional property with which to determine uniqueness

### reverse
 Reverse the elements of an array

### map
 map/collect on a given property

### replace
 Replace occurrences of a string with another

### replace_first
 Replace the first occurrences of a string with another

### remove
 remove a substring

### remove_first
 remove the first occurrences of a substring

### append
 add one string to another

### prepend
 prepend a string to another

### newline_to_br
 Add <br /> tags in front of all newlines in input string
<blockquote>
# Reformat a date using Ruby's core Time#strftime( string ) -> string
#
#   %a - The abbreviated weekday name (``Sun'')
#   %A - The  full  weekday  name (``Sunday'')
#   %b - The abbreviated month name (``Jan'')
#   %B - The  full  month  name (``January'')
#   %c - The preferred local date and time representation
#   %d - Day of the month (01..31)
#   %H - Hour of the day, 24-hour clock (00..23)
#   %I - Hour of the day, 12-hour clock (01..12)
#   %j - Day of the year (001..366)
#   %m - Month of the year (01..12)
#   %M - Minute of the hour (00..59)
#   %p - Meridian indicator (``AM''  or  ``PM'')
#   %s - Number of seconds since 1970-01-01 00:00:00 UTC.
#   %S - Second of the minute (00..60)
#   %U - Week  number  of the current year,
#           starting with the first Sunday as the first
#           day of the first week (00..53)
#   %W - Week  number  of the current year,
#           starting with the first Monday as the first
#           day of the first week (00..53)
#   %w - Day of the week (Sunday is 0, 0..6)
#   %x - Preferred representation for the date alone, no time
#   %X - Preferred representation for the time alone, no date
#   %y - Year without a century (00..99)
#   %Y - Year with century
#   %Z - Time zone name
#   %% - Literal ``%'' character
#
#   See also: http://www.ruby-doc.org/core/Time.html#method-i-strftime
</blockquote>
### date

### first
 Get the first element of the passed in array

### last
 Get the last element of the passed in array

# addition
### plus

# subtraction
### minus

# multiplication
### times

# division
### divided_by

### modulo

### round

### ceil

### floor

###default