---
title: "Exercise 1.3.5"
date: 2025-10-06
---
$\require{physics}$
(a) We verify the three required properties.
- $\mu^* \qty(\varnothing) = 0$: The empty set is covered by the sequence $\qty{\varnothing, \varnothing, \dots}$.
    Since $\varnothing \in \mathcal{A}$ and $\mu \qty(\varnothing) = 0$, the sum of the measures of this cover is $0$.
    As $\mu^{\*}$ is the infimum over all covers, $\mu^* \qty(\varnothing) = 0$.
- Monotonicity: If $A\subseteq B$, any countable cover of $B$ by sets from $\mathcal{A}$ is also a cover of $\mathcal{A}$.
    Thus, the set of sums of measures for covers of $A$ is a superset of that for $B$, which implies that the infimum for $A$ is less than or equal to the infimum for $B$.
    Therefore, $\mu^* \qty(A) \leq \mu^* \qty(B)$.
- Countable Subadditivity: Let $\qty{A_n}\_{n=1}^\infty$ be a sequence of subsets of $X$.
    We must show $\mu^{\*} \qty(\bigcup_{n=1}^\infty A_n) \leq \sum_{n=1}^\infty \mu^* \qty(A_n)$.
    The inequality is trivial if the sum is infinite.
    Assume the sum is finite, and let $\varepsilon > 0$.
    For each $n$, by the definition of $\mu^{\*}$, we can choose a countable cover $\qty{C_{n, k}}\_{k=1}^\infty \subseteq \mathcal{A}$ for $A_n$ such that $\sum_{k=1}^\infty \mu \qty(C_{n, k}) < \mu^* \qty(A_n) + \varepsilon / 2^n$.
    Thye collection $\qty{C_{n, k}}\_{n,k \in \mathbb{N}}$ is a countable cover of $\bigcup_{n=1}^\infty A_n$ by sets from $\mathcal{A}$.
    The sum of their measure is:
    
    $$
    \begin{aligned}
      \sum_{n=1}^\infty \sum_{k=1}^\infty \mu \qty(C_{n, k}) &< \sum_{n=1}^\infty \qty(\mu^* \qty(A_n) + \frac{\varepsilon}{2^n}) \\
      &= \sum_{n=1}^\infty \mu^* \qty(A_n) + \varepsilon
    \end{aligned}
    $$
    
    By the definition of $\mu^*$, we have $\mu^* \qty(\bigcup_n A_n) \leq \sum_{n=1}^\infty \mu^* \qty(A_n) + \varepsilon$. 
    Since $\varepsilon$ is arbitrary, the inequality holds.
