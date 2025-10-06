---
title: "Exercise 1.3.8"
date: 2025-10-06
---
$\require{physics}$
First, assume that $B$ is a Lebesgue measurable subset of $\mathbb{R}$. 
By the definition of measurability, the equality $\lambda^{\*} \qty(A) = \lambda^{\*} \qty(A \cap B) + \lambda^{\*} \qty(A \cap B^c)$ holds for every subset $A \subseteq \mathbb{R}$. 
Letting $A = I$ gives the desired equality. 

Conversely, assume that $\lambda^{\*} \qty(I) = \lambda^{\*} \qty(B) + \lambda^{\*} \qty(I \cap B^c)$. 
We must prove that $B$ is Lebesgue measurable. 

By *Exercise 1.3.3*, there exists a Borel set $G$ such that $B \subseteq G$ and $\lambda \qty(G) = \lambda^{\*} \qty(B)$. 
Since $B \subseteq I$ and $I$ is a Borel set, we may replace $G$ with $G \cap I$ to ensure that $G \subseteq I$. 
Similarly, there exists a Borel set $H$ such that $I \cap B^c \subseteq H$ and $\lambda \qty(H) = \lambda^{\*} \qty(I \cap B^c)$. 

Since $I = B \cup \qty(I \cap B^c)$, we have the inclusion $I \subseteq G \cup H$. 
Using the properties of the measure $\lambda$ and our hypothesis:

$$
\begin{aligned}
  \lambda^* \qty(B) + \lambda^* \qty(I \cap B^c) &= \lambda \qty(I) \\
  &\leq \lambda \qty(G \cup H) \leq \lambda \qty(G) + \lambda \qty(H) \\
  &= \lambda^* \qty(B) + \lambda^* \qty(I \cap B^c)
\end{aligned}
$$

This forces equality throughout, so $\lambda \qty(G \cup H) = \lambda \qty(G) + \lambda \qty(H)$. 
As $G$ and $H$ have finite measure, this implies their intersection has measure zero: $\lambda \qty(G \cap H) = 0$. 

Now we show that $G \cap B^c$ has an outer measure zero. 
Since $G \subseteq I$, we have $G \cap B^c = G \cap \qty(I \cap B^c)$. 
Because $I \cap B^c \subseteq H$, it follows that $G \cap B^c \subseteq G \cap H$. 
By monotonicity, this implies $\lambda^{\*} \qty(G \cap B^c) \leq \lambda \qty(G \cap H) = 0$. 

We have found a measurable set $G$ such that $B \subseteq G$ and $\lambda^{\*} \qty(G \cap B^c) = 0$. 
By *Proposition 1.3.5*, the set $G \cap B^c$ is Lebesgue measurable. 
Consequently, $B = G \cap \qty(G \cap B^c)^c$ must be Lebesgue measurable. 
