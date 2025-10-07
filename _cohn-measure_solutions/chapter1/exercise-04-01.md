---
title: "Exercise 1.4.1"
date: 2025-10-06
---
$\require{physics}$
We first prove a general lemma about the measure of the graph of a uniformly continuous function. 
We then apply this lemma to prove the main results for lines and circles. 

*Lemma: The Graph of a Continuous Function*

Let $f \colon \qty[a, b] \to \mathbb{R}$ be a continuous function on a compact interval $\qty[a, b]$. 
The graph of this function, $G_f = \qty{\qty(x, f \qty(x)) \colon x \in \qty[a, b]}$, has a two-dimensional Lebesgue measure of zero. 

*Proof of the Lemma:*
Let $\varepsilon > 0$ be given. 
Since $f$ is continuous on the compact set $\qty[a, b]$, it is uniformly continuous on $\qty[a, b]$. 
Thus, for the positive value $\eta = \varepsilon / 4 \qty(b-a)$, there exists a $\delta > 0$ such that for any $t_1$, $t_2 \in \qty[a, b]$, if $\abs{t_1 - t_2} < \delta$, then $\qty{f \qty(t_1) - f \qty(t_2)} < \eta$. 

We choose a positive integer $N$ large enough so that $h = \qty(b-a)/N$ is less than $\delta$. 
We then partition the interval $\qty[a, b]$ with points $x_i = a + i \cdot h$ for $i = 0$, $1$, $\dots$, $N$. 

For each partition point $x_i$, define an open interval $J_i = \qty(x_i - h, x_i + h)$. 
For any point $x \in J_i \cap \qty[a, b]$, we have $\abs{x - x_i} < h < \delta$, so by uniform continuity, $\abs{f \qty(x) - f \qty(x_i)} < \eta$. 
This implies that the portion of the graph above the set $J_i \cap \qty[a, b]$ is contained within the open rectangle:

$$
  R_i = J_i \times \qty(f \qty(x_i) - \eta, f \qty(x_i) + \eta)
$$

The collection of these $N+1$ rectangles, $\qty{R_i}_{i=0}^N$, forms an open cover for the entire graph $G_f$. 
The volume of each rectangle $R_i$ is:

$$
  \text{vol} \qty(R_i) = 2h \cdot 2 \eta = 4h \eta
$$

The total volume of this finite cover is:

$$
\begin{aligned}
  \sum_{i=0}^N \text{vol} \qty(R_i) &= \qty(N+1) \cdot 4h \eta \\
  &= 4 \qty(N+1) \cdot \frac{b-a}{N} \cdot \frac{\varepsilon}{4 \qty(b-a)} \\
  &= \frac{N+1}{N} \varepsilon \leq 2 \varepsilon
\end{aligned}
$$

Since $\varepsilon$ is an arbitrary positive number, we can find a countable cover of open rectangles with a total volume smaller than any given positive value. 
This proves that the outer measure of the graph is zero, $\lambda^* \qty(G_f) = 0$. 

(a) Let $L$ be a straight line in $\mathbb{R}^2$. 
An entire line $L$ in $\mathbb{R}^2$ is a countable union of bounded line segments. 
By the countable subadditivity of the Lebesgue measure, if we show that every bounded line segment has measure zero, the entire line will also have measure zero. 

A bounded non-vertical line segment is the graph of a linear function, $f \qty(x) = mx + c$, over a compact interval $\qty[a, b]$. 
Therefore, by the lemma proven above, the two-dimensional Lebesgue measure of this line segment is zero. 
A vertical line segment can be shown to have measure zero by the analogous argument. 

Since any line can be expressed as a countable union of such measure-zero segments, its measure is also zero. 

(b) Let $C$ be a circle in $\mathbb{R}^2$. 
$C$ can be decomposed into the union of its upper semicircle, $C_{up}$, and its lower semicircle, $C_{down}$. 
By the subadditivity of the measure, if we show that both semicircles have measure zero, then the circle must also have measure zero. 

The upper semicircle $C_{up}$ is the graph of the function $g \qty(x) = y_0 + \sqrt{r^2 - \qty(x-x_0)^2}$ over the compact interval $\qty[x_0 - r, x_0 + r]$. 
By the lemma proven above, the Lebesgue measure of the graph of $g \qty(x)$, which is the upper semicircle, is zero.

An identical argument applies to the lower semicircle, which is the graph of another continuous function. 
Since the circle is the union of two sets of measure zero, its measure is also zero. 
