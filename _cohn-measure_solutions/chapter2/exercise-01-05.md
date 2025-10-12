---
title: "Exercise 2.1.5"
date: 2025-10-12
---
$\require{physics}$
(a) Let $f$ and $g$ be simple $\mathcal{A}$-measurable functions from $X$ to $\mathbb{R}$. 
By definition, they take on a finite number of values. 
Let the distinct values of $f$ be $\qty{a_1, \dots, a_m}$ and the distinct values of $g$ be $\qty{b_1, \dots, b_n}$. 
The sets in which these values are attained, $A_i = f^{-1} \qty(\qty{a_i})$ and $B_j = g^{-1} \qty(\qty{b_j})$, are all measurable and form finite partitions of $X$. 

The sum $f + g$ and the product $fg$ are also simple functions. 
The set of possible values for $f + g$ is $\qty{a_i + b_j \colon i = 1, \dots, m, \; j = 1, \dots, n}$, and for $fg$ it is $\qty{a_i b_j \colon i = 1, \dots, m, \; j = 1, \dots, n}$. 

To show that $f + g$ is measurable, we must show that the preimage of any value in its range is a measurable set. 
For any real number $c$, the set of points where $f \qty(x) + g \qty(x) = c$ is the union of all intersections of the form $A_i \cap B_j$ for which $a_i + b_j = c$. 
This can be written as:

$$
  \qty(f + g)^{-1} \qty(\qty{c}) = \bigcup_{\qty(i, j) \colon a_i + b_j = c} \qty(A_i \cap B_j)
$$

Since each $A_i$ and $B_j$ is in the $\sigma$-algebra $\mathcal{A}$, their intersection $A_i \cap B_j$ is also in $\mathcal{A}$. 
The set above is a finite union of such measurable sets, and is therefore measurable. 
Thus, $f + g$ is an $\mathcal{A}$-measurable simple function. 

The argument for the product $fg$ is identical. 
The preimage of any value $c$ is:

$$
  \qty(fg)^{-1} \qty(\qty{c}) = \bigcup_{\qty(i, j) \colon a_i b_j = c} \qty(A_i \cap B_j)
$$

This is a finite union of measurable sets, so it is measurable. 
Thus, $fg$ is also an $\mathcal{A}$-measurable simple function. 

(b) Let $f$ and $g$ be arbitrary $\mathcal{A}$-measurable functions from $X$ to $\mathbb{R}$. 
As stated in the remark following the proof of *Proposition 2.1.8*, any real-valued measurable function is the pointwise limit of a sequence of simple measurable functions. 
Let $\qty{f_n}$ and $\qty{g_n}$ be sequences of simple $\mathcal{A}$-measurable functions such that for all $x \in X$, $f \qty(x) = \lim_n f_n \qty(x)$ and $g \qty(x) = \lim_n g_n \qty(x)$. 

From part (a) of this exercise, we know that for each $n$, the sum $f_n + g_n$ and the product $f_n g_n$ are $\mathcal{A}$-measurable simple functions. 
The sum $f + g$ is the pointwise limit of the sequence of measurable functions $\qty{f_n + g_n}$, and the product $fg$ is the pointwise limit of the sequence of measurable functions $\qty{f_n g_n}$.

By *Proposition 2.1.5(c)*, the pointwise limit of a sequence of measurable functions is itself a measurable function. 
Therefore, we conclude that both $f + g$ and $fg$ are $\mathcal{A}$-measurable. 
