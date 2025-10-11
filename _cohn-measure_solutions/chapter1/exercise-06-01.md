---
title: "Exercise 1.6.1"
date: 2025-10-12
---
$\require{physics}$
1. The collection of all open intervals $\qty(a, b)$ where $a$, $b \in \mathbb{R}$ and $a < b$, along with the empty set, forms a $\pi$-system because the intersection of any two open intervals is either another open interval or the empty set.
    This collection generates $\mathcal{B} \qty(\mathbb{R})$ because every open set in $\mathbb{R}$ can be written as a countable union of disjoint open intervals, and the open sets themselves generate $\mathcal{B} \qty(\mathbb{R})$ by definition.

2. The collection of all closed intervals $\qty[a, b]$ where $a$, $b \in \mathbb{R}$ and $a \leq b$, along with the empty set, is a $\pi$-system, as the intersection of two closed intervals is either another closed interval or the empty set.
    This collection generates $\mathcal{B} \qty(\mathbb{R})$ because any open interval $\qty(a, b)$ is the countable union of closed intervals, for example, $\bigcup_{n=1}^\infty \qty[a+1/n, b-1/n]$.

3. The collection of all half-open intervals of the form $\left( a, b \right]$ where $a$, $b \in \mathbb{R}$ and $a < b$, along with the empty set, is a $\pi$-system.
    The intersection of two such intervals is either empty or another interval of the same form.
    This collection generates $\mathcal{B} \qty(\mathbb{R})$ as it can be used to construct all open intervals; for instance, $\qty(a, b) = \bigcup_{n=1}^\infty \left( a, b-1/n \right]$.

4. The collection of all rays of the form $\left(-\infty, a \right]$, where $a \in \mathbb{R}$ is a $\pi$-system, because the intersection of $\left(-\infty, a \right]$ and $\left(-\infty, b \right]$ is $\left(-\infty, \min \qty(a, b) \right]$.
    *Proposition 1.1.4(b)* directly states that this collection generates $\mathcal{B} \qty(\mathbb{R})$.

5. The collection of all rays of the form $\left[a, \infty \right)$, where $a \in \mathbb{R}$ is a $\pi$-system, since $\left[a, \infty \right) \cap \left[b, \infty \right) = \left[ \max \qty(a, b), \infty \right)$.
    It generates $\mathcal{B} \qty(\mathbb{R})$ because the complement of these sets, $\qty(-\infty, a)$, also forms a generating collection for $\mathcal{B} \qty(\mathbb{R})$ by an argument symmetric to that in *Proposition 1.1.4*.

6. The collection of all open intervals with rational endpoints $\qty(a, b)$ where $a$, $b \in \mathbb{Q}$ and $a < b$, along with the empty set, forms a $\pi$-system.
    This collection generates $\mathcal{B} \qty(\mathbb{R})$ because any open interval with real endpoints can be written as a countable union of open intervals with rational endpoints.
    Since the set of all open intervals generates $\mathcal{B} \qty(\mathbb{R})$, this countable subcollection is sufficient to generate it as well.
