---
title: "Exercise 1.2.1"
date: 2025-10-05
---
$\require{physics}$
(a) We can write the union $A \cup B$ as a disjoint union of sets in $\mathcal{A}$: $A \cup B = A \cup \qty(B-A)$. 
By the finite additivity of a measure, we have:

$$
  \mu \qty(A \cup B) = \mu \qty(A) + \mu \qty(B-A)
$$

Similarly, the set $B$ can be written as a disjoint union $B = \qty(B-A) \cup \qty(A \cap B)$. 
By additivity, $\mu \qty(B) = \mu \qty(B-A) + \mu \qty(A \cap B)$. 
Since all terms are finite, we can rearrange this to $\mu \qty(B-A) = \mu \qty(B) - \mu \qty(A \cap B)$. 
Substituting this into the first equation yields:

$$
  \mu \qty(A \cup B) = \mu \qty(A) + \mu \qty(B) - \mu \qty(A \cap B)
$$

(b) This follows by applying the result from part (a) twice. Let $D = B \cup C$. 

$$
\begin{aligned}
  \mu \qty(A \cup B \cup C) &= \mu \qty(A \cup D) \\
  &= \mu \qty(A) + \mu \qty(D) - \mu \qty(A \cap D) \\
  &= \mu \qty(A) + \mu \qty(B \cup C) - \mu \qty(\qty(A \cap B) \cup \qty(A \cap C)) \\
  &= \mu \qty(A) + \qty[\mu \qty(B) + \mu \qty(C) - \mu \qty(B \cap C)] \\
  &\qquad - \qty[\mu \qty(A \cap B) + \mu \qty(A \cap C) - \mu \qty(A \cap B \cap C)] \\
  &= \mu \qty(A) + \mu \qty(B) + \mu \qty(C) \\
  &\qquad - \mu \qty(A \cap B) - \mu \qty(A \cap C) - \mu \qty(B \cap C) \\
  &\qquad + \mu \qty(A \cap B \cap C)
\end{aligned}
$$

(c) The general formula is the [Inclusion-Exclusion principle](https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle):

$$
  \mu \qty(\bigcup_{i=1}^n A_i) = \sum_{\varnothing \neq J \subseteq \qty{1, \dots, n}} \qty(-1)^{\abs{J}-1} \mu \qty(\bigcap_{j \in J} A_j)
$$

We prove this by induction on $n$. 
The base case $n = 2$ is established in part (a). 

Assume the formula holds for any union of $n-1$ sets. 
Let $U_n = \bigcup_{i=1}^n A_i$ and $U_{n-1} = \bigcup_{i=1}^{n-1} A_i$. 
Using the result for two sets, we have:

$$
  \mu \qty(U_n) = \mu \qty(U_{n-1} \cup A_n) = \mu \qty(U_{n-1}) + \mu \qty(A_n) - \mu \qty(U_{n-1} \cap A_n)
$$

We apply the inductive hypothesis to $\mu \qty(U_{n-1}$ and also to $\mu \qty(U_{n-1} \cap A) = \mu \qty(\bigcup_{i=1}^{n-1} \qty(A_i \cap A_n))$.

$$
\begin{aligned}
  \mu \qty(U_n) &= \qty(\sum_{\varnothing \neq J \subseteq \qty{1, \dots, n-1}} \qty(-1)^{\abs{J}-1} \mu \qty(\bigcap_{j \in J} A_j)) + \mu \qty(A_n) - \qty(\sum_{\varnothing \neq J \subseteq \qty{1, \dots, n-1}} \qty(-1)^{\abs{J}-1} \mu \qty(\bigcap_{j \in J} \qty(A_j \cap A_n))) \\
  &= \left( \sum_{\emptyset \neq J \subseteq {1,\dots,n-1}} (-1)^{\abs{J}-1} \mu\left(\bigcap_{j \in J} A_j\right) \right) + \mu(A_n) + \sum_{\emptyset \neq J \subseteq {1,\dots,n-1}} (-1)^{\abs{J}} \mu\left(\left(\bigcap_{j \in J} A_j\right) \cap A_n\right)
\end{aligned}
$$
