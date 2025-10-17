---
title: "Exercise 2.4.2"
date: 2025-10-17
---
$\require{physics}$
Let $\qty{f_n}$ be a $\mu$-almost everywhere nondecreasing sequence of $\qty[-\infty, \infty]$-valued $\mathcal{A}$-measurable functions on a measure space $\qty(X, \mathcal{A}, \mu)$ that converges $\mu$-almost everywhere to a function $f$. 
We assume that $f_1$ is integrable. 
Our objective is to prove that $\int f d\mu = \lim_n \int f_n d\mu$. 

First, we must verify that the integrals of $f_n$ and $f$ exist. 
Since $f_1$ is integrable, its integral $\int f_1 d\mu$ is a finite real number. 
The condition $f_1 \leq f_n$ almost everywhere for all $n$ implies that $f_1^{-} \geq f_n^{-}$ almost everywhere. 
Integrating this inequality gives $\int f_n^{-}d \mu \leq \int f_1^{-} d\mu$, which is finite because $f_1$ is integrable. 
The integral of a function is defined to exist if at least one of the integrals of its positive and negative parts is finite. 
As $\int f_n^{-} d\mu$ is finite for every $n$, the integral $\int f_n d\mu$ exists. 
A similar argument applies to $f$, since $f_1 \leq f$ almost everywhere, which ensures $\int f^{-} d\mu$ is finite and thus that $\int f d\mu$ exists. 

To prove the theorem, we define an auxiliary sequence of functions $\qty{g_n}$ for $n \geq 1$ by setting $g_n = f_n - f_1$, and we define $g = f - f_1$. 
Since $f_1$ is finite-valued almost everywhere and the sequence $\qty{f_n}$ is nondecreasing almost everywhere, these differences are well-defined and nonnegative almost everywhere. 
By modifying them on a null set, we can ensure that $g_n$ and $g$ are nonnegative everywhere without altering their integrals. 
Each $g_n$ is a difference of measurable functions and is therefore measurable. 
The sequence $\qty{g_n}$ is nondecreasing and converges to $g$ almost everywhere. 
As a sequence of nonnegative measurable functions, $\qty{g_n}$ satisfies the condition for the Monotone Convergence Theorem, which yields $\lim_n \int g_n d\mu = \int g d\mu$. 

Now, we relate the integrals of these auxiliary functions back to the original functions. 
For each $n$, the relation $f_n = g_n + f_1$ holds almost everywhere. 
We need to establish the linearity of the integral for a sum involving a function like $f_1$, which is integrable, and a function like $g_n$, which is only known to be nonnegative and measurable. 
Let $F$ be an integrable function and $G$ be a nonnegative measurable function. 
Then $F + G = \qty(F^{+} + G) - F^{-}$. 
Both $F^{+} + G$ and $F^{-}$ are nonnegative measurable functions, and since $F$ is integrable, $\int F^{-}d \mu$ is finite. 
By the definition of the integral for nonnegative functions, we have:

$$
  \int \qty(F+G) d\mu = \int \qty(F^{+} + G ) d\mu - \int F^{-} d\mu
$$

Applying the additivity of the integral for nonnegative functions, the first term becomes $\int F^{+} d\mu + \int G d\mu$. 
Thus, we get:

$$
\begin{aligned}
  \int \qty(F+G) d\mu &= \int F^{+} d\mu + \int G d\mu - \int F^{-} d\mu \\
  &= \int F \dmu + \int G d\mu
\end{aligned}
$$

Applying this established linearity to $f_n = g_n + f_1$ almost everywhere, and invoking *Proposition 2.3.9*, we get $\int f_n d\mu = \int f_1 d\mu + \int g_n d\mu$. 
An identical argument applies to $f = g + f_1$, yielding $\int f d\mu = \int f_1 d\mu + \int g d\mu$. 

Substituting these into the result from the Monotone Convergence Theorem gives:

$$
  \lim_n \qty(\int f_n d\mu - \int f_1 \dmu) = \int f d\mu - \int f_1 d\mu
$$

As $\int f_1 d\mu$ is a finite constant, adding the finite quantity to both sides yields the desired conclusion, $\lim_n \int f_n d\mu = \int f d\mu$. 
