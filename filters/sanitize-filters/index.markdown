---
  layout: nav_basics
---

<h2 class="section-title">Sanitize Filters</h2>
provides a set of methods for scrubbing text of undesired HTML elements. These helper methods extend Action View making them callable within your template files.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#strip_tags">strip_tags</a>
      </li>
      <li>
        <a href="#strip_links">strip_links</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="strip_tags">strip_tags</h2>

Strips all HTML tags from the html, including comments. This uses the html-scanner tokenizer and so its HTML parsing ability is limited by that of html-scanner.

<div class="panel">
  <div class="panel-body">
    {% highlight ruby %}{% raw %}
      strip_tags("Strip <i>these</i> tags!")
      # => Strip these tags!

      strip_tags("<b>Bold</b> no more!  <a href='more.html'>See more here</a>...")
      # => Bold no more!  See more here...

      strip_tags("<div id='top-bar'>Welcome to my website!</div>")
      # => Welcome to my website!
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="strip_links">strip_links</h2>

Strips all link tags from text leaving just the link text.

<div class="panel">
  <div class="panel-body">
    {% highlight ruby %}{% raw %}
      strip_links('<a href="http://www.rubyonrails.org">Ruby on Rails</a>')
      # => Ruby on Rails

      strip_links('Please e-mail me at <a href="mailto:me@email.com">me@email.com</a>.')
      # => Please e-mail me at me@email.com.

      strip_links('Blog: <a href="http://www.myblog.com/" class="nav" target=\"_blank\">Visit</a>.')
      # => Blog: Visit.
    {% endraw %}{% endhighlight %}
  </div>
</div>