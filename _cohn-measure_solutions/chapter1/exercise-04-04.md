---
title: "Exercise 1.4.4"
date: 2025-10-06
---
$\require{physics}$
We will construct the desired set $C$ by imitating the construction of the Cantor set, but by adjusting the proportion of the intervals removed at each step to achieve a final measure $\alpha$. 

Let $\qty{p_k}_{k=1}^\infty$ be a sequence of proportions where $0 < p_k < 1$. 
We define a decreasing sequence of closed sets $\qty{C_k}_{k=0}^\infty$ starting with $C_0 = \qty[0, 1]$, which has measure $\lambda \qty(C_0) = 1$. 

For each $k \geq $, we form the set $C_k$ from $C_{k-1}$ as follows. 
The set $C_{k-1}$ is a union of $2^{k-1}$ disjoint closed intervals. 
From the center of each of these intervals, we remove an open interval of a length equal to the proportion $p_k$ of the interval containing it. 
The remaining set, $C_k$, consists of $2^k$ disjoint closed intervals. 
The total measure of $C_k$ is then $\lambda \qty(C_k) = \qty(1-p_k) \lambda \qty(C_{k-1})$. 
By induction, the measure of $C_k$ is $\lambda \qty(C_k) = \prod_{j=1}^k \qty(1-p_j)$. 

Let the final set be the intersection $C = \bigcap_{k=1}^\infty$. 
Its measure is given by the limit $\lambda \qty(C) = \lim_{k \to \infty} \lambda \qty(C_k)$, which is equal to $\prod_{k=1}^\infty \qty(1-p_k)$. 
To ensure that $\lambda \qty(C) = \alpha$, we choose a sequence $\qty{p_k}$ appropriately. 

Let $p_k = 1 - \alpha^{2^{-k}}$. 
Since $0 < \alpha < 1$, it follows that $0 < p_k < 1$ for all $k$. 
With this choice, the measure of $C_k$ becomes:

$$
	\lambda \qty(C_k) = \prod_{j=1}^k \alpha^{2^{-j}} = \alpha^{1-2^{-k}}
$$

As $k \to \infty$, the exponent $1 - 2^{-k}$ approaches $1$, so $\lambda \qty(C) = \alpha$. 

We now verify the properties of $C$. 
First, each $C_k$ is a finite union of closed intervals and is therefore a closed set. 
As $C$ is the intersection of a sequence of closed sets, $C$ is also closed. 
Second, we show that $C$ contains no nonempty open interval. 
At step $k$, the set $C_k$ is composed of $2^k$ disjoint closed intervals, each of length $\lambda \qty(C_k)/2^k = 2^{-k}\alpha^{1-2^{-k}}$. 
As $k \to \infty$, this length approaches zero. 
For any nonempty open interval $\qty(a, b)$, its length $b-a$ is positive. 
We can choose an integer $k$ large enough so that the length of any interval composing $C_k$ is less than $b-a$. 
This means $\qty(a, b)$ cannot be a subset of any of the intervals in $C_k$. 
Since $C \subseteq C_k$, it follows that $\qty(a, b)$ cannot be a subset of $C$. 
Therefore, $C$ contains no nonempty open set. 

---
A set constructed in this manner is known as a [fat Cantor set](https://en.wikipedia.org/wiki/Smith%E2%80%93Volterra%E2%80%93Cantor_set)
