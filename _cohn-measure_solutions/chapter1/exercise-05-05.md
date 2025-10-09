---
title: "Exercise 1.5.5"
date: 2025-10-09
---
$\require{physics}$
First, we construct the measurable set $A_0$ such that $A_0 \subseteq A$ and $\mu \qty(A_0) = \mu_* \qty(A)$. 

If $\mu_* \qty(A) < \infty$, for each positive integer $n$, we can choose a measurable set $B_n\subseteq A$ such that $\mu \qty(B_n) > \mu_* \qty(A) - 1/n$. 
Let $A_0 = \bigcup_{n=1}^\infty B_n$. 
Since each $B_n$ is a subset of $A$, their union $A_0$ is also a subset of $A$. 
By monotonicity, $\mu \qty(A_0) \geq \mu \qty(B_n)$ for every $n$, which means $\mu \qty(A_0) > \mu_* \qty(A) - 1/n$. 
As this holds for all $n$, we have $\mu \qty(A_0) \geq \mu_* \qty(A)$. 
Conversely, since $A_0$ is a measurable subset of $A$, its measure cannot exceed the supremum of the measures of all such sets, so $\mu \qty(A_0) \leq \mu_* \qty(A)$. 
Therefore, we conclude that $\mu \qty(A_0) = \mu_* \qty(A)$. 

If $\mu_* \qty(A) = \infty$, for each positive integer $n$, we can choose a measurable set $B_n \subseteq A$ such that $\mu \qty(B_n) > n$. 
Let $A_0 = \bigcup_{n=1}^\infty B_n$. 
By monotonicity, $\mu \qty(A_0) \geq \mu \qty(B_n) > n$ for every $n$. 
This implies that the measure of $A_0$ must be infinite. 
Since we assumed $\mu_* \qty(A)$ is infinite, we have found a measurable set $A_0 \subseteq A$ satisfying $\mu \qty(A_0) = \mu_* \qty(A)$. 

Next, we construct the measurable set $A_1$ such that $A \subseteq A_1$ and $\mu \qty(A_1) = \mu^* \qty(A)$. 
For each positive integer $n$, we can choose a measurable set $C_n \supseteq A$ such that $\mu \qty(C_n) < \mu^* \qty(A) + 1/n$. 
This inequality holds even if $\mu^* \qty(A)$ is infinite. 
Let $A_1 = \bigcap_{n=1}^\infty C_n$. 
Since $A \subseteq C_n$ for all $n$, we have $A \subseteq A_1$. 
Since $A_1$ is a measurable set containing $A$, its measure must be at least the infimum of the measures of such sets, so $\mu \qty(A_1) \geq \mu^* \qty(A)$. 
Also, by monotonicity, $\mu \qty(A_1) \leq \mu \qty(C_n)$ for every $n$, which means $\mu \qty(A_1) < \mu^* \qty(A) + 1/n$. 
Taking limit as $n \to \infty$ yields $\mu \qty(A_1) \leq \mu^* \qty(A)$. 
Combining these two inequalities gives $\mu \qty(A_1) = \mu^* \qty(A)$. 
