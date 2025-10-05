---
title: "Exercise 1.2.2"
date: 2025-10-05
---
$\require{physics}$
First, we show that $\mu$ is a measure. 
Let $\qty{q_n}\_{n=1}^\infty$ be an enumeration of the rational numbers $\mathbb{Q}$. 
The measure $\mu$ can be expressed as a countable sum of point mass measures: $\mu \qty(A) = \sum_{n=1}^\infty \delta_{q_n} \qty(A)$. 
Each point mass $\delta_{q_n}$ is a measure as defined in *Example 1.2.1(b)*. 
As established in *Exercise 1.2.6(b)*, a countable sum of measures is itself a measure. 
Therefore, $\mu$ is a measure on $\qty(\mathbb{R}, \mathcal{B}\qty(\mathbb{R}))$. 

To show that $\mu$ is $\sigma$-finite, we must express $\mathbb{R}$ as a countable union of Borel sets of finite measure. 
We can partition $\mathbb{R}$ into the set of rational numbers and the set of irrational numbers: $\mathbb{R} = \mathbb{Q} \cup \qty(\mathbb{R} - \mathbb{Q})$. 
The set of rationals is $\mathbb{Q} = \bigcup_{n=1}^\infty \qty{q_n}$. 
Each singleton $\qty{q_n}$ is a Borel set with $\mu \qty(\qty{q_n}) = 1 < \infty$. 
The set of irrationals, $\mathbb{R} - \mathbb{Q}$, is also a Borel set as the complement of the $F_\sigma$ set $\mathbb{Q}$, and has measure $\mu \qty(\mathbb{R} - \mathbb{Q}) = 0 < \infty$. 
Thus, $\mathbb{R}$ is a countable union of sets of finite measure, which by definition means $\mu$ is $\sigma$-finite. 

Finally, we show that every non-empty open subinterval has infinite measure. 
Let $\qty(a, b)$ be any open subinterval of $\mathbb{R}$. 
Since the set of rational numbers $\mathbb{Q}$ is dense in $\mathbb{R}$, the interval $\qty(a, b)$ contains infinitely many rational numbers. 
By the definition of $\mu$, the measure of $\qty(a, b)$ is the number of rational numbers it contains, which is infinite. 
Thus, $\mu \qty(\qty(a, b)) = \infty$. 
