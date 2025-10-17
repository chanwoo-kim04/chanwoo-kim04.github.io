---
title: "Exercise 2.4.7"
date: 2025-10-17
---
$\require{physics}$
(a) By the definition of a kernel, for any fixed $B \in \mathcal{B}$, the function $x \mapsto K \qty(x, B)$ is a nonnegative, $\mathcal{A}$-measurable function on $X$, so its integral with respect to $\mu$ is well-defined. 
If $B = \varnothing$, then since $C \mapsto K \qty(x, C)$ is a measure for each $x$, we have $K \qty(x, \varnothing) = 0$ for all $x \in X$. 
The integral of the zero function is zero, so $\nu \qty(\varnothing) = 0$. 
Next, let $\qty{B_n}_{n=1}^\infty$ be a sequence of disjoint sets in $\mathcal{B}$. 
We must show that $\nu \qty(\bigcup_n B_n) = \sum_n \nu\qty(B_n)$. 
By definition, we have:

$$
  \nu \qty(\bigcup_n B_n) = \int K \qty(x, \bigcup_n B_n) \mu \qty(dx)
$$

Since for each fixed $x$, the function $C \mapsto K \qty(x, C)$ is a measure, its countable additivity implies that $K \qty(x, \bigcup_n B_n) = \sum_n K \qty(x, B_n)$. 
This gives us:

$$
  \nu\qty(\bigcup_n B_n) = \int \qty(\sum_{n=1}^\infty K \qty(x, B_n)) \mu \qty(dx)
$$

Each function $x \mapsto K \qty(x, B_n)$ is a nonnegative, $\mathcal{A}$-measurable function. 
We can therefore apply Beppo Levi's Theorem to interchange the integral and the infinite sum, which yields:

$$
\begin{aligned}  
  \nu\qty(\bigcup_n B_n) &= \int \qty(\sum_{n=1}^\infty K \qty(x, B_n)) \mu \qty(dx) \\
  &= \sum_{n=1}^\infty \int K \qty(x, B_n) \mu \qty(dx) = \sum_{n=1}^\infty \nu \qty(B_n)
\end{aligned}
$$

Thus, $\nu$ is a measure on $\qty(Y, \mathcal{B})$. 

(b) We show that the function $\varphi \qty(x) = \int f \qty(y) K \qty(x, dy)$ is $\mathcal{A}$-measurable for any nonnegative, $\mathcal{B}$-measurable function $f$. 
We begin with the case where $f$ is a characteristic function $f = \chi_B$ for some $B \in \mathcal{B}$. 
In this case, $\varphi \qty(x) = \int \chi_B \qty(y) K \qty(x, dy) = K \qty(x, B)$. 
By property (ii) of the definition of a kernel, the function $x \mapsto K \qty(x, B)$ is $\mathcal{A}$-measurable. 
Next, if $f$ is a nonnegative simple measurable function, it can be written as a finite linear combination $f = \sum_{i=1}^n a_i \chi_{B_i}$ where $a_i \geq 0$ and $B_i \in \mathcal{B}$. 
For a fixed $x$, since $K \qty(x, \cdot)$ is a measure, the integral is linear, so we have:

$$
\begin{aligned}
  \varphi \qty(x) &= \int \qty(\sum_{i=1}^n a_i \chi_{B_i}) K \qty(x, dy) \\
  &= \sum_{i=1}^n a_i \int \chi_{B_i} K \qty(x, dy) = \sum_{i=1}^n a_i K \qty(x, B_i)
\end{aligned}
$$

This is a finite linear combination of $\mathcal{A}$-measurable functions, which is itself $\mathcal{A}$-measurable. 
Finally, let $f$ be any nonnegative, $\mathcal{B}$-measurable function. 
Then there exists a nondecreasing sequence $\qty{f_n}$ of nonnegative simple measurable functions that converges pointwise to $f$. 
Let $\varphi_n \qty(x) = \int f_n \qty(y) K \qty(x, dy)$. 
From the previous step, each $\varphi_n$ is an $\mathcal{A}$-measurable function. 
For each fixed $x$, the sequence $\qty{f_n}$ converges nondecreasingly to $f$. 
By the Monotone Convergence Theorem applied to the measure $K \qty(x, \cdot)$, the sequence of integrals $\qty{\varphi_n \qty(x)}$ converges pointwise to $\int f\qty(y) K \qty(x, dy) = \varphi \qty(x)$. 
Since the pointwise limit of a sequence of measurable functions is measurable, we conclude that $\varphi$ is an $\mathcal{A}$-measurable function. 

(c) We establish the identity

$$
  \int f\qty(y) \nu \qty(dy) = \int \qty(\int f \qty(y) K \qty(x, dy)) \mu \qty(dx)
$$

If $f = \chi_B$ for some $B \in \mathcal{B}$, the left-hand side is $\nu \qty(B)$, which by the definition in part (a) is $\int K \qty(x, B) \mu \qty(dx)$. 
The right-hand side is

$$
  \int \qty(\int \chi_B \qty(y) K \qty(x, dy)) \mu \qty(dx) = \int K \qty(x, B) \mu \qty(dx)
$$

The identity holds. 
By the linearity of the integral on both sides, the identity extends to all nonnegative simple measurable functions. 
Now, let $f$ be any nonnegative, $\mathcal{B}$-measurable function, and let $\qty{f_n}$ be a nondecreasing sequence of nonnegative simple measurable functions converging pointwise to $f$. 
For each $n$, the identity holds:

$$
  \int f_n \qty(y) \nu \qty(dy) = \int \qty(\int f_n \qty(y) K \qty(x, dy)) \mu \qty(dx)
$$

Let us take the limit as $n \to \infty$ of both sides. 
For the left-hand side, the Monotone Convergence Theorem applied to the measure space $\qty(Y, \mathcal{B}, \nu)$ gives $\lim_n \int f_n \qty(y) \nu\qty(dy) = \int f\qty(y) \nu \qty(dy)$. 
For the right-hand side, let $\varphi_n \qty(x) = \int f_n \qty(y)K \qty(x, dy)$. 
As shown in part (b), $\qty{\varphi_n}$ is a nondecreasing sequence of nonnegative $\mathcal{A}$-measurable functions that converges pointwise to $\varphi \qty(x) = \int f\qty(y) K \qty(x, dy)$. 
By the Monotone Convergence Theorem applied to the measure space $\qty(X, \mathcal{A}, \mu)$, we have $\lim_n \int \varphi_n \qty(x) \mu \qty(dx) = \int \varphi \qty(x) \mu \qty(dx)$. 
Since the two sides of the identity were equal for every $n$, their limits must be equal. 
This completes the proof. 
