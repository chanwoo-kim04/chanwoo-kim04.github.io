---
title: "Exercise 2.4.6"
date: 2025-10-17
---
$\require{physics}$
(a) For each positive integer $n$, define $A_n = \qty{x \in X \colon f \qty(x) \geq n}$. 
For any $x \in X$, if $f \qty(x)$ is a finite positive integer $k$, then $x$ belongs to the set $A_n$ for precisely $k$ values of $n$, namely for $n = 1$, $2$, \dots, $k$. 
If $f \qty(x) = \infty$, then $x$ belongs to $A_n$ for all positive integers $n$. 
This observation leads to the following pointwise identity for all $x \in X$:

$$
  f \qty(x) = \sum_{n=1}^\infty \chi_{A_n} \qty(x)
$$

Each term in this series is a nonnegative measurable function. 
We can thus apply Beppo Levi's Theorem to interchange the integral and the infinite sum, which gives:

$$
\begin{aligned}
  \int f d\mu &= \int \qty(\sum_{n=1}^\infty \chi_{A_n}) d\mu \\
  &= \sum_{n=1}^\infty \int \chi_{A_n} d\mu
\end{aligned}
$$

By the definition of the integral of a characteristic function, we obtain the desired formula:

$$
  \int f d\mu = \sum_{n=1}^\infty \mu \qty(\qty{x \colon f \qty(x) \geq n})
$$

(b) Let $g \qty(x) = \lfloor f \qty(x) \rfloor$ be the floor of $f \qty(x)$. 
Since $f$ is measurable, $g$ is also a measurable function, taking values in the set of nonnegative integers. 
Furthermore, $\qty{x \colon f \qty(x) \geq n} = \qty{x \colon g \qty(x) \geq n}$. 

First, assume $f$ is integrable, which means $\int f d\mu$ is finite. 
Since $f$ is nonnegative, the inequality $g \qty(x) \leq f \qty(x)$ holds for all $x \in X$. 
By the monotonicity of the integral, it follows that $\int g d\mu \leq \int f d\mu < \infty$. 
The function takes only nonnegative integer values, so we can apply the result from the first part of the exercise to $g$, which gives:

$$
  \int g d\mu = \sum_{n=1}^\infty \mu \qty(\qty{x \colon g \qty(x) \geq n})
$$

Since $\int g d\mu$ is finite, the series on the right must converge. 
Using the identity of the sets established earlier, we conclude that the series $\sum_{n=1}^\infty \mu \qty(\qty{x \colon f \qty(x) \geq n})$ converges. 

Conversely, assume that the series $\sum_{n=1}^\infty \mu \qty(\qty{x \colon f \qty(x) \geq n})$ converges to a finite value. 
For any nonnegative real number, the inequality $y \leq \lfloor y \rfloor + 1$ holds. 
Applying this pointwise to our function, $f$, we get $f \qty(x) \leq g \qty(x) + 1$ for all $x \in X$. 
By the monotonicity of the integral, $\int f d\mu \leq \int \qty(g + 1) d\mu$. 
Since $g$ is nonnegative and the constant function is integrable, we can apply the linearity of the integral to get:

$$
  \int \qty(g + 1) d\mu = \int g d\mu + \mu \qty(X)
$$

Applying the result of the first part to $g$, we have:

$$
\begin{aligned}
  \int g d\mu &= \sum_{n=1}^\infty \mu \qty(\qty{x \colon g \qty(x) \geq n}) \\
  &= \sum_{n=1}^\infty \mu \qty(\qty{x \colon f \qty(x) \geq n})
\end{aligned}
$$

By our assumption, this sum is finite. 
Since $\mu \qty(X)$ is also finite, we have shown that $\int f d\mu \leq \int g d\mu + \mu \qty(X) < \infty$. 
Therefore, $f$ is integrable, which completes the proof. 
