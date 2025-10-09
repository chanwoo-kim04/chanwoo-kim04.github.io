---
title: "Exercise 1.5.6"
date: 2025-10-09
---
$\require{physics}$
Let the measure space be $\qty(\mathbb{R}, \mathcal{L} \qty(\mathbb{R}), \lambda)$, where $\mathcal{L} \qty(\mathbb{R})$ is the $\sigma$-algebra of Lebesgue measurable sets. 
This measure space is complete, so its completion is itself. 
Thus, a set is in the completion if and only if it is Lebesgue measurable. 

By *Theorem 1.4.9*, there exists a set $N \subseteq \qty[0, 1]$ that is not Lebesgue measurable. 
We construct our counterexample, the set $A$, as follows:

$$
  A = N \cup \qty(\mathbb{R} - \qty[0, 1])
$$

First, we show that $A$ is not measurable. 
If we assume for contradiction that $A$ were measurable, then its intersection with the measurable set $\qty[0, 1]$ must also be measurable. 
However, this intersection is $A \cap \qty[0, 1] = N$, which was chosen to be a non-measurable set. 
This is a contradiction, so $A$ is not Lebesgue measurable and is therefore not in the completion. 

Next, we show that $\lambda_* \qty(A) = \lambda^* \qty(A) = \infty$. 
The set $\mathbb{R} - \qty[0, 1]$ is a measurable subset of $A$. 
The Lebesgue measure of this set is infinite. 
By the definition of inner measure as the supremum of the measures of all measurable subsets, we must have $\lambda_* \qty(A) = \infty$. 
Since the outer measure is always greater than or equal to the inner measure, $\lambda^* \qty(A)$ must also be infinite. 

We have constructed a set $A$ such that $\lambda_* \qty(A) = \lambda^* \qty(A) = \infty$, but $A$ is not in the completion. 
This demonstrates that the implication "If $\mu_{\*} \qty(A) = \mu^{\*} \qty(A), then $A \in \mathcal{A}_{\mu}$" can fail when the assumption $\mu^{\*}\qty(A) < \infty$ is omitted. 
