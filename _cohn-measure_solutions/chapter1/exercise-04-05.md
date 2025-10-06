---
title: "Exercise 1.4.5"
date: 2025-10-06
---
$\require{physics}$
Let $\qty{I_n}_{n=1}^{\infty}$ be an enumeration of all open intervals with rational endpoints, which forms a countable base for the topology of $\mathbb{R}$. 
We will inductively construct two sequences of pairwise disjoint compact sets, $\qty{C_n}\_{n=1}^\infty$ and $\qty{D_n}\_{n=1}^\infty$, such that for each $n$, both $C_n$ and $D_n$ are subsets of $I_n$ with positive Lebesgue measure. 

For the base case $n=1$, we must construct two disjoint compact sets with positive measure inside the open set $I_1$. 
This is always possible. 
Since $I_1$ is a nonempty open set, it contains a closed interval, within which we can construct a compact, nowhere dense "fat Cantor set" $C_1$ with positive measure(as demonstrated in *Exercise 1.4.4*). 
Because $C_1$ is nowhere dense, the set $I_1-K_1$ remains a nonempty open set with positive measure. 
Within this remaining open set, we can again find a closed interval and construct a second disjoint fat Cantor set $D_1$ with positive measure. 

For the inductive step, assume that for $j=1$, \dots, $n-1$, we have chosen pairwise disjoint compact sets $C_j$ and $D_j$. 
Let $S_{n-1} = \bigcup_{j=1}^{n-1} \qty(C_j \cup D_j)$. 
Since $S_{n-1}$ is a finite union of nowhere dense sets, it is itself a nowhere dense set. 
Therefore, the set $O_n = I_n - S_{n-1}$ is a nonempty open set. 
Using the same procedure as in the base case, we can construct two disjoint compact, nowhere dense sets, $C_n$ and $D_n$, both with positive measure, inside this open set $O_n$. 
By construction, $C_n$ and $D_n$ are also disjoint from all previously constructed sets. 

Now, define the set $A$ as the union of all the sets $C_n$:

$$
  A = \bigcup_{n=1}^\infty C_n
$$

This set $A$ is a countable union of compact sets, making it an $F_\sigma$ set, which is a Bore set. 
By construction, the sets $D_n$ are all disjoint from $A$ and thus are subsets of $A^c$. 

We must verify that this set $A$ satisfies the required properties for any bounded open subinterval $I \subseteq \mathbb{R}$. 

First, to show that $\lambda \qty(A \cap I) > 0$, we note that since $\qty{I_n}$ is a base for the topology of $\mathbb{R}$, the open interval $I$ must contain some interval $I_m$ from our enumeration. 
By our construction, there is a compact set $C_m$ with $\lambda \qty(C_m)>0$ such that $C_m \subseteq I_m \subseteq I$. 
As we defined $A$ to include $C_m$, we have $C_m \subseteq I \cap A$. 
By the monotonicity of the measure, it follows that $\lambda \qty(I \cap A) \geq \lambda \qty(C_m) > 0$. 

Second, to show that $\lambda \qty(A \cap I) < \lambda \qty(I)$, we must demonstrate that $\lambda \qty(I \cap A^c) > 0$. 
By the same reasoning, the open interval $I$ contains some interval $I_m$ from our enumeration. 
Our construction placed a compact set $D_m$ with $\lambda \qty(D_m)>0$ inside $I_m$ and ensured that it was disjoint from $A$. 
Thus, $D_m \subseteq I \cap A^c$. 
By monotonicity, $\lambda \qty(I \cap A^c) \geq \lambda \qty(D_m) >0$. 

Both conditions are satisfied for any bounded open interval, which completes the proof.
