{% raw %}---
title: "Solutions to Donald Cohn's Measure Theory"
layout: page
permalink: /solutions/
---

blah blah

<div class="list__wrapper">
  {% for item in site.data.cohn_toc %}
    <div class="list__item">
      <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="archive__item-title" itemprop="headline">
          <a href="/solutions/chapter{{ item.chapter }}/" rel="permalink">
            Chapter {{ item.chapter }}: {{ item.title }}
          </a>
        </h2>
      </article>
    </div>
  {% endfor %}
</div>
{% endraw %}
