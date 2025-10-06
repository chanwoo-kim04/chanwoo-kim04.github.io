---
title: "Exercise 1.3.9"
date: 2025-10-06
---
$\require{physics}$
(a) We verify the three required properties for an outer measure.
First, $\mu^* \qty(\varnothing) = \lambda^* \qty(\pi \qty(\varnothing)) = \lambda^* \qty(\varnothing) = 0$. 
Second, if $A \subseteq C$, then the projection $\pi \qty(A)$ is a subset of $\pi \qty(C)$. 
Since $\lambda^{\*}$ is monotone, $\lambda^{\*} \qty(\pi \qty(A)) \leq \lambda^{\*} \qty(\pi \qty(C))$, which implies $\mu^{\*} \qty(A) \leq \mu^{\*} \qty(C)$. 
Finally, for countable subadditivity, let $\qty{A_n}$ be a sequence of subsets of $\mathbb{R}^2$. 
The projection of a union is the union of projections, so $\pi \qty(\bigcup_n A_n) = \bigcup_n \pi \qty(A_n)$. 
Using this and the countable subbaditivity of $\lambda^*$:

$$
\begin{aligned}
  \mu^* \qty(\bigcup_n A_n) &= \lambda^* \qty(\pi \qty(\bigcup_n A_n)) = \lambda^* \qty(\bigcup_n \pi \qty(A_n)) \\
  &\leq \sum_n \lambda^* \qty(\pi \qty(A_n)) = \sum_n \mu^* \qty(A_n)
\end{aligned}
$$

Thus, $\mu^*$ is an outer measure on $\mathbb{R}^2$. 

(b) A set $B \subseteq \mathbb{R}^2$ is $\mu^{\*}$-measurable if and only if for every $A \subseteq \mathbb{R}^2$, the equality 
$\lambda^* \qty(\pi \qty(A)) = \lambda^* \qty(\pi \qty(A \cap B)) + \lambda^* \qty(\pi \qty(A \cap B^c))$ holds. 

First, assume $B$ is $\mu^*$-measurable. 
Let $S$ be an arbitrary subset of $\mathbb{R}$ and consider the set $A = S \times \mathbb{R}$, for which $\pi \qty(A) = S$. 
Let $B_1 = \pi \qty(B)$ be the projection of $B$, and let $B_0 = \qty{x \in \mathbb{R} \colon \qty{x} \times \mathbb{R} \subseteq B}$. 
The projections of the intersections are $\pi \qty(A \cap B) = S \cap B_1$ and $\pi \qty(A \cap B^c) = S \cap B_0^c$. 
The measurability condition for $A = S \times \mathbb{R}$ thus becomes:

$$
  \lambda^* \qty(S) = \lambda^* \qty(S \cap B_1) + \lambda^* \qty(S \cap B_0^c)
$$

Let $N = B_1 - B_0$ and for each $k$, let $S_k = N \cap \qty[-k, k]$. 
Since $S_k$ is bounded, its outer measure is finite. 
Using $S_k$ as our test set $S$:

$$
  \lambda^* \qty(S_k) = \lambda^* \qty(S_k \cap B_1) + \lambda^* \qty(S_k \cap B_0^c)
$$

Since $S_k \subseteq N \subseteq B_1$, we have $S_k \cap B_1 = S_k$. 
Also, since $S_k \subseteq B_1 - B_0$, we have $S_k \subseteq B_0^c$. 
Thus, $S_k \cap B_0^c = S_k$. 
The equation becomes $\lambda^* \qty(S_k) = \lambda^* \qty(S_k) + \lambda^* \qty(S_k)$. 
Because $\lambda^* \qty(S_k)$ is finite, this implies $\lambda^* \qty(S_k) = 0$. 
Since this holds for all $k$, and $N = \bigcup_k S_k$, countable subadditivity yields $\lambda^* \qty(N) \leq \sum_k \lambda^* \qty(S_k) = 0$. 
Thus, $\lambda^* \qty(B_1 - B_0) = 0$. 

With this condition, the equation $\lambda^* \qty(S) = \lambda^* \qty(S \cap B_1) + \lambda^* \qty(S \cap B_0^c)$ is equivalent to $\lambda^* \qty(S) = \lambda^* \qty(S \cap B_1) + \lambda^* \qty(S \cap B_1^c)$, which is the criterion for $B_1$ being Lebesgue measurable. 
Since $B_1 - B_0$ has outer measure $0$, it is measurable. 
Thus, $B_0 = B_1 - \qty(B_1 - B_0)$ is measurable. 
The required inclusions $B_0 \times \mathbb{R} \subseteq B \subseteq B_1 \times \mathbb{R}$ follow from the definitions of $B_0$ and $B_1$. 

Conversely, assume there exists Lebesgue measurable sets $B_0$, $B_1 \subseteq \mathbb{R}$ with $\lambda \qty(B_1 - B_0) = 0$ such that $B_0 \times \mathbb{R} \subseteq B \subseteq B_1 \times \mathbb{R}$. 
Let $A \subseteq \mathbb{R}^2$ and let $S = \pi \qty(A)$. 
From the inclusions for $B$, we deduce inclusions for the projections: $S \cap B_0 \subseteq \pi \qty(A \cap B) \subseteq S \cap B_1$ and $S \cap B_1^c \subseteq \pi \qty(A \cap B^c) \subseteq S \cap B_0^c$. 
Since $\lambda \qty(B_1 - B_0) = 0$, it follows that $\lambda^* \qty(\pi \qty(A \cap B)) = \lambda^* \qty(S \cap B_1)$. 
Similarly, since $\lambda \qty(B_0^c - B_1^c) = 0$, $\lambda^* \qty(\pi \qty(A \cap B^c)) = \lambda^* \qty(S \cap B_1^c)$. 
The measurability criterion we must verify for $B$ is:

$$
  \lambda^* \qty(S) = \lambda^* \qty(\pi \qty(A \cap B)) + \lambda^* \qty(\pi \qty(A \cap B^c))
$$

Substituting our findings, this is equivalent to:

$$
  \lambda^* \qty(S) = \lambda^* \qty(S \cap B_1) + \lambda^* \qty(S \cap B_1^c)
$$

This final equality is true because $B_1$ is a Lebesgue measurable set. 
Thus, $B$ is $\mu^*$-measurable. 
