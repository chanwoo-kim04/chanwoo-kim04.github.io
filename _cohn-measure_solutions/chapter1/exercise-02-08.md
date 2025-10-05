---
title: "Exercise 1.2.8"
date: 2025-10-06
---
$\require{physics}$
(a) First, for the empty set, the only subset $B \subseteq \varnothing$ with finite measure is $\varnothing$ itself. 
Thus, $\mu^{\bullet} \qty(\varnothing) = \sup \qty{\mu \qty(\varnothing)} = 0$. 
The nonnegativity of $\mu^{\bullet}$ is clear from its definition. 
For countable additivity, let $\qty{A_n}\_{n=1}^\infty$ be a sequence of disjoint sets in $\mathcal{A}$, and let $A = \bigcup_{n=1}^\infty A_n$. 

To show subadditivity, let $B$ be any set in $\mathcal{A}$ such that $B \subseteq A$ and $\mu \qty(B) < \infty$. 
Let $B_n = B \cap A_n$. 
The sets $\qty{B_n}\_{n=1}^\infty$ are disjoint, their union is $B$, and $\mu \qty(B_n) \leq \mu^{\bullet} \qty(A_n)$. 
By the countable additivity of $\mu$, we have $\mu \qty(B) = \sum_{n=1}^\infty \mu \qty(B_n) \leq \sum_{n=1}^\infty \mu^{\bullet} \qty(A_n)$. 
Taking the supremum over all such sets $B$ on the left side gives $\mu^{\bullet} \qty(A) \leq \sum_{n=1}^\infty \mu^{\bullet} \qty(A_n)$. 

For the reverse inequality, for each $n$, choose a set $B_n \subseteq A_n$ with $\mu \qty(B_n) < \infty$. 
For any positive integer $N$, the set $\bigcup_{n=1}^N B_n$ is a subset of $A$ with finite measure. 
Thus, $\sum_{n=1}^N \mu \qty(B_n) = \mu \qty(\bigcup_{n=1}^N B_n) \leq \mu^{\bullet} \qty(A)$. 
Taking the supremum over all such choices of $B_n$ for $n \in \qty{1, \dots, N}$ yields $\sum_{n=1}^N \mu^{\bullet} \qty(A_n) \leq \mu^{\bullet} \qty(A)$. 
As this holds for all $N$, we conclude that $\sum_{n=1}^\infty \mu^{\bullet} \qty(A_n) \leq \mu^{\bullet} \qty(A)$. 
The two inequalities establish countable additivity. 

(b) Let $A \in \mathcal{A}$. 
If $\mu \qty(A) < \infty$, then $A$ itself is a candidate for $B$ in the set defining the supremum for $\mu^{\bullet} \qty(A)$. 
Since any other candidate $B'$ must be a subset of $A$, we have $\mu \qty(B') \leq \mu \qty(A)$, which makes $\mu \qty(A)$ the supremum. 
Thus, $\mu^{\bullet} \qty(A) = \mu \qty(A)$. 

If $\mu \qty(A) = \infty$, we use the fact that $\mu$ is $\sigma$-finite. 
We can write $X = \bigcup_{n=1}^\infty X\_n$, where $\qty{X_n}\_{n=1}^\infty$ is a sequence of disjoint sets with $\mu \qty(X_n) < \infty$. 
Let $B_N = \bigcup_{n=1}^N \qty(A \cap X_n)$. 
Each $B_N$ is a subset of $A$ with finite measure, as $\mu \qty(B_N) = \sum_{n=1}^N \mu \qty(A \cap X_n) < \infty$. 
By the continuity of measure from below(*Proposition 1.2.5(a)*), $\lim_{N \to \infty} \mu \qty(B_N) = \mu \qty(A) = \infty$. 
Since $\mu \qty(B_N) \leq \mu^{\bullet} \qty(A)$ for all $N$, the supremum defining $\mu^{\bullet} \qty(A)$ must be infinite. 
Therefore, in this case as well, $\mu^{\bullet} \qty(A) = \mu \qty(A)$. 

(c) The measure is defined by $\mu \qty(\varnothing) = 0$ and $\mu \qty(A) = \infty$ for any non-empty set $A\in \mathcal{A}$. 
To compute $\mu^{\bullet} \qty(A)$, we find the supremum of $\qty{\mu \qty(B) \colon B \subseteq A, \mu \qty(B) < \infty}$. 
The only set $B \in \mathcal{A}$ for which condition $\mu \qty(B)<\infty$ holds is the empty set, $B = \varnothing$. 
For this set, $\mu \qty(\varnothing) = 0$. 
Thus, for any set $A$, the set of values for which we are taking the supremum is just $\qty{0}$. 
This means $\mu^{\bullet} \qty(A) = 0$ for all $A \in \mathcal{A}$. 
In this case, $\mu^{\bullet}$ is the zero measure. 
