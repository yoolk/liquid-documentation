<h2 class="tags" id="google_remarketing_tag">google_remarketing_tag</h2>
Allows output of Google Remarketing script tag in the web document. It outputs when the current listing has google remarketing.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
    {% highlight html %}{% raw %}
      {% google_remarketing_tag %}
    {% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
    {% highlight html %}{% raw %}
<script type="text/javascript">
  /* <![CDATA[ */
  var google_conversion_id = xxxxxxxx;
  var google_custom_params = window.google_tag_params;
  var google_remarketing_only = true;
  /* ]]> */
</script>
    {% endraw %}{% endhighlight %}
  </div>
</div>
