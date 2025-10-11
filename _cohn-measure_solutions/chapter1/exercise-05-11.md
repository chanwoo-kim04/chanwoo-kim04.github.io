---
title: "Exercise 1.5.11"
date: 2025-10-11
---
$\require{physics}$
(a) Let $\mathcal{A}_C = \qty{A \cap C \colon A \in \mathcal{A}}$. 
Since $X \in \mathcal{A}$, the set $X \cap C = C$ is in $\mathcal{A}_C$. 
Let $B \in \mathcal{A}_C$. 
Then $B = A \cap C$ for some $A \in \mathcal{A}$. 
The complement of $B$ in $C$ is $C-B = C \cap A^c$. 
Since $\mathcal{A}$ is a $\sigma$-algebra, $A^c \in \mathcal{A}$, so $C-B \in \mathcal{A}_C$.
Let $\qty{B_n}$ be a sequence of sets in $\mathcal{A}_C$. 
For each $n$, there is a set $A_n \in \mathcal{A}$ such that $B_n = A_n \cap C$. 
The union is $\bigcup_n B_n = \qty(\bigcup_n A_n) \cap C$. 
Since $\mathcal{A}$ is a $\sigma$-algebra, $\bigcup_n A_n$ is in $\mathcal{A}$. 
Thus, $\bigcup_n B_n = \qty(\bigcup_n A_n) \cap C$, which is in $\mathcal{A}_C$. 
Therefore, $\mathcal{A}_C$ is a $\sigma$-algebra on $C$. 

(b) We first show that any measurable subset of $C_1 - C$ has measure zero. 
Let $K \in \mathcal{A}$ be any measurable set such that $K \subseteq C_1 - C$. 
Then $C \subseteq C_1 - K$. 
Since $C_1 - K$ is a measurable superset of $C$, we have $\mu \qty(C_1 - K) \geq \mu^* \qty(C) = \mu \qty(C_1)$. 
As $\mu$ is a finite measure, this implies $\mu \qty(C_1) - \mu \qty(K) \geq \mu \qty(C_1)$, which means $\mu \qty(K) \leq 0$. 
Since measure is nonnegative, $\mu \qty(K) = 0$. 

Now, suppose $A_1$, $A_2 \in \mathcal{A}$ satisfy $A_1 \cap C = A_2 \cap C$. 
We must show $\mu \qty(A_1 \cap C_1) = \mu \qty(A_2 \cap C_1)$. 
Consider the symmetric difference:

$$
  D = \qty(A_1 \cap C_1) \Delta \qty(A_2 \cap C_1) = \qty(A_1 \Delta A_2) \cap C_1
$$

From $A_1 \cap C = A_2 \cap C$, we deduce that $A_1 \Delta A_2 \subseteq C^c$. 
Thus, $D \subseteq C^c \cap C_1 = C_1 - C$. 
Since $D$ is a measurable subset of $C_1 - C$, we have $\mu \qty(D) = 0$. 
Because $\mu$ is finite, this implies $\mu \qty(A_1 \cap C_1) = \mu \qty(A_2 \cap C_1)$. 
Therefore, the function $\mu_C \qty(A \cap C) = \mu \qty(A \cap C_1)$ is well-defined. 

(c) Let $B \in \mathcal{A}_C$, so $B = A \cap C$ for some $A \in \mathcal{A}$. 
By definition, $\mu_C \qty(B) = \mu \qty(A \cap C_1)$. 
The set $A \cap C_1$ is a measurable superset of $B$, so $\mu^* \qty(B) \leq \mu \qty(A \cap C_1) = \mu_C \qty(B)$. 
For the reverse inequality, let $D$ be any measurable superset of $B$. 
The set $\qty(A \cap C_1) - D$ is a measurable subset of $C_1 - B = C_1 - \qty(A \cap C)$. 
Any element $x \in \qty(A \cap C_1) - D$ is in $C_1$ but not in $D$. 
Since $B = A \cap C \subseteq D$, $x$ cannot be in $A \cap C$. 
As $x \in A$, it must be that $x \notin C$. 
Thus, $x \in C_1 - C$. 
This shows $\qty(A \cap C_1) - D$ is a measurable subset of $C_1 - C$, so its measure is zero. 
From the additivity of $\mu$, we have:

$$
\begin{aligned}
  \mu \qty(A \cap C_1) &= \mu \qty(\qty(A \cap C_1) \cap D) + \mu \qty(\qty(A \cap C_1) - D) \\
  &= \mu \qty(\qty(A \cap C_1) \cap D) \leq \mu \qty(D)
\end{aligned}
$$

Since this holds for any measurable superset $D$ of $B$, we have $\mu \qty(A \cap C_1) \leq \inf \qty{\mu \qty(D)} = \mu^* \qty(B)$. 
Thus, $\mu_C \qty(B) \leq \mu^* \qty(B)$. 
Combining the inequalities, we conclude $\mu_C \qty(B) = \mu^* \qty(B)$, which also shows that $\mu_C$ is independent of the choice of $C_1$. 

(d) We must show $\mu_C$ is countably additive on $\qty(C, \mathcal{A}\_C)$. 
We already have $\mu\_C \qty(\varnothing) = \mu \qty(\varnothing \cap C_1) = 0$. 
Let $\qty{B_n}$ be a sequence of disjoint sets in $\mathcal{A}\_C$. 
For each $n$, let $B_n = A_n \cap C$ for some $A_n \in \mathcal{A}$. 
By replacing $A_n$ with $A_n - \bigcup_{k < n}A_k$, we can assume that the sets $A_n$ are also disjoint while still having $B_n = A_n \cap C$. 
Let $A = \bigcup_n A_n$. 
Then $\bigcup_n B_n = A \cap C$. We have:

$$
\begin{aligned}
  \mu_C \qty(\bigcup_n B_n) &= \mu_C \qty(A \cap C) = \mu \qty(A \cap C_1) \\
  &= \mu \qty(\bigcup_n \qty(A_n \cap C_1)) = \sum_n \mu \qty(A_n \cap C_1) \\
  &= \sum_n \mu_C \qty(A_n \cap C) = \sum_n \mu_C \qty(B_n)
\end{aligned}
$$

This proves countable additivity, so $\mu_C$ is a measure. 
