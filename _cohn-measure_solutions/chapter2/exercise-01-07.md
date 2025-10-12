---
title: "Exercise 2.1.7"
date: 2025-10-12
---
$\require{physics}$
Let $f \colon \qty[0, 1] \to \qty[0, 1]$ be the Cantor function. 
We define its extension $F \colon \mathbb{R} \to \mathbb{R}$ by setting $F \qty(x) = 0$ for $x < 0$, $F \qty(x) = f \qty(x)$ for $x \in \qty[0, 1]$, and $F \qty(x) = 1$ for $x > 1$. 
The function $F$ is continuous, non-decreasing, and satisfies the condition of *Proposition 1.3.10*. 
This proposition guarantees the existence of a unique finite Borel measure $\mu$ on $\qty(\mathbb{R}, \mathcal{B} \qty(\mathbb{R}))$ such that $\mu \qty(\left(-\infty, x \right] \right) = F \qty(x)$ for all $x \in \mathbb{R}$. 
The total measure is:

$$
  \mu \qty(\mathbb{R}) = \lim_{x \to \infty} F \qty(x) - \lim_{x \to -\infty} F\qty(x) = 1
$$

As $F$ is continuous, the measure of any singleton set $\qty{x}$ is $\mu \qty(\qty{x}) = F \qty(x) - F \qty(x-) = 0$. 
Consequently, for any interval with endpoints $a < b$, its measure is $F \qty(b) - F \qty(a)$. 

(a) Let $K_n$ denote the disjoint union of the $2^n$ closed intervals remaining at the $n$-th step of the Cantor set construction. 
We show by induction that each of these intervals has measure $1/2^n$. 
For the base case $n = 1$, the intervals are $\qty[0, 1/3]$ and $\qty[2/3, 1]$. 
By the construction of the Cantor function, $F \qty(0) = 0$, $F \qty(1/3) = 1/2$, $F \qty(2/3) = 1/2$, and $F \qty(1) = 1$, so the statement holds. 
Assume it holds for $n$. 
An interval $\qty[a, b]$ comprising $K_n$ is partitioned into two intervals $\qty[a, a']$ and $[b', b]$ of $K_{n+1}$, where $a' = a + (b-a)/3$ and $b' = b - \qty(b-a)/3$. 
The Cantor function is constructed such that $F \qty(a') = \qty(F \qty(a) + F \qty(b))/2$. 
By the inductive hypothesis, $F \qty(b) - F \qty(a) = 1/2^n$. 
The measure of the first subinterval is:

$$
\begin{aligned}
  F \qty(a') - F\qty(a) &= \frac{F \qty(a) + F \qty(b)}{2} - F \qty(a) \\
  &= \frac{F \qty(b) - F \qty(a)}{2} = \frac{1}{2^{n+1}}
\end{aligned}
$$

A similar calculation shows the second subinterval also has measure $1/2^{n+1}$. 
By induction, the statement is true for all $n \geq 1$. 

(b) The Cantor set $K$ is the intersection of the decreasing sequence of compact sets, $K = \bigcap_{n=1}^\infty K_n$. 
Since $\mu$ is a finite measure, we can apply the continuity of measure from above as stated in *Proposition 1.2.5(b)*. 
The total measure of $K_n$ is the sum of the measures of its $2^n$ disjoint constituent intervals, which from part (a) is $\mu \qty(K_n) = 2^n \cdot \qty(1/2^n) = 1$ for all $n$. 
Therefore, the measure of the Cantor set is $\mu \qty(K) = \lim_{n \to \infty} \mu\qty(K_n) = 1$. 

(c) As established from the properties of the function $F$, the measure of a singleton set $\qty{x}$ is $0$ for all $x$. 

From these results, we conclude that the measure $\mu$ is concentrated on the Cantor set $K$, a set which has Lebesgue measure zero per *Proposition 1.4.7*. Furthermore, because $\mu \qty(\qty{x}) = 0$ for all points $x$, the measure $\mu$ is continuous (has no point masses) and is therefore not a sum of multiples of point masses.
