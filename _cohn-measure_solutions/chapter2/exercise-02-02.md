---
title: "Exercise 2.2.2"
date: 2025-10-14
---
$\require{physics}$
First, we prove that if $f \qty(x_n) = g\qty(x_n)$ for every $n$, then $f$ and $g$ agree $\mu$-almost everywhere. 
Let $D = \qty{x \in \mathbb{R} \colon f \qty(x) \neq g \qty(x)}$ be the set where the functions disagree. 
Our assumption implies that $D$ is disjoint from the set of points $\mathcal{X} = \qty{x_n \colon n \in \mathbb{N}}$. 
The set $\mathbb{R} - \mathcal{X}$ is a Borel set that contains $D$. 
The measure of this set is:

$$
\mu \qty(\mathbb{R} - \mathcal{X}) &= \sum_n \delta_{x_n} \qty(\mathbb{R} - \mathcal{X}) = 0
$$

Since $D$ is a subset of a measurable set of measure zero, $D$ is a $\mu$-negligible set by definition. 
Thus, $f$ and $g$ agree $\mu$-almost everywhere. 

Conversely, we prove that if $f$ and $g$ agree $\mu$-almost everywhere, then $f \qty(x_n) = g\qty(x_n)$ for every $n$. 
By definition, the set $D = \qty{x \in \mathbb{R} \colon f \qty(x) \neq g \qty(x)}$ is $\mu$-negligible, meaning there exists a Borel set $N$ such that $D \subseteq N$ and $\mu \qty(N) = 0$. 
We will prove our claim by contradiction. 
Assume there exists some integer $k$ such that $f \qty(x_k) \neq g \qty(x_k)$. 
By the definition of $\mu$, the measure of the singleton set $\qty{x_k}$ is $\sum_n \delta_{x_n} \qty(\qty{x_k})$, which is at least $1$. 
By the monotonicity of measure, since $\qty{x_k} \subseteq N$, we must have $\mu \qty(N) \geq \mu \qty(\qty{x_k}) \geq 1$. 
This contradicts the fact that $\mu \qty(N) = 0$. 
Therefore, our assumption must be false, and it must be that $f \qty(x_n) = g \qty(x_n)$ for every $n$. 
