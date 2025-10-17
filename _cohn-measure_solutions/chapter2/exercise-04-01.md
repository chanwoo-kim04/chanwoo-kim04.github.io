---
title: "Exercise 2.4.1"
date: 2025-10-17
---
$\require{physics}$
(a) Let the sequence $\qty{f_n}$ be defined by $f_n \qty(x) = n^2 \chi_{\qty(0, 1/n)} \qty(x)$ for each positive integer $n$. 
Each $f_n$ is a simple function and is Borel measurable because $\qty(0, 1/n)$ is a Borel set. 
To verify that each $f_n$ is in $\mathcal{L}^1$, we compute the integral:

$$
\begin{aligned}
  \int_{\mathbb{R}} f_n d \lambda &= \int_{\mathbb{R}} n^2 \chi_{\qty(0, 1/n)} d\lambda \\
  &= n^2 \lambda \qty(\qty(0, 1/n)) = n
\end{aligned}
$$

Since this is finite for each fixed $n$, $f_n \in \mathcal{L}^1$. 
The sequence converges to zero everywhere, that is, $\lim_{n \to \infty} f_n \qty(x) = 0$ for all $x \in \mathbb{R}$. 
The sequence of integrals is $\int_{\mathbb{R}} f_n d \lambda = n$, and its limit is $\infty$, as required. 

(b) Let the sequence $\qty{g_n}$ be defined by $g_n \qty(x) = \chi_{\qty(n, n+1)} \qty(x)$. 
Each $g_n$ is a simple, Borel measurable function. 
It belongs to $\mathcal{L}^1$ because $\int_{\mathbb{R}} g_n d\lambda = \lambda \qty(\qty(n, n+1)) = 1$. 
This sequence converges to zero for every $x \in \mathbb{R}$. 
The sequence of integrals is constant: $\int_{\mathbb{R}} g_n d\lambda = 1$ for all $n$. 
Therefore, $\lim_{n \to \infty} \int_{\mathbb{R}} g_n d \lambda = 1$. 

(c) Let the sequence $\qty{h_n}$ be defined by $h_n \qty(x) = \qty(-1)^n \chi_{\qty(n, n+1)} \qty(x)$. 
Each $h_n$ is a simple, Borel measurable function. 
It is in $\mathcal{L}^1$ because $\int_{\mathbb{R}} h_n d \lambda = \qty(-1)^n$. 
The sequence converges to zero everywhere for the same reason that $\qty{g_n}$ does. 
Since the integral of $h_n$ is $\int_{\mathbb{R}} h_n d\lambda = \qty(-1)^n$, the limit superior is $1$, and the limit inferior is $-1$, satisfying the condition. 
