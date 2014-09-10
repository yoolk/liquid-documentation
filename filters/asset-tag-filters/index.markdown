---
  layout: nav_basics
---

<h2 class="section-title">Asset Tag Filters</h2>
provides methods for generating HTML that links views to assets such as images, javascripts, stylesheets, and feeds. These methods do not verify the assets exist before linking to them.

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
      audio_tag("sound")
      # => <audio src="/audios/sound" />
      audio_tag("sound.wav")
      # => <audio src="/audios/sound.wav" />
      audio_tag("sound.wav", autoplay: true, controls: true)
      # => <audio autoplay="autoplay" controls="controls" src="/audios/sound.wav" />
      audio_tag("sound.wav", "sound.mid")
      # => <audio><source src="/audios/sound.wav" /><source src="/audios/sound.mid" /></audio>
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="auto_discovery_link_tag">auto_discovery_link_tag</h2>

Returns a link tag that browsers and feed readers can use to auto-detect an RSS or Atom feed. The type can either be :rss (default) or :atom. Control the link options in url_for format using the url_options. You can modify the LINK tag itself in tag_options.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      auto_discovery_link_tag
      # => <link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.currenthost.com/controller/action" />
      auto_discovery_link_tag(:atom)
      # => <link rel="alternate" type="application/atom+xml" title="ATOM" href="http://www.currenthost.com/controller/action" />
      auto_discovery_link_tag(:rss, {action: "feed"})
      # => <link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.currenthost.com/controller/feed" />
      auto_discovery_link_tag(:rss, {action: "feed"}, {title: "My RSS"})
      # => <link rel="alternate" type="application/rss+xml" title="My RSS" href="http://www.currenthost.com/controller/feed" />
      auto_discovery_link_tag(:rss, {controller: "news", action: "feed"})
      # => <link rel="alternate" type="application/rss+xml" title="RSS" href="http://www.currenthost.com/news/feed" />
      auto_discovery_link_tag(:rss, "http://www.example.com/feed.rss", {title: "Example RSS"})
      # => <link rel="alternate" type="application/rss+xml" title="Example RSS" href="http://www.example.com/feed" />
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="favicon_link_tag">favicon_link_tag</h2>

Returns a link loading a favicon file. You may specify a different file in the first argument. The helper accepts an additional options hash where you can override “rel” and “type”.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      favicon_link_tag 'myicon.ico'
      # => <link href="/assets/myicon.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image_alt">image_alt</h2>

Returns a string suitable for an html image tag alt attribute. The src argument is meant to be an image file path. The method removes the basename of the file path and the digest, if any. It also removes hyphens and underscores from file names and replaces them with spaces, returning a space-separated, titleized string.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      image_alt('rails.png')
      # => Rails
      image_alt('hyphenated-file-name.png')
      # => Hyphenated file name
      image_alt('underscored_file_name.png')
      # => Underscored file name
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image_tag">image_tag</h2>

Returns an HTML image tag for the source. The source can be a full path or a file.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      image_tag("icon")
      # => <img alt="Icon" src="/assets/icon" />
      image_tag("icon.png")
      # => <img alt="Icon" src="/assets/icon.png" />
      image_tag("icon.png", size: "16x10", alt: "Edit Entry")
      # => <img src="/assets/icon.png" width="16" height="10" alt="Edit Entry" />
      image_tag("/icons/icon.gif", size: "16")
      # => <img src="/icons/icon.gif" width="16" height="16" alt="Icon" />
      image_tag("/icons/icon.gif", height: '32', width: '32')
      # => <img alt="Icon" height="32" src="/icons/icon.gif" width="32" />
      image_tag("/icons/icon.gif", class: "menu_icon")
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
      javascript_include_tag "xmlhr"
      # => <script src="/assets/xmlhr.js?1284139606"></script>

      javascript_include_tag "template.jst", extname: false
      # => <script src="/assets/template.jst?1284139606"></script>

      javascript_include_tag "xmlhr.js"
      # => <script src="/assets/xmlhr.js?1284139606"></script>

      javascript_include_tag "common.javascript", "/elsewhere/cools"
      # => <script src="/assets/common.javascript?1284139606"></script>
      #    <script src="/elsewhere/cools.js?1423139606"></script>

      javascript_include_tag "http://www.example.com/xmlhr"
      # => <script src="http://www.example.com/xmlhr"></script>

      javascript_include_tag "http://www.example.com/xmlhr.js"
      # => <script src="http://www.example.com/xmlhr.js"></script>

    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="audio_tag">audio_tag</h2>

Returns an HTML audio tag for the source. The source can be full path or file that exists in your public audios directory.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      audio_tag("sound")
      # => <audio src="/audios/sound" />
      audio_tag("sound.wav")
      # => <audio src="/audios/sound.wav" />
      audio_tag("sound.wav", autoplay: true, controls: true)
      # => <audio autoplay="autoplay" controls="controls" src="/audios/sound.wav" />
      audio_tag("sound.wav", "sound.mid")
      # => <audio><source src="/audios/sound.wav" /><source src="/audios/sound.mid" /></audio>
    {% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="audio_tag">audio_tag</h2>

Returns an HTML audio tag for the source. The source can be full path or file that exists in your public audios directory.

<div class="panel">
  <div class="panel-body">
    {% highlight html%}{% raw %}
      audio_tag("sound")
      # => <audio src="/audios/sound" />
      audio_tag("sound.wav")
      # => <audio src="/audios/sound.wav" />
      audio_tag("sound.wav", autoplay: true, controls: true)
      # => <audio autoplay="autoplay" controls="controls" src="/audios/sound.wav" />
      audio_tag("sound.wav", "sound.mid")
      # => <audio><source src="/audios/sound.wav" /><source src="/audios/sound.mid" /></audio>
    {% endraw %}{% endhighlight %}
  </div>
</div>