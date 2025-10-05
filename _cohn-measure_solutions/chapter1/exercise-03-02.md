---
title: "Exercise 1.3.2"
date: 2025-10-06
---
$\require{physics}$
Since $C$ is countable, we can enumerate its elements as $C = \qty{c_n}_{n=1}^\infty$. 
Let $\varepsilon > 0$ be an arbitrary positive number. 

For each element $c_n \in C$, we define an open interval $I_n$ centered at $c_n$:

$$
  I_n = \qty(c_n - \frac{\varepsilon}{2^{n+1}}, c_n + \frac{\varepsilon}{2^{n+1}})
$$

The length of each interval $I_n$ is $\varepsilon / 2^n$. 
By construction, the collection of open intervals $\qty{I_n}_{n=1}^\infty$ forms a cover for the set $C$. 
The sum of the lengths of these intervals is given by the geometric series:

$$
  \sum_{n=1}^\infty \lambda \qty(I_n) = \sum_{n=1}^\infty \frac{\varepsilon}{2^n} = \varepsilon
$$
 
According to the definition of Lebesgue outer measure, $\lambda^* \qty(C)$ is the infimum of the sums of lengths of all such countable open interval covers. 
Since we have found a cover with total length $\varepsilon$ for an arbitrary $\varepsilon > 0$, it follows that:

$$
  0 \leq \lambda^* \qty(C) \leq \varepsilon
$$

Because this inequality holds for every positive $\varepsilon$, it must be that $\lambda^* \qty(C) = 0$. 
