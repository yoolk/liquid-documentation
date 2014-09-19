---
  layout: nav_basics
  title: Text Filters
---

<h2 class="section-title">Text Filters</h2>
provide text manipulation.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#truncate">truncate</a>
      </li>
      <li>
        <a href="#highlight">highlight</a>
      </li>
      <li>
        <a href="#excerpt">excerpt</a>
      </li>
      <li>
        <a href="#pluralize">pluralize</a>
      </li>
      <li>
        <a href="#word_wrap">word_wrap</a>
      </li>
      <li>
        <a href="#simple_format">simple_format</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title">truncate</h5>
Truncates a given text after a given :length if text is longer than :length (defaults to 30). The last characters will be replaced with the :omission (defaults to “…”) for a total length not exceeding :length.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'Once upon a time in a world far far away' | truncate }}
# => "Once upon a time in a world..."

{{ 'Once upon a time in a world far far away' | truncate: length: 17 }}
# => "Once upon a ti..."

{{ 'Once upon a time in a world far far away' | truncate: length: 17, separator: ' ' }}
# => "Once upon a..."

{{ 'And they found that many people were sleeping better.' | truncate: length: 25, omission: '... (continued)' }}
# => "And they f... (continued)"

{{ '<p>Once upon a time in a world far far away</p>' | truncate }}
# => "&lt;p&gt;Once upon a time in a wo..."

{{ '<p>Once upon a time in a world far far away</p>' | truncate: escape: false }}
# => "<p>Once upon a time in a wo..."
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">highlight</h5>
Highlights one or more phrases everywhere in text by inserting it into a :highlighter string. The highlighter can be specialized by passing :highlighter as a single-quoted string with \1 where the phrase is to be inserted (defaults to '<mark>1</mark>')

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'You searched for: rails' | highlight: 'rails' }}
# => You searched for: <mark>rails</mark>

{{ You searched for: ruby, rails, dhh' | highlight: 'actionpack' }}
# => You searched for: ruby, rails, dhh

{{ 'You searched for: rails' | highlight: ['for', 'rails'], highlighter: '<em>\1</em>' }}
# => You searched <em>for</em>: <em>rails</em>

{{ 'You searched for: rails' | highlight: 'rails', highlighter: '<a href="search?q=\1">\1</a>')
# => You searched for: <a href="search?q=rails">rails</a>

{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">excerpt</h5>
Extracts an excerpt from text that matches the first instance of phrase. The :radius option expands the excerpt on each side of the first occurrence of phrase by the number of characters defined in :radius (which defaults to 100). If the excerpt radius overflows the beginning or end of the text, then the :omission option (which defaults to “…”) will be prepended/appended accordingly. Use the :separator option to choose the delimitation. The resulting string will be stripped in any case. If the phrase isn't found, nil is returned.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'This is an example' | excerpt: 'an', radius: 5 }}
# => ...s is an exam...

{{ 'This is an example' | excerpt: 'is', radius: 5 }}
# => This is a...

{{ 'This is an example' | excerpt: 'is' }}
# => This is an example

{{ 'This next thing is an example' | excerpt: 'ex', radius: 2 }}
# => ...next...

{{ 'This is also an example' | excerpt: 'an', radius: 8, omission: '<chop> ' }}
# => <chop> is also an example

{{ 'This is a very beautiful morning' | excerpt: 'very', separator: ' ', radius: 1 }}
# => ...a very beautiful...
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">pluralize</h5>
Attempts to pluralize the singular word unless count is 1. If plural is supplied, it will use that when count is > 1, otherwise it will use the Inflector to determine the plural form.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 1 | pluralize: 'person' }}
# => 1 person

{{ 2 | pluralize: 'person' }}
# => 2 people

{{ 3 | pluralize: 'person', 'users' }}
# => 3 users

{{ 0 | pluralize: 'person' }}
# => 0 people

{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">word_wrap</h5>
Wraps the text into lines no longer than line_width width. This method breaks on the first whitespace character that does not exceed line_width (which is 80 by default).

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'Once upon a time' | word_wrap }}
# => Once upon a time

{{ 'Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding a successor to the throne turned out to be more trouble than anyone could have imagined...' | word_wrap }}
# => Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding\na successor to the throne turned out to be more trouble than anyone could have\nimagined...

{{ 'Once upon a time' | word_wrap: line_width: 8 }}
# => Once\nupon a\ntime

{{ 'Once upon a time' | word_wrap: line_width: 1 }}
# => Once\nupon\na\ntime
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">simple_format</h5>
Returns text transformed into HTML using simple formatting rules. Two or more consecutive newlines(\n\n) are considered as a paragraph and wrapped in <p> tags. One newline (\n) is considered as a linebreak and a <br /> tag is appended. This method does not remove the newlines from the text.

<h6 class="sub-section-title">Options</h6>

+ :sanitize - If false, does not sanitize text.
+ :wrapper_tag - String representing the wrapper tag, defaults to "p"

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{% assign my_text = "Here is some basic text...\n...with a line break." %}

{{ my_text | simple_format }}
# => "<p>Here is some basic text...\n<br />...with a line break.</p>"

{{ my_text | simple_format: {}, wrapper_tag: "div" }}
# => "<div>Here is some basic text...\n<br />...with a line break.</div>"

{% assign more_text = "We want to put a paragraph...\n\n...right there." %}

{{ more_text | simple_format }}
# => "<p>We want to put a paragraph...</p>\n\n<p>...right there.</p>"

{{ "Look ma! A class!" | simple_format: class: 'description' }}
# => "<p class='description'>Look ma! A class!</p>"

{{ "<blink>Unblinkable.</blink>" | simple_format }}
# => "<p>Unblinkable.</p>"

{{ "<blink>Blinkable!</blink> It's true." | simple_format, {}, sanitize: false }}
# => "<p><blink>Blinkable!</blink> It's true.</p>"
{% endraw %}{% endhighlight %}
  </div>
</div>