---
title: "Exercise 1.5.7"
date: 2025-10-09
---
$\require{physics}$
First, we prove that $\mu^* \qty(A) + \mu_* \qty(A^c) \leq \mu \qty(X)$. 
Let $B$ be any measurable set such that $B \subseteq A^c$. 
This implies that $A \subseteq B^c$. 
Since $B^c$ is a measurable set that contains $A$, its measure is, by definition of outer measure, an upper bound for the infimum. 
Thus, we have $\mu^* \qty(A) \leq \mu \qty(B^c)$. 
Since $B$ is a measurable set, $\mu \qty(B) + \mu \qty(B^c) = \mu \qty(X)$. 
Combining this with the previous inequality gives:

$$
  \mu \qty(B) + \mu^* \qty(A) \leq \mu \qty(X)
$$

This inequality holds for any measurable set $B$ contained in $A^c$. 
Therefore, taking the supremum over all such sets $B$ on the left side, we get:

$$
  \sup \qty{\mu \qty(B) \colon B \in \mathcal{A}, \; B \subseteq A^c} + \mu^* \qty(A) \leq \mu \qty(X)
$$

By the definition of inner measure, this is precisely $\mu^* \qty(A) + \mu_* \qty(A^c) \leq \mu \qty(X)$.

Next, we prove the reverse inequality, $\mu^* \qty(A) + \mu_* \qty(A^c) \geq \mu \qty(X)$.
Let $C$ be any measurable set such that $A \subseteq C$. 
This implies that $C^c \subseteq A^c$. 
Since $C^c$ is a measurable set contained in $A^c$, its measure is, by definition of inner measure, a lower bound for the supremum. 
Thus, we have $\mu \qty(C^c) \leq \mu_* \qty(A^c)$. 
Since $C$ is a measurable set, $\mu \qty(C) + \mu \qty(C^c) = \mu \qty(X)$. 
Combining this with the previous inequality gives:

$$
  \mu \qty(X) \leq \mu \qty(C) + \mu_* \qty(A^c)
$$

This inequality holds for any measurable set $C$ that contains $A$. 
Therefore, taking the infimum over all such sets $C$ on the right side, we get:

$$
  \mu \qty(X) \leq \inf \qty{\mu \qty(C) \colon C \in \mathcal{A}, \; A \subseteq C} + \mu_* \qty(A^c)
$$

By the definition of outer measure, this is precisely $\mu \qty(X) \leq \mu^* \qty(A) + \mu_* \qty(A^c)$. 

Since the inequality holds in both directions, we conclude that $\mu^* \qty(A) + \mu_* \qty(A^c) = \mu \qty(X)$. 
