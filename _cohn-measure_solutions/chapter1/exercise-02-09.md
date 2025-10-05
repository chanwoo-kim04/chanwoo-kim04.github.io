---
title: "Exercise 1.2.9"
date: 2025-10-06
---
$\require{physics}$
Let $E$ be the set of points that belong to $A_k$ for infinitely many values of $k$. 
A point $x$ is in $E$ if and only if for every positive integer $n$, there exists some $k \geq n$ such that $x \in A_k$. 
This allows us to express $E$ formally as the limit superior of the sequence of sets:

$$
  E = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k
$$

For any positive integer $N$, the set $E$ is a subset of the union $\bigcup_{k=N}^\infty A_k$. 
By the monotonicity of the measure $\mu$, it follows that

$$
  \mu \qty(E) \leq \mu \qty(\bigcup_{k=N}^\infty A_k)
$$

By the countable subadditivity of measure, the measure of this union is bounded by the sum of the measures:

$$
  \mu \qty(\bigcup_{k=N}^\infty A_k) \leq \sum_{k=N}^\infty \mu \qty(A_k) 
$$

Combining these two inequalities, we have for any $N \geq 1$:

$$
  \mu \qty(E) \leq \sum_{k=N}^\infty \mu \qty(A_k) 
$$

The hypothesis of the exercise is that the series $\sum_{k=1}^\infty \mu \qty(A_k)$ is finite. 
For a convergent series of nonnegative terms, the tail of the series must converge to zero. 
That is:

$$
  \lim_{N \to \infty} \sum_{k=N}^\infty \mu \qty(A_k)  = 0
$$

Since $\mu \qty(E)$ is a nonnegative constant that is less than or equal to a sequence of terms converging to zero, it must be that $\mu \qty(E) = 0$. 

---

This result is commonly known as the [*Borel-Cantelli Lemma*](https://en.wikipedia.org/wiki/Borel%E2%80%93Cantelli_lemma).
