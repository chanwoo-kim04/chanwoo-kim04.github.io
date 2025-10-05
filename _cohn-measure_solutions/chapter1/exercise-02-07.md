---
title: "Exercise 1.2.7"
date: 2025-10-06
---
$\require{physics}$
(a) First, suppose $\lim_{n \to \infty} \abs{x_n} = \infty$. 
Let $I$ be any bounded subinterval of $\mathbb{R}$. 
Then $I \subseteq \qty[-M, M]$ for some $M > 0$. 
By the definition of the limit, there exists an integer $N$ such that for all $n > N$, we have $\abs{x_n} > M$. 
This means only a finite number of terms from the sequence $\qty{x_n}$ can be in the interval $I$. 
Therefore, by the definition of $\mu$, $\mu \qty(I)$ is a finite integer less than or equal to $N$. 

Conversely, suppose that $\mu \qty(I) < \infty$ for all bounded intervals $I$. 
Assume for the sake of contradiction that the sequence $\qty{\abs{x_n}}$ does not converge to $\infty$. 
This implies that there exists a bounded infinite subsequence $\qty{x_{n_k}}$.
This subsequence must be contained within some bounded interval, say $I = \qty[-M, M]$. 
Since an infinite number of terms from the original sequence $\qty{x_n}$ lie in $I$, the definition of $\mu$ implies that $\mu \qty(I) = \infty$. 
This contradicts our hypothesis that $\mu$ assigns finite values to all bounded intervals. 
Thus, the assumption must be false, and $\lim_{n \to \infty} \abs{x_n} = \infty$. 

(b) We prove that the measure $\mu$ is $\sigma$-finite if and only if every real number appears only a finite number of times in the sequence $\qty{x_n}$. 

First, suppose $\mu$ is $\sigma$-finite. 
Then $\mathbb{R} = \bigcup_{i=1}^\infty A_i$ where each $A_i$ is a Borel set and $\mu \qty(A_i) < \infty$. 
Assume for contradiction that some value $y \in \mathbb{R}$ appears infinitely many times in the sequence $\qty{x_n}$. 
Since $\qty{A_i}$ is a cover of $\mathbb{R}$, $y$ must belong to some set $A_k$. 
But if $y$ appears infinitely often in the sequence, and $y \in A_k$, then the set $A_k$ contains infinitely many terms of the sequence $\qty{x_n}$. 
This implies $\mu \qty(A_k) = \infty$, which contradicts the defining property of the sets $A_i$. 
Thus, every value must appear only a finite number of times. 

Conversely, suppose every value appears a finite number of times in $\qty{x_n}$. 
Let $\mathcal{X}$ be the set of distinct values in the sequence. 
As the image of $\mathbb{N}$, the set $\mathcal{X}$ is at most countable. 
We can write $\mathbb{R}$ as the countable union of Borel sets:

$$
  \mathbb{R} = \qty(\mathbb{R} - \mathcal{X}) \cup \bigcup_{y \in \mathcal{X}} \qty{y}
$$

The measure of the first set is $\mu \qty(\mathbb{R} - \mathcal{X}) = 0$, which is finite. 
For each $y \in \mathcal{X}$, the measure $\mu \qty(\qty{y})$ is the number of times $y$ appears in the sequence, which is finite by hypothesis. 
Since $\mathbb{R}$ is a countable union of sets of finite measure, $\mu$ is $\sigma$-finite. 
