---
title: "Exercise 1.2.5"
date: 2025-10-06
---
$\require{physics}$
First, suppose the measures are equal, so $\delta_x = \delta_y$. 
This means that for any set $A \in \mathcal{A}$, we have $\delta_x \qty(A) = \delta_y \qty(A)$. 
According to the definition of a point mass measure, $\delta_x \qty(A) = 1$ if $x \in A$ and $0$ otherwise. 
Therefore, $\delta_x \qty(A) = 1$ if and only if $\delta_y \qty(A) = 1$, which is equivalent to stating that for any $A \in \mathcal{A}$, $x \in A$ if and only if $y \in A$. 

Conversely, suppose that for every set $A \in \mathcal{A}$, we have $x \in A$ if and only if $y \in A$. 
To show that the measures $\delta_x$ and $\delta_y$ are equal, we must show that their values agree on all sets in their domain. 
Let $A \in \mathcal{A}$ be arbitrary.
- If $x \in A$, then by hypothesis $y \in A$. In this case, $\delta_x \qty(A) = 1$ and $\delta_y \qty(A) = 1$.
- If $x \notin A$, then by hypothesis $y \notin A$. In this case, $\delta_x \qty(A) = 0$ and $\delta_y \qty(A) = 0$.

In both cases, $\delta_x \qty(A) = \delta_y \qty(A)$. 
Since this holds for all $A \in \mathcal{A}$, the measures are equal.
