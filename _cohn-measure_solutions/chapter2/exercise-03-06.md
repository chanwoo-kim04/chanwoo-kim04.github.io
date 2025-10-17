---
title: "Exercise 2.3.6"
date: 2025-10-17
---
$\require{physics}$
(a) Let $g$ be a function in $\mathscr{S}_+$ satisfying $g \leq f$, and let $\varepsilon$ be a number in the interval $\qty(0, 1)$. 
Since $g$ is a simple function, it can be written in the form $g = \sum\_{i=1}^k a\_i \chi\_{A_i}$, where the sets $A_i$ are disjoint members of $\mathcal{A}$ and the coefficients $a_i$ are distinct positive real numbers. 
For each $n \in \mathbb{N}$ and each $i \in \qty{1, \dots, k}$, define the set $A\_{n, i}$ as:

$$
  A\_{n, i} = \qty{x \in A_i \colon f_n \qty(x) \geq \qty(1-\varepsilon) a_i}
$$

Since $f_n$ is an $\mathcal{A}$-measurable function, each set $A\_{n, i}$ is in $\mathcal{A}$. 
As the sequence of functions $\qty{f_n}$ is nondecreasing, the sequence of sets $\qty{A\_{n, i}}\_{n=1}^\infty$ is also nondecreasing for each fixed $i$. 
Furthermore, for any $x \in A_i$, we have $f \qty(x) = \lim_n f_n \qty(x) \geq g\qty(x) = a_i$. 
Since $\qty(1-\varepsilon) a_i < a_i$, there must exist some integer $N$ such that $f_n \qty(x) \geq \qty(1-\varepsilon) a_i$ for all $n \geq N$. 
This implies that $x \in \bigcup\_{n=1}^\infty A\_{n, i}$, and thus we have $\bigcup\_{n=1}^\infty A\_{n, i} = A_i$. 
Now, define a sequence of functions $\qty{g_n}$ by:

$$
  g_n = \sum_{i=1}^k \qty(1-\varepsilon) a_i \chi_{A_{n, i}}
$$

Each $g_n$ is a nonnegative simple measurable function and thus belongs to $\mathscr{S}_+$. 
By construction, if $x \in A\_{n, i}$ for some $i$, then $g_n \qty(x) = \qty(1-\varepsilon) a_i \leq f_n \qty(x)$; if $x$ is not in any $A\_{n, i}$, then $g_n \qty(x) = 0 \leq f_n \qty(x)$. 
Therefore, $g_n \leq f_n$ holds for each $n$. 
To find the limit of the integrals of $g_n$, we use the definition of the integral for a simple function. 
As the sum is finite, we can interchange the limit and summation. 
By the continuity of measure from below, established in *Proposition 1.2.5*, we have:

$$
  \lim_n \mu \qty(A_{n, i}) = \mu \qty(\bigcup_n A_{n, i}) = \mu \qty(A_i)
$$

This yields:

$$
\begin{aligned}
  \lim_n \int g_n d \mu &= \lim_n \sum_{i=1}^k \qty(1-\varepsilon) a_i \mu \qty(A_{n, i}) \\
  &= \sum_{i=1}^k \qty(1-\varepsilon) a_i \mu \qty(A_i) = \qty(1-\varepsilon) \int g d\mu
\end{aligned}
$$

which completes the proof of part (a). 

(b) Since $\qty{f_n}$ is a nondecreasing sequence of nonnegative functions and $f_n \leq f$ for all $n$, the monotonicity of the integral implies that the sequence of real numbers $\qty{\int f_n d\mu}$ is nondecreasing and bounded above by $\int f d\mu$. 
Consequently, the limit exists and satisfies $\lim_n \int f_n d\mu \leq \int f d\mu$. 
To prove the reverse inequality, we show that $\int g d\mu \leq \lim_n \int f_n d\mu$ for any arbitrary simple function $g \in \mathscr{S}\_{+}$ such that $g \leq f$. 
Let such a function $g$ and an arbitrary $\varepsilon \in \qty(0, 1)$ be given. 
By the result of part (a), there exists a sequence $\qty{g_n}$ in $\mathscr{S}_+$ such that $g_n \leq f_n$ for each $n$ and $\lim_n \int g_n d \mu = \qty(1-\varepsilon) \int g d\mu$. 
From the inequality $g_n \leq f_n$, the monotonicity of the integral implies $\int g_n d\mu \leq \int f_n d\mu$. 
Taking the limit as $n \to \infty$ on both sides of this inequality, we find that $\lim_n \int g_n d\mu\leq \lim_n \int f_n d\mu$. 
Combining these results, we have:

$$
  \qty(1-\varepsilon) \int g d\mu \leq \lim_n \int f_n d\mu
$$

Since this inequality holds for any choice of $\varepsilon \in \qty(0, 1)$, it must also hold for the limit as $\varepsilon \to 0^{+}$, which gives $\int g d\mu \leq \lim_n \int f_n d\mu$. 
This holds for any nonnegative simple measurable function $g$ satisfying $g \leq f$. 
By the definition of the integral of a nonnegative measurable function, $\int f d\mu$ is the supremum of $\int g d\mu$ over all such functions $g$. 
Taking the supremum of the left side of the inequality, we obtain

$$  
  \sup_g \int g d\mu = \int f d\mu \leq \lim_n \int f_n d\mu
$$

Together, the two inequalities imply that $\int f d\mu = \lim_n \int f_n d\mu$. 
