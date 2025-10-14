---
title: "Exercise 2.2.5"
date: 2025-10-14
---
$\require{physics}$
Let $E$ be the set of points where the sequence $\qty{f_n \qty(x)}$ does not converge to $f \qty(x)$. 
By the hypothesis of almost everywhere convergence, $E$ is a $\mu$-negligible set. 
By the definition, this means there exists a set $N \in \mathcal{A}$ such that $E \subseteq N$ and $\mu \qty(N) = 0$. 

For each positive integer $n$, we define a new function $g_n$ on $X$ by the formula:

$$
  g_n = f_n \cdot \chi_{N^c} + f \cdot \chi_N
$$

Since the functions $f_n$ and $f$ are given as $\mathcal{A}$-measurable, and the characteristic functions $\chi_N$ and $\chi_{N^c}$ are $\mathcal{A}$-measurable because $N \in \mathcal{A}$, each function $g_n$ is $\mathcal{A}$-measurable. 
This follows from *Proposition 2.1.7*, as the set of measurable functions is closed under products and sums. 

The set of points where $g_n$ and $f_n$ differ is a subset of $N$. 
Since $\mu \qty(N) = 0$, this means that for each $n$, the functions $g_n$ and $f_n$ agree $\mu$-almost everywhere.

Finally, we must show that the sequence $\qty{g_n}$ converges to $f$ everywhere. 

If $x \notin N$, $g_n \qty(x) = f_n \qty(x)$ for all $n$. 
Since $x$ is not in the null set $N$, it is also not in the subset $E$ where convergence fails. 
Therefore, for any $x \notin N$, the sequence $\qty{f_n \qty(x)}$ converges to $f \qty(x)$, and we have:

$$
  \lim_{n \to \infty} g_n \qty(x) = \lim_{n\to \infty} f_n \qty(x) = f \qty(x)
$$

If $x \in N$, $g_n \qty(x) = f \qty(x)$ for all $n$. 
The limit of this constant sequence is simply $f \qty(x)$:

$$
  \lim_{n \to \infty} g_n \qty(x) = \lim_{n\to \infty} f \qty(x) = f \qty(x)
$$

Since the limit is $f \qty(x)$ for every point $x$ in $X$, we have shown that the sequence $\qty{g_n}$ converges to $f$ everywhere, completing the proof. 
