---
title: "Exercise 2.1.4"
date: 2025-10-12
---
$\require{physics}$
Let $C$ be the set of points where the limit of the sequence $\qty{f_n}$ of $\qty[-\infty, \infty]$-valued measurable functions exists and is finite. 
A limit exists and is finite if and only if its limit inferior and limit superior are equal and are not infinite. 
We can express this set $C$ as the intersection of three distinct sets:
1. The set $A_1 = \qty{x \in X \colon \liminf_n f_n \qty(x) = \limsup_n f_n \qty(x)}$, where the limit exists.
2. The set $A_2 = \qty{x \in X \colon \liminf_n f_n \qty(x) > -\infty}$, which excludes points where the limit is $-\infty$.
3. The set $A_3 = \qty{x \in X \colon \limsup_n f_n \qty(x) < \infty}$, which excludes points where the limit is $\infty$.

Thus, we have $C = A_1 \cap A_2 \cap A_3$.
The proof reduces to showing that each of these three sets is measurable, as the intersection of measurable sets is measurable.

Let the functions $g$ and $h$ be defined by $g \qty(x) = \liminf_n f_n \qty(x)$ and $h \qty(x) = \limsup_n f_n \qty(x)$. 
Since each $f_n$ is a measurable function, *Proposition 2.1.5(b)* ensures that both $g$ and $h$ are measurable functions. 

For the set $A_1$, we have $A_1 = \qty{x \in X \colon g \qty(x) = h \qty(x)}$. 
By *Proposition 2.1.3*, the set of points where two measurable functions are equal is itself a measurable set. 
Therefore, $A_1$ is in the $\sigma$-algebra $\mathcal{A}$. 

For the set $A_2$, we can express it as the countable union of measurable sets:

$$
\begin{aligned}
  A_2 &= \qty{x \in X \colon g \qty(x) > -\infty} \\
  &= \bigcup_{n=1}^\infty \qty{x \in X \colon g \qty(x) > -n}
\end{aligned}
$$

Since $g$ is a measurable function, each set $\qty{x \in X \colon g \qty(x) > -n}$ is in $\mathcal{A}$. 
The countable union of measurable sets is measurable, so $A_2$ is in $\mathcal{A}$. 

Similarly, for the set $A_3$, we can express it as the countable union of measurable sets:

$$
\begin{aligned}
  A_3 &= \qty{x \in X \colon h \qty(x) < \infty} \\
  &= \bigcup_{n=1}^\infty \qty{x \in X \colon h \qty(x) < n}
\end{aligned}
$$

Since $h$ is a measurable function, each set $\qty{x \in X \colon h \qty(x) < n}$ is in $\mathcal{A}$. 
The countable union of measurable sets is measurable, so $A_3$ is in $\mathcal{A}$. 

Since $C$ is the intersection of the three measurable sets $A_1$, $A_2$, and $A_3$, it must also belong to the $\sigma$-algebra $\mathcal{A}$. 
