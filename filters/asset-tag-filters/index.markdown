---
  layout: nav_basics
  title: Asset Tag Filters
---

<h2 class="section-title">Asset Tag Filters</h2>
Asset Tag filters provide methods for generating HTML that links views to assets such as images, javascripts, stylesheets, and feeds. These methods do not verify the assets exist before linking to them.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#audio_tag">audio_tag</a>
      </li>
      <li>
        <a href="#auto_discovery_link_tag">auto_discovery_link_tag</a>
      </li>
      <li>
        <a href="#favicon_link_tag">favicon_link_tag</a>
      </li>
      <li>
        <a href="#image_alt">image_alt</a>
      </li>
      <li>
        <a href="#image_tag">image_tag</a>
      </li>
      <li>
        <a href="#javascript_include_tag">javascript_include_tag</a>
      </li>
      <li>
        <a href="#stylesheet_link_tag">stylesheet_link_tag</a>
      </li>
      <li>
        <a href="#video_tag">video_tag</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="audio_tag">audio_tag</h2>

Returns an HTML audio tag for the source. The source can be full path or file that exists in your public audios directory.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'sound' | audio_tag }}
# => <audio src="/audios/sound" />

{{ 'sound.wav' | audio_tag }}
# => <audio src="/audios/sound.wav" />

{{ 'sound.wav' | audio_tag: autoplay: true, controls: true }}
# => <audio autoplay="autoplay" controls="controls" src="/audios/sound.wav" />

{{ 'sound.wav' | audio_tag: 'sound.mid' }}
# => <audio><source src="/audios/sound.wav" /><source src="/audios/sound.mid" /></audio>
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="auto_discovery_link_tag">auto_discovery_link_tag</h2>

Returns a link tag that browsers and feed readers can use to auto-detect an RSS or Atom feed. The type can either be :rss (default) or :atom. Control the link options in url_for format using the url_options. You can modify the LINK tag itself in tag_options.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'rss' | auto_discovery_link_tag }}
# => <link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.currenthost.com/controller/action" />

{{ 'atom' | auto_discovery_link_tag }}
# => <link rel="alternate" type="application/atom+xml" title="ATOM" href="http://www.currenthost.com/controller/action" />

{{ 'rss' | auto_discovery_link_tag: 'http://www.example.com/feed.rss', title: 'Example RSS' }}
# => <link rel="alternate" type="application/rss+xml" title="Example RSS" href="http://www.example.com/feed" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="favicon_link_tag">favicon_link_tag</h2>

Returns a link loading a favicon file. You may specify a different file in the first argument. The helper accepts an additional options hash where you can override “rel” and “type”.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'myicon.ico' | favicon_link_tag }}
# => <link href="/assets/myicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image_alt">image_alt</h2>

Returns a string suitable for an html image tag alt attribute. The src argument is meant to be an image file path. It also removes hyphens and underscores from file names and replaces them with spaces, returning a space-separated, titleized string.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
{{ 'rails.png' | image_alt }}
# => Rails

{{ 'hyphenated-file-name.png' | image_alt }}
# => Hyphenated file name

{{ 'underscored_file_name.png' | image_alt }}
# => Underscored file name
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image_tag">image_tag</h2>

Returns an HTML image tag for the source. The source can be a full path or a file.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'icon' | image_tag }}
# => <img alt="Icon" src="/assets/icon" />

{{ 'icon.png' | image_tag }}
# => <img alt="Icon" src="/assets/icon.png" />

{{ 'icon.png' | image_tag: size: '16x10', alt: 'Edit Entry' }}
# => <img src="/assets/icon.png" width="16" height="10" alt="Edit Entry" />

{{ '/icons/icon.gif' | image_tag: size: '16' }}
# => <img src="/icons/icon.gif" width="16" height="16" alt="Icon" />

{{ '/icons/icon.gif' | image_tag: height: '32', width: '32' }}
# => <img alt="Icon" height="32" src="/icons/icon.gif" width="32" />

{{ '/icons/icon.gif' | image_tag: class: 'menu_icon' }}
# => <img alt="Icon" class="menu_icon" src="/icons/icon.gif" />

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="javascript_include_tag">javascript_include_tag</h2>

Returns an HTML script tag for each of the sources provided.

Sources may be paths to JavaScript files. Relative paths are assumed to be relative to assets/javascripts, full paths are assumed to be relative to the document root. Relative paths are idiomatic, use absolute paths only when needed.

When passing paths, the “.js” extension is optional. If you do not want “.js” appended to the path extname: false can be set on the options.

You can modify the HTML attributes of the script tag by passing a hash as the last argument.

When the Asset Pipeline is enabled, you can pass the name of your manifest as source, and include other JavaScript or CoffeeScript files inside the manifest.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'xmlhr' | javascript_include_tag }}
# => <script src="/assets/xmlhr.js?1284139606"></script>

{{ 'template.jst' | javascript_include_tag: extname: false }}
# => <script src="/assets/template.jst?1284139606"></script>

{{ 'xmlhr.js' | javascript_include_tag }}
# => <script src="/assets/xmlhr.js?1284139606"></script>

{{ 'common.javascript' | javascript_include_tag: '/elsewhere/cools' }}
# => <script src="/assets/common.javascript?1284139606"></script>
#    <script src="/elsewhere/cools.js?1423139606"></script>

{{ 'http://www.example.com/xmlhr' | javascript_include_tag }}
# => <script src="http://www.example.com/xmlhr"></script>

{{ 'http://www.example.com/xmlhr.js' | javascript_include_tag }}
# => <script src="http://www.example.com/xmlhr.js"></script>

{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="stylesheet_link_tag">stylesheet_link_tag</h2>

Returns a stylesheet link tag for the sources specified as arguments. If you don't specify an extension, .css will be appended automatically. You can modify the link attributes by passing a hash as the last argument. For historical reasons, the 'media' attribute will always be present and defaults to “screen”, so you must explicitly set it to “all” for the stylesheet(s) to apply to all media types.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'style' | stylesheet_link_tag }}
# => <link href="/assets/style.css" media="screen" rel="stylesheet" />

{{ 'style.css' | stylesheet_link_tag }}
# => <link href="/assets/style.css" media="screen" rel="stylesheet" />

{{ 'http://www.example.com/style.css' | stylesheet_link_tag }}
# => <link href="http://www.example.com/style.css" media="screen" rel="stylesheet" />

{{ 'style' | stylesheet_link_tag: media: 'all' }}
# => <link href="/assets/style.css" media="all" rel="stylesheet" />

{{ 'style' | stylesheet_link_tag: media: 'print' }}
# => <link href="/assets/style.css" media="print" rel="stylesheet" />

{{ 'random.styles' | stylesheet_link_tag: '/css/stylish' }}
# => <link href="/assets/random.styles" media="screen" rel="stylesheet" />
#    <link href="/css/stylish.css" media="screen" rel="stylesheet" />
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="video_tag">video_tag</h2>

Returns an html video tag for the sources. If sources is a string, a single video tag will be returned. If sources is an array, a video tag with nested source tags for each source will be returned. The sources can be full paths or files that exists in your public videos directory.

<div class="panel">
  <div class="panel-body">
{% highlight html%}{% raw %}
{{ 'trailer' | video_tag }}
# => <video src="/videos/trailer" />

{{ 'trailer.ogg' | video_tag }}
# => <video src="/videos/trailer.ogg" />

{{ 'trailer.ogg' | video_tag: controls: true, autobuffer: true }}
# => <video autobuffer="autobuffer" controls="controls" src="/videos/trailer.ogg" />

{{ 'trailer.m4v' | video_tag: size: "16x10", poster: "screenshot.png" }}
# => <video src="/videos/trailer.m4v" width="16" height="10" poster="/assets/screenshot.png" />

{{ '/trailers/hd.avi' | video_tag: size: '16x16' }}
# => <video src="/trailers/hd.avi" width="16" height="16" />

{{ '/trailers/hd.avi' | video_tag: size: '16' }}
# => <video height="16" src="/trailers/hd.avi" width="16" />

{{ '/trailers/hd.avi' | video_tag: height: '32', width: '32' }}
# => <video height="32" src="/trailers/hd.avi" width="32" />

{{ 'trailer.ogg', video_tag: 'trailer.flv' }}
# => <video><source src="/videos/trailer.ogg" /><source src="/videos/trailer.flv" /></video>

{{ 'trailer.ogg', video_tag: 'trailer.flv', size: '160x120' }}
# => <video height="120" width="160"><source src="/videos/trailer.ogg" /><source src="/videos/trailer.flv" /></video>
{% endraw %}{% endhighlight %}
  </div>
</div>