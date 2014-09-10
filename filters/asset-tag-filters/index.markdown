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
        <a href="#objects">auto_discovery_link_tag</a>
      </li>
      <li>
        <a href="#filters">favicon_link_tag</a>
      </li>
      <li>
        <a href="#tags">image_alt</a>
      </li>
      <li>
        <a href="#objects">image_tag</a>
      </li>
      <li>
        <a href="#filters">javascript_include_tag</a>
      </li>
      <li>
        <a href="#objects">stylesheet_link_tag</a>
      </li>
      <li>
        <a href="#filters">video_tag</a>
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