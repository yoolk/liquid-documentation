---
  layout: nav_basics
  title: Translate Filters
---

<h2 class="section-title">Translate Filters</h2>

Apply locale translation for the given `key`. `key` must be scoped with your theme name. By default, it will pick up from current listing's locale. **Locales** directory is located inside your theme directory. It's a good idea to organize your locales into multiple `.yml` files.

Be sure to check out the [sample theme](https://github.com/yoolk/yoolk_instant_website_sandbox/tree/master/app/themes/sample).

<div class="panel">
  <div class="panel-body">
{% highlight yaml%}{% raw %}
km:
  sample:
    read_more: 'អានបន្ត'
    my_office: 'ការិយាល័យខ្ញំ'
    links:
      home: 'ទំព័រដើម'
      about_us: 'អំពីយើង'
      contact_us: 'ទំនាក់ទំនងយើង'
      feedback: 'មតិអ្នកប្រើ'
      announcement: 'សេចក្តីប្រកាស'
      announcements: 'សេចក្តីប្រកាស'
      brochures: 'ខិត្តប័ណ្ណ'
      photos: 'រូបថត'
      map: 'ផែនទី'
      menu: 'ម៉ឺនុយ'
      people: 'មនុស្ស'
      products: 'ផលិតផល'
      services: 'សេវាកម្ម'
      reservation: 'ការកក់'
      sign_in: 'ចូលប្រព័ន្ធ'
    people:
      directors: 'នាយក'
      managers: 'អ្នកចាត់ការទូទៅ'
      employees: 'បុគ្គលិក'
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
<h1 class="page-title">{{ 'sample.links.about_us' | translate }}</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>
<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html%}{% raw %}
<h1 class="page-title">អំពីយើង</h1>
{% endraw %}{% endhighlight %}
  </div>
</div>