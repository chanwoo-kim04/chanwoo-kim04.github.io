---
title: "Exercise 2.4.4"
date: 2025-10-17
---
$\require{physics}$
By construction, the sequence $\qty{p_n}$ is nondecreasing, as the infimum is taken over a progressively smaller set of functions. 
Similarly, the sequence $\qty{q_n}$ is decreasing. 
By the definitions of limit inferior and limit superior, we have that $\lim_n p_n = \liminf_n f_n$ and $\lim_n q_n = \limsup_n f_n$. 
Since $\qty{f_n}$ converges to $f$ almost everywhere, the limit inferior and limit superior are equal to $f$ almost everywhere. 
Thus, both $\qty{p_n}$ and $\qty{q_n}$ converge to $f$ almost everywhere. 

To apply the results of the preceding exercises, we must first confirm that $p_1$ and $q_1$ are integrable. 
The domination condition $\abs{f_k} \leq g$ almost everywhere implies $-g \leq f_k \leq g$ almost everywhere for all $k \geq 1$. 
Consequently, we have $\abs{p_1} \leq g$ and $\abs{q_1} \leq g$ almost everywhere. 
Since $g$ is integrable, by the monotonicity of the integral so too are $\abs{p_1}$ and $\abs{q_1}$, which confirms that $p_1$ and $q_1$ are integrable functions. 

The sequence $\qty{q_n}$ is a nondecreasing sequence of measurable functions converging almost everywhere to $f$, with its first term $p_1$ being integrable. 
These are precisely the conditions required by *Exercise 2.4.2*. 
Therefore, we can invoke its conclusion to state that $\lim_n \int p_n d\mu = \int f d\mu$. 
Similarly, the sequence $\qty{q_n}$ is a decreasing sequence of measurable functions converging almost everywhere to $f$, with its first term $q_1$ being integrable. 
These conditions satisfy the hypotheses of *Exercise 2.4.3*. 
Thus, we conclude that $\lim_n \int q_n d\mu = \int fd\mu$. 

The definitions of $p_n$ and $q_n$ yield the pointwise inequality $p_n \qty(x) \leq f_n \qty(x) \leq q_n \qty(x)$ for all $n$ and for all $x$. 
Since all three functions are dominated by the integrable function $g$, their integrals exist. 
By the monotonicity of the integral, this inequality implies $\int p_n d\mu \leq \int f_n d\mu \leq \int q_n d\mu$. 
Taking the limit inferior and limit superior of this chain of inequalities as $n \to \infty$, we obtain:

$$
\begin{aligned}  
  \int f d\mu &= \lim_n \int p_n d\mu \leq \liminf_n \int f_n d\mu \\
  &\leq \limsup_n \int f_n d\mu \leq \lim_n \int q_n d\mu = \int f d\mu
\end{aligned}
$$

This forces all the inequalities to be equalities, demonstrating that the limit inferior and limit superior of the sequence $\qty{\int f_n d\mu}$ are both equal to $\int f d\mu$. 
By definition, this means the limit of the sequence exists and is equal to this value. 
Therefore, we conclude that $\lim_n \int f_n d\mu = \int fd\mu$. 
