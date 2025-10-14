---
title: "Exercise 2.2.6"
date: 2025-10-14
---
$\require{physics}$
First, consider the function $f$, which is the characteristic function of the rational numbers, $f = \chi_{\mathbb{Q}}$. 
We show that $f$ is discontinuous at every point $x_0 \in \mathbb{R}$. 
If $x_0$ is rational, then $f \qty(x_0) = 1$. 
By the density of the irrational numbers, we can choose a sequence of irrational numbers $\qty{y_n}$ that converges to $x_0$. 
Then $\lim_{n \to \infty}f \qty(y_n) = \lim_{n \to \infty}0 = 0$, which is not equal to $f \qty(x_0)$. 
If $x_0$ is irrational, then $f \qty(x_0) = 0$. 
By the density of the rational numbers, we can choose a sequence of rational numbers $\qty{y_n}$ that converges to $x_0$. 
Then $\lim_{n \to \infty} f \qty(y_n) = \lim_{n \to \infty}1 = 1$, which is not equal to $f \qty(x_0)$. 
Since the limit of the function does not equal the value of the function at any point, $f$ is nowhere continuous. 

Next, consider the function $g$, often called [Thomae's function](https://en.wikipedia.org/wiki/Thomae%27s_function). 
We will show that $g$ is continuous at every irrational point and at $x = 0$, and discontinuous at every nonzero rational point. 
The set of discontinuities is therefore the set of nonzero rational numbers, $\mathbb{Q} - \qty{0}$. 
Since this set is countable, its Lebesgue measure is zero. 
This proves that $g$ is continuous $\lambda$-almost everywhere. 

First, let $x_0$ be a nonzero rational number, so $x_0 = p/q$ in lowest terms with $q > 0$, and $g \qty(x_0) = 1/q > 0$. 
We can choose a sequence of irrational numbers $\qty{y_n}$ converging to $x_0$. 
Then $\lim_{n \to \infty} g\qty(y_n) = \lim_{n \to \infty}0 = 0$, which is not equal to $g \qty(x_0)$. 
Thus, $g$ is discontinuous at every nonzero rational number. 

Now, let $x_0$ be an irrational number or $x_0 = 0$. 
In either case, $g \qty(x_0) = 0$. 
To prove continuity, we must show that for any $\varepsilon > 0$, there exists a $\delta > 0$ such that if $\qty{x - x_0} < \delta$, then $\abs{g \qty(x) - g \qty(x_0)} = \abs{g \qty(x)} < \varepsilon$. 
The values of $g \qty(x)$ are either $0$ or $1/q$. 
To ensure $\abs{g \qty(x)} < \varepsilon$, we only need to consider rational points $x = p/q$ where $1/q < \varepsilon$, which is equivalent to $q > 1/\varepsilon$. 

For a given $\varepsilon > 0$, the set of integers $q$ satisfying $1 \leq q \leq 1/ \varepsilon$ is finite. 
In the interval $\qty(x_0 -1, x_0 + 1)$, there are only a finite number of rational numbers whose denominators are in this finite set. 
Let this finite collection of rational points be $S$. 
Since $x_0$ is irrational or zero, $x_0$ is not in $S$. 
Because $S$ is a finite set, we can find a positive distance $\delta = \min\qty{\abs{x_0 - r} \colon r \in S}$ between $x_0$ and the nearest point in $S$. 
For any $x$ in the interval $\qty(x_0 - \delta, x_0 + \delta)$, if $x$ is irrational, $g \qty(x) = 0 < \varepsilon$. 
If $x$ is rational, $x = p/q$, its denominator $q$ must be greater than $1/\varepsilon$. 
This implies $g \qty(x) = 1/q < \varepsilon$. 
In all cases, if $\abs{x - x_0} < \delta$, then $\abs{g \qty(x)} < \varepsilon$. 
This proves that $g$ is continuous at all irrational numbers and at zero. 
