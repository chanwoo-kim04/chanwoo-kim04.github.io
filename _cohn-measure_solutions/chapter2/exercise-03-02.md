---
title: "Exercise 2.3.2"
date: 2025-10-16
---
$\require{physics}$
Let the functions $f \colon \mathbb{R} \to \mathbb{R}$ and $g \colon \mathbb{R} \to \mathbb{R}$ be defined by:

$$
  f \qty(x) = g \qty(x) = 
  \begin{cases}
    x^{-1/2} & x \in \left( 0, 1 \right] \\
    0 & \text{otherwise}
  \end{cases}
$$

We first prove that these functions are Borel measurable. 
For any real number $t$, consider the set $\qty{x \in \mathbb{R} \colon f \qty(x) > t}$.
If $t < 0$, this set is $\mathbb{R}$. 
If $t \geq 0$, this set is $\qty(0, 1/t^2) \cap \left( 0, 1 \right]$, which is a Borel set. 
Therefore, $f$ is Borel measurable. 
Since $g = f$, $g$ is also Borel measurable. 

Next, we prove that both $f$ and $g$ are Lebesgue integrable. 
The integral of $f$ is given by $\int_{\mathbb{R}} f d\lambda = \int_{\left( 0, 1 \right]} x^{-1/2} d \lambda$. 
To evaluate this, we use the Monotone Convergence Theorem. 
Let $\qty{f_n}$ be a sequence of functions defined by $f_n \qty(x) = x^{-1/2} \chi_{\qty[1/n, 1]} \qty(x)$. 
Each $f_n$ is nonnegative, Borel measurable function. 
The sequence is nondecreasing, and for each $x \in \mathbb{R}$, $\lim_{n \to \infty} f_n \qty(x) = f \qty(x)$. 
By the Monotone Convergence Theorem, it follows that $\int_{\mathbb{R}} f d\lambda = \lim_{n \to \infty} \int_{\mathbb{R}} f_n d \lambda$. 
Each integral $\int_{\mathbb{R}} f_n d \lambda$ is computed as:

$$
  \int_{\mathbb{R}} f_n d \lambda = \int_{1/n}^1 x^{-1/2} dx = 2 - \frac{2}{\sqrt{n}}
$$

Taking the limit, we find $\int_{\mathbb{R}}f d\lambda = 2$. 
Since the integral is finite, $f$ is Lebesgue integrable. 

Finally, we prove that the product $fg$ is not Lebesgue measurable. 
The product function is $\qty(fg)\qty(x) = x^{-1}$ for $x \in \left(0, 1 \right]$ and is $0$ otherwise. 
As the product of two Borel measurable functions, $fg$ is itself Borel measurable. 
By the definition of the integral for a nonnegative measurable function, $\int_{\mathbb{R}} \qty(fg) d\lambda$ is the supremum of the integrals of all nonnegative simple measurable functions $s$ such that $s \leq fg$. 
For any integer $N \geq 1$, we can define a simple function:

$$
  s_N \qty(x) = \sum_{k=1}^N \frac{1}{k/N} \chi_{\left( \qty(k-1)/N, k/N \right]} \qty(x)
$$

For any $x \in \left( \qty(k-1)/N, k/N \right]$, we have $1/x > 1/ \qty(k/N)$, so $s_N$ is a simple measurable function satisfying $0 \leq s_N \leq fg$. 
By the definition of the integral, $\int_{\mathbb{R}} \qty(fg) d\lambda \geq \int_{\mathbb{R}} s_N d\lambda$. 
The integral of the simple function $s_N$ is:

$$
  \int_{\mathbb{R}}s_N d \lambda = \sum_{k=1}^N \frac{N}{k} \lambda \qty(\left( \qty(k-1)/N, k/N \right]) = \sum_{k=1}^N \frac{1}{k}
$$

Since the harmonic series $\sum_{k=1}^\infty\frac{1}{k}$ diverges to $\infty$, we have $\sup_N \int s_N d \lambda = \infty$. 
Therefore, $\int_{\mathbb{R}} \qty(fg) d\lambda = \infty$. 
Since the integral is not finite, the function $fg$ is not Lebesgue integrable. 
