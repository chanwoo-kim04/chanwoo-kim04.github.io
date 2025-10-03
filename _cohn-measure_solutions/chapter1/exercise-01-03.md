---
title: "Exercise 1.1.3"
date: 2025-10-04
categories:
  - "Cohn's Measure Theory"
tags:
  - "Measure Theory"
  - "Sigma Algebra"
  - "Borel Sigmal Algebra"
---
$\require{physics}$
Let $\mathcal{K}$ be the collection of all compact subsets of $\mathbb{R}$. 
We must show that $\sigma \qty(\mathcal{K}) = \mathcal{B} \qty(\mathbb{R})$. 

First, every compact set in $\mathbb{R}$ is a clsoed set, and all closed sets are Borel sets. 
This means $\mathcal{K} \subset \mathcal{B} \qty(\mathbb{R})$, which implies $\sigma \qty(\mathcal{K}) \subset \mathcal{B} \qty(\mathbb{R})$. 

Conversely, to show $\mathcal{B} \qty(\mathbb{R}) \subset \sigma \qty(\mathcal{K})$, it suffices to show that any open set $U \subset \mathbb{R}$ is in $\sigma \qty(\mathcal{K})$, since the open sets generate $\mathcal{B} \qty(\mathbb{R})$. 
Any open set in $\mathbb{R}$ can be written as a countable union of open interval. 
An arbitrary open interval $\qty(a, b)$ can be expressed as a coutnable union of compact intervals:

$$
  \qty(a, b) = \bigcup_{n=1}^\infty \qty[a + \frac{1}{n}, b - \frac{1}{n}]
$$

Each interval $\qty[a + \frac{1}{n}, b - \frac{1}{n}]$ is compact, and thus belongs to $\mathcal{K} \subset \sigma \qty(\mathcal{K})$. 
Since $\sigma \qty(\mathcal{K})$ is closed under countable unions, it follows that the open interval $\qty(a, b)$ belongs to $\sigma \qty(\mathcal{K})$. 
Consequently, any open set $U$, being a countable union of such open intervals, must also belong to $\sigma \qty(\mathcal{K})$. 
This proves $\mathcal{B} \qty(\mathbb{R}) \subset \sigma \qty(\mathcal{K})$. 

The equality follows from the two inclusions. 
