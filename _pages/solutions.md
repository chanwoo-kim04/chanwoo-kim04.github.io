---
title: "Exercise Solutions"
layout: page
permalink: /solutions/
author_profile: true
---

This page contains a complete list of my exercise solutions, organized by textbook. 
Please select your desired book and chapter below.

---

### Solutions to Donald Cohn's Measure Theory

<div class="list__wrapper">
  {% for item in site.data.cohn-measure_toc %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="/solutions/cohn/chapter{{ item.chapter }}/" rel="permalink">
            Chapter {{ item.chapter }}: {{ item.title }}
          </a>
        </h2>
      </article>
    </div>
  {% endfor %}
</div>

---

### Solutions to Rudin's Principles of Mathematical Analysis

<div class="list__wrapper">
  {% for item in site.data.rudin-analysis_toc %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="/solutions/rudin/chapter{{ item.chapter }}/" rel="permalink">
            Chapter {{ item.chapter }}: {{ item.title }}
          </a>
        </h2>
      </article>
    </div>
  {% endfor %}
</div>
