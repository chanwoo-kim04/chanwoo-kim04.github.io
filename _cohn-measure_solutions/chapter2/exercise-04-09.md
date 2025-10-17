---
title: "Exercise 2.4.9"
date: 2025-10-17
---
$\require{physics}$
To prove that $\int f d\mu = \lim_{t \to \infty} \int f_t d\mu$, we will use the sequential characterization of the limit of a function. 
This requires us to show that for any sequence $\qty{t_n}\_{n=1}^\infty$ in $\left[0, \infty\right)$ that diverges to $\infty$, the sequence of real numbers $\qty{\int f_{t_n} d\mu}_{n=1}^\infty$ converges to $\int f d\mu$. 

Let $\qty{t_n}$ be any such sequence with $\lim_{n \to \infty} t_n = \infty$. 
We define a new sequence of functions $\qty{h_n}\_{n=1}^\infty$ by setting $h_n = f_{t_n}$ for each $n \in \mathbb{N}$. 
We will now demonstrate that this sequence $\qty{h_n}$ and its limit function $f$ satisfy the hypotheses of the Dominated Convergence Theorem. 

First, each function $f_t$ is given as $\mathcal{A}$-measurable, so each function $h_n$ in our sequence is also $\mathcal{A}$-measurable. 
Second, by hypothesis, $f \qty(x) = \lim_{ t\to \infty} f_t \qty(x)$ for almost every $x$. 
Since the sequence of indices $\qty{t_n}$ diverges to infinity, the corresponding sequence of functions $\qty{h_n \qty(x)}$ must also converge to $f \qty(x)$ for almost every $x$. 
Third, the domination condition $\abs{f_t \qty(x)} \leq g \qty(x)$ is given to hold for all $t \in \left[0, \infty \right)$ and for almost every $x$, where $g$ is a nonnegative integrable function. 
This implies that for our sequence, $\abs{h_n \qty(x)} = \abs{f_{t_n} \qty(x)} \leq g \qty(x)$ for all $n$ almost everywhere. 

The sequence of measurable functions $\qty{h_n}$ converges almost everywhere to $f$ and is dominated by an integrable function $g$. 
Therefore, all conditions of the Dominated Convergence Theorem are satisfied. 
The theorem asserts that $f$ is integrable and that the limit of the integrals is the integral of the limit:

$$
  \lim_{n \to \infty} \int h_n d\mu = \int f d\mu
$$

Substituting $h_n = f_{t_n}$ back into this result gives:

$$
  \lim_{n \to \infty} \int f_{t_n}d\mu = \int f d\mu
$$

This equality has been established for an arbitrary sequence $\qty{t_n}$ that diverges to $\infty$. 
By the definition of the limit of a function as its argument approaches infinity, this is precisely what it means for the limit of the function $t \mapsto \int f_t d \mu$ to exist and to be equal to $\int f d\mu$. 
Therefore, we have shown that $\lim_{t \to \infty} \int f_t d\mu = \int f d\mu$. 
