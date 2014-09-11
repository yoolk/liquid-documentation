---
  layout: nav_basics
---

<h2 class="section-title">Iteration Tags</h2>

Iteration Tags are used to run a block of code repeatedly

<div class="panel">
  <div class="panel-body">
    <ul>
      <li>
        <a href="#for">for</a>
      </li>
      <li>
        <a href="#cycle">cycle</a>
      </li>
      <li>
        <a href="#tablerow">tablerow</a>
      </li>
    </ul>
  </div>
</div>

<h2 class="tags" id="for">for</h2>

Executes a block of code repeatedly. For a full list of attributes available within a for loop, see forloop (object). <br>

For loops can only output a maximum of 50 results per page. In cases where there are more than 50 results, use the paginate tag to split them across multiple pages.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
  hat shirt pants
{% endraw %}{% endhighlight %}
  </div>
</div>

<blockquote>
  <h2>parameters for</h2>
  <h5 class="sub-section-title">limit</h5>
  <p>Exits the for loop at a specific index</p>
  <div class="panel">
    <div class="panel-header">
      <h3>Input</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array limit:2 %}
  {{ item }}
{% endfor %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-header">
      <h3>Output</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
  1 2
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">offset</h5>
  <p>Starts the for loop at a specific index.</p>
  <div class="panel">
    <div class="panel-header">
      <h3>Input</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array offset:2 %}
  {{ item }}
{% endfor %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-header">
      <h3>Output</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
  3 4
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">range</h5>
  <p>Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.</p>
  <div class="panel">
    <div class="panel-header">
      <h3>Input</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
{% assign num = 4 %}
{% for i in (1..num) %}
  {{ i }}
{% endfor %}

{% for i in (3..5) %}
  {{ i }}
{% endfor %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-header">
      <h3>Output</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
1 2 3 4
3 4 5
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">reversed</h5>
  <p>Reverses the order of the for loop.</p>
  <div class="panel">
    <div class="panel-header">
      <h3>Input</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
<!-- if array = [1,2,3,4,5,6] -->
{% for item in array reversed %}
  {{ item }}
{% endfor %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-header">
      <h3>Output</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
  6 5 4 3 2 1
{% endraw %}{% endhighlight %}
    </div>
  </div>
</blockquote>


<h2 class="tags" id="cycle">cycle</h2>

Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time cycle is called, the next string that was passed as a parameter is output. <br>

cycle must be used within a for loop block.

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% cycle 'one', 'two', 'three' %}
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight django%}{% raw %}
one
two
three
one
{% endraw %}{% endhighlight %}
  </div>
</div>

Uses for cycle include:
+ applying odd/even classes to rows in a table
+ applying a unique class to the last product thumbnail in a row

<blockquote>
  <h2>parameters cycle</h2>
  <p>cycle accepts a parameter called cycle group in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.
The example below shows why cycle groups are necessary when there are multiple instances of the cycle block.</p>
  <div class="panel">
    <div class="panel-body">
{% highlight django%}{% raw %}
<ul>
  {% for product in collections.collection-1.products %}
    <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | product_img_url: 'medium' }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>
<ul>
  {% for product in collections.collection-2.products %}
    <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | product_img_url: 'medium' }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <p>In the code above, if the first collection only has two products, the second collection loop will continue the cycle where the first one left off. This will result in this undesired output:</p>

  <div class="panel">
    <div class="panel-body">
{% highlight django%}{% raw %}
<ul style="clear:both">
  <li></li>
</ul>
<ul>
  <li></li>
  <li class="last"></li>
  <li style="clear:both"></li>
  <li></li>
</ul>
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-body">
{% highlight django%}{% raw %}
<ul>
  {% for product in collections.collection-1.products %}
    <li{% cycle 'group1': ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | product_img_url: "medium" }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>
<ul>
  {% for product in collections.collection-2.products %}
    <li{% cycle 'group2': ' style="clear:both;"', '', '', ' class="last"' %}>
      <a href="{{ product.url | within: collection }}">
        <img src="{{ product.featured_image.src | product_img_url: "medium" }}" alt="{{ product.featured_image.alt }}" />
      </a>
    </li>
  {% endfor %}
</ul>
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <p>With the code above, the two cycle blocks are independent of each other. The result is shown below:</p>

  <div class="panel">
    <div class="panel-body">
{% highlight html %}{% raw %}
<ul>
  <li style="clear:both"></li>
  <li></li>
</ul>
<!-- new cycle group starts! -->
<ul>
  <li style="clear:both"></li>
  <li></li>
  <li></li>
  <li class="last"></li>
</ul>
{% endraw %}{% endhighlight %}
    </div>
  </div>
</blockquote>

<h2 class="tags" id="tablerow">tablerow</h2>

Generates an HTML <table>. Must be wrapped in an opening <table> and closing </table> HTML tags. For a full list of attributes available within a tablerow loop, see tablerow (object)

<div class="panel">
  <div class="panel-header">
    <h3>Input</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<table>
  {% tablerow product in collection.products %}
    {{ product.title }}
  {% endtablerow %}
</table>
{% endraw %}{% endhighlight %}
  </div>
</div>

<div class="panel">
  <div class="panel-header">
    <h3>Output</h3>
  </div>
  <div class="panel-body">
{% highlight html %}{% raw %}
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
    <td class="col3">
      Batman Poster
    </td>
    <td class="col4">
      Bullseye Shirt
    </td>
    <td class="col5">
      Another Classic Vinyl
    </td>
    <td class="col6">
      Awesome Jeans
    </td>
  </tr>
</table>
{% endraw %}{% endhighlight %}
  </div>
</div>

<blockquote>
  <h2>parameters tablerow</h2>
  <h5 class="sub-section-title">cols</h5>
  <p>Defines how many columns the tables should have.</p>
  <div class="panel">
    <div class="panel-header">
      <h3>Input</h3>
    </div>
    <div class="panel-body">
{% highlight django%}{% raw %}
{% tablerow product in collection.products cols:2 %}
  {{ product.title }}
{% endtablerow %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <div class="panel">
    <div class="panel-header">
      <h3>Output</h3>
    </div>
    <div class="panel-body">
{% highlight html %}{% raw %}
<table>
  <tr class="row1">
    <td class="col1">
      Cool Shirt
    </td>
    <td class="col2">
      Alien Poster
    </td>
  </tr>
  <tr class="row2">
    <td class="col1">
      Batman Poster
    </td>
    <td class="col2">
      Bullseye Shirt
    </td>
  </tr>
  <tr class="row3">
    <td class="col1">
      Another Classic Vinyl
    </td>
    <td class="col2">
      Awesome Jeans
    </td>
  </tr>
</table>
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">limit</h5>
  <p>Exits the tablerow after a specific index</p>
  <div class="panel">
    <div class="panel-body">
{% highlight django%}{% raw %}
{% tablerow product in collection.products cols:2 limit:3 %}
  {{ product.title }}
{% endtablerow %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">offset</h5>
  <p>Starts the tablerow after a specific index.</p>
  <div class="panel">
    <div class="panel-body">
{% highlight html %}{% raw %}
{% tablerow product in collection.products cols:2 offset:3 %}
  {{ product.title }}
{% endtablerow %}
{% endraw %}{% endhighlight %}
    </div>
  </div>

  <h5 class="sub-section-title">range</h5>
  <p>Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.</p>
  <div class="panel">
    <div class="panel-body">
{% highlight html %}{% raw %}
<!--variable number example-->

{% assign num = 4 %}
<table>
  {% tablerow i in (1..num) %}
    {{ i }}
  {% endtablerow %}
</table>

<!--literal number example-->

<table>
  {% tablerow i in (3..5) %}
    {{ i }}
  {% endtablerow %}
</table>
{% endraw %}{% endhighlight %}
    </div>
  </div>
</blockquote>