---
title: "Exercise 1.3.4"
date: 2025-10-06
---
$\require{physics}$

First, we establish the measure of the open interval $\qty(-\infty, b)$. 
This interval can be expressed as the countable union of an increasing sequence of sets:

$$
  \qty(-\infty, b) = \bigcup_{n=1}^\infty \left( -\infty, b - \frac{1}{n} \right]
$$

By the continuity of a measure from below(*Proposition 1.2.5(a)*), and by the defining property of the measure $\mu$, we have:

$$
\begin{aligned}
  \mu \qty(\qty(-\infty, b)) &= \lim_{n \to \infty} \mu \left( \left( -\infty, b - \frac{1}{n} \right] \right) \\ 
  &= \lim_{n \to \infty}F \qty(b - \frac{1}{n})  = F(b-)
\end{aligned}
$$

This proves the first identity. 
With this result, we can derive the measures of the other intervals using the additivity of $\mu$. 
Since $\mu$ is a finite measure, all subtractions are well-defined. 

For the open interval $\qty(a, b)$, we have the disjoint union $\qty(-\infty, b) = \left(-\infty, a \right] \cup \qty(a, b)$.
By additivity:
    
$$
  \mu \qty(\qty(-\infty, b)) = \mu \qty(\left(-\infty, a \right]) + \mu \qty(\qty(a, b))
$$

Substituting the known values, we get:

$$
  F \qty(b-) = F \qty(a) + \mu \qty(\qty(a, b))
$$

Rearranging gives $\mu \qty(\qty(a, b)) = F \qty(b-) - F \qty(a)$.

For the closed interval $\qty[a, b]$, we have the disjoint union $\left(-\infty, b \right] = \left(-\infty, a \right) \cup \qty[a, b]$.
By additivity:

$$
  \mu \qty(\left(-\infty, b \right] ) = \mu \qty(\qty(-\infty, a)) + \mu \qty(\qty[a, b])
$$

Substituting the known values and rearranging gives $\mu \qty(\qty[a, b]) = F \qty(b) - F \qty(a-)$. 

For the half-open interval $\left[a, b \right)$, we have the disjoint union $\qty(-\infty, b) = \qty(-\infty, a) \cup \left[a, b \right)$.
By additivity:

$$
  \mu \qty(\qty(-infty, b)) = \mu \qty(\qty(-\infty, a)) + \mu \qty(\left[a, b \right))
$$

Substituting the known values and rearranging gives $\mu \qty(\left[a, b \right) ) = F \qty(b-) - F \qty(a-)$. 

This completes the proof of all four identities. 
