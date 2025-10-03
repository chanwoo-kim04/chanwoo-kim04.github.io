---
title: "Exercise Solutions"
layout: single
permalink: /solutions/
author_profile: true
---

This page contains a complete list of my exercise solutions, organized by textbook. 
Please select your desired book and chapter below.

---

<div class="solution-accordion">
  <div class="accordion-header text-button">
    <span class="accordion-title">
      <h2> Solution to Cohn's Measure Theory</h2>
    </span>
    <span class="accordion-indicator">▼</span>
  </div>
  <div class="accordion-panel">
    <div class="list__wrapper">
      {% for item in site.data.cohn-measure_toc %}
        <div class="list__item">
          <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
            <h3 class="archive__item-title" itemprop="headline">
              <a href="/solutions/cohn-measure/chapter{{ item.chapter }}/" rel="permalink">
                Chapter {{ item.chapter }}: {{ item.title }}
              </a>
            </h3>
          </article>
        </div>
      {% endfor %}
    </div>
  </div>
</div>

<div class="solution-accordion">
  <div class="accordion-header text-button">
    <span class="accordion-title">
      <h2>Solution to Rudin's Analysis</h2>
    </span>
    <span class="accordion-indicator">▼</span>
  </div>
  <div class="accordion-panel">
    <div class="list__wrapper">
      {% for item in site.data.rudin-analysis_toc %}
        <div class="list__item">
          <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
            <h3 class="archive__item-title" itemprop="headline">
              <a href="/solutions/rudin-analysis/chapter{{ item.chapter }}/" rel="permalink">
                Chapter {{ item.chapter }}: {{ item.title }}
              </a>
            </h3>
          </article>
        </div>
      {% endfor %}
    </div>
  </div>
</div>
