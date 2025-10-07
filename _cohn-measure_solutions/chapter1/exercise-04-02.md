---
title: "Exercise 1.4.2"
date: 2025-10-06
---
$\require{physics}$
We prove the equivalence of the three statements by showing the chain of implications (i) $\implies$ (ii) $\implies$ (iii) $\implies$ (i). 

(i) $\implies$ (ii): Assume $A$ is a Lebesgue measurable subset of $\mathbb{R}^d$. 
If $\lambda \qty(A) < \infty$, we use the inner regularity of the Lebesgue measure(*Proposition 1.4.1(b)*). 
For each positive integer $n$, we can choose a compact set $K_n \subseteq A$ such that $\lambda \qty(A) - \lambda \qty(K_n)<1/n$. 
Let $F = \bigcup_{n=1}^\infty K_n$. 
As a countable union of closed sets, $F$ is an $F_\sigma$ set. 
By construction, $F \subseteq A$. 
By monotonicity, $\lambda \qty(F) \leq \lambda \qty(A)$, so $\lambda \qty(F)$ is also finite. 
Furthermore, since $K_n \subseteq F$ for all $n$, we have $\lambda \qty(A) - 1/n < \lambda \qty(K_n) \leq \lambda \qty(F)$. 
As this holds for all $n$, we must have $\lambda \qty(A) \leq \lambda \qty(F)$. 
Combined with the reverse inequality, this gives $\lambda \qty(F) = \lambda \qty(A)$. 
Since both measures are finite and equal, the set $N = A-F$ is measurable and has measure $\lambda \qty(N) = \lambda \qty(A) - \lambda \qty(F) = 0$. 
Thus, $A = F \cup N$. 

If $\lambda \qty(A) = \infty$, we write $A = \bigcup_k \qty(A \cap B_k)$, where $B_k$ is the open ball of radius $k$. 
Each set $A_k = A \cap B_k$ has finite measure, so by the previous argument, $A_k = F_k \cup N_k$ for an $F_\sigma$ set $F_k$ and a set $N_k$ with $\lambda \qty(N_k) = 0$. 
Then $A = \qty(\bigcup_k F_k) \cup \qty(\bigcup_k N_k)$, which is the union of an $F_\sigma$ set and a set of measure zero. 

(ii) $\implies$ (iii): Assume $A = F \cup N$, where $F$ is an $F_\sigma$ set and $\lambda \qty(N) = 0$. 
Let $B = F$. 
The symmetric difference is $A \Delta F = \qty(A-F) \cup \qty(F-A)$. 
We have $A-F = N-F$ and $F-A = \varnothing$. 
Thus, $A \Delta F = N-F$. 
Since $N-F$ is a subset of the set $N$ which has measure zero, its outer measure is also zero. 

(iii) $\implies$ (i): Assume there exists an $F_\sigma$ set $B$ such that $\lambda^* \qty(A \Delta B) = 0$. 
The set $B$ is a countable union of closed sets and is therefore Lebesgue measurable. 
The set $A \Delta B$ has outer measure zero and, by *Proposition 1.3.5*, is measurable.
Its subsets, $A - B$ and $B-A$, are therefore also measurable. 
We can reconstruct $A$ from these measurable sets:

$$
  A = \qty(B - \qty(B-A)) \cup \qty(A-B)
$$

Therefore, $A$ must be Lebesgue measurable. 
