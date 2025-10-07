---
title: "Exercise 1.4.7"
date: 2025-10-06
---
$\require{physics}$
Let $\mathbb{R}$ be a vector space over the field $\mathbb{Q}$. 
There exists a Hamel basis $B$ for this space. 
Since $\mathbb{R}$ is uncountable, $B$ must also be uncountable. 
We can therefore choose a strictly increasing sequence of subsets of the basis, $\qty{B_n}_{n=1}^\infty$, such that their union is the entire basis, $\bigcup\_{n=1}^\infty B_n = B$. 

For each $n$, let $V_n$ be the subspace spanned by $B_n$ over $\mathbb{Q}$, that is, $V_n = \text{span}_{\mathbb{Q}} \qty(B_n)$. 
Since $B_n$ is a proper subset of $B$ for each $n$, each $V_n$ is a proper subspace of $\mathbb{R}$. 
The sequence of subspaces $\qty{V_n}$ is strictly increasing, and their union is $

$$
\begin{aligned}
  \bigcup_{n=1}^\infty V_n &= \text{span}_{\mathbb{Q}} \qty(\bigcup_{n=1}^\infty B_n) \\
  &= \text{span}_{\mathbb{Q}} \qty(B) = \mathbb{R}
\end{aligned}
$$

Now, define the sequence of sets $\qty{A_n}_{n=1}^\infty$ by $A_n = \qty[0,1] - V_n$. 
Since the sequence $\qty{V_n}$ is increasing, the sequence $\qty{A_n}$ is a decreasing sequence of subsets of $\qty[0, 1]$. 
The intersection of these sets is:

$$
\begin{aligned}
  \bigcap_{n=1}^\infty A_n &= \qty[0,1] \cap \qty(\bigcap_{n=1}^\infty V_n^c) \\
  &= \qty[0, 1] \cap \qty(\bigcup_{n=1}^\infty V_n)^c = \varnothing
\end{aligned}
$$

It remains to prove that $\lambda^* \qty(A_n) = 1$ for all $n$. 
First, we establish that any Borel subset of $V_n$ has Lebesgue measure zero. 
Assume for contradiction that there exists a Borel set $S \subseteq V_n$ with $\lambda \qty(S) > 0$. 
By *Proposition 1.4.10*, the difference set $\text{diff} \qty(S) = \qty{x - y \colon x, y \in S}$ must contain an open interval $\qty(-\varepsilon, \varepsilon)$ for some $\varepsilon > 0$. 
Since $V_n$ is a vector space over $\mathbb{Q}$, it is an additive subgroup of $\mathbb{R}$, and because $S \subseteq V_n$, we must have $\text{diff} \qty(S) \subseteq V_n$. 
This implies that $\qty(-\varepsilon, \varepsilon)$ is contained in $V_n$. 
Because $V_n$ is closed under addition and contains the interval $\qty(-\varepsilon, \varepsilon)$, every real number can be generated from its elements. 
Thus, we would have $V_n = \mathbb{R}$. 
This contradicts the fact that $V_n$ is a proper subspace of $\mathbb{R}$. 
Therefore, the initial assumption must be false, and any Borel subset of $V_n$ must have Lebesgue measure zero. 

Now, to show that $\lambda^* \qty(A_n) = 1$, we use *Exercise 1.3.3*. 
This exercise guarantees that for the set $A_n$, there exists a Borel set $B_n$ such that $A_n \subseteq B_n$ and $\lambda \qty(B_n) = \lambda^* \qty(A_n)$. 

Consider the set $\qty[0, 1] - B_n$. 
This set is a Borel set because $B_n$ is a Borel set. 
From the inclusion $A_n \subseteq B_n$, it follows that $\qty[0,1 ] - B_n \subseteq \qty[0, 1] - A_n \subseteq V_n$. 

As established in the previous step, any Borel subset of $V_n$ has Lebesgue measure zero. 
Since $\qty[0, 1] - B_n$ is a Borel subset of $V_n$, we must have $\lambda \qty(\qty[0, 1] - B_n) = 0$. 

Because $\qty[0, 1]$ is the disjoint union of the measurable sets $\qty[0, 1] - B_n$ and $\qty[0,1] \cap B_n$, the additivity of the Lebesgue measure gives:

$$
\begin{aligned}
  \lambda \qty(\qty[0, 1]) &= \lambda \qty(\qty[0, 1] - B_n) + \lambda \qty(\qty[0, 1] \cap B_n) \\
  &= 0 + \lambda \qty(\qty[0,1 ] \cap B_n)
\end{aligned}
$$

This implies $\lambda \qty(\qty[0,1] \cap B_n) = 1$. 
Since $\lambda \qty(B_n) \geq \lambda \qty(\qty[0,1] \cap B_n)$, we have $\lambda \qty(B_n) \geq 1$. 

Combining this with the fact that $\lambda \qty(B_n) = \lambda^* \qty(A_n)$ and that $\lambda^* \qty(A_n) \leq \lambda^* \qty(\qty[0, 1]) = 1$, we get $\lambda^* \qty(A_n) = 1$ for all $n$. 
