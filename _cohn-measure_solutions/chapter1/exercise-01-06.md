---
title: "Exercise 1.1.6"
date: 2025-10-04
---
$\require{physics}$
Let $\mathcal{A}$ be the collection of all subsets of $\mathbb{R}$ of the form $\qty(a, \infty)$ for some $a \in \mathbb{R}$, along with the sets $\varnothing$ and $\mathbb{R}$. 

This collection satisfies the required properties. 
By definition, it contains $\mathbb{R}$. 
It is closed under countable unions because the union of any countable family of such intervals, $\bigcup_n \qty(a_n, \infty)$, results in the interval $\qty(\inf_n a_n, \infty)$, which is also in $\mathcal{A}$. 
It is also closed under countable intersections, as the intersection $\bigcap_n \qty(a_n, \infty)$ results in the interval $\qty(\sup_n a_n, \infty)$, which is in $\mathcal{A}$. 

However, $\mathcal{A}$ is not a $\sigma$-algebra because it is not closed under complementation. 
For example, the complement of a set $\qty(a, \infty) \in \mathcal{A}$ is $\left(-\infty, a \right]$, which is not an element of $\mathcal{A}$. 
