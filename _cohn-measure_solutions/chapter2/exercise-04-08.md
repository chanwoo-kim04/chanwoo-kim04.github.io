---
title: "Exercise 2.4.8"
date: 2025-10-17
---
$\require{physics}$
Since $f$ is bounded, there exists a constant $M > 0$ such that $\abs{f \qty(y)} \leq M$ for all $y \in Y$. 
This implies that both $f^{+}$ and $f^{-}$ are also bounded by $M$. 

(a) Let $\varphi \qty(x) = \int f \qty(y)K \qty(x, dy)$. 
Since $f^{+}$ and $f^{-}$ are nonnegative, bounded, and $\mathcal{B}$-measurable, by *Exercise 2.4.7(b)*, the functions $\varphi^{+} \qty(x) = \int f^{+} \qty(y)K \qty(x, dy)$ and $\varphi^{-} \qty(x) = \int f^{-} \qty(y) K \qty(x, dy)$ are $\mathcal{A}$-measurable. 
Let $C = \sup \qty{K \qty(x, Y) \colon x \in X}$, which is finite by hypothesis. 
For any $x \in X$, we have:

$$
  0 \leq \varphi^{+} \qty(x) \leq \int MK \qty(x, dy) = MC < \infty
$$

Similarly, $0 \leq \varphi^{-} \qty(x) \leq MC < \infty$. 
Since both $\varphi^{+} \qty(x)$ and $\varphi^{-} \qty(x)$ are finite, the integral $\varphi \qty(x)$ is well defined for all $x$ by the relation $\varphi \qty(x) = \varphi^{+} \qty(x) - \varphi^{-} \qty(x)$. 
As the difference of two $\mathcal{A}$-measurable functions, $\varphi$ is itself $\mathcal{A}$-measurable. 
Furthermore, for any $x \in X$, the absolute value of $\varphi$ is bounded:

$$
\begin{aligned}
  \abs{\varphi \qty(x)} &= \abs{\int f\qty(y) K \qty(x, dy)} \\
  &\leq \int \abs{f \qty(y)} K \qty(x, dy) \leq M K \qty(x, Y) \leq MC
\end{aligned}
$$

This shows that the function $x \mapsto \int f\qty(y) K \qty(x, dy)$ is a bounded, $\mathcal{A}$-measurable function on $X$. 

(b) The measure $\nu$ is defined by $\nu \qty(B) = \int_X K \qty(x, B) \mu \qty(dx)$. 
Since $\mu$ is a finite measure and $K \qty(x, Y)$ is bounded by $C$, the measure $\nu$ is also finite, as

$$
  \nu \qty(Y) = \int K \qty(x, Y) \mu \qty(dx) \leq C \mu \qty(X) < \infty
$$

Since $f$ is a bounded measurable function and $\nu$ is a finite measure, $f$ is integrable with respect to $\nu$. 
Similarly, since the function $\varphi \qty(x) = \int f\qty(y)K\qty(x, dy)$ is bounded and $\mu$ is a finite measure, $\varphi$ is integrable with respect to $\mu$. 
We can now use the linearity of the integral for integrable functions. 
By definition, we have:

$$
  \int f \qty(y) \nu \qty(dy) = \int f^{+} \qty(y) \nu\qty(dy) - \int f^{-}\qty(y) \nu\qty(dy)
$$ 

The functions $f^{+}$ and $f^{-}$ are nonnegative $\mathcal{B}$-measurable, so we can apply the result of *Exercise 2.4.7(c)* to each of them. 
This yields:

$$
\begin{aligned}
  \int f^{+} \qty(y) \nu \qty(dy) &= \int \qty(\int f^{+} \qty(y)K\qty(x, dy)) \mu \qty(dx) \\
  &= \int \varphi^{+} \qty(x) \mu \qty(dx)
\end{aligned}
$$

and, similarly, $\int f^{-} \qty(y) \nu \qty(dy) = \int \varphi^{-} \qty(x) \mu \qty(dx)$. 
Substituting these into the expression for $\int f\qty(y) \nu \qty(dy)$ gives:

$$
  \int f\qty(y)\nu \qty(dy) = \int \varphi^{+} \qty(x) \mu \qty(dx) - \int \varphi^{-} \qty(x) \mu \qty(dx)
$$

Since $\varphi^{+}$ and $\varphi^{-}$ are integrable with respect to the finite measure $\mu$, we can use the linearity of the integral to combine the terms. 
Thus, we have established that:

$$
  \int f\qty(y)\nu \qty(dy) = \int \qty(\int f\qty(y)K \qty(x, dy)) \mu \qty(dx)
$$
