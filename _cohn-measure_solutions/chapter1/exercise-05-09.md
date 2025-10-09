---
title: "Exercise 1.5.9"
date: 2025-10-09
---
$\require{physics}$
First, we prove that the completion $\mathcal{A}\_{\mu}$ is a subset of the $\sigma$-algebra of $\mu^{\*}$-measurable sets, which we denote by $\mathcal{M}$. 
Let $B \in \mathcal{A}\_{\mu}$. 
By definition, there exist measurable sets $E$, $F \in \mathcal{A}$ with $E \subseteq B \subseteq F$ and $\mu \qty(F-E) = 0$. 
To show $B$ is $\mu^{\*}$-measurable, we must show $\mu^{\*} \qty(A) \geq \mu^{\*} \qty(A \cap B) + \mu^{\*} \qty(A \cap B^c)$ for any set $A \subseteq X$. 
By *Exercise 1.5.5*, we can find a measurable set $C \in \mathcal{A}$ such that $A \subseteq C$ and $\mu \qty(C) = \mu^{\*} \qty(A)$. 
Then, using the inclusions $A \cap B \subseteq C \cap F$ and $A \cap B^c \subseteq C \cap E^c$, we have:

$$
\begin{aligned}
  \mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c) &\leq \mu \qty(C \cap F) + \mu \qty(C \cap E^c) \\
  &= \mu \qty(C \cap E) + \mu \qty(C \cap \qty(F-E)) + \mu \qty(C \cap E^c) \\
  &\leq \qty[\mu \qty(C \cap E) + \mu \qty(C \cap E^c)] + \mu \qty(F-E) \\
  &= \mu \qty(C) = \mu^* \qty(A)
\end{aligned}
$$

This establishes the desired inequality, proving that $B \in \mathcal{M}$ and thus $\mathcal{A}_{\mu} \subseteq \mathcal{M}$. 

For the reverse inclusion, let $B \in \mathcal{M}$. 
Since $\mu$ is $\sigma$-finite, we can write $X = \bigcup_{k=1}^\infty X_k$ for a sequence of disjoint $\mu$-measurable sets $\qty{X_k}$ with finite measure. 
For each $k$, the set $B_k = B \cap X_k$ is $\mu^{\*}$-measurable with finite outer measure. 
By *Exercise 1.5.5*, we can find a measurable set $F_k \supseteq B_k$ with $\mu \qty(F_k) = \mu^{\*} \qty(B_k)$, and similarly a measurable set $G_k \supseteq X_k - B_k$ with $\mu \qty(G_k) = \mu^{\*} \qty(X_k - B_k)$. 
Let $E\_k = G\_k^c$. 
Then $E_k \in \mathcal{A}$ and $E_k \subseteq B_k$. 
Since $B_k$ is $\mu^*$-measurable, $\mu^{\*} \qty(B) + \mu^{\*} \qty(X_k - B_k) = \mu \qty(X_k)$, which implies:

$$
\begin{aligned}
  \mu \qty(F_k - E_k) &= \mu \qty(F_k) - \mu \qty(E_k) \\
  &= \mu^* \qty(B_k) - \qty(\mu \qty(X_k) - \mu \qty(G_k)) \\
  &= \qty(\mu^* \qty(B_k) + \mu^* \qty(X_k - B_k)) - \mu \qty(X_k) = 0
\end{aligned}
$$

Let $E = \bigcup_{k=1}^\infty E_k$ and $F = \bigcup_{k=1}^\infty F_k$. 
Then $E$, $F \in \mathcal{A}$, $E \subseteq B \subseteq F$, and $\mu \qty(F-E) = \sum_{k=1}^\infty \mu \qty(F_k - E_k) = 0$. 
This shows that $B$ is in the completion $\mathcal{A}\_{\mu}$. 
Thus, $\mathcal{M} \subseteq \mathcal{A}_{\mu}$. 

Finally, we show that $\overline{\mu} \qty(A) = \mu^* \qty(A)$ for any $A \in \mathcal{A}_{\mu}$. 
By definition of the completion, there are measurable sets $E$, $F \in \mathcal{A}$ with $E \subseteq A \subseteq F$ and $\mu \qty(F-E) = 0$. 
The completed measure is defined as $\overline{\mu} \qty(A) = \mu \qty(E)$. 
We also know $\mu \qty(F) = \mu \qty(E) + \mu \qty(F-E) = \mu \qty(E)$. 
From the definitions of inner and outer measure, we have 

$$
  \mu \qty(E) \leq \mu_* \qty(A) \leq \mu^* \qty(A) \leq \mu \qty(F)
$$

Since $\mu \qty(E) = \mu\qty(F)$, all inequalities must be equalities, so $\mu^* \qty(A) = \mu \qty(E)$. 
It follows that $\overline{\mu} \qty(A) = \mu^* \qty(A)$, which completes the proof. 
