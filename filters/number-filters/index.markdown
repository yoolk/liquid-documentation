---
  layout: nav_basics
  title: Number Filters
---

<h2 class="section-title">Number Filters</h2>
Provides methods for converting numbers into formatted strings. Methods are provided for phone numbers, currency, percentage, precision, positional notation, file size and pretty printing.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#number_to_phone">number_to_phone</a>
      </li>
      <li>
        <a href="#number_to_currency">number_to_currency</a>
      </li>
      <li>
        <a href="#number_to_percentage">number_to_percentage</a>
      </li>
      <li>
        <a href="#number_with_delimiter">number_with_delimiter</a>
      </li>
      <li>
        <a href="#number_with_precision">number_with_precision</a>
      </li>
      <li>
        <a href="#number_to_human_size">number_to_human_size</a>
      </li>
      <li>
        <a href="#number_to_human">number_to_human</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="number_to_phone">number_to_phone</h2>

Formats a number into a US phone number (e.g., (555) 123-9876). You can customize the format in the options hash.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 5551234 | number_to_phone }}
# => 555-1234

{{ '5551234' | number_to_phone }}
# => 555-1234

{{ 1235551234 | number_to_phone }}
# => 123-555-1234

{{ 1235551234 | number_to_phone: area_code: true }}
# => (123) 555-1234

{{ 1235551234 | number_to_phone: delimiter: ' ' }}
# => 123 555 1234

{{ 1235551234 | number_to_phone: area_code: true, extension: 555 }}
# => (123) 555-1234 x 555

{{ 1235551234 | number_to_phone: country_code: 1 }}
# => +1-123-555-1234

{{ '123a456' | number_to_phone }}
# => 123a456

{{ 1235551234 | number_to_phone: country_code: 1, extension: 1343, delimiter: "." }}
# => +1.123.555.1234 x 1343
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_to_currency">number_to_currency</h2>

Formats a number into a currency string (e.g., $13.65). You can customize the format in the options hash.

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :precision - Sets the level of precision (defaults to 2).

+ :unit - Sets the denomination of the currency (defaults to “$”).

+ :separator - Sets the separator between the units (defaults to “.”).

+ :delimiter - Sets the thousands delimiter (defaults to “,”).

+ :format - Sets the format for non-negative numbers (defaults to “%u%n”). Fields are %u for the currency, and %n for the number.

+ :negative_format - Sets the format for negative numbers (defaults to prepending an hyphen to the formatted number given by :format). Accepts the same fields than :format, except %n is here the absolute value of the number.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 1234567890.50 | number_to_currency }}
# => $1,234,567,890.50

{{ 1234567890.506 | number_to_currency }}
# => $1,234,567,890.51

{{ 1234567890.506 | number_to_currency: precision: 3 }}
# => $1,234,567,890.506

{{ 1234567890.506 | number_to_currency: locale: :fr }}
# => 1 234 567 890,51 €

{{ '123a456' | number_to_currency }}
# => $123a456

{{ -1234567890.50 | number_to_currency: negative_format: "(%u%n)" }}
# => ($1,234,567,890.50)

{{ -1234567890.50 | number_to_currency: unit: "R$", separator: ",", delimiter: "" }}
# => R$1234567890,50

{{ -1234567890.50 | number_to_currency: unit: "R$", separator: ",", delimiter: "", format: "%n %u" }}
# => 1234567890,50 R$
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_to_percentage">number_to_percentage</h2>

Formats a number as a percentage string (e.g., 65%). You can customize the format in the options hash.

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :precision - Sets the precision of the number (defaults to 3).

+ :significant - If true, precision will be the # of significant_digits. If false, the # of fractional digits (defaults to false).

+ :separator - Sets the separator between the fractional and integer digits (defaults to “.”).

+ :delimiter - Sets the thousands delimiter (defaults to “”).

+ :strip_insignificant_zeros - If true removes insignificant zeros after the decimal separator (defaults to false).

+ :format - Specifies the format of the percentage string The number field is %n (defaults to “%n%”).

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 100 | number_to_percentage }}
# => 100.000%

{{ '98' | number_to_percentage }}
# => 98.000%

{{ 100 | number_to_percentage: precision: 0 }}
# => 100%

{{ 100 | number_to_percentage: precision: 0 delimiter: '.', separator: ',' }}
# => 1.000,000%

{{ 302.24398923423 | number_to_percentage: precision: 5 }}
# => 302.24399%

{{ 1000 | number_to_percentage: locale: :fr }}
# => 1 000,000%

{{ '98a' | number_to_percentage }}
# => 98a%

{{ 100 | number_to_percentage: format: "%n  %" }}
# => 100  %
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_with_delimiter">number_with_delimiter</h2>

Formats a number with grouped thousands using delimiter (e.g., 12,324). You can customize the format in the options hash.

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :delimiter - Sets the thousands delimiter (defaults to “,”).

+ :separator - Sets the separator between the fractional and integer digits (defaults to “.”).

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 12345678 | number_with_delimiter }}
# => 12,345,678

{{ 123456 | number_with_delimiter }}
# => 123,456

{{ 12345678.05 | number_with_delimiter }}
# => 12,345,678.05

{{ 12345678 | number_with_delimiter: delimiter: '.' }}
# => 12.345.678

{{ 12345678 | number_with_delimiter: delimiter: ',' }}
# => 12,345,678

{{ 12345678.05 | number_with_delimiter: separator: ' ' }}
# => 12,345,678 05

{{ 12345678.05 | number_with_delimiter: locale: :fr }}
# => 12 345 678,05

{{ '112a' | number_with_delimiter }}
# => 112a

{{ 98765432.98 | number_with_delimiter: delimiter: ' ', separator: ',' }}
# => 98 765 432,98
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_with_precision">number_with_precision</h2>

Formats a number with the specified level of :precision (e.g., 112.32 has a precision of 2 if :significant is false, and 5 if :significant is true). You can customize the format in the options hash.

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :precision - Sets the precision of the number (defaults to 3).

+ :significant - If true, precision will be the # of significant_digits. If false, the # of fractional digits (defaults to false).

+ :separator - Sets the separator between the fractional and integer digits (defaults to “.”).

+ :delimiter - Sets the thousands delimiter (defaults to “”).

+ :strip_insignificant_zeros - If true removes insignificant zeros after the decimal separator (defaults to false).

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 111.2345 | number_with_precision }}
# => 111.235

{{ 111.2345 | number_with_precision: precision: 2 }}
# => 111.23

{{ 13 | number_with_precision: precision: 5 }}
# => 13.00000

{{ 389.32314 | number_with_precision: precision: 0 }}
# => 389

{{ 111.2345 | number_with_precision: significant: true }}
# => 111

{{ 111.2345 | number_with_precision: precision: 1, significant: true }}
# => 100

{{ 13 | number_with_precision: precision: 5, significant: true }}
# => 13.000

{{ 111.234 | number_with_precision: locale: :fr }}
# => 111,234

{{ 13 | number_with_precision: precision: 5, significant: true, strip_insignificant_zeros: true }}
# => 13

{{ 389.32314 | number_with_precision: precision: 4, significant: true }}
# => 389.3

{{ 1111.2345 | number_with_precision: precision: 2, separator: ',', delimiter: '.' }}
# => 1.111,23
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_to_human_size">number_to_human_size</h2>

Formats the bytes in number into a more understandable representation (e.g., giving it 1500 yields 1.5 KB). This method is useful for reporting file sizes to users. You can customize the format in the options hash.

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :precision - Sets the precision of the number (defaults to 3).

+ :significant - If true, precision will be the # of significant_digits. If false, the # of fractional digits (defaults to true)

+ :separator - Sets the separator between the fractional and integer digits (defaults to “.”).

+ :delimiter - Sets the thousands delimiter (defaults to “”).

+ :strip_insignificant_zeros - If true removes insignificant zeros after the decimal separator (defaults to true)

+ :prefix - If :si formats the number using the SI prefix (defaults to :binary)

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 123 | number_to_human_size }}
# => 123 Bytes

{{ 1234 | number_to_human_size }}
# => 1.21 KB

{{ 12345 | number_to_human_size }}
# => 12.1 KB

{{ 1234567 | number_to_human_size }}
# => 1.18 MB

{{ 1234567890 | number_to_human_size }}
# => 1.15 GB

{{ 1234567890123 | number_to_human_size }}
# => 1.12 TB

{{ 1234567 | number_to_human_size: precision: 2 }}
# => 1.2 MB

{{ 483989 | number_to_human_size: precision: 2 }}
# => 470 KB

{{ number_to_human_size: precision: 2, separator: ',' }}
# => 1,2 MB
{% endraw %}{% endhighlight %}
  </div>
</div>

Non-significant zeros after the fractional separator are stripped out by default (set :strip_insignificant_zeros to false to change that):

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 1234567890123 | number_to_human_size: precision: 5 }}
# => "1.1229 TB"

{{ 524288000 | number_to_human_size: precision: 5 }}
# => "500 MB"

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="number_to_human">number_to_human</h2>

Pretty prints (formats and approximates) a number in a way it is more readable by humans (eg.: 1200000000 becomes “1.2 Billion”). This is useful for numbers that can get very large (and too hard to read).

<h5 class="sub-section-title">options</h5>

+ :locale - Sets the locale to be used for formatting (defaults to current locale).

+ :precision - Sets the precision of the number (defaults to 3).

+ :significant - If true, precision will be the # of significant_digits. If false, the # of fractional digits (defaults to true)

+ :separator - Sets the separator between the fractional and integer digits (defaults to “.”).

+ :delimiter - Sets the thousands delimiter (defaults to “”).

+ :strip_insignificant_zeros - If true removes insignificant zeros after the decimal separator (defaults to true)

+ :units - A Hash of unit quantifier names. Or a string containing an i18n scope where to find this hash. It might have the following keys:

  + integers: :unit, :ten, *:hundred, :thousand, :million, *:billion, :trillion, *:quadrillion

  + fractionals: :deci, :centi, *:mili, :micro, :nano, *:pico, :femto

+ :format - Sets the format of the output string (defaults to “%n %u”). The field types are:

  + %u - The quantifier (ex.: 'thousand')

  + %n - The number

+ :raise - If true, raises InvalidNumberError when the argument is invalid.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 123 | number_to_human }}
# => "123"

{{ 1234 | number_to_human }}
# => "1.23 Thousand"

{{ 12345 | number_to_human }}
# => "12.3 Thousand"

{{ 1234567 | number_to_human }}
# => "1.23 Million"

{{ 1234567890 | number_to_human }}
# => "1.23 Billion"

{{ 1234567890123 | number_to_human }}
# => "1.23 Trillion"

{{ 1234567890123456 | number_to_human }}
# => "1.23 Quadrillion"

{{ 1234567890123456789 | number_to_human }}
# => "1230 Quadrillion"

{{ 489939 | number_to_human: precision: 2 }}
# => "490 Thousand"

{{ 489939 | number_to_human: precision: 4 }}
# => "489.9 Thousand"

{{ 1234567 | number_to_human: precision: 4, significant: false }}
# => "1.2346 Million"

{{ 1234567 | number_to_human: precision: 1, separator: ',', significant: false }}
# => "1,2 Million"

{% endraw %}{% endhighlight %}
  </div>
</div>

Non-significant zeros after the decimal separator are stripped out by default (set :strip_insignificant_zeros to false to change that):

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 12345012345 | number_to_human: significant_digits: 6 }}
# => "12.345 Billion"

{{ 500000000 | number_to_human: precision: 5 }}
# => "500 Million"

{% endraw %}{% endhighlight %}
  </div>
</div>