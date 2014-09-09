---
  layout: nav_basics
---

<h2 class="section-title">Tags</h2>

Liquid tags are the programming logic that tells templates what to do. Tags are wrapped in: {% raw %}{% %}{% endraw %}.<br>

Certain tags, such as for and cycle can take on parameters. Details for each parameter can be found in their respective sections. <br>

Tags can be broken down into four categories:

<div class="panel">
  <div class="panel-body">
    {% for nav in site.data.navs %}
      {% if nav.title == "Tags" %}
        <ul>
          {% for subcategory in nav.subcategory %}
            <li>
              <a href="/tags{{subcategory.href}}">{{subcategory.name}}</a>
            </li>
          {% endfor %}
        </ul>
      {% endif %}
    {% endfor %}
  </div>
</div>