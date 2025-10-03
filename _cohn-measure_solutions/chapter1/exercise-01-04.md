---
title: "Exercise 1.1.4"
date: 2025-10-04
categories:
  - "Cohn's Measure Theory"
tags:
  - "Measure Theory"
  - "Sigma Algebra"
---
$\require{physics}$
Let $\mathcal{A}$ be an algebra of sets that is also closed under countable disjoint unions. 
To prove $\mathcal{A}$ is a $\sigma$-algebra, we must show it is closed under any countable union. 

Let $\qty{A_n}\_{n=1}^\infty$ be an arbitrary sequence of sets in $\mathcal{A}$. 
Construct a sequence $\qty{B_n}_{n=1}^\infty$ where 

$$
  B_n = A_n - \bigcup_{i=1}^{n-1} A_i
$$

for $n \geq 1$, with the union being empty for $n = 1$. 

Since $\mathcal{A}$ is an algebra, it is closed under finite unions, complements, and intersections. 
Thus, each $B_n = A_n \cap \qty(\bigcup_{i=1}^{n-1} A_i)^c$ is in $\mathcal{A}$. 
By construction, the sets $\qty{B_n}$ are pairwise disjoint and have the same union as the original sequence: $\bigcup_{n=1}^\infty A_n = \bigcup_{n=1}^\infty B_n$. 

By hypothesis, the disjoint union $\bigcup_{n=1}^\infty B_n$ is in $\mathcal{A}$. 
Therefore, the arbitrary countable union $\bigcup_{n=1}^\infty A_n$ is also in $\mathcal{A}$, which proves that $\mathcal{A}$ is a $\sigma$-algebra. 
