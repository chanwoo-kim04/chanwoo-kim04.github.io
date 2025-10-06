---
title: "Exercise 1.4.6"
date: 2025-10-06
---
$\require{physics}$
Let $B$ be a subset of $\mathbb{R}$ with $\lambda^* \qty(B) > 0$. 
Let $A$ be the set from *Proposition 1.4.11*, which has the property that any measurable subset of $A$ or $A^c$ has measure zero. 

Consider the decomposition $B = \qty(B \cap A) \cup \qty(B \cap A^c)$. 
By the subadditivity of the outer measure, we have $\lambda^* \qty(B) \leq \lambda^* \qty(B \cap A) + \lambda^* \qty(B \cap A^c)$. 
Since $\lambda^* \qty(B) > 0$, at least one of the terms on the right must be positive. 

Assume without loss of generality that $\lambda^* \qty(B \cap A) > 0$. 
We will show that the set $B \cap A$ is not Lebesgue measurable. 
Suppose for contradiction that $B \cap A$ is measurable. 
Then its measure must equal its outer measure, so $\lambda \qty(B \cap A) = \lambda^* \qty(B \cap A) > 0$. 
However, $B \cap A$ is a measurable subset of $A$, and by the defining property of $A$, any measurable subset of $A$ must have measure zero. 
This is a contradiction. 

Therefore, the assumption that $B \cap A$ is measurable must be false. 
Since $B \cap A$ is a subset of $B$, we have found a non-measurable set contained in $B$. 
