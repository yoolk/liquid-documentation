---
  layout: nav_basics
---

## Iteration Tags

Iteration Tags are used to run a block of code repeatedly

- for
- cycle
- tablerow

---

### for

Executes a block of code repeatedly. For a full list of attributes available within a for loop, see forloop (object). <br>

For loops can only output a maximum of 50 results per page. In cases where there are more than 50 results, use the paginate tag to split them across multiple pages.

input

{% raw %}
  {% for product in collection.products %}
       {{ product.title }}
   {% endfor %}
{% endraw %}

output

{% raw %}
  hat shirt pants
{% endraw %}

> parameters for
>
> limit
> ---
> Exits the for loop at a specific index
> input
>  \<!-- if array = [1,2,3,4,5,6] \-->
>  {% for item in array limit:2 %}
>    {{ item }}
>  {% endfor %}
> output
> 1 2
> offset
> ---
> Starts the for loop at a specific index
> input
>  \<!-- if array = [1,2,3,4,5,6] \-->
>  {% for item in array limit:2 %}
>    {{ item }}
>  {% endfor %}
> output
> 1 2
> range
> ---
> input
>  \<!-- if array = [1,2,3,4,5,6] \-->
>  {% for item in array limit:2 %}
>    {{ item }}
>  {% endfor %}
> output
> 1 2
> reversed
> ---
> input
>  \<!-- if array = [1,2,3,4,5,6] \-->
>  {% for item in array limit:2 %}
>    {{ item }}
>  {% endfor %}
> output
> 1 2
---

### cycle

Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time cycle is called, the next string that was passed as a parameter is output. <br>

cycle must be used within a for loop block.

input

{% raw %}
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
{% endraw %}

output

{% raw %}
  one
  two
  three
  one
{% endraw %}
Uses for cycle include:
+ applying odd/even classes to rows in a table
+ applying a unique class to the last product thumbnail in a row

> parameters cycle
> cycle accepts a parameter called cycle group in cases where you need multiple cycle blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.
The example below shows why cycle groups are necessary when there are multiple instances of the cycle block.
> input
>  {% raw %}<ul>
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
    </ul> {% endraw %}
> In the code above, if the first collection only has two products, the second collection loop will continue the cycle where the first one left off. This will result in this undesired output:
> {% raw %}<ul style="clear:both">
>    <li></li>
>  </ul>
> <ul>
>    <li></li>
>    <li class="last"></li>
>    <li style="clear:both"></li>
>    <li></li>
>  </ul>{% endraw %}
>
> To avoid this, cycle groups are used for each cycle block, as shown below.
> {% raw %}<ul>
>  {% for product in collections.collection-1.products %}
>    <li{% cycle 'group1': ' style="clear:both;"', '', '', ' class="last"' %}>
>      <a href="{{ product.url | within: collection }}">
>        <img src="{{ product.featured_image.src | product_img_url: "medium" }}" alt="{{ product.featured_image.alt }}" />
>      </a>
>    </li>
>  {% endfor %}
>  </ul>
> <ul>
>  {% for product in collections.collection-2.products %}
>    <li{% cycle 'group2': ' style="clear:both;"', '', '', ' class="last"' %}>
>      <a href="{{ product.url | within: collection }}">
>        <img src="{{ product.featured_image.src | product_img_url: "medium" }}" alt="{{ product.featured_image.alt }}" />
>      </a>
>    </li>
>  {% endfor %}
>  </ul>{% endraw %}
> With the code above, the two cycle blocks are independent of each other. The result is shown below:
> <ul>
>    <li style="clear:both"></li>
>    <li></li>
>  </ul>
>  <!-- new cycle group starts! -->
>  <ul>
>    <li style="clear:both"></li>
>    <li></li>
>    <li></li>
>    <li class="last"></li>
>  </ul>

---

### tablerow

Generates an HTML <table>. Must be wrapped in an opening <table> and closing </table> HTML tags. For a full list of attributes available within a tablerow loop, see tablerow (object)

input

{% raw %}
  <table>
  {% tablerow product in collection.products %}
    {{ product.title }}
  {% endtablerow %}
  </table>
{% endraw %}

output
<blockquote>
  {% highlight html %}
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
  {% endhighlight %}
</blockquote>

> parameters tablerow
>
> cols
> ---
> Defines how many columns the tables should have.
> input
> {% tablerow product in collection.products cols:2 %}
>    {{ product.title }}
>  {% endtablerow %}
> output
> <table>
>    <tr class="row1">
>        <td class="col1">
>            Cool Shirt
>        </td>
>        <td class="col2">
>            Alien Poster
>        </td>
>    </tr>
>    <tr class="row2">
>        <td class="col1">
>            Batman Poster
>        </td>
>        <td class="col2">
>            Bullseye Shirt
>        </td>
>    </tr>
>    <tr class="row3">
>        <td class="col1">
>            Another Classic Vinyl
>        </td>
>        <td class="col2">
>            Awesome Jeans
>        </td>
>    </tr>
>  </table>
> limit
> ---
> Exits the tablerow after a specific index
> {% tablerow product in collection.products cols:2 limit:3 %}
>    {{ product.title }}
>  {% endtablerow %}
> offset
> ---
> Starts the tablerow after a specific index.
> {% tablerow product in collection.products cols:2 offset:3 %}
>    {{ product.title }}
>  {% endtablerow %}
> range
> ---
> Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers
> {% highlight html%}{% raw %}<!--variable number example\-->
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
> {% endraw %}{% endhighlight %}