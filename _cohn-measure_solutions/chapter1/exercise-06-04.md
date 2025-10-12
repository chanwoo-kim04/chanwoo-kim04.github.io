---
title: "Exercise 1.6.4"
date: 2025-10-12
---
$\require{physics}$
Let the measurable space be $\qty(\mathbb{R}, \mathcal{B} \qty(\mathbb{R}))$. 
Let the collection of sets $\mathcal{C}$ be the family of all intervals of the form $\left(-\infty, b \right]$ for any $b \in \mathbb{R}$. 
This collection is a $\pi$-system, and by *Proposition 1.1.4(b)*, it generates the Borel $\sigma$-algebra $\mathcal{B} \qty(\mathbb{R})$. 

Now, define two measures on this space: let $\mu = \lambda$ be the standard Lebesgue measure, and let $\nu = 2 \lambda$. 
Both $\mu$ and $\nu$ are $\sigma$-finite measures on $\qty(\mathbb{R}, \mathcal{B} \qty(\mathbb{R}))$. 

We verify that these measures agree on the generating $\pi$-system $\mathcal{C}$. 
For any set $C \in \mathcal{C}$ of the form $\left(-\infty, b \right]$, we have $\mu \qty(C) = \infty = \nu \qty(C)$. 
Thus, $\mu \qty(C) = \nu \qty(C)$ for every set $C$ in the $\pi$-system $\mathcal{C}$. 
Furthermore, $\mu \qty(X) = \infty = \nu \qty(X)$. 

However, the measures $\mu$ and $\nu$ are not identical. 
This example demonstrates that two distinct $\sigma$-finite measures can agree on a generating $\pi$-system. 
