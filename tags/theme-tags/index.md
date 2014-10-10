---
  layout: nav_basics
  title: Theme Tags - Tags - Yoolk Instant Website Themes
---
<h2 class="section-title">Theme Tags</h2>
Theme Tags have various functions, including:

* Outputting template-specific HTML markup.
* Splitting a returned array into multiple pages.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#comment">comment</a>
      </li>
      <li>
        <a href="#include">include</a>
      </li>
      <li>
        <a href="#paginate">paginate</a>
      </li>
      <li>
        <a href="#raw">raw</a>
      </li>
      <li>
        <a href="#form">form</a>
      </li>
      <li>
        <a href="#draft-stamp">Draft Stamp</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="comment">comment</h2>

Allows you to leave un-rendered code inside a Liquid template. Any text within the opening and closing `comment` blocks will not be output, and any Liquid code within will not be executed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
My name is {% comment %}super{% endcomment %} Yoolk.
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
My name is Yoolk.
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="include">include</h2>

Inserts a partial template from a theme.

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% include 'services/item' %}
{% endraw %}{% endhighlight %}
  </div>
</div>

Note that the **.liquid** extension is omitted in the above code.

When a partial template is included, the code inside it will have access to the variables within its parent template.

<h5 class="sub-section-title" id="with">with</h5>
The `with` parameter assigns a value to a variable inside a snippet that shares the same name as the snippet.

For example, we can have a snippet named *color.liquid* which contains the following:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
color: '{{ color }}'
shape: '{{ shape }}'
{% endraw %}{% endhighlight %}
  </div>
</div>

Within **theme.liquid**, we can include the **color.liquid** snippet as follows:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
{% assign shape = 'circle' %}
{% include 'color' %}
{% include 'color' with 'red' %}
{% include 'color' with 'blue' %}
{% assign shape = 'square' %}
{% include 'color' with 'red' %}
{% endraw %}{% endhighlight %}
  </div>
</div>

The output will be:

<div class="panel">
  <div class="panel-body">
{% highlight django%}{% raw %}
color: shape: 'circle'
color: 'red' shape: 'circle'
color: 'blue' shape: 'circle'
color: 'red' shape: 'square'
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="paginate">paginate</h2>

Splitting products, and images across multiple pages is a necessary component of theme design as you are limited to 50 results per page in any [for]({{ '/tags/iteration-tags/#for' | prepend: site.baseurl }}) loop.

The `paginate` tag works in conjunction with the `for` tag to split content into numerous pages. It must wrap a `for` tag block that loops through an array, as shown in the example below:

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% paginate listing.products by 5 %}
  {% for product in paginate.collection %}
    <!--show product details here -->
  {% endfor %}
{% endpaginate %}
{% endraw %}{% endhighlight %}
  </div>
</div>

The `by` parameter is followed by an integer **between 1 and 50** that tells the `paginate` tag how many results it should output per page.

Within `paginate` tags, you can access attributes of the [paginate]({{ '/objects/paginate' | prepend: site.baseurl }}) object. This includes the attributes to output the links required to navigate within the generated pages.

<h2 class="tags" id="raw">raw</h2>

Allows output of Liquid code on a page without being parsed.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
<pre>
&#123;&#37; raw &#37;&#125;{% raw %}{{ 5 | plus: 6 }}{% endraw %}&#123;&#37; endraw &#37;&#125; is equal to 11.
</pre>
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{{ 5 | plus: 6 }} is equal to 11.
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="form">form</h2>

Creates an HTML <code><form></code> element with all the necessary attributes (action, id, etc.) and <code>&#60;input&#62;</code> to submit the form successfully. Moreover, you can pass <code>contact</code>, <code>feedback</code>, and <code>reservation</code> to<code>form</code> tag.

Find out more about [form]({{ '/objects/form' | prepend: site.baseurl }}) object.

<h6 class="sub-section-title">Parameters <code>contact</code></h6>

Generates a contact form on the contact template.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% form 'contact' %}
...
{% endform %}
{% endraw %}
{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<form accept-charset="UTF-8" method="post" class="contact-form" id="contact-form" action="/contact_us?locale=en&theme=sample">
<div style="margin:0;padding:0;display:inline">
<input name="utf8" type="hidden" value="✓">
<input name="authenticity_token" type="hidden" value="cx6VZRkR8wuvy9G3eDbqnjRzUVTBb9ocLZ6X82ehy8A=">
</div>
...
</form>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h6 class="sub-section-title">Parameters <code>reservation</code></h6>

Generates a reservation form on the reservation template.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% form 'reservation' %}
...
{% endform %}
{% endraw %}
{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<form accept-charset="UTF-8" method="post" class="reservation-form" id="reservation-form" action="/reservation?locale=en&theme=sample">
<div style="margin:0;padding:0;display:inline">
<input name="utf8" type="hidden" value="✓">
<input name="authenticity_token" type="hidden" value="cx6VZRkR8wuvy9G3eDbqnjRzUVTBb9ocLZ6X82ehy8A=">
</div>
...
</form>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h6 class="sub-section-title">Parameters <code>feedback</code></h6>

Generates a feedback form on the feedback template.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
{% form 'feedback' %}
...
{% endform %}
{% endraw %}
{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<form accept-charset="UTF-8" method="post" class="feedback-form" id="feedback-form" action="/feedback?locale=en&theme=sample">
<div style="margin:0;padding:0;display:inline">
<input name="utf8" type="hidden" value="✓">
<input name="authenticity_token" type="hidden" value="cx6VZRkR8wuvy9G3eDbqnjRzUVTBb9ocLZ6X82ehy8A=">
</div>
...
</form>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="draft-stamp">Draft Stamp</h2>

Allows output of draft image on the web document.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">

{% highlight html %}{% raw %}
{% draft_stamp %}
# => <img alt="Draft" src="http://www.example.com/draft.png" style="position: absolute; top: 0; right: 0; z-index: 9999;" />

{% draft_stamp 'new-draft.png' %}
# => <img alt="New draft" src="http://www.example.com/new-draft.png" style="position: absolute; top: 0; right: 0; z-index: 9999;" />
{% endraw %}{% endhighlight %}

  </div>
</div>