---
title: "Exercise 1.3.3"
date: 2025-10-06
---
$\require{physics}$
Let $A$ be an arbitrary subset of $\mathbb{R}$. 
For each positive integer $n$, the definition of the Lebesgue outer measure $\lambda^*$ guarantees the existence of a countable collection of bounded open intervals, $\qty{I_{k, n}}_{k=1}^\infty$ that covers $A$ and satisfies:

$$
  \sum_{k=1}^\infty \lambda \qty(I_{k, n}) \leq \lambda^* \qty(A) + \frac{1}{n}
$$

Let $B_n = \bigcup_{k=1}^\infty I_{k, n}$. 
Each $B_n$ is an open set, $A \subseteq B_n$, and by the subadditivity and monotonicity of the outer measure, we have:

$$
  \lambda^* \qty(A) \leq \lambda^* \qty(B_n) \leq \sum_{k=1}^\infty \lambda \qty(I_{k, n}) \leq \lambda^* \qty(A) + \frac{1}{n}
$$

Now, define the set $B = \bigcap_{n=1}^\infty B_n$. 
This set $B$ has the required properties. 
First, as a countable intersection of open sets, $B$ is a $G_\delta$ set and is therefore a Borel set. 
Second, since $A \subseteq B_n$ for every $n$, it follows that $A \subseteq B$. 

Finally, we show that $\lambda \qty(B) = \lambda^* \qty(A)$. 
Since $B \subseteq B_n$ for every $n$, the monotonicity implies $\lambda \qty(B) \leq \lambda \qty(B_n)$. 
Combining this with the previous inequality, and noting that $\lambda^* \qty(A) \leq \lambda \qty(B)$ because $A \subseteq B$, we have for any positive integer $n$:

$$
  \lambda^* \qty(A) \leq \lambda \qty(B) \leq \lambda \qty(B_n) \leq \lambda^* \qty(A) + \frac{1}{n}
$$

Since this inequality holds for all $n$, we conclude that $\lambda \qty(B) = \lambda^* \qty(A)$. 
