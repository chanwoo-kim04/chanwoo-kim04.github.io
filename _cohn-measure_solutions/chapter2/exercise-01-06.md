---
title: "Exercise 2.1.6"
date: 2025-10-12
---
$\require{physics}$
Let $f$ and $g$ be real-valued $\mathcal{A}$-measurable functions. 
To prove that their sum $f + g$ is measurable, we must show that for any real number $t$, the set $\qty{x \in X \colon f \qty(x) + g \qty(x) < t}$ is an element of the $\sigma$-algebra $\mathcal{A}$. 

The inequality $\qty(f + g) \qty(x) < t$ is equivalent to the inequality $g \qty(x) < t - f \qty(x)$. 
Thus, we need to show that $\qty{x \in X \colon g \qty(x) < t - f \qty(x)}$ is an element of $\mathcal{A}$. 

We can use *Proposition 2.1.3*, which states that the set of points where one measurable function is strictly less than another is itself a measurable set. 
The function $g$ is given to be measurable. 
Thus, our task reduces to showing that the function defined by $h \qty(x) = t - f \qty(x)$ is also measurable. 

To prove that $h \qty(x)$ is measurable, we use the definition of a measurable function. 
We must show that for any arbitrary real number $c$, the set $\qty{x \in X \colon h\qty(x) < c}$ is in $\mathcal{A}$. 
Now, note that:

$$
\begin{aligned}
  \qty{x \in X \colon h \qty(x) < c} &= \qty{x \in X \colon t - f \qty(x) < c} \\
  &= \qty{x \in X \colon f \qty(x) > t - c}
\end{aligned}
$$

We are given that $f$ is a measurable function. 
Therefore, the set $\qty{x \in X \colon f \qty(x) > t - c}$ is in $\mathcal{A}$ for every $c$, which proves that the function $h \qty(x) = t - f \qty(x)$ is measurable. 

Since both $g$ and the function $x \mapsto t - f \qty(x)$ are measurable, we apply *Proposition 2.1.3* to conclude that the set $\qty{x \in X \colon g \qty(x) < t - f \qty(x)}$ is in $\mathcal{A}$. 
This proves that $f + g$ is measurable. 
