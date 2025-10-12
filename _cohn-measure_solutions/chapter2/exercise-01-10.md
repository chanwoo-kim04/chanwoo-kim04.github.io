---
title: "Exercise 2.1.10"
date: 2025-10-12
---
$\require{physics}$
The collection $\mathcal{V}_0$ satisfies the three properties:
(i) By *Proposition 2.1.7*, the set of real-valued measurable function is closed under linear combinations, so $\mathcal{V}_0$ is a vector space over $\mathbb{R}$. 
(ii) By *Example 2.1.2(a)*, every continuous function is Borel measurable, so $\mathcal{V}_0$ contains all continuous functions. 
(iii) By *Proposition 2.1.5*, the pointwise limit of a sequence of Borel measurable functions is itself Borel measurable. Thus, $\mathcal{V}_0$ is closed under the specified monotone limits. 

Now, let $\mathcal{V}$ be any collection of real-valued functions on $\mathbb{R}$ that satisfies the three properties. 
We will show that $\mathcal{V}_0 \subseteq \mathcal{V}$. 
Following the hint, we define a collection of sets $S \qty(\mathcal{V}) = \qty{A \subseteq \mathbb{R} \colon \chi_A \in \mathcal{V}}$. 

We first prove that $S \qty(\mathcal{V})$ is a d-system. 
1. $\mathbb{R} \in S \qty(\mathcal{V})$: The constant function $\chi_{\mathbb{R}} = 1$ is continuous, so it is in $\mathcal{V}$ by property (ii).
2. Closure under proper differences: If $A$, $B$ \in S \qty(\mathcal{V})$ with $B \subseteq A$, then $\chi_A$ and $\chi_B$ are in $\mathcal{V}$. Since $\mathcal{V}$ is a vector space, the function $\chi_{A-B} = \chi_A - \chi_B$ is also in $\mathcal{V}$. Thus, $A-B \in S \qty(\mathcal{V})$.
3. Closure under increasing unions: If $\qty{A_n}$ is an increasing sequence of sets in $S \qty(\mathcal{V})$, then $\qty{\chi_{A_n}}$ is an increasing sequence of nonnegative functions in $\mathcal{V}$. Their pointwise limit is $\chi_{\bigcup_n A_n}$, which is real-valued. By property (iii), $\chi_{\bigcup_n A_n} \in \mathcal{V}$, so $\bigcup_n A_n \in S \qty(\mathcal{V})$.

Next, we show that $S \qty(\mathcal{V})$ contains a generating $\pi$-system for $\mathcal{B} \qty(\mathbb{R})$. 
Let $\mathcal{C}$ be the collection of all intervals of the form $\left(-\infty, a \right)$. 
This is a $\pi$-system that generates $\mathcal{B} \qty(\mathbb{R})$ by *Proposition 1.1.4*. 
To show $\mathcal{C} \subseteq S \qty(\mathcal{V})$, we must show that $\chi_{\left(-\infty, a \right)} \in \mathcal{V}$ for any $a \in \mathbb{R}$. 
For each integer $n$, define a continuous function $f_n \qty(x)$ which is $1$ for $x \leq a-1/n$, $0$ for $x \geq a$, and linear in between. 
Each $f_n$ is in $\mathcal{V}$ by property (ii). 
The sequence $\qty{f_n}$ is an increasing sequence of nonnegative functions that converges pointwise to $\chi_{\left(-\infty, a \right)}$. 
Since $\mathcal{V}$ is closed under increasing limits, $\chi_{\qty(-\infty, a)} \in \mathcal{V}$, and so $\qty(-\infty, a) \in S \qty(\mathcal{V})$. 

Since $S \qty(\mathcal{V})$ is a d-system containing a generating $\pi$-system $\mathcal{C}$, *Theorem 1.6.2* implies that $\mathcal{B} \qty(\mathbb{R}) \subseteq S \qty(\mathcal{V})$. 
This means the characteristic function of any Borel set is in $\mathcal{V}$. 
Because $\mathcal{V}$ is a vector space, it contains all simple Borel measurable functions. 
Any nonnegative, real-valued Borel measurable function is the pointwise limit of an increasing sequence of simple functions, so by property (iii), it must also be in $\mathcal{V}$. 
Finally, any real-valued Borel measurable function can be written as the difference of two nonnegative ones, so by property (i), it must be in $\mathcal{V}$. 

Therefore, we have shown that $\mathcal{V}_0 \subseteq \mathcal{V}$ for any collection $\mathcal{V}$ satisfying the given properties. 
Since $\mathcal{V}_0$ is itself one such collection, it is the smallest. 
