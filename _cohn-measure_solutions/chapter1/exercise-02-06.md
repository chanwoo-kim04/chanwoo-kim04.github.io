---
title: "Exercise 1.2.6"
date: 2025-10-06
---
$\require{physics}$
(a) Let $\qty{\mu_n}$ be an increasing sequence of measures and define $\mu \qty(A) = \lim_{n \to \infty} \mu_n \qty(A)$ for each $A \in \mathcal{A}$. 
The function $\mu$ is nonnegative since it is the limit of nonnegative numbers. 
Also, $\mu \qty(\varnothing) = \lim_{n \to \infty} \mu_n \qty(\varnothing) = 0$. 

To show countable additivity, let $\qty{A_k}_{k=1}^\infty$ be a sequence of disjoint sets in $\mathcal{A}$. 
We must show that $\mu \qty(\bigcup_k A_k) = \sum_k \mu \qty(A_k)$. 
By the definition of $\mu$ and the additivity of each $\mu_n$, we have:

$$
\begin{aligned}
  \mu \qty(\bigcup_{k=1}^\infty A_k) &= \lim_{n \to \infty} \mu_n \qty(\bigcup_{k=1}^\infty A_k) \\
  &= \lim_{n \to \infty} \sum_{k=1}^\infty \mu_n \qty(A_k)
\end{aligned}
$$

We need to justify the interchange of the limit and the infinite sum. 
Let $c_{nk} = \mu_n \qty(A_k)$. 
Since $\qty{\mu_n}$ is an increasing sequence of measures, for each fixed $k$, the sequence $\qty{c_{nk}}\_n$ is increasing. 
For any fixed integer $K$, we have $\sum_{k=1}^K c_{nk} \leq \sum_{k=1}^\infty c_{nk}$. 
Taking the limit as $n \to \infty$ on both sides, and noting that the limit of a finite sum is the sum of the limits, we get:

$$
\begin{aligned}
  \sum_{k=1}^K \lim_{n \to \infty}c_{nk} &= \lim_{n \to \infty} \sum_{k=1}^K c_{nk} \\
  &\leq \lim_{n \to \infty} \sum_{k=1}^\infty c_{nk}
\end{aligned}
$$

Since this holds for any $K$, we can let $K \to \infty$ to obtain $\sum_{k=1}^\infty \lim_{n \to \infty}c_{nk} \leq \lim_{n \to \infty} \sum_{k=1}^\infty c_{nk}$. 
For the reverse inequality, note that $c_{nk} \leq \lim_{m \to \infty} c_{mk}$ for any $n$, $k$. 
Summing over $k$ gives $\sum_{k=1}^\infty c_{nk} \leq \sum_{k=1}^\infty \lim_{m \to \infty} c_{mk}$. 
Taking the limit as $n \to \infty$ of the left side yields $\lim_{n \to \infty} \sum_{k=1}^\infty c_{nk} \leq \sum_{k=1}^\infty \lim_{m \to \infty}c_{mk}$. 
The two inequalities prove the equality. Thus, 

$$
\begin{aligned}
  \lim_{n \to \infty} \sum_{k=1}^\infty \mu_n \qty(A_k) &= \sum_{k=1}^\infty \lim_{n \to \infty} \mu_n \qty(A_k) \\
  &= \sum_{k=1}^\infty \mu \qty(A_k)
\end{aligned}
$$

This establishes that $\mu$ is a measure. 

(b) Let $\qty{\mu_n}$ be an arbitrary sequence of measures and define $\mu \qty(A) = \sum_{n=1}^\infty \mu_n \qty(A)$. 
The function $\mu$ is nonnegative, and $\mu \qty(\varnothing) = \sum_n \mu_n \qty(\varnothing) = 0$. 

For countable additivity, let $\qty{A_k}_{k=1}^\infty$ be a sequence of disjoint sets in $\mathcal{A}$. 
By definition of $\mu$ and the additivity of each $\mu_n$:

$$
\begin{aligned}
  \mu \qty(\bigcup_{k=1}^\infty A_k) &= \sum_{n=1}^\infty \mu_n \qty(\bigcup_{k=1}^\infty A_k) \\
  &= \sum_{n=1}^\infty \sum_{k=1}^\infty \mu_n \qty(A_k)
\end{aligned}
$$

We must justify the interchange of the order of summation. 
Let $c_{nk} = \mu_n \qty(A_k) \geq 0$. 
Let $S$ be the supremum of sums over all finite subsets of the index set $\mathbb{N} \times \mathbb{N}$:

$$
  S = \sup \qty{\sum_{\qty(n, k) \in F} c_{nk} \colon F \text{ is a finite subset of } \mathbb{N} \times \mathbb{N}}
$$

For any finite $N$ and $K$$, we have $\sum_{n=1}^N \sum_{k=1}^K c_{nk} \leq S$. 
By letting first $K \to \infty$ and then $N \to \infty$, we get $\sum_{n=1}^\infty \sum_{k=1}^\infty c_{nk} \leq S$. 
For the reverse inequality, let $F$ be any finite subset of $\mathbb{N} \times \mathbb{N}$. 
We can choose $N$ and $K$ large enough so that $F \subset \qty{1, \dots, N} \times \qty{1, \dots, K}$. 
Then:

$$
\begin{aligned}
  \sum_{\qty(n, k) \in F} c_{nk} &\leq \sum_{n=1}^N \sum_{k=1}^K c_{nk} \\
  &\leq \sum_{n=1}^\infty \sum_{k=1}^\infty c_{nk}
\end{aligned}
$$

Taking the supremum over all finite $F$ gives $S \leq \sum_{n=1}^\infty \sum_{k=1}^\infty c_{nk}$. 
Thus, the iterated sum equals $S$. 
A symmetric argument shows that $\sum_{k=1}^\infty \sum_{n=1}^\infty c_{nk}$ also equals $S$. 
Therefore, the interchange is justified. 
We have:

$$
\begin{aligned}
  \sum_{n=1}^\infty \sum_{k=1}^\infty \mu_n \qty(A_k) &= \sum_{k=1}^\infty \sum_{n=1}^\infty \mu_n \qty(A_k) \\
  &= \sum_{k=1}^\infty \mu \qty(A_k)
\end{aligned}
$$

This establishes that $\mu$ is a measure. 
