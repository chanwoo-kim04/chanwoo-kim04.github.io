---
title: "Exercise Solutions"
layout: page
permalink: /solutions/
---

FANCY TITLE

---

### Measure Theory by Donald L. Cohn

<div class="list__wrapper">
  {% for item in site.data.cohn-measure_toc %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="/solutions/cohn-measure/chapter{{ item.chapter }}/" rel="permalink">
            Chapter {{ item.chapter }}: {{ item.title }}
          </a>
        </h2>
      </article>
    </div>
  {% endfor %}
</div>

---

### Principles of Mathematical Analysis by Walter Rudin

<div class="list__wrapper">
  {% for item in site.data.rudin-analysis_toc %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="/solutions/rudin-analysis/chapter{{ item.chapter }}/" rel="permalink">
            Chapter {{ item.chapter }}: {{ item.title }}
          </a>
        </h2>
      </article>
    </div>
  {% endfor %}
</div>
