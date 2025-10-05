---
title: "Exercise 1.2.3"
date: 2025-10-06
---
$\require{physics}$
Let $\mathcal{A}$ be the power set of $\mathbb{N}$, and let $\mu$ be the counting measure on $\qty(\mathbb{N}, \mathcal{A})$. 
For each positive integer $k$, define the set $A_k$ as:

$$
  A_k = \qty{n \in \mathbb{N} \colon n \geq k}
$$

The sequence of sets $\qty{A_k}\_{k=1}^\infty$ is a decreasing sequence in $\mathcal{A}$, since $A_{k+1} \subseteq A_k$ for all $k$. 

For each $k$, the set $A_k$ is an infinite set, so its measure under the counting measure is infinite. 
Thus, $\mu \qty(A_k) = \infty$ for all $k$, and the limit is:

$$
  \lim_{k \to \infty} \mu \qty(A_k) = \infty
$$

However, the intersection of these sets is the empty set:

$$
  \bigcap_{k=1}^\infty A_k = \varnothing
$$

This is because for any integer $n \in \mathbb{N}$, $n$ is not an element of the set $A_{n+1}$ and therefore cannot be in the intersection. 
The measure of the intersection is $\mu \qty(\varnothing) = 0$. 

We have shown that $\mu \qty(\bigcap_k A_k) = 0$ while $\lim_k \mu \qty(A_k) = \infty$. 
Since $0 \neq \infty$, this example demonstrates that the conclusion of *Proposition 1.2.5(b)* can fail if the finiteness assumption on the measure of the sets is not met. 
