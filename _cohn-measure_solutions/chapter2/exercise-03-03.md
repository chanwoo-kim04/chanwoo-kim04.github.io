---
title: "Exercise 2.3.3"
date: 2025-10-16
---
$\require{physics}$
By *Theorem 1.4.9*, there exists a subset $A$ of the interval $\qty(0, 1)$ that is not Lebesgue measurable. 
Let $B = \qty(0, 1) - A$. 
We define the function $f$ by setting $f = \chi_A - \chi_B$. 

To show that $f$ is not Lebesgue integrable, we first show that it is not a Lebesgue measurable function. 
Consider the singleton set $\qty{1}$, which is a closed set in $\mathbb{R}$ and therefore a Borel set. 
The preimage of this set under $f$ is $f^{-1} \qty(\qty{1}) = A$. 
Since we chose $A$ to be a non-Lebesgue measurable set, $f$ fails to be measurable. 
As $f$ is not a Lebesgue measurable function, it is not Lebesgue integrable. 

Next, we show that $\abs{f}$ is Lebesgue integrable. 
We see that $\abs{f \qty(x)} = 1$ for all $x \in \qty(0, 1)$, and $\abs{f \qty(x)} = 0$ otherwise. 
Thus, $\abs{f}$ is the characteristic function of the open interval $\qty(0, 1)$, which can be written as $\abs{f} = \chi_{\qty(0, 1)}$. 
The function $\abs{f}$ is a simple function, and it is measurable because the set $\qty(0, 1)$ is a Lebesgue measurable set. 
According to the definition of the integral of a nonnegative simple function, $\int \abs{f} d\lambda = 1$. 
Since the integral equals a finite real number, the function $\abs{f}$ is Lebesgue integrable. 
