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