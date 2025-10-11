---
title: "Exercise 1.5.12"
date: 2025-10-12
---
$\require{physics}$
(a) Let $\mathcal{S}$ be the collection of sets of the form $\qty(A_1 \cap C) \cup \qty(A_2 \cap C^c)$ for some $A_1$, $A_2 \in \mathcal{A}$. 
We first show that $\mathcal{S}$ is a $\sigma$-algebra. 
It contains $X$ by taking $A_1 = A_2 = X$, and it is closed under complements, since the complement of $\qty(A_1 \cap C) \cup \qty(A_2 \cap C^c)$ is $\qty(A_1^c \cap C) \cup \qty(A_2^c \cap C^c)$, which is also in $\mathcal{S}$. 
For any sequence $S_n = \qty(A_{1, n} \cap C) \cup \qty(A_{2, n} \cap C^c)$ in $\mathcal{S}$, their union is:

$$
  \bigcup_n S_n = \qty(\qty(\bigcup_n A_{1, n}) \cap C) \cup \qty(\qty(\bigcup_n A_{2, n}) \cap C^c)
$$

which is in $\mathcal{S}$. 
Thus $\mathcal{S}$ is a $\sigma$-algebra. 
Since any set $A \in \mathcal{A}$ can be written as $A = \qty(A \cap C) \cup \qty(A \cap C^c)$, and $C$ can be written as $C = \qty(X \cap C) \cup \qty(\varnothing \cap C^c)$, we have $\mathcal{A} \cup \qty{C} \subseteq \mathcal{S}$. 
Because $\mathcal{S}$ is a $\sigma$-algebra, $\sigma \qty(\mathcal{A} \cup \qty{C}) \subseteq \mathcal{S}$. 
The reverse inclusion is clear, so equality holds. 

(b) First, we show that $\mu_0$ is a measure. 
Clearly $\mu_0 \qty(\varnothing) = 0$. 
Let $\qty{A_n}$ be a sequence of disjoint sets in $\sigma \qty(\mathcal{A} \cup \qty{C})$. 
Then the sequence $\qty{A_n \cap C_0}$ and $\qty{A_n \cap C^c}$ are also sequence disjoint sets. 
Since $\mu$ and the trace measure $\mu_{C^c}$ are countably additive, we have:

$$
\begin{aligned}
  \mu_0 \qty(\bigcup_n A_n) &= \mu\qty(\bigcup_n \qty(A_n \cap C_0)) + \mu_{C^c} \qty(\bigcup_n \qty(A_n \cap C^c)) \\
  &= \sum_n \mu \qty(A_n \cap C_0) + \sum_n \mu_{C^c} \qty(A_n \cap C^c) = \sum_n \mu_0 \qty(A_n)
\end{aligned}
$$

Thus, $\mu_0$ is a measure. 
An identical argument shows that $\mu_1$ is also a measure. 

Next, we show that these measures agree with $\mu$ on $\mathcal{A}$. 
Let $A$ be any set in $\mathcal{A}$. 
By *Exercise 1.5.11(c)*, the trace measure $\mu_C \qty(B)$ of a set $B \subseteq C$ is equal to its outer measure $\mu^* \qty(B)$. 
Applying this, we get:

$$
\begin{aligned}
  \mu_0 \qty(A) &= \mu \qty(A \cap C_0) + \mu^* \qty(A \cap C^c) \\
  \mu_1 \qty(A) &= \mu^* \qty(A \cap C) + \mu \qty(A \cap C_1)
\end{aligned}
$$

By *Exercise 1.5.7*, for any measurable set $A$ and any set $S$, the identity $\mu \qty(A) = \mu^* \qty(A \cap S) + \mu_* \qty(A \cap S^c)$ holds when applied to the restricted measure space on $A$. 
This gives $\mu\qty(A) = \mu^* \qty(A \cap C) + \mu_* \qty(A \cap C^c)$. 
Furthermore, it can be shown that for a measurable set $A$, $\mu_* \qty(A \cap C) = \mu \qty(A \cap C_0)$ and $\mu_* \qty(A \cap C^c) = \mu \qty(A \cap C_1)$. 
Combining these identities yields $\mu_1 \qty(A) = \mu^* \qty(A \cap C) + \mu_* \qty(A \cap C^c) = \mu\qty(A)$. 
A similar argument using the identity $\mu \qty(A) = \mu_* \qty(A \cap C) + \mu^* \qty(A \cap C^c)$ shows that $\mu_0 \qty(A) = \mu \qty(A)$. 
Thus, both $\mu_0$ and $\mu_1$ are extensions of $\mu$. 

Finally, we verify the values these measures assign to the set $C$. 
For $\mu_0$, we have:

$$
  \mu_0 \qty(C) = \mu\qty(C \cap C_0) + \mu_{C^c}\qty(C \cap C^c) = \mu\qty(C_0) + \mu_{C^c}\qty(\varnothing) = \mu_* \qty(C)  
$$

For $\mu_1$, we have:

$$
  \mu_1 \qty(C) = \mu_C \qty(C \cap C) + \mu \qty(C \cap C_1) = \mu_C \qty(C) + \mu\qty(\varnothing) = \mu_C \qty(C)
$$

By *Exercise 1.5.11(c)*, $\mu_C \qty(C) = \mu^* \qty(C)$. 
Therefore, $\mu_1 \qty(C) = \mu^* \qty(C)$. 
All the required properties have been proved.

(c) Let $\alpha$ be a number in the interval $\qty[\mu_* \qty(C), \mu^* \qty(C)]$. 
If $\mu_* \qty(C) = \mu^* \qty(C)$, then $C$ is $\mu$-measurable, and $\mu_0 = \mu_1 = \mu$. 
We can simply take $\nu = \mu$, and we have $\nu \qty(C) = \mu \qty(C) = \alpha$. 

If $\mu_* \qty(C) < \mu^* \qty(C)$, define a constant $t$ by:

$$
  t = \frac{\mu^* \qty(C) - \alpha}{\mu^* \qty(C) - \mu_* \qty(C)}
$$

Then $t \in \qty[0, 1]$. 
Let $\nu = t\mu_0 + \qty(1-t) \mu_1$. 
As a linear combination of two measures, $\nu$ is a measure on $\sigma \qty(\mathcal{A} \cup \qty{C})$. 
For any $A \in \mathcal{A}$, we have:

$$
  \nu \qty(A) = t\mu_0 \qty(A) + \qty(1-t) \mu_1 \qty(A) = t\mu \qty(A) + \qty(1-t) \mu \qty(A) = \mu \qty(A)
$$

so $\nu$ agrees with $\mu$ on $\mathcal{A}$. 
Finally, we calculate the measure of $C$:

$$
\begin{aligned}
  \nu \qty(C) &= t\mu_0 \qty(C) + \qty(1-t)\mu_1 \qty(C) \\
  &= \frac{\mu^* \qty(C) - \alpha}{\mu^* \qty(C) - \mu_* \qty(C)} \mu_* \qty(C) + \qty(1 - \frac{\mu^* \qty(C) - \alpha}{\mu^* \qty(C) - \mu_* \qty(C)})\mu^* \qty(C) \\
  &= \alpha
\end{aligned}
$$

Thus, we have constructed a measure $\nu$ with the required properties. 
