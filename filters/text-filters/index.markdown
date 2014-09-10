---
  layout: nav_basics
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
      <li>
        <a href="#rjust">rjust</a>
      </li>
      <li>
        <a href="#ljust">ljust</a>
      </li>
      <li>
        <a href="#underscore">underscore</a>
      </li>

      <li>
        <a href="#dasherize">dasherize</a>
      </li>
      <li>
        <a href="#concat">concat</a>
      </li>
    </ul>
  </div>
</div>

<h5 class="sub-section-title">truncate</h5>
Truncates a given text after a given :length if text is longer than :length (defaults to 30). The last characters will be replaced with the :omission (defaults to “…”) for a total length not exceeding :length.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
truncate("Once upon a time in a world far far away")
# => "Once upon a time in a world..."

truncate("Once upon a time in a world far far away", length: 17)
# => "Once upon a ti..."

truncate("Once upon a time in a world far far away", length: 17, separator: ' ')
# => "Once upon a..."

truncate("And they found that many people were sleeping better.", length: 25, omission: '... (continued)')
# => "And they f... (continued)"

truncate("<p>Once upon a time in a world far far away</p>")
# => "&lt;p&gt;Once upon a time in a wo..."

truncate("<p>Once upon a time in a world far far away</p>", escape: false)
# => "<p>Once upon a time in a wo..."

truncate("Once upon a time in a world far far away") { link_to "Continue", "#" }
# => "Once upon a time in a wo...<a href="#">Continue</a>"
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">highlight</h5>
Highlights one or more phrases everywhere in text by inserting it into a :highlighter string. The highlighter can be specialized by passing :highlighter as a single-quoted string with \1 where the phrase is to be inserted (defaults to '<mark>1</mark>')

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
highlight('You searched for: rails', 'rails')
# => You searched for: <mark>rails</mark>

highlight('You searched for: ruby, rails, dhh', 'actionpack')
# => You searched for: ruby, rails, dhh

highlight('You searched for: rails', ['for', 'rails'], highlighter: '<em>\1</em>')
# => You searched <em>for</em>: <em>rails</em>

highlight('You searched for: rails', 'rails', highlighter: '<a href="search?q=\1">\1</a>')
# => You searched for: <a href="search?q=rails">rails</a>

{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">excerpt</h5>
Extracts an excerpt from text that matches the first instance of phrase. The :radius option expands the excerpt on each side of the first occurrence of phrase by the number of characters defined in :radius (which defaults to 100). If the excerpt radius overflows the beginning or end of the text, then the :omission option (which defaults to “…”) will be prepended/appended accordingly. Use the :separator option to choose the delimitation. The resulting string will be stripped in any case. If the phrase isn't found, nil is returned.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
excerpt('This is an example', 'an', radius: 5)
# => ...s is an exam...

excerpt('This is an example', 'is', radius: 5)
# => This is a...

excerpt('This is an example', 'is')
# => This is an example

excerpt('This next thing is an example', 'ex', radius: 2)
# => ...next...

excerpt('This is also an example', 'an', radius: 8, omission: '<chop> ')
# => <chop> is also an example

excerpt('This is a very beautiful morning', 'very', separator: ' ', radius: 1)
# => ...a very beautiful...
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">pluralize</h5>
Attempts to pluralize the singular word unless count is 1. If plural is supplied, it will use that when count is > 1, otherwise it will use the Inflector to determine the plural form.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
pluralize(1, 'person')
# => 1 person

pluralize(2, 'person')
# => 2 people

pluralize(3, 'person', 'users')
# => 3 users

pluralize(0, 'person')
# => 0 people

{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">word_wrap</h5>
Wraps the text into lines no longer than line_width width. This method breaks on the first whitespace character that does not exceed line_width (which is 80 by default).

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
word_wrap('Once upon a time')
# => Once upon a time

word_wrap('Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding a successor to the throne turned out to be more trouble than anyone could have imagined...')
# => Once upon a time, in a kingdom called Far Far Away, a king fell ill, and finding\na successor to the throne turned out to be more trouble than anyone could have\nimagined...

word_wrap('Once upon a time', line_width: 8)
# => Once\nupon a\ntime

word_wrap('Once upon a time', line_width: 1)
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
my_text = "Here is some basic text...\n...with a line break."

simple_format(my_text)
# => "<p>Here is some basic text...\n<br />...with a line break.</p>"

simple_format(my_text, {}, wrapper_tag: "div")
# => "<div>Here is some basic text...\n<br />...with a line break.</div>"

more_text = "We want to put a paragraph...\n\n...right there."

simple_format(more_text)
# => "<p>We want to put a paragraph...</p>\n\n<p>...right there.</p>"

simple_format("Look ma! A class!", class: 'description')
# => "<p class='description'>Look ma! A class!</p>"

simple_format("<blink>Unblinkable.</blink>")
# => "<p>Unblinkable.</p>"

simple_format("<blink>Blinkable!</blink> It's true.", {}, sanitize: false)
# => "<p><blink>Blinkable!</blink> It's true.</p>"
{% endraw %}{% endhighlight %}
  </div>
</div>

<h5 class="sub-section-title">rjust</h5>
right justify and padd a string

<h5 class="sub-section-title">ljust</h5>
left justify and padd a string

<h5 class="sub-section-title">underscore</h5>
Remove space or forward-slash of the inputed string to underscore.

<h5 class="sub-section-title">dasherize</h5>
Remove space or forward-slash of the inputed string to underscore.

<h5 class="sub-section-title">concat</h5>
Remove space or forward-slash of the inputed string to underscore.

<h5 class="sub-section-title">encode</h5>
Encode the inputed string.