---
title: "Exercise 1.2.4"
date: 2025-10-06
---
$\require{physics}$
(a) Let $\mu$ be a nonnegative, countably additive function on a $\sigma$-algebra $\mathcal{A}$. 
Suppose there exists a set $A \in \mathcal{A}$ such that $\mu \qty(A)$ is finite. 
We can express $A$ as the disjoint union $A = A \cup \varnothing \cup \varnothing \cup \cdots$. 
By countable additivity, we have:

$$
  \mu \qty(A) = \mu \qty(A) + \mu \qty(\varnothing) + \mu \qty(\varnothing) + \cdots = \mu \qty(A) + \sum_{n=1}^\infty \mu \qty(\varnothing)
$$

Since $\mu \qty(A)$ is a finite real number, we can subtract it from both sides of the equation, which yields $\sum_{n=1}^\infty \mu \qty(\varnothing) = 0$. 
For an infinite sum of nonnegative terms to be zero, each term must be zero. 
Therefore, $\mu \qty(\varnothing) = 0$. 

(b) To show that the condition $\mu \qty(\varnothing) = 0$ does not follow from the other parts of the definition of a measure, we must construct a function that is nonnegative and countably additive but does not map the empty set to zero. 

Consider a nonempty measurable space $\qty(X, \mathcal{A})$. 
Define a function $\mu$ on $\mathcal{A}$ by setting $\mu \qty(A) = \infty$ for every set $A \in \mathcal{A}$, including the empty set. 
This function is clearly nonnegative. 
It is also countably additive: if $\qty{A_n}$ is a sequence of disjoint sets in $\mathcal{A}$, their union $A = \bigcup A_n$ has measure $\mu \qty(A) = \infty$. 
The sum of their measures is $\sum \mu \qty(A_n) = \sum \infty = \infty$. 
Since $\infty = \infty$, the additivity condition holds. 

This function $\mu$ satisfies all the conditions for a measure except that $\mu \qty(\varnothing) = \infty \neq 0$. 
Therefore, the condition $\mu \qty(\varnothing) = 0$ cannot be derived from the remaining axioms of a measure. 
