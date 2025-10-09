---
title: "Exercise 1.5.8"
date: 2025-10-09
---
$\require{physics}$
Let $S$ be a subset of $\mathbb{R}$ as constructed in *Proposition 1.4.11*. 
This set has the property that any Lebesgue measurable subset of either $S$ or its complement $S^c$ has measure zero. 
We define our desired set as $A = S \cap \qty[0, 1]$. 

First, we prove that $\lambda_* \qty(A) = 0$. 
By definition, $\lambda_* \qty(A)$ is the supremum of the measures of all measurable sets contained within $A$. 
Let $K$ be any measurable set such that $K \subseteq A$. 
Since $A \subseteq S$, $K$ is also a measurable subset of $S$. 
By the defining property of $S$, any such $K$ must have $\lambda \qty(K) = 0$. 
Since this holds for every measurable subset of $A$, the supremum of their measures is zero. 
Thus, $\lambda_* \qty(A) = 0$. 

Next, we prove that $\lambda^* \qty(A) = 1$. 
Let $U$ be any open set containing $A$. 
The set $\qty[0, 1]-U$ is a measurable subset of $\qty[0, 1]$. 
From the inclusion $A \subseteq U$, it follows that $\qty[0, 1] - U \subseteq \qty[0, 1]-A$. 
The set $\qty[0, 1] - A$ is equal to $\qty[0, 1] \cap S^c$, which means $\qty[0, 1] - U$ is a measurable subset of $S^c$. 
By the property of $S$, we must have $\lambda \qty(\qty[0, 1] - U) = 0$. 

Using the additivity of the Lebesgue measure, we have:

$$
  1 = \lambda \qty(\qty[0, 1] \cap U) + \lambda \qty(\qty[0, 1] - U) = \lambda \qty(\qty[0, 1] \cap U)
$$

By the monotonicity of measure, $\lambda \qty(U) \geq \lambda \qty(\qty[0, 1] \cap U) = 1$. 
Since this holds for any open set $U$ that contains $A$, the infimum of their measures must be at least $1$. 
Therefore, $\lambda^* \qty(A) \geq 1$. 
As $A \subseteq \qty[0, 1]$, we also have $\lambda^* \qty(A) \leq 1$. 
We conclude that $\lambda^* \qty(A) = 1$. 

We have constructed a set $A \subseteq \qty[0, 1]$ satisfying both $\lambda_* \qty(A) = 0$ and $\lambda^* \qty(A) = 1$. 
