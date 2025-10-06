---
title: "Exercise 1.3.7"
date: 2025-10-06
---
$\require{physics}$
First, assume that $B$ is a Lebesgue measurable subset of $\mathbb{R}$. 
By the definition of measurability, the equality $\lambda^{\*} \qty(A) = \lambda^{\*} \qty(A \cap B) + \lambda^{\*} \qty(A \cap B^c)$ holds for every subset $A \subseteq \mathbb{R}$. 
Since any open subinterval $I$ is a subset of $\mathbb{R}$, the condition must hold for $A = I$. 

Conversely, assume that for every open subinterval $I$, the equality $\lambda^{\*} \qty(I) = \lambda^{\*} \qty(I \cap B) + \lambda^{\*} \qty(I \cap B^c)$ holds. 
To show that $B$ is Lebesgue measurable, we must prove that for any subset $A \subseteq \mathbb{R}$ with finite outer measure, we have $\lambda^{\*} \qty(A) \geq \lambda^{\*} \qty(A \cap B) + \lambda^{\*} \qty(A \cap B^c)$. 

Let $A$ be such a set, and let $\varepsilon > 0$. 
By the definition of the Lebesgue outer measure, there exists a countable collection of bounded open intervals, $\qty{I_n}_{n=1}^\infty$, that covers $A$ and satisfies:

$$
  \sum_{n=1}^\infty \lambda \qty(I_n) < \lambda^{\*} \qty(A) + \varepsilon
$$

By our hypothesis, the additivity condition holds for each of these open intervals. 
Since the outer measure of an interval is its length, we have $\lambda^{\*} \qty(I_n) = \lambda \qty(I_n)$, so:

$$
  \lambda \qty(I_n) = \lambda^{\*} \qty(I_n \cap B) + \lambda^{\*} \qty(I_n \cap B^c)
$$

Summing this equality over all $n$ yields:

$$
  \sum_{n=1}^\infty \lambda \qty(I_n) = \sum_{n=1}^\infty \lambda^{\*} \qty(I_n \cap B) + \sum_{n=1}^\infty \lambda^{\*} \qty(I_n \cap B^c)
$$

The collection $\qty{I_n \cap B}_{n=1}^\infty$ covers the set $A \cap B$, and the collection $\qty{I\_n \cap B^c}_{n=1}^\infty$ covers the set $A \cap B^c$. 
By the countable subadditivity of the outer measure $\lambda^{\*}$:

$$
\begin{aligned}
  \lambda^{\*} \qty(A \cap B) + \lambda^{\*} \qty(A \cap B^c) &\leq \sum_{n=1}^\infty \lambda^{\*} \qty(I_n \cap B) + \sum_{n=1}^\infty \lambda^{\*} \qty(I_n \cap B^c) \\
  &= \sum_{n=1}^\infty \lambda \qty(I_n) < \lambda^{\*} \qty(A) + \varepsilon
\end{aligned}
$$

Since $\varepsilon > 0$ is arbitrary, we conclude that $\lambda^{\*} \qty(A \cap B) + \lambda^{\*} \qty(A \cap B^c) \leq \lambda^{\*} \qty(A)$. 
This completes the proof that $B$ is Lebesgue measurable. 
