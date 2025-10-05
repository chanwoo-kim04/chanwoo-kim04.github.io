---
title: "Exercise 1.3.5"
date: 2025-10-06
---
$\require{physics}$
(a) First, the empty set is covered by the sequence $\qty{\varnothing, \varnothing, \dots}$.
Since $\mu \qty(\varnothing) = 0$, the sum of the measures of this cover is $0$, implying $\mu^* \qty(\varnothing) = 0$. 
Monotonicity follows because if $A \subseteq B$, any countable cover of $B$ by sets from $\mathcal{A}$ is also a cover of $A$. 
Thus, the set of sums for covers of $A$ contains the set of sums for covers of $B$, which implies that the infimum for $A$ is less than or equal to the infimum for $B$. 

For countable subadditivity, let $\qty{A_n}\_{n=1}^\infty$ be a sequence of subsets of $X$.
The inequality $\mu^{\*} \qty(\bigcup_{n=1}^\infty A_n) \leq \sum_{n=1}^\infty \mu^* \qty(A_n)$ is trivial if the sum is infinite. 
Assume the sum is finite, and let $\varepsilon > 0$.
For each $n$, by the definition of $\mu^{\*}$, we can choose a countable cover $\qty{C_{n, k}}\_{k=1}^\infty \subseteq \mathcal{A}$ for $A_n$ such that $\sum_{k=1}^\infty \mu \qty(C_{n, k}) < \mu^* \qty(A_n) + \varepsilon / 2^n$.
The collection $\qty{C_{n, k}}\_{n,k \in \mathbb{N}}$ is a countable cover of $\bigcup_{n=1}^\infty A_n$ by sets from $\mathcal{A}$.
The sum of their measures is:

$$
\begin{aligned}
  \sum_{n=1}^\infty \sum_{k=1}^\infty \mu \qty(C_{n, k}) &< \sum_{n=1}^\infty \qty(\mu^* \qty(A_n) + \frac{\varepsilon}{2^n}) \\
  &= \sum_{n=1}^\infty \mu^* \qty(A_n) + \varepsilon
\end{aligned}
$$

By the definition of $\mu^{\*}$, we have $\mu^{\*} \qty(\bigcup_n A_n) \leq \sum_{n=1}^\infty \mu^* \qty(A_n) + \varepsilon$. 
Since $\varepsilon$ is arbitrary, the desired inequality holds.

(b) Let $B \in \mathcal{A}$. 
We must show that for any set $A \subseteq X$, $\mu^* \qty(A) \geq \mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c)$. 
This is trivial if $\mu^* \qty(A) = \infty$. 
Assume $\mu^* \qty(A) < \infty$, and let $\varepsilon > 0$. 
Choose a countable cover $\qty{C_n} \subseteq \mathcal{A}$ for $A$ such that $\sum_{n=1}^\infty \mu \qty(C_n) < \mu^* \qty(A) + \varepsilon$. 
Since $B \in \mathcal{A}$ and $\mathcal{A}$ is an algebra, both $C_n \cap B$ and $C_n \cap B^c$ are in $\mathcal{A}$. 
The collections $\qty{C_n \cap B}\_{n=1}^\infty$ and $\qty{C\_n \cap B^c}\_{n=1}^\infty$ are countable covers of $A \cap B$ and $A \cap B^c$ respectively. 
By the definition of $\mu^{\*}$ and the finite additivity of $\mu$ on $\mathcal{A}$:

$$
\begin{aligned}
  \mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c) &\leq \sum_{n=1}^\infty \mu\qty(C_n \cap B) + \sum_{n=1}^\infty \mu\qty(C_n \cap B^c) \\
  &= \sum_{n=1}^\infty \qty(\mu\qty(C_n \cap B) + \mu\qty(C_n \cap B^c)) \\
  &= \sum_{n=1}^\infty \mu \qty(C_n) < \mu^* \qty(A) + \varepsilon
\end{aligned}
$$

Since $\varepsilon$ is arbitrary, we have $\mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c) \leq \mu^* \qty(A)$, which proves measurability. 

(c) Assume $\mu$ is countably additive on $\mathcal{A}$. 
Let $A \in \mathcal{A}$. 
The cover $\qty{A, \varnothing, \varnothing, \dots}$ shows that $\mu^* \qty(A) \leq \mu \qty(A)$. 

For the reverse inequality, let $\qty{C_n}$ be any countable cover of $A$ by sets from $\mathcal{A}$.
Let $D_n = C_n - \bigcup_{i=1}^{n-1} C_i$.
Then $\qty{A \cap D_n}$ is a disjoint countable cover of $A$ by sets in $\mathcal{A}$.
Since $\mu$ is countably additive for disjoint unions whose union is in the algebra, and is monotone, we have:

$$
\begin{aligned}
  \mu \qty(A) &= \mu \qty(\bigcup_{n=1}^\infty \qty(A \cap D_n)) \\
  &= \sum_{n=1}^\infty \mu \qty(A \cap D_n) \leq \sum_{n=1}^\infty \mu \qty(C_n)
\end{aligned}
$$

Since this holds for any cover $\qty{C_n}$, taking the infimum over all such covers gives $\mu \qty(A) \leq \mu^* \qty(A)$. 

The two inequalities show that $\mu \qty(A) = \mu^* \qty(A)$. 

(d) Let $\mu$ be a countably additive measure on the algebra $\mathcal{A}$. 
From (a), the function $\mu^{\*}$ is an outer measure. 
By *Theorem 1.3.6*, the collection of $\mu^*$-measurable sets, $\mathcal{M}$, is a $\sigma$-algebra, and the restriction of $\mu^{\*}$ to $\mathcal{M}$, say $\overline{\mu}$, is a measure. 
From (b), every set in the original algebra $\mathcal{A}$ is $\mu^{\*}$-measurable, so $\mathcal{A} \subseteq \mathcal{M}$. 
Since $\mathcal{M}$ is a $\sigma$-algebra, it must contain the smallest $\sigma$-algebra containing $\mathcal{A}$, which is $\sigma \qty(\mathcal{A})$. 
From (c), for any set $A \in \mathcal{A}$, the new measure gives $\overline{\mu} \qty(A) = \mu^{\*} \qty(A) = \mu \qty(A)$. 
Therefore, $\overline{\mu}$ restricted to $\sigma \qty(\mathcal{A})$ is a measure on $\sigma \qty(\mathcal{A})$ that agrees with the original measure $\mu$ on the algebra $\mathcal{A}$. 
