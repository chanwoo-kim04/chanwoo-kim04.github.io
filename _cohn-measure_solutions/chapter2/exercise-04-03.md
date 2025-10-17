---
title: "Exercise 2.4.3"
date: 2025-10-17
---
$\require{physics}$
Let us define a new sequence of functions $\qty{g_n}$ by setting $g_n = -f_n$ for each $n \geq 1$, and defining $g = -f$. 
Since each $f_n$ is an $\mathcal{A}$-measurable function, each $g_n$ is also $\mathcal{A}$-measurable. 
The condition that $\qty{f_n}$ is a decreasing sequence implies that $\qty{g_n}$ is nondecreasing. 
Furthermore, the pointwise limit of $\qty{g_n}$ is $g$. 
To apply the result from *Exercise 2.4.2*, we must also verify that the first term, $g_1$, is integrable. 
A function is integrable if and only if the integral of its absolute value is finite. 
For $g_1 = -f_1$, we have $\abs{g_1} = \abs{f_1}$. 
Since $f_1$ is given to be integrable, we know that $\int \abs{f_1} d\mu$ is finite. 
Therefore, $\int \abs{g_1} d\mu = \int \abs{f_1} d\mu < \infty$, which confirms that $g_1$ is integrable. 

The sequence $\qty{g_n$} now satisfies all the hypotheses of *Exercise 2.4.2*. 
Consequently, we can conclude that $\int g d\mu = \lim_n \int g_n d\mu$. 
To translate this result back to the original sequence $\qty{f_n}$, we must establish the identity $\int \qty(-h) d\mu = -\int h d\mu$ for any function $h$ whose integral exists. 
This identity follows directly from the definition of the integral. 
If $h$ is integrable, then $\int h^{+} d\mu$ and $\int h^{-} d\mu$ are finite. 
Since $\qty(-h)^{+} = h^{-}$ and $\qty(-h)^{-} = h^{+}$, it follows that $-h$ is also integrable and 

$$
  \int \qty(-h) d\mu = \int h^{-} d\mu - \int h^{+} d\mu = -\int h d\mu
$$

If the integral of $h$ exists but is infinite, say $\int h d\mu = \infty$, then $\int h^{+} d\mu = \infty$ and $\int h^{-} d\mu < \infty$. 
This implies $\int \qty(-h)^{+} d\mu < \infty$ and $\int \qty(-h)^{-} d\mu = \infty$, so $\int \qty(-h) d\mu = -\infty$, which equals $-\int h d\mu$. 
The case where $\int h d\mu = -\infty$ is analogous. 
The integral of each $f_n$ exists because $f_n \leq f_1$ almost everywhere, which implies $\int f_n^{+} d\mu \leq \int f_1^{+} d\mu < \infty$. 
Similarly, the integral of $f$ exists. 

Applying this identity to our conclusion for the sequence $\qty{g_n}$, we have:

$$
  -\int f \dmu = \lim_n \qty(-\int f_n d\mu)
$$

Multiplying by $-1$ on both sides gives the desired result: $\int f d\mu = \lim_n \int f_n d\mu$. 
