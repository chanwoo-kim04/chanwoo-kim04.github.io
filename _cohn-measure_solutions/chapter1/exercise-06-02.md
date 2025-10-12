---
title: "Exercise 1.6.2"
date: 2025-10-12
---
$\require{physics}$
Let $\mathcal{C}$ be the collection of rectangles of the form given in *Proposition 1.1.5(c)*. 
A set $R$ is in $\mathcal{C}$ if it is the empty set or if it is an open rectangle of the form $R = \prod_{i=1}^d \qty(a_i, b_i)$ for some $a_i$, $b_i \in \mathbb{R}$ with $a_i < b_i$. 

Let $R_1$ and $R_2$ be two arbitrary sets in $\mathcal{C}$. 
If either $R_1$ or $R_2$ is the empty set, their intersection is the empty set, which is in $\mathcal{C}$. 
If neither is empty, let $R_1 = \prod_{i=1}^d \qty(a_i, b_i)$ and $R_2 = \prod_{i=1}^d \qty(c_i, d_i)$. 
Their intersection is:

$$
  R_1 \cap R_2 = \prod_{i=1}^d \qty(\qty(a_i, b_i) \cap \qty(c_i, d_i))
$$

For each coordinate $i$, the intersection of two open intervals $\qty(a_i, b_i) \cap \qty(c_i, d_i)$ is either another open interval or the empty set. 
If the intersection of the intervals is empty for any coordinate $i$, then the resulting product $R_1 \cap R_2$ is the empty set, which is in $\mathcal{C}$. 
If all the interval intersections are nonempty, then $R_1 \cap R_2$ is an open rectangle, which is also a member of $\mathcal{C}$. 
Since the collection $\mathcal{C}$ is closed under pairwise intersections, it is closed under all finite intersections. 
Therefore, it is a $\pi$-system. 

(b) Let $\mathcal{H}$ be the collection of all half-spaces of the form described in *Proposition 1.1.5(b)*, that is, sets of the form $H_{i, b} = \qty{x \in \mathbb{R}^d \colon x_i \leq b}$ for some index $i \in \qty{1, \dots, d}$ and some $b \in \mathbb{R}$. 
Let $\mathcal{P}$ be the smallest $\pi$-system containing $\mathcal{H}$. 
It must contain $\mathcal{H}$ itself and all possible finite intersections of sets from $\mathcal{H}$. 

Consider a general finite intersection of elements from $\mathcal{H}$:

$$
  S = \bigcap_{k=1}^N H_{i_k, b_k} = \qty{x \in \mathbb{R}^d \colon x_{i_k} \leq b_k \text{ for all } k = 1, \dots, N}
$$

For any given coordinate index $j \in \qty{1, \dots d}$, this intersection imposes one or more constraints of the form $x_j \leq b_{k_1}$, $x_j \leq b_{k_2}$, $\dots$. 
The combination of these constraints is equivalent to a single, more restrictive constraint. 
If there are no constraints on a coordinate $x_j$, the condition is trivial. 

Therefore, any such finite intersection $S$ can be expressed as a product of intervals:

$$
  S = \prod_{i=1}^d I_i
$$

where for each $i \in \qty{1, \dots, d}$, the interval $I_i$ is either a ray of the form $\left(-\infty, c_i \right]$ for some $c_i \in \mathbb{R}$, or it is the entire real line $\mathbb{R}$. 

Let $\mathcal{P}$ be the collection of all such product sets described above.
We must check if $\mathcal{P}$ is itself a $\pi$-system. 
The intersection of two such sets, $S_1 = \prod I_i$ and $S_2 = \prod J_i$, is $\prod \qty(I_i \cap J_i)$. 
The intersection of two intervals of the form $\left(-\infty, c \right]$ or $\mathbb{R}$ is another interval of the same form. 
Thus, the intersection $S_1 \cap S_2$ is also in $\mathcal{P}$. 
This shows that $\mathcal{P}$ is closed under finite intersections and is therefore a $\pi$-system. 

Since any $\pi$-system containing $\mathcal{H}$ must contain all finite intersections of its elements, and $\mathcal{P}$ is itself a $\pi$-system, $\mathcal{P}$ is the smallest such $\pi$-system. 
