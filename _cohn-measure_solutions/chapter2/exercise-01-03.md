---
title: "Exercise 2.1.3"
date: 2025-10-12
---
$\require{physics}$
Let the function $f \colon \mathbb{R} \to \mathbb{R}$ be differentiable everywhere on $\mathbb{R}$. 
We can express its derivative, $f'$, as the pointwise limit of a sequence of functions. 
For each positive integer $n$, define the function $g_n \colon \mathbb{R} \to \mathbb{R}$ by:

$$
  g_n \qty(x) = n \qty(f \qty(x +1/n) - f\qty(x))
$$

By the definition of the derivative, we have $f' \qty(x) = \lim_{n \to \infty} g_n \qty(x)$ for every $x \in \mathbb{R}$. 
The proof reduces to showing that each function $g_n$ is Borel measurable, as *Proposition 2.1.5(c)* states that the pointwise limit of a sequence of measurable functions is also measurable. 

To show that each $g_n$ is Borel measurable, we first note that because $f$ is differentiable everywhere, it is also continuous everywhere. 
By *Example 2.1.2(a)*, every continuous function is Borel measurable, so $f$ is Borel measurable. 
The map $x \mapsto x + 1/n$ is also continuous. 
Since the composition of two continuous functions is continuous, the function $x \mapsto f \qty(x+1/n)$ is continuous and therefore Borel measurable. 

Each function $g_n$ is constructed from the Borel measurable functions $x \mapsto f \qty(x + 1/n)$ and $x \mapsto f \qty(x)$ using subtraction and scalar multiplication. 
By *Proposition 2.1.7*, the set of real-valued Borel measurable functions is closed under these operations. 
Thus, each $g_n$ in the sequence is Borel measurable. 
Since $f'$ is the pointwise limit of this sequence of Borel measurable functions, we conclude that $f'$ is Borel measurable. 
