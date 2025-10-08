---
title: "Exercise 1.5.4"
date: 2025-10-09
---
$\require{physics}$
Let $E$ be a subset of $\mathbb{R}$ that is not Lebesgue measurable; the existence of such a set is established in *Theorem 1.4.9*. 
Consider the set $A = E \times \qty{0}$, which is a subset of the $x$-axis in $\mathbb{R}^2$. 
The $x$-axis, as a Borel set, has a two-dimensional Lebesgue measure zero. 
Since the Lebesgue measure space on $\mathbb{R}^2$ is complete, any subset of a set with measure zero is itself Lebesgue measurable. 
Therefore, $A$, being a subset of the $x$-axis, is a Lebesgue measurable set in $\mathbb{R}^2$. 

Now, consider the projection of $A$ onto $\mathbb{R}$ under the map $\qty(x, y) \mapsto x$. 
The image of $A$ under this projection is precisely the set $E$. 
By our initial construction, the set $E$ is not Lebesgue measurable. 
Thus, $A = E \times \qty{0}$ is a Lebesgue measurable subset of $\mathbb{R}^2$ whose projection onto $\mathbb{R}$ is not Lebesgue measurable. 
