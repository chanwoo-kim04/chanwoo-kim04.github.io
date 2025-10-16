---
title: "Exercise 2.3.5"
date: 2025-10-16
---
$\require{physics}$
First, we establish that the integral of $g$ exists. 
The condition that $\int f d\mu$ exists and is not equal to $-\infty$ means that $\int f^{+} d\mu - \int f^{-} d\mu \neq -\infty$. 
Since $\int f^{+} d\mu \geq 0$, this necessitates that $\int f^{-} d\mu$ must be finite. 
We are given that $f \qty(x) \leq g \qty(x)$ for $\mu$-almost every $x$. 
This implies $g^{-} \leq f^{-}$ almost everywhere. 
By the monotonicity of the integral for nonnegative functions and the fact that functions equal almost everywhere have identical integrals, it follows that $\int g^{-} d\mu \leq \int f^{-} d\mu$. 
Since $\int f^{-}d\mu$ is finite, $\int g^{-} d\mu$ must also be finite. 
The integral of a measurable function exists if the integral of at least one of its positive or negative parts is finite, so we conclude that the integral of $g$ exists. 

Now we show that $\int f d\mu \leq \int g d\mu$. 
The relation $f \leq g$ almost everywhere implies that $f^{+} - f^{-} \leq g^{+} - g^{-}$ almost everywhere. 
Rearranging this inequality gives $f^{+} + g^{-} \leq g^{+} + f^{-}$ almost everywhere. 
All four of these functions are nonnegative and measurable. 
By the additivity and monotonicity properties of the integral for nonnegative functions, we can integrate both sides of the inequality to obtain $\int \qty(f^{+} + g^{-}) d\mu \leq \int \qty(g^{+} + f^{-}) d\mu$, which expands to $\int f^{+} d\mu + \int g^{-} d\mu \leq \int g^{+}d \mu + \int f^{-} d\mu$. 
As we have already shown that both $\int f^{-} d\mu$ and $\int g^{-} d\mu$ are finite, we can subtract them from both sides of the inequality without an undefined expression. 
This yields $\int f^{+} d\mu - \int f^{-} d\mu \leq \int g^{+} d\mu - \int g^{-} d\mu$. 
By the definition of the integral, this is precisely the desired result: $\int f d\mu\leq \int g d\mu$. 
