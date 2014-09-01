---
  layout: nav_basics
---

## Control Flow Tags

Control Flow tags determine which block of code should be executed based on different conditions.

- if
- elsif \/ else
- case\/when
- unless

---

### if

Executes a block of code only if a certain condition is met

input

{% raw %}
  {% if product.title == 'Awesome Shoes' %}
      These shoes are awesome!
  {% endif %}
{% endraw %}

output

{% raw %}
  These shoes are awesome!
{% endraw %}

---

### elsif / else

Adds more conditions within an if or unless block.

input

{% raw %}
  \<!-- If customer.name = 'anonymous' \-->
  {% if customer.name == 'kevin' %}
    Hey Kevin!
  {% elsif customer.name == 'anonymous' %}
    Hey Anonymous!
  {% else %}
    Hi Stranger!
  {% endif %}
{% endraw %}

output

{% raw %}
  Hey Anonymous!
{% endraw %}

---

### case/when

Creates a switch statement to compare a variable with different values. case initializes the switch statement, and when compares its values.

input

{% raw %}
  {% assign handle = 'cake' %}
  {% case handle %}
    {% when 'cake' %}
       This is a cake
    {% when 'cookie' %}
       This is a cookie
    {% else %}
       This is not a cake nor a cookie
  {% endcase %}
{% endraw %}

output

{% raw %}
  This is a cake
{% endraw %}

---

### unless

Similar to if, but executes a block of code only if a certain condition is not met

input

{% raw %}
  {% unless product.title == 'Awesome Shoes' %}
    These shoes are not awesome.
  {% endunless %}
{% endraw %}

output

{% raw %}
  These shoes are not awesome.
{% endraw %}

This would be the equivalent of doing the following:

{% raw %}
  {% if product.title != 'Awesome Shoes' %}
    These shoes are not awesome.
  {% endif %}
{% endraw %}