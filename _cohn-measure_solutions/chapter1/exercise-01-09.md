---
title: "Exercise 1.1.9"
date: 2025-10-04
---
$\require{physics}$
(a) The set $\mathbb{Q}$ is an $F_\sigma$ set. 
Since $\mathbb{Q}$ is countable, we can write it as the union of its singleton elements, $\mathbb{Q} = \bigcup_{q \in \mathbb{Q}} \qty{q}$. 
Each singleton $\qty{q}$ is a closed set in $\mathbb{R}$. 
Therefore, $\mathbb{Q}$ is a countable union of closed sets, which by definition makes it an $F_\sigma$ set. 

However, $\mathbb{Q}$ is not a $G_\delta$ set. 
Assume for the sake of contradiction that $\mathbb{Q}$ is a $G_\delta $set. 
Then $\mathbb{Q} = \bigcap_{n=1}^\infty U_n$ for some sequence of open sets $\qty{U_n}$. 
Since $\mathbb{Q}$ is dense in $\mathbb{R}$ and $\mathbb{Q} \subseteq U_n$ for every $n$, each open set $U_n$ must also be dense in $\mathbb{R}$. 
This means that each complement $U_n^c$ is a closed set with an empty interior, which defines it as a nowhere dense set. 
The set of irrational numbers, $\mathbb{I} = \mathbb{R} - \mathbb{Q}$, can then be expressed as a countable union of these nowhere dense sets:

$$
  \mathbb{I} = \qty(\bigcap_{n=1}^\infty U_n)^c = \bigcup_{n=1}^\infty U_n^c
$$

Furthermore, $\mathbb{Q}$ itself is a countable union of singletons, and each singleton is also a nowhere dense set. 
This would mean that $\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$ is a countable union of nowhere dense sets. 
This contradicts the [Baire Category Theorem](https://en.wikipedia.org/wiki/Baire_category_theorem), which states that a complete metric space such as $\mathbb{R}$ cannot be expressed as a countable union of nowhere dense sets. 
Therefore, the initial ssumption must be false, and $\mathbb{Q}$ is not a $G_\delta $set. 

(b) Let $\mathbb{I}$ be the set of irrational numbers, and define the set $S$ as follows:

$$
  S = \qty(\mathbb{I} \cap \left[0, \infty \right)) \cup \qty(\mathbb{Q} \cap \qty(-\infty, 0))
$$

$S$ is not an $F_\sigma$ set. 
Assume for contradiction that $S$ is an $F_\sigma$ set. 
The intersection of an $F_\sigma$ set with a closed set is also an $F_\sigma$ set. 
Consider the intersection of $S$ with the closed set $\left[0, \infty \right)$:

$$
  S \cap \left[0, \infty \right) = \mathbb{I} \cap \left[0, \infty \right)
$$

If $S$ were $F_\sigma$ in $\mathbb{R}$, then $\mathbb{I} \cap \left[0, \infty \right)$ would be an $F_\sigma$ set in $\left[0, \infty \right)$. 
However, $\left[0, \infty \right)$ is a complete metric space, and the set of rationals within it, $\mathbb{Q} \cap \left[0, \infty \right)$, is a countable dense subset. 
By the same Baire Category argument as in part (a), applied to the space $\left[0, \infty \right)$, the set of irrationals $\mathbb{I} \cap \left[0, \infty \right)$ cannot be an $F_\sigma$ set within this space. 
This is a contradiction, so $S$ is not an $F_\sigma$ set. 

$S$ is not a $G_\delta$ set. 
Assume for contradiction that $S$ is a $G_\delta$ set. 
Then its complement, $S^c$, must be an $F_\sigma$ set. The complement is:

$$
  S^c = \qty(\mathbb{Q} \cap \left[0, \infty \right)) \cup \qty(\mathbb{I} \cap \qty(-\infty, 0))
$$

If $S^c$ were an $F_\sigma$ set, its intersection with the closed set $\left(-\infty, 0 \right]$ would also be an $F_\sigma$ set. 
This intersection is $\mathbb{I} \cap \left(-\infty, 0 \right)$. 
Applying the Baire Category Theorem to the complete metric space $\left(-\infty, 0 \right]$, we find that the set of irrationals within it cannot be an $F_\sigma$ set. 
This contradiction shows that $S$ is not a $G_\delta$ set. 

Therefore, $S$ is neither an $F_\sigma$ nor a $G_\delta$ set. 
