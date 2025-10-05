---
title: "Exercise 1.1.8"
date: 2025-10-04
---
$\require{physics}$
We establish a one-to-one correspondence between the partitions of $\mathbb{N}$ and the $\sigma$-algebras on $\mathbb{N}$. 

Let $\mathcal{A}$ be an arbitrary $\sigma$-algebra on $\mathbb{N}$. 
We define an equivalence relation $\sim$ on $\mathbb{N}$ by $n \sim m$ if and only if for every set $A \in \mathcal{A}$, the condition $n \in A$ is equivalent to $m \in A$. 
The equivalence classes of this relation form a partition of $\mathbb{N}$, which we will call the *atomic partition* of $\mathcal{A}$, denoted by $\mathcal{P} = \qty{P_i}_{i \in I}$. 
Since $\mathbb{N}$ is a countable set, this partition $\mathcal{P}$ must be a countable collection of sets. 

Let $P_i$ be an arbitrary atom in the partition $\mathcal{P}$. 
For any other distinct atom $P_j$, by definition of the equivalence relation, there must exist a set $A_{ij} \in \mathcal{A}$ such that $P_i \subseteq A_{ij}$ and $P_j \cap A_{ij} = \varnothing$. 
This second condition implies $P_j \subseteq A_{ij}^c$. 
We can now express the atom $P_i$ as an intersection involving these separating sets:

$$
  P_i = \bigcap_{j \in I, j \neq i} A_{ij} 
$$

Since the partition $\mathcal{P}$ is countable, this is a countable intersection of sets that are all in $\mathcal{A}$. 
Because $\mathcal{A}$ is a $\sigma$-algebra, it is closed under countable intersections. 
Thus, each atom $P_i$ is an element of $\mathcal{A}$. 

Now that we know every atom is in $\mathcal{A}$, it follows that any union of atoms is also in $\mathcal{A}$. 
Conversely, for any set $A \in \mathcal{A}$, if $n \in A$, then the entire atom $P_n$ containing $n$ must be a subset of $A$. 
Therefore, any set $A \in \mathcal{A}$ is precisely the union of the atoms of the points it contains. 
This shows that $\mathcal{A}$ is exactly the collection of all unions of sets from its atomic partition $\mathcal{P}$. 

For the converse, let $\mathcal{P} = \qty{P_i}\_{i \in I}$ be any partition of $\mathbb{N}$. 
Let $\mathcal{A}\_{\mathcal{P}}$ be the collection of all unions of sets from $\mathcal{P}$. 
We show that $\mathcal{A}\_{\mathcal{P}}$ is a $\sigma$-algebra. 
- $\mathbb{N} \in \mathcal{A}\_{\mathcal{P}}$ because $\mathbb{N} = \bigcup_{i \in I}P_i$.
- $\mathcal{A}\_{\mathcal{P}}$ is closed under complementation.
  If $A = \bigcup_{j \in J}P_j$ for some $J \subseteq I$, then its complement is $A^c = \bigcup_{k \in I-J}P_k$, which is also a union of sets from $\mathcal{P}$ and thus is in $\mathcal{A}\_{\mathcal{P}}$.
- $\mathcal{A}\_{\mathcal{P}}$ is closed under countable unions.
  Let $\qty(A_n)$ be a sequence of sets in $\mathcal{A}\_{\mathcal{P}}$.
  For each $n$, $A_n = \bigcup_{j \in J_n}P_j$ for some $J_n \subseteq I$.
  Their union is $\bigcup_n A_n = \bigcup_{k \in \bigcup_n J_n} P_k$.
  Since $\bigcup_n J_n$ is a subset of $I$, this union is also in $\mathcal{A}\_{\mathcal{P}}$.

This establishes that every $\sigma$-algebra on $\mathbb{N}$ corresponds to a unique partition of $\mathbb{N}$, and every partition of $\mathbb{N}$ corresponds to a unique $\sigma$-algebra. 
This completely characterizes all $\sigma$-algebras on $\mathbb{N}$. 
