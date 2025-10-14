---
title: "Exercise 2.2.3"
date: 2025-10-14
---
$\require{physics}$
Let $D = \qty{x \in \mathbb{R} \colon f \qty(x) \neq g \qty(x)}$. 
We want to show that $D$ is the empty set, which would imply $f \qty(x) = g \qty(x)$ for all $x$. 

Define a function $h \colon \mathbb{R} \to \mathbb{R}$ by $h \qty(x) = f \qty(x) - g\qty(x)$. 
Since $f$ and $g$ are continuous, their difference $h$ is also a continuous function. 
The set $D$ can be expressed as the preimage of the set $\mathbb{R} - \qty{0}$ under the function $h$, that is, $D = h^{-1} \qty(\mathbb{R} - \qty{0})$. 
Because $\mathbb{R} - \qty{0}$ is open set and $h$ is continuous, its preimage $D$ must also be an open set and is therefore Lebesgue measurable. 

We are given that $f = g$ almost everywhere, which by definition means that $\lambda \qty(D) = 0$. 

Now, we proceed by contradiction. 
Assume that $f$ and $g$ are not identical, which means the set $D$ is nonempty. 
Since $D$ is a nonempty open set, it must contain a nonempty open interval $\qty(a, b)$. 
By the monotonicity of the Lebesgue measure, since $\qty(a, b) \subseteq D$, we have:

$$
  0 < b-a = \lambda \qty(\qty(a, b)) \leq \lambda \qty(D)
$$

This implies that $\lambda \qty(D) > 0$, which contradicts the fact that $\lambda \qty(D) = 0$. 
Therefore, the assumption that $D$ is nonempty must be false. 
We conclude that $D$ must be the empty set, and thus $f \qty(x) = g \qty(x)$ for all $x \in \mathbb{R}$. 
