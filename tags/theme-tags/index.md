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
{% paginate collection.products by 5 %}
  {% for product in collection.products %}
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