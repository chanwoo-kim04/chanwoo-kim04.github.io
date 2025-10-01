{% raw %}---
title: "Exercise Solutions"
layout: page
permalink: /solutions/
---

이 페이지는 제가 작성한 교재별 연습문제 풀이 전체 목록입니다. 아래에서 원하시는 교재와 챕터를 선택하세요.

---

### Solutions to Donald Cohn's Measure Theory

<div class="list__wrapper">
  {% for item in site.data.cohn_toc %}
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
  {% for item in site.data.rudin_toc %}
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
{% endraw %}
