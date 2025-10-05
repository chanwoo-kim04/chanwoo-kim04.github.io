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
