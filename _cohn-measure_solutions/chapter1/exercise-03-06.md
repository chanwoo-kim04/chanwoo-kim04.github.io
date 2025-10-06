---
title: "Exercise 1.3.6"
date: 2025-10-06
---
$\require{physics}$
(a) Let $\nu$ be a measure on $\sigma \qty(\mathcal{A})$ that agrees with $\mu$ on the algebra $\mathcal{A}$. 
For any set $A \in \sigma \qty(\mathcal{A})$, let $\qty{C_n}$ be a countable cover of $A$ by sets from $\mathcal{A}$. 
By the monotonicity and countable subadditivity of the measure $\nu$, and since $\nu$ agrees with $\mu$ on $\mathcal{A}$, we have:

$$
\begin{aligned}
  \nu \qty(A) &\leq \nu \qty(\bigcup_{n=1}^\infty C_n) \\
  &\leq \sum_{n=1}^\infty \nu \qty(C_n) = \sum_{n=1}^\infty \mu \qty(C_n)
\end{aligned}
$$

Since this inequality holds for any such cover $\qty{C_n}$, $\nu \qty(A)$ must be less than or equal to the infimum of these sums. 
Therefore, $\nu \qty(A) \leq \mu^* \qty(A)$. 

(b) The existence of at least one extension, $\overline{\mu}$, is given by *Exercise 1.3.5(d)*, where $\overline{\mu} \qty(A) = \mu^* \qty(A)$ for $A \in \sigma \qty(\mathcal{A})$. 
We now prove this extension is unique. 

First, assume $\mu$ is a finite function on the algebra $\mathcal{A}$. 
Let $\nu$ be any measure on $\sigma \qty(\mathcal{A})$ that extends $\mu$. 
Both $\nu$ and $\overline{\mu}$ are thus finite measures. 
From part (a), we know that for any set $A \in \sigma \qty(\mathcal{A})$, the inequality $\nu \qty(A) \leq \overline{\mu} \qty(A)$ holds. 
Applying this to the complement $A^c \in \sigma \qty(\mathcal{A})$ gives $\nu \qty(A^c) \leq \overline{\mu}\qty(A^c)$. 
Because both are finite measures, we can write this as $\nu \qty(X) - \nu \qty(A) \leq \overline{\mu} \qty(X) - \overline{\mu} \qty(A)$. 
Since both measures extend $\mu$ and $X \in \mathcal{A}$, we have $\nu \qty(X) = \mu \qty(X) = \overline{\mu} \qty(X) < \infty$. 
The inequality simplifies to $\mu \qty(X) - \nu \qty(A) \leq \mu \qty(X) - \overline{\mu} \qty(A)$, which implies $\nu \qty(A) \geq \overline{\mu} \qty(A)$. 
The two inequalities together show that $\nu \qty(A) = \overline{\mu} \qty(A)$ for all $A \in \sigma \qty(\mathcal{A})$, proving uniqueness for the finite case. 

Next, suppose there exists a sequence $\qty{X_n} \subseteq \mathcal{A}$ such that $X = \bigcup_{n=1}^\infty X_n$ and $\mu \qty(X_n)< \infty$. 
We can assume $\qty{X_n}$ is an increasing sequence. 
Let $\nu_1$ and $\nu_2$ be two measures on $\sigma \qty(\mathcal{A})$ that agree with $\mu$ on $\mathcal{A}$. 
For each $n$, the function $\mu_n \qty(C) = \mu \qty(C \cap X_n)$ is a finite countably additive function on $\mathcal{A}$. 
The measures $\nu_{1, n} \qty(A) = \nu_1 \qty(A \cap X_n)$ and $\nu_{2, n} \qty(A) = \nu_2 \qty(A \cap X_n)$ are both extensions of $\mu_n$ to $\sigma \qty(\mathcal{A})$. 
By the uniqueness argument for the finite case, we must have $\nu_{1, n} = \nu_{2, n}$ for all $n$. 
Then for any $A \in \sigma \qty(\mathcal{A})$, the continuity of measure from below yields:

$$
\begin{aligned}
  \nu_1 \qty(A) = \lim_{n \to \infty} \nu_1 \qty(A \cap X_n) = \lim_{n \to \infty} \nu_{1, n} \qty(A) \\
  &= \lim_{n \to \infty} \nu_{2, n} \qty(A) = \lim_{n \to \infty} \nu_2 \qty(A \cap X_n) = \nu_2 \qty(A)
\end{aligned}
$$

Thus, $\nu_1 = \nu_2$, and the extension is unique. 
