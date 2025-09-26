---
title: "Real Analysis (Bass) - Exercise 2.4"
date: 2025-09-27
layout: single
author_profile: true
mathjax: true
---

$\require{physics}$

**Solution:** Let $X = \mathbb{N}$. 
For each positive integer $n$, define $\mathcal{M}_n$ as the power set of $\qty{1, 2, \dots, n}$:
$$
  \mathcal{M}_n = \mathcal{P} \qty(\qty{1, 2, \dots, n}) = \qty{S \subset X \colon S \subset \qty{1, 2, \dots, n}}
$$

Each $\mathcal{M}_n$ is a monotone class. 
To verify this, let $\qty{B\_j}\_{j=1}^{\infty}$ be a sequence of sets in $\mathcal{M}_n$. 
Since each $B_j$ is a subset of $\qty{1, \dots, n}$, both their union $\bigcup_j B_j$ and their intersection $\bigcap_j B_j$ are also subsets of $\qty{1, \dots, n}$. 
Therefore, if $B_j \uparrow B$ or $B_j \downarrow B$, the limit set $B$ is in $\mathcal{M}_n$. 

The sequence of collection $\qty{M_n}_{n=1}^{\infty}$ is increasing, as any subset of $\qty{1, \dots, n}$ is also a subset of $\qty{1, \dots, n+1}$, which means $\mathcal{M}\_n \subset \mathcal{M}\_{n+1}$ for all $n$. 

Let $\mathcal{M} = \bigcup_{n=1}^{\infty} \mathcal{M}_n$. 
A set $S$ belongs to $\mathcal{M}$ if and only if there exists some $n \in \mathbb{N}$ such that $S \subset \qty{1, \dots, n}$. 
This means $\mathcal{M}$ is precisely the collection of all bounded subsets of $\mathbb{N}$. 

Now, consider the sequence of sets $\qty{A_j}_{j=1}^{\infty}$ defined by $A_j = \qty{1, 2, \dots, j}$. 
For each $j$, the set $A_j$ is in $\mathcal{M}_j$, and therefore $A_j$ is in $\mathcal{M}$. 
This sequence is increasing, and its limit is the union of all its sets:
$$
  A = \bigcup_{j=1}^{\infty} A_j = \qty{1, 2,3, \dots} = \mathbb{N}
$$

We have constructed an increasing sequence of sets $\qty{A_j}$ from $\mathcal{M}$ such that $A_j \uparrow A$. 
For $\mathcal{M}$ to be a monotone class, the limit $A$ must also belong to $\mathcal{M}$. 

However, the limit set $A = \mathbb{N}$ is not a bounded subset of $\mathbb{N}$. 
Therefore, $A \notin \mathcal{M}$. 

Since we have found an increasing sequence of sets $\qty{A_j}$ in $\mathcal{M}$ whose limit $A$ is not in $\mathcal{M}$, the collection $\mathcal{M}$ is not a monotone class. 

<p style="text-align: center;">
  <a href="/bass-solutions/" class="btn btn--info" style="text-decoration: none;">
    <i class="fas fa-arrow-left"></i> Back to Index
  </a>
</p>
