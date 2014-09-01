---
layout: nav_basics
---
### Operators

Liquid has access to all of the logical and comparison operators. These can be used in tags such as [if](#) and [unless](#).

- Basic Operators
- The contains operator

---

Basic Operators

{% raw %}
<table>
  <tr>
    <td>==</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>!=</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>></td>
    <td>equals</td>
  </tr>
  <tr>
    <td><</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>>=</td>
    <td>equals</td>
  </tr>
  <tr>
    <td><=</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>or</td>
    <td>equals</td>
  </tr>
  <tr>
    <td>and</td>
    <td>equals</td>
  </tr>
</table>
{% endraw %}

##### examples:

{% raw %}
  {% if product.title == "Awesome Shoes" %}
      These shoes are awesome!
  {% endif %}
{% endraw %}

Operators can be chained together.

{% raw %}
  {% if product.title == "Awesome Shoes" %}
      These shoes are awesome!
  {% endif %}
{% endraw %}

---

The '''contains''' Operator

contains checks for the presence of a substring inside a string.

{% raw %}
  {% if product.title == "Awesome Shoes" %}
      These shoes are awesome!
  {% endif %}
{% endraw %}

contains can also check for the presence of a string in an array of strings.

{% raw %}
  {% if product.title == "Awesome Shoes" %}
      These shoes are awesome!
  {% endif %}
{% endraw %}

You __cannot__ check for the presence of an object in an array of objects using contains. This will not work:

{% raw %}
  {% if product.title == "Awesome Shoes"% }
      These shoes are awesome!
  {% endif %}
{% endraw %}

This will work:

{% raw %}
  {% assign in_sale_collection = false %}
  {% for collection in product.collections %}
    {% if in_sale_collection == false and collection.title == 'Sale' %}
      {% assign in_sale_collection = true %}
    {% endif %}
  {% endfor %}
  {% if in_sale_collection %}
    One of the collections this product belongs to is the Sale collection.
  {% endif %}
{% endraw %}