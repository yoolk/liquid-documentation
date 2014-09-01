---
  layout: nav_basics
---
## Variable Tags

Variable Tags are used to create new Liquid variables

- assign
- capture
- increment
- decrement

---

### assign

Creates a new variable

input

{%raw%}
  {% assign my_variable = false %}
  {% if my_variable != true %}
    This statement is valid.
  {% endif %}
{%endraw%}

output

This statement is valid

Use quotations (\"\") to save the variable as a string

input

{%raw%}
  {% assign foo = "bar" %}
  {{ foo }}
{%endraw%}

output

bar

---

### capture

Captures the string inside of the opening and closing tags and assigns it to a variable. Variables created through \{\% capture \%\} are strings

input

{%raw%}
  {% capture my_variable %}I am being captured.{% endcapture %}
  {{ my_variable }}
{%endraw%}

output

I am being captured.

---

### increment

Creates a new number variable, and increases its value by one every time it is called. The initial value is 0.

input

{%raw%}
  {% increment variable %}
  {% increment variable %}
  {% increment variable %}
{%endraw%}

output

0
1
2

Variables created through the increment tag are independent from variables created through assign or capture. <br>

In the example below, a variable named "var" is created through assign. The increment tag is then used several times on a variable with the same name. However, note that the increment tag does not affect the value of "var" that was created through assign.

input

{%raw%}
  {% assign var = 10 %}
  {% increment var %}
  {% increment var %}
  {% increment var %}
  {{ var }}
{%endraw%}

output

0
1
2
10

---

### decrement

Creates a new number variable, and decreases its value by one every time it is called. The initial value is -1.

input

{%raw%}
  {% decrement variable %}
  {% decrement variable %}
  {% decrement variable %}
{%endraw%}

output

-1
-2
-3

Like increment, variables declared inside decrement are independent from variables created through assign or capture.
