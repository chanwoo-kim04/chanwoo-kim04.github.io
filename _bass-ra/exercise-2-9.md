---
title: "Real Analysis (Bass) - Exercise 2.9"
date: 2025-09-27
layout: single
author_profile: true
mathjax: true
---

$\require{physics}$

**Solution:** Let $X = \qty{1, 2, 3}$. Consider the two $\sigma$-algebras:
- $\mathcal{A}_1 = \qty{\varnothing, \qty{1}, \qty{2, 3}, X}$
- $\mathcal{A}_2 = \qty{\varnothing, \qty{2}, \qty{1, 3}, X}$

Their union is $\mathcal{A}_1 \cup \mathcal{A}_2 = \qty{\varnothing, \qty{1}, \qty{2}, \qty{1, 3}, \qty{2, 3}, X}$.
For this union to be a $\sigma$-algebra, it must be closed under unions.
However, while the sets $\qty{1}$ and $\qty{2}$ are both in $\mathcal{A}_1 \cup \mathcal{A}_2$, their union, $\qty{1, 2}$, is not an element of $\mathcal{A}_1 \cup \mathcal{A}_2$.
Therefore, $\mathcal{A}_1 \cup \mathcal{A}_2$ is not a $\sigma$-algebra.

<p style="text-align: center;">
  <a href="/bass-solutions/" class="btn btn--info" style="text-decoration: none;">
    <i class="fas fa-arrow-left"></i> Back to Index
  </a>
</p>
