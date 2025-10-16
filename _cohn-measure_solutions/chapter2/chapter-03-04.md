---
title: "Exercise 2.3.4"
date: 2025-10-16
---
Let $f$ and $g$ be integrable $\qty[-\infty, \infty]$-valued functions on the measure space $\qty(X, \mathcal{A}, \mu)$, and let $h$ be an $\mathcal{A}$-measurable function such that $h \qty(x) = f\qty(x) + g \qty(x)$ for $\mu$-almost every $x \in X$. 
*Corollary 2.3.15* states that there exist real-valued integrable functions, $f_0$ and $g_0$ in $\mathcal{L}^1 \qty(X, \mathcal{A}, \mu, \mathbb{R})$, such that $f = f_0$ almost everywhere and $g = g_0$ almost everywhere. 
The set where $h$ differs from the sum $f_0 + g_0$ is contained in the union of the null sets where $h \neq f + g$, $f \neq f_0$, or $g \neq g_0$. 
This union is a null set, and therefore $h = f_0 + g_0$ almost everywhere. 

To show that $h$ is integrable, we first note that the sum $f_0 + g_0$ of two real-valued integrable functions is itself integrable, as established by *Proposition 2.3.6(a)*. 
We are given that $h$ is an $\mathcal{A}$-measurable function, and we have shown it to be equal almost everywhere to the integrable function $f_0 + g_0$. 
By *Corollary 2.3.15*, an $\mathcal{A}$-measurable function is integrable if and only if it is equal almost everywhere to a real-valued integrable function, so we conclude that $h$ is integrable. 

Finally, we establish the equality of the integrals. 
Since $h$ and $f_0 + g_0$ are integrable functions that are equal almost everywhere, *Proposition 2.3.9* asserts that their integrals are equal, so $\int h d\mu = \int \qty(f_0 + g_0) d\mu$. 
The linearity of the integral for real-valued integrable functions, from *Proposition 2.3.6(c)*, gives $\int \qty(f_0 + g_0) d\mu = \int f_0 d\mu + \int g_0 d\mu$. 
Because $f = f_0$ almost everywhere and $g = g_0$ almost everywhere, another application of *Proposition 2.3.9* yields $\int f d\mu = \int f_0 d \mu$ and $\int g d\mu = \int g_0 d \mu$. 
Combining these successive equalities, we obtain the desired result that $\int h d\mu = \int f d\mu + \int g d\mu$. 
