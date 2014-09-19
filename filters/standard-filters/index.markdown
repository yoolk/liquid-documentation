---
  layout: nav_basics
  title: Standard Filters
---
<h2 class="section-title">Standard Filters</h2>
These are the default filters. They have been written by Shopify.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#array_filters">Array Filters</a>
      </li>
      <li>
        <a href="#string_filters">String Filters</a>
      </li>
      <li>
        <a href="#math_filters">Math Filters</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="array_filters">Array Filters</h2>
Array filters are used to modify the output of arrays.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#join">join</a>
      </li>
      <li>
        <a href="#first">first</a>
      </li>
      <li>
        <a href="#last">last</a>
      </li>
      <li>
        <a href="#map">map</a>
      </li>
      <li>
        <a href="#size">size</a>
      </li>
      <li>
        <a href="#sort">sort</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title" id="join">join</h5>
Joins the elements of an array with the character passed as the parameter. The result is a single string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ product.tags | join: ', ' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
tag1, tag2, tag3
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="first">first</h5>
Returns the first element of an array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | first }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
sale
{% endraw %}{% endhighlight %}
  </div>
</div>

<code>first</code> can be used in dot notation, in cases where it needs to be used inside a tag.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.tags.first == "sale" %}
    This product is on sale!
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="last">last</h5>
Gets the last element passed in an array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.tags = "sale", "mens", "womens", "awesome" -->
{{ product.tags | last }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
awesome
{% endraw %}{% endhighlight %}
  </div>
</div>

<code>last</code> can be used in dot notation, in cases where it needs to be used inside a tag.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% if product.tags.last == "sale"%}
    This product is on sale!
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

Using <code>last</code> on a string returns the last character in the string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.name = "Awesome Shoes" -->
{{ product.name | last }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
s
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="map">map</h5>
Accepts an array element's attribute as a parameter and creates a string out of each array element's value.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- collection.name = "Spring", "Summer", "Fall", "Winter" -->
{% assign collection_titles = collections | map: 'title' %}
{{ collection_titles }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
SpringSummerFallWinter
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="size">size</h5>
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


<h5 class="sub-section-title" id="sort">sort</h5>
Sorts the elements of an array by a given attribute of an element in the array.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign products = collection.products | sort: 'price' %}
{% for product in products %}
  <h4>{{ product.name }}</h4>
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

The order of the sorted array is case-sensitive.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- products = "a", "b", "A", "B" -->
{% assign products = collection.products | sort: 'name' %}
{% for product in products %}
  {{ product.name }}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
A B a b
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="string_filters">String Filters</h2>
String filters are used to manipulate outputs and variables of the string type.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#append">append</a>
      </li>
      <li>
        <a href="#camelcase">camelcase</a>
      </li>
      <li>
        <a href="#capitalize">capitalize</a>
      </li>
      <li>
        <a href="#downcase">downcase</a>
      </li>
      <li>
        <a href="#escape">escape</a>
      </li>
      <li>
        <a href="#handle/handleize">handle/handleize</a>
      </li>
      <li>
        <a href="#md5">md5</a>
      </li>
      <li>
        <a href="#newline_to_br">newline_to_br</a>
      </li>
      <li>
        <a href="#pluralize">pluralize</a>
      </li>
      <li>
        <a href="#prepend">prepend</a>
      </li>
      <li>
        <a href="#remove">remove</a>
      </li>
      <li>
        <a href="#remove_first">remove_first</a>
      </li>
      <li>
        <a href="#replace">replace</a>
      </li>
      <li>
        <a href="#replace_first">replace_first</a>
      </li>
      <li>
        <a href="#slice">slice</a>
      </li>
      <li>
        <a href="#split">split</a>
      </li>
      <li>
        <a href="#strip">strip</a>
      </li>
      <li>
        <a href="#lstrip">lstrip</a>
      </li>
      <li>
        <a href="#rstrip">rstrip</a>
      </li>
      <li>
        <a href="#strip_html">strip_html</a>
      </li>
      <li>
        <a href="#strip_newlines">strip_newlines</a>
      </li>
      <li>
        <a href="#truncate">truncate</a>
      </li>
      <li>
        <a href="#truncatewords">truncatewords</a>
      </li>
      <li>
        <a href="#uniq">uniq</a>
      </li>
      <li>
        <a href="#upcase">upcase</a>
      </li>
      <li>
        <a href="#url_escape">url_escape</a>
      </li>
      <li>
        <a href="#url_param_escape">url_param_escape</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title" id="append">append</h5>
Appends characters to a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'sales' | append: '.jpg' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
sales.jpg
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="camelcase">camelcase</h5>
Converts a string into CamelCase.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'coming-soon' | camelcase }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
ComingSoon
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="capitalize">capitalize</h5>
Capitalizes the first word in a string

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'capitalize me' | capitalize }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Capitalize me
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="downcase">downcase</h5>
Converts a string into lowercase.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'UPPERCASE' | downcase }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
uppercase
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="escape">escape</h5>
Escapes a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "<p>test</p>" | escape }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- The <p> tags are not rendered -->
<p>test</p>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="newline_to_br">newline_to_br</h5>
Inserts a <br > linebreak HTML tag in front of each line break in a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% capture var %}
  One
  Two
  Three
{% endcapture %}
{{ var | newline_to_br }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
One <br>
Two<br>
Three<br>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="prepend">prepend</h5>
Prepends characters to a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'sale' | prepend: 'Made a great ' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Made a great sale
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="remove">remove</h5>
Removes all occurrences of a substring from a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "Hello, world. Goodbye, world." | remove: "world" }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Hello, . Goodbye, .
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="remove_first">remove_first</h5>
Removes only the first occurrence of a substring from a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "Hello, world. Goodbye, world." | remove_first: "world" }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Hello, . Goodbye, world.
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="replace">replace</h5>
Replaces all occurrences of a string with a substring.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.name = "Awesome Shoes" -->
{{ product.name | replace: 'Awesome', 'Mega' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Mega Shoes
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="replace_first">replace_first</h5>
Replaces the first occurrence of a string with a substring.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.name = "Awesome Awesome Shoes" -->
{{ product.name | replace_first: 'Awesome', 'Mega' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Mega Awesome Shoes
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="slice">slice</h5>
The <code>slice</code> filter returns a substring, starting at the specified index. An optional second parameter can be passed to specify the length of the substring. If no second parameter is given, a substring of one character will be returned.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "hello" | slice: 2 }}
{{ "hello" | slice: 1, 3 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
e
ell
{% endraw %}{% endhighlight %}
  </div>
</div>

If the passed index is negative, it is counted from the end of the string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "hello" | slice: -3, 2  }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
el
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="split">split</h5>
The <code>split</code> filter takes on a substring as a parameter. The substring is used as a delimiter to divide a string into an array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign words = "Uses cheat codes, calls the game boring." | split: ' ' %}
First word: {{ words.first }}
First word: {{ words[0] }}
Second word: {{ words[1] }}
Last word: {{ words.last }}
All words: {{ words | join: ', ' }}

{% for word in words %}
  {{ word }}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
First word: Uses
First word: Uses
Second word: cheat
Last word: boring.
All words: Uses, cheat, codes,, calls, the, game, boring.

Uses cheat codes, calls the game boring.
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="strip">strip</h5>
Strips tabs, spaces, and newlines (all whitespace) from the left and right side of a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ '   too many spaces      ' | strip }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
too many spaces
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="lstrip">lstrip</h5>
Strips tabs, spaces, and newlines (all whitespace) from the __left__ side of a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
"{{ '   too many spaces           ' | lstrip }}"
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- Notice the empty spaces to the right of the string -->
too many spaces
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="rstrip">rstrip</h5>
Strips tabs, spaces, and newlines (all whitespace) from the __right__ side of a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ '              too many spaces      ' | rstrip }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
               too many spaces
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="strip_html">strip_html</h5>
Strips all HTML tags from a string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "<h1>Hello</h1> World" | strip_html }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
Hello World
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="strip_newlines">strip_newlines</h5>
Removes any line breaks/newlines from a string.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ product.description | strip_newlines }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="truncatewords">truncatewords</h5>
Truncates a string down to 'x' words, where x is the number passed as a parameter. An ellipsis (...) is appended to the truncated string.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "The cat came back the very next day" | truncatewords: 4 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
The cat came back...
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="uniq">uniq</h5>
Removes any duplicate instances of an element in an array.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign fruits = "orange apple banana apple orange" %}
{{ fruits | split: ' ' | uniq | join: ' ' }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
orange apple banana
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="upcase">upcase</h5>
Converts a string into uppercase

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 'i want this to be uppercase' | upcase }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
I WANT THIS TO BE UPPERCASE
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">url_escape</h5>
Identifies all characters in a string that are not allowed in URLS, and replaces the characters with their escaped variants.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ "<hello> & <shopify>" | url_escape }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
%3Chello%3E%20&%20%3Cshopify%3E
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="math_filters">Math Filters</h2>
Math filters allow you to apply mathematical tasks. It can be linked and, as with any other filters, are applied in order of left to right.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#ceil">ceil</a>
      </li>
      <li>
        <a href="#divided_by">divided_by</a>
      </li>
      <li>
        <a href="#floor">floor</a>
      </li>
      <li>
        <a href="#minus">minus</a>
      </li>
      <li>
        <a href="#plus">plus</a>
      </li>
      <li>
        <a href="#round">round</a>
      </li>
      <li>
        <a href="#times">times</a>
      </li>
      <li>
        <a href="#modulo">modulo</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title" id="ceil">ceil</h5>
Rounds an output up to the nearest integer.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 4.6 | ceil }}
{{ 4.3 | ceil }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
5
5
{% endraw %}{% endhighlight %}
  </div>
</div>
<h5 class="sub-section-title" id="divided_by">divided_by</h5>
Divides an output by a number.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.price = 200 -->
{{ product.price | divided_by: 10 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
20
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="floor">floor</h5>
Rounds an output down to the nearest integer.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 4.6 | floor }}
{{ 4.3 | floor }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
4
4
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="minus">minus</h5>
Subtracts a number from an output.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.price = 200 -->
{{ product.price | minus: 15 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
185
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="plus">plus</h5>
Adds a number to an output.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.price = 200 -->
{{ product.price | plus: 15 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
215
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="round">round</h5>
Rounds the output to the nearest integer or specified number of decimals.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 4.6 | round }}
{{ 4.3 | round }}
{{ 4.5612 | round: 2 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
5
4
4.56
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="times">times</h5>
Multiplies an output by a number.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<!-- product.price = 200 -->
{{ product.price | times: 1.15 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
230
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title" id="modulo">modulo</h5>
Divides an output by a number and returns the remainder.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{{ 12 | modulo:5 }}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}
{% raw %}
  2
{% endraw %}
{% endhighlight %}
  </div>
</div>