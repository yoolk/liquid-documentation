---
  layout: nav_basics
  title: form - Objects - Yoolk Instant Website Themes
---

<h2 class="section-title">Form</h2>

The <code>form</code> object has the following attributes:

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="posted_successfully">form.posted_successfully?</a>
      </li>
      <li>
        <a href="#errors">form.errors</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="posted_successfully">form.posted_successfully?</h2>

Returns <code>true</code> if a comment by the user was submitted successfully, or <code>false</code> if the form contained errors

<div class="panel">
  <div class="panel-body">
{% highlight html %}{% raw %}
{% if form.posted_successfully? %}
  <div class="successForm contact">
    <p>Thanks for contacting us! We'll get back to you as soon as possible.</p>
  </div>
{% endif %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image">form.errors</h2>

Returns an array of strings if the form was not submitted successfully. The strings returned depend on which fields of the form were left empty or contained errors. Possible values are:

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<ul>
  {% for field in form.errors %}
    <li>
      <span>{{ field }}</span>
      <span>{{ form.errors.messages[field] }}</span>
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
Oops, sorry. We were unable to submit your inquiry because it contained 2 errors. Please correct the following and submit again:

* sender You can't leave this empty
* body You can't leave this empty
  </div>
</div>