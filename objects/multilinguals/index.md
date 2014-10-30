---
  layout: nav_basics
  title: multilingual - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Multilingual</h2>

The <code>multilingual</code> object has attributes the same as [<code>listing</code>]({{ '/objects/listing' | prepend: site.baseurl }}) object:


<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  {% for multilingual in listing.multilinguals %}
    <li>
      {{ multilingual.language.name }}
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django %}{% raw %}
<ul>
  <li>Khmer</li>
  <li>English</li>
</ul>
{% endraw %}{% endhighlight %}
  </div>
</div>