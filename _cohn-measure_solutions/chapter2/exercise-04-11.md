---
title: "Exercise 2.4.11"
date: 2025-10-17
---
$\require{physics}$
Define a sequence of functions $\qty{g_n}$ by setting $g_n = f_n + f - \abs{f_n - f}$ for each $n$. 
Then $g_n$ is a nonnegative measurable function for each $n$. 

By hypothesis, $\lim_n f_n \qty(x) = f \qty(x)$ almost everywhere, which implies $\lim_n \abs{f_n \qty(x) - f\qty(x)} = 0$ almost everywhere. 
Therefore, the pointwise limit inferior of the sequence $\qty{g_n}$ is

$$
  \liminf_n g_n = \liminf_n \qty(f_n + f - \abs{f_n - f}) = 2f
$$

almost everywhere. 
Since $\qty{g_n}$ is a sequence of nonnegative measurable functions, Fatou's Lemma is applicable, yielding the inequality:

$$
  \int \liminf_n g_n d\mu \leq \liminf_n \int g_n d\mu
$$

The left side of this inequality evaluates to $2 \int f d\mu$. 
For the right side, we use the linearity of the integral and the properties of the limit inferior. 
Since all functions involved are integrable, we have:

$$
  \int g_n d\mu = \int f_n d\mu + \int f d\mu - \int \abs{f_n - f}d \mu
$$

Applying the limit inferior gives:

$$
  \liminf_n \int g_n d\mu = 2 \int f d\mu - \limsup_n \int \abs{f_n - f} d\mu
$$

Combining these results, the inequality from Fatou's Lemma becomes:

$$
  2\int f d\mu \leq 2 \int f d\mu - \limsup_n \int \abs{f_n - f} d\mu
$$

Since $f$ is integrable, $\int f d\mu$ is a finite real number, so we can subtract $2\int f d\mu$ from both sides, resulting in:

$$
  \limsup_n \int \abs{f_n - f} d\mu \leq 0
$$

Because $\abs{f_n - f}$ is a nonnegative function, we can conclude that $\lim_n \int \abs{f_n - f} d\mu = 0$.
