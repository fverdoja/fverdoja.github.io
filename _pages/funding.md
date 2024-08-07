---
layout: page
title: funding
permalink: /funding/
description: The research I conduct has been funded by these sources
nav: true
nav_order: 3
display_categories: [current, past]
horizontal: true
---

<!-- pages/funding.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized fundings -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_fundings = site.funding | where: "category", category %}
  {% assign sorted_fundings = categorized_fundings | sort: "start_date" | reverse %}
  <!-- Generate cards for each funding -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for funding in sorted_fundings %}
      {% include fundings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for funding in sorted_fundings %}
      {% include fundings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display fundings without categories -->

{% assign sorted_fundings = site.funding | sort: "start_date" | reverse %}

  <!-- Generate cards for each funding -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for funding in sorted_fundings %}
      {% include fundings_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for funding in sorted_fundings %}
      {% include fundings.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
