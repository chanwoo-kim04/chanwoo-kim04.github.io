---
title: "Exercise 2.1.2"
date: 2025-10-12
---
$\require{physics}$
Let $A$ be a subset of $\mathbb{R}$ that is not a Borel set. 
Since every countable subset of $\mathbb{R}$ is an $F_\sigma$ set and therefore a Borel set, $A$ must be uncountable. 
We consider the uncountable family of functions $\qty{f_a}_{a \in A}$, where each function $f_a \colon \mathbb{R} \to \mathbb{R}$ is the characteristic function of the singleton set $\qty{a}$:

$$
  f_a \qty(x) = \chi_{\qty{a}} \qty(x)
$$

Each function $f_a$ in this family is Borel measurable because each singleton set $\qty{a}$ is closed, and therefore a Borel, subset of $\mathbb{R}$.

Now, let $F$ be the pointwise supremum of this family of functions, defined by:

$$
  F \qty(x) = \sup_{a \in A}f_a \qty(x)
$$

We can evaluate $F \qty(x)$ for any $x \in \mathbb{R}$. 
If $x \in A$, then $x$ is itself an index in the family, and the supremum includes the function $f_x$. 
Since $f_x \qty(x) = 1$ and no function in the family has a value greater than $1$, the supremum must be $F \qty(x) = 1$. 
If $x \notin A$, then for every $a \in A$, we have $x \neq a$, which means $f_a \qty(x) = 0$. 
The supremum of a set of zeros is $0$, so in this case, $F \qty(x) = 0$. 

This shows that the supremum function $F$ is precisely the characteristic function of the set $A$, that is, $F = \chi_A$. 
However, a characteristic function $\chi_A$ is Borel measurable if and only if the set $A$ is a Borel set. 
Since we chose $A$ to be a non-Borel set, the function $F = \chi_A$ is not Borel measurable. 
This provides a counterexample, showing that the supremum of an uncountable family of Borel measurable functions is not necessarily Borel measurable. 
