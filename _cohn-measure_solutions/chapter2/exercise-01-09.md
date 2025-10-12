---
title: "Exercise 2.1.9"
date: 2025-10-12
---
$\require{physics}$
Let $\mathcal{B} = \sigma \qty(\mathcal{A} \cup \qty{C})$. 
We will use the characterization from *Exercise 1.5.12(a)*, which states that a set $S$ belongs to $\mathcal{B}$ if and only if it is of the form $\qty(A_1 \cap C) \cup \qty(A_2 \cap C^c)$ for some $A_1$, $A_2 \in \mathcal{A}$. 

Assume there exist $\mathcal{A}$-measurable functions $f_1$, $f_2 \colon X \to \mathbb{R}$ such that $f = f_1 \chi_{C} + f_2 \chi_{C^c}$. 
Since $\mathcal{A} \subseteq \mathcal{B}$, any $\mathcal{A}$-measurable function is also $\mathcal{B}$-measurable. 
Therefore, both $f_1$ and $f_2$ are $\mathcal{B}$-measurable. 
By the definition of $\mathcal{B}$, the sets $C$ and $C^c$ are elements of $\mathcal{B}$. 
Thus, $\chi_C$ and $\chi_{C^c}$ are both $\mathcal{B}$-measurable functions. 

The function $f$ is constructed from these four $\mathcal{B}$-measurable functions using multiplication and addition. 
By *Proposition 2.1.7*, the set of real-valued measurable functions is closed under these operations. 
Therefore, $f = f_1 \chi_C + f_2 \chi_{C^c}$ is $\mathcal{B}$-measurable. 

Conversely, assume $f$ is a $\mathcal{B}$-measurable function. 
We will construct the required $\mathcal{A}$-measurable functions $f_1$ and $f_2$. 

First, consider the case where $f$ is a nonnegative simple function, $f = \sum_{i=1}^k a_i \chi_{S_i}$, where $a_i \geq 0$ and the sets $S_i \in \mathcal{B}$ are disjoint. 
For each $i$, since $S_i \in \mathcal{B}$, there exist sets $A_{1, i}$ and $A_{2, i}$ in $\mathcal{A}$ such that $S_i = \qty(A_{1, i} \cap C) \cup \qty(A_{2, i} \cap C^c)$. 
The characteristic function is then $\chi_{S_i} = \chi_{A_{1, i}} \chi_C + \chi_{A_{2, i}} \chi_{C^c}$. 
Substituting this into the expression for $f$ gives:

$$
\begin{aligned}
  f &= \sum_{i=1}^k a_i \qty(\chi_{A_{1, i}} \chi_C + \chi_{A_{2, i}} \chi_{C^c}) \\
  &= \qty(\sum_{i=1}^k a_i \chi_{A_{1, i}}) \chi_C + \qty(\sum_{i=1}^k a_i \chi_{A_{2, i}}) \chi_{C^c}
\end{aligned}
$$

If we let $f_1 = \sum_{i=1}^k a_i \chi_{A_{1, i}}$ and $f_2 = \sum_{i=1}^k a_i \chi_{A_{2, i}}$, then $f_1$ and $f_2$ are $\mathcal{A}$-measurable simple functions, and $f = f_1 \chi_C + f_2 \chi_{C^c}$. 

Next, let $f$ be any nonnegative $\mathcal{B}$-measurable function. 
By *Proposition 2.1.8*, there exists an increasing sequence $\qty{s_n}$ of nonnegative simple $\mathcal{B}$-measurable functions that converges pointwise to $f$. 
For each $s_n$, we have found $\mathcal{A}$-measurable simple functions $f_{1, n}$ and $f_{2, n}$ such that $s_n = f_{1, n} \chi_C + f_{2, n} \chi_{C^c}$. 
We define $f_1 = \limsup_n f_{1, n}$ and $f_2 = \limsup_n f_{2, n}$. 
By *Proposition 2.1.5*, both $f_1$ and $f_2$ are $\mathcal{A}$-measurable. 
For any $x \in C$, we have $s_n \qty(x) = f_{1, n} \qty(x)$, so $f \qty(x) = \lim_n s_n \qty(x) = \limsup_n f_{1, n} \qty(x) = f_1 \qty(x)$. 
Similarly, for any $x \in C^c$, we have $f \qty(x) = f_2 \qty(x)$. 
Thus, $f = f_1 \chi_C + f_2 \chi_{C^c}$. 

Finally, for an arbitrary real-valued $\mathcal{B}$-measurable function $f$, we apply the preceding argument to its positive and negative parts, $f^+$ and $f^-$. 
There exist $\mathcal{A}$-measurable functions $f_1^+$, $f_2^+$ and $f_1^-$, $f_2^-$ such that $f^+ = f_1^+ \chi_C + f_2^+ \chi_{C^c}$ and $f^- = f_1^- \chi_C + f_2^- \chi_{C^c}$. 
We then define $f_1 = f_1^+ - f_1^-$ and $f_2 = f_2^+ - f_2^-$. 
By *Proposition 2.1.7*, $f_1$ and $f_2$ are $\mathcal{A}$-measurable. 
It follows that $f = f^+ - f^- = f_1 \chi_{C} + f_2 \chi_{C^c}$, which completes the proof. 
