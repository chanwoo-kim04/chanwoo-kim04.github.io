---
title: "Exercise 2.4.5"
date: 2025-10-17
---
$\require{physics}$
We define a sequence of auxiliary functions $\qty{h_n}$ by setting $h_n = \sup_{k \geq n} \abs{f_k - f}$ for each $n \geq 1$. 
Each function $\abs{f_n - f}$ is measurable, so each $h_n$ is a measurable function. 
By construction, the sequence $\qty{h_n}$ is a decreasing sequence of nonnegative functions. 

We now apply the result from *Exercise 2.4.3* to the sequence $\qty{h_n}$. 
To do so, we must first verify that $h_1$ is integrable. 
For any $k \geq 1$, the triangle inequality gives $\abs{f_k - f} \leq \abs{f_k} + \abs{f}$. 
From the domination hypothesis, we have $\abs{f_k} \leq g$ and $\abs{f} \leq g$, which implies $\abs{f_k - f} \leq 2g$. 
Therefore, $h_1 = \sup_{k \geq 1} \abs{f_k - f} \leq 2g$. 
By the monotonicity of the integral, $\int h_1 d\mu \leq 2 \int g d\mu < \infty$, confirming that $h_1$ is integrable. 
The pointwise limit of the sequence $\qty{h_n}$ is $\lim_n h_n = \limsup_n \abs{f_n - f} = 0$. 

The sequence $\qty{h_n}$ is a decreasing sequence of measurable functions, its first term is integrable, and it converges almost everywhere to $0$. 
It therefore satisfies all the hypotheses of *Exercise 2.4.3*. 
Applying the conclusion of that exercise, we find that:

$$
  \lim_n \int h_n d\mu = \int \qty(\lim_n h_n) d\mu = 0
$$

Finally, we connect this result to the original claim. 
For any $n$, the inequality $\abs{f_n - f} \leq h_n$ holds. 
Since all functions are nonnegative, we can integrate this inequality to obtain:

$$
  0 \leq \int \abs{f_n - f} d\mu \leq \int h_n d\mu
$$

Taking the limit as $n \to \infty$ forces $\lim_n \int \abs{f_n - f} d\mu = 0$. 
The desired conclusion follows from the inequality:

$$
  \abs{\int \qty(f_n - f)d\mu} \leq \int \abs{f_n - f}d\mu
$$
