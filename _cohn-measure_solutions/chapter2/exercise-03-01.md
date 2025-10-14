---
title: "Exercise 2.3.1"
date: 2025-10-14
---
$\require{physics}$
Let $f$ and $g$ be functions in $\mathcal{L}^1 \qty(X, \mathcal{A}, \mu, \mathbb{R})$. 
To show that their maximum $f \vee g$ and minimum $f \wedge g$ also belong to $\mathcal{L}^1$, we must prove that they are both measurable and that they are integrable. 

First, we establish measurability. 
Since $f$ and $g$ are in $\mathcal{L}^1$, they are by definition $\mathcal{A}$-measurable. 
By *Proposition 2.1.4*, the pointwise maximum and minimum of two measurable functions are also measurable. 
Therefore, both $f \vee g$ and $f \wedge g$ are $\mathcal{A}$-measurable. 

Next, we establish integrability. 
For any two real numbers $a$ and $b$, the inequalities $\abs{\max\qty{a, b}} \leq \abs{a} + \abs{b}$ and $\abs{\min \qty{a, b}} \leq \abs{a} + \abs{b}$ hold. 
Applying this pointwise to the functions, we obtain the inequalities $\abs{\qty(f \vee g) \qty(x)} \leq \abs{f \qty(x)} + \abs{g \qty(x)}$ and $\abs{\qty(f \wedge g) \qty(x)} \leq \abs{f \qty(x)} + \abs{g \qty(x)}$ for all $x \in X$. 
We can integrate these inequalities. 
By *Proposition 2.3.6*, we have:

$$
\begin{aligned}
  \int \abs{f \vee g} d \mu &\leq \int \qty(\abs{f} + \abs{g}) d \mu = \int \abs{f} d \mu + \int \abs{g} d \mu \\
  \int \abs{f \wedge g} d \mu &\leq \int \qty(\abs{f} + \abs{g}) d \mu = \int \abs{f} d \mu + \int \abs{g} d \mu 
\end{aligned}
$$

Since $f$ and $g$ are given to be in $\mathcal{L}^1$, the integrals $\int \abs{f} d \mu$ and $\int \abs{g} d \mu$ are finite. 
Their sum is therefore also finite, which proves that $\int \abs{f \vee g} d \mu < \infty$ and $\int \abs{f \wedge g} d \mu < \infty$. 

Because $f \vee g$ and $f \wedge g$ are both measurable and the integrals of their absolute values are finite, we conclude that they belong to $\mathcal{L}^1 \qty(X, \mathcal{A}, \mu, \mathbb{R})$. 
