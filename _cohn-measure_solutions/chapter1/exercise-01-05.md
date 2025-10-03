---
title: "Exercise 1.1.5"
date: 2025-10-04
categories:
  - "Cohn's Measure Theory"
tags:
  - "Measure Theory"
  - "Sigma Algebra"
  - "Counterexample"
---
$\require{physics}$
Let $X = \qty{a, b, c}$. 
Let the collections $\mathcal{A}_1$ and $\mathcal{A}_2$ be defined as:
- $\mathcal{A}_1 = \qty{\varnothing, \qty{a}, \qty{b, c}, X}$
- $\mathcal{A}_2 = \qty{\varnothing, \qty{b}, \qty{a, c}, X}$

Both $\mathcal{A}_1$ and $\mathcal{A}_2$ are $\sigma$-algebras on $X$.

Their union, $\mathcal{A} = \mathcal{A}_1 \cup \mathcal{A}_2$, contains both $\qty{a}$ and $\qty{b}$. 
However, the union of these two sets, $\qty{a, b}$, is not an element of $\mathcal{A}_1$ and not an element of $\mathcal{A}_2$, and therefore is not an element of $\mathcal{A}$. 

Since $\mathcal{A}$ is not closed under finite unions, it is not an algebra and therefore not a $\sigma$-algebra. 
