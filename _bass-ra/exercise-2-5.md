---
title: "Real Analysis (Bass) - Exercise 2.5"
date: 2025-09-27
layout: single
author_profile: true
mathjax: true
---

$\require{physics}$

**Solution:** Let us prove that $\mathcal{B} = \qty{f^{-1} \qty(A) \colon A \in \mathcal{A}}$ is a $\sigma$-algebra:
- First, $\varnothing = f^{-1} \qty(\varnothing)$ and $X = f^{-1} \qty(Y)$, so both are in $\mathcal{B}$.
- Next, if $B \in \mathcal{B}$, then $B = f ^{-1} \qty(A)$ for some $A \in \mathcal{A}$, and $X - B = f^{-1} \qty(Y - A)$.
Since $\mathcal{A}$ is a $\sigma$-algebra, $Y - A \in \mathcal{A}$, so $X - B \in \mathcal{B}$. 
- Finally, suppose $B_i \in \mathcal{B}$ for $i = 1$, $2$, $\dots$, so $B_i = f^{-1} \qty(A_i)$ for some $A_i \in \mathcal{A}$.
Then

$$
  \bigcup_{i=1}^{\infty} B_i = \bigcup_{i=1}^{\infty} f^{-1} \qty(A_i) = f^{-1} \qty(\bigcup_{i=1}^{\infty} A_i) 
$$

    Since $\mathcal{A}$ is a $\sigma$-algebra, $\bigcup_{i=1}^{\infty} A_i \in \mathcal{A}$, so $\bigcup_{i=1}^{\infty} \in \mathcal{B}$.

Therefore, $\mathcal{B}$ is a $\sigma$-algebra.

<p style="text-align: center;">
  <a href="/bass-solutions/" class="btn btn--info" style="text-decoration: none;">
    <i class="fas fa-arrow-left"></i> Back to Index
  </a>
</p>
