---
  layout: nav_basics
---

<h2 class="section-title">Asset URL Filters</h2>
provides methods for generating asset paths and urls.

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#asset_path">asset_path</a>
      </li>
      <li>
        <a href="#asset_url">asset_url</a>
      </li>
      <li>
        <a href="#audio_path">audio_path</a>
      </li>
      <li>
        <a href="#audio_url">audio_url</a>
      </li>
      <li>
        <a href="#font_path">font_path</a>
      </li>
      <li>
        <a href="#font_url">font_url</a>
      </li>
      <li>
        <a href="#image_path">image_path</a>
      </li>
      <li>
        <a href="#image_url">image_url</a>
      </li>
      <li>
        <a href="#javascript_path">javascript_path</a>
      </li>
      <li>
        <a href="#javascript_url">javascript_url</a>
      </li>
      <li>
        <a href="#stylesheet_path">stylesheet_path</a>
      </li>
      <li>
        <a href="#stylesheet_url">stylesheet_url</a>
      </li>
      <li>
        <a href="#video_path">video_path</a>
      </li>
      <li>
        <a href="#video_url">video_url</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="asset_path">asset_path</h2>

Computes the path to asset in public directory. If :type options is set, a file extension will be appended and scoped to the corresponding public directory.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
asset_path "application.js"
# => /application.js

asset_path "application", type: :javascript
# => /javascripts/application.js

asset_path "application", type: :stylesheet
# => /stylesheets/application.css

asset_path "http://www.example.com/js/xmlhr.js"
# => http://www.example.com/js/xmlhr.js
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="asset_url">asset_url</h2>

Computes the full URL to an asset in the public directory. This will use asset_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="audio_path">audio_path</h2>

Computes the path to an audio asset in the public audios directory. Full paths from the document root will be passed through. Used internally by audio_tag to build the audio path.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
audio_path("horse")
# => /audios/horse

audio_path("horse.wav")
# => /audios/horse.wav

audio_path("sounds/horse.wav")
# => /audios/sounds/horse.wav

audio_path("/sounds/horse.wav")
# => /sounds/horse.wav

audio_path("http://www.example.com/sounds/horse.wav")
# => http://www.example.com/sounds/horse.wav
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="audio_url">audio_url</h2>

Computes the full URL to an audio asset in the public audios directory. This will use audio_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="font_path">font_path</h2>

Computes the path to a font asset. Full paths from the document root will be passed through.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
font_path("font")
# => /assets/font

font_path("font.ttf")
# => /assets/font.ttf

font_path("dir/font.ttf")
# => /assets/dir/font.ttf

font_path("/dir/font.ttf")
# => /dir/font.ttf

font_path("http://www.example.com/dir/font.ttf")
# => http://www.example.com/dir/font.ttf
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="font_url">font_url</h2>

Computes the full URL to a font asset. This will use font_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="image_path">image_path</h2>

Computes the path to an image asset. Full paths from the document root will be passed through. Used internally by image_tag to build the image path.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
image_path("edit")
# => "/assets/edit"

image_path("edit.png")
# => "/assets/edit.png"

image_path("icons/edit.png")
# => "/assets/icons/edit.png"

image_path("/icons/edit.png")
# => "/icons/edit.png"

image_path("http://www.example.com/img/edit.png")
# => "http://www.example.com/img/edit.png"
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="image_url">image_url</h2>

Computes the full URL to an image asset. This will use image_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="javascript_path">javascript_path</h2>

Computes the path to a javascript asset in the public javascripts directory. If the source filename has no extension, .js will be appended (except for explicit URIs) Full paths from the document root will be passed through. Used internally by javascript_include_tag to build the script path.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
javascript_path "xmlhr"
# => /javascripts/xmlhr.js

javascript_path "dir/xmlhr.js"
# => /javascripts/dir/xmlhr.js

javascript_path "/dir/xmlhr"
# => /dir/xmlhr.js

javascript_path "http://www.example.com/js/xmlhr"
# => http://www.example.com/js/xmlhr

javascript_path "http://www.example.com/js/xmlhr.js" # => http://www.example.com/js/xmlhr.js
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="javascript_url">javascript_url</h2>

Computes the full URL to a javascript asset in the public javascripts directory. This will use javascript_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="stylesheet_path">stylesheet_path</h2>

Computes the path to a stylesheet asset in the public stylesheets directory. If the source filename has no extension, .css will be appended (except for explicit URIs). Full paths from the document root will be passed through. Used internally by stylesheet_link_tag to build the stylesheet path.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
stylesheet_path "style"
# => /stylesheets/style.css

stylesheet_path "dir/style.css"
# => /stylesheets/dir/style.css

stylesheet_path "/dir/style.css"
# => /dir/style.css

stylesheet_path "http://www.example.com/css/style"
# => http://www.example.com/css/style

stylesheet_path "http://www.example.com/css/style.css"
# => http://www.example.com/css/style.css
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="stylesheet_url">stylesheet_url</h2>

Computes the full URL to a stylesheet asset in the public stylesheets directory. This will use stylesheet_path internally, so most of their behaviors will be the same.

<h2 class="tags" id="video_path">video_path</h2>

Computes the path to a video asset in the public videos directory. Full paths from the document root will be passed through. Used internally by video_tag to build the video path.

<div class="panel">
  <div class="panel-body">
{% highlight ruby %}{% raw %}
video_path("hd")
# => /videos/hd

video_path("hd.avi")
# => /videos/hd.avi

video_path("trailers/hd.avi")
# => /videos/trailers/hd.avi

video_path("/trailers/hd.avi")
# => /trailers/hd.avi

video_path("http://www.example.com/vid/hd.avi")
# => http://www.example.com/vid/hd.avi
{% endraw %}{% endhighlight %}
  </div>
</div>

<h2 class="tags" id="video_url">video_url</h2>

Computes the full URL to a video asset in the public videos directory. This will use video_path internally, so most of their behaviors will be the same.