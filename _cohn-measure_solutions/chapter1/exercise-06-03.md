---
title: "Exercise 1.6.3"
date: 2025-10-12
---
$\require{physics}$
Let the measurable space be $\qty(X, \mathcal{A})$, where $X = \qty{1, 2, 3, 4}$ and $\mathcal{A}$ is the power set of $X$. 
We define two finite measures, $\mu$ and $\nu$, on this space by assigning weights to each point as follows:

$$
\begin{gathered}
  \mu \qty(\qty{1}) = 2, \mu \qty(\qty{2}) = 1, \mu \qty(\qty{3}) = 2, \mu \qty(\qty{4}) = 1 \\
  \mu \qty(\qty{1}) = 1, \mu \qty(\qty{2}) = 2, \mu \qty(\qty{3}) = 1, \mu \qty(\qty{4}) = 2
\end{gathered}
$$

Both are finite measures, and they satisfy the condition $\mu \qty(X) = \nu \qty(X) = 6$. 
Let $\mathcal{D} = \qty{A \in \mathcal{A} \colon \mu \qty(A) = \nu \qty(A)}$. 
We will show that $\mathcal{D}$ is not a $\sigma$-algebra by demonstrating that it is not closed under finite intersections. 

Consider the sets $A = \qty{1, 2}$ and $B = \qty{2, 3}$. 
Since $\mu \qty(A) = \nu \qty(A) = 3$, the set $A$ belongs to $\mathcal{D}$. 
Similarly, $\mu \qty(B) = \nu \qty(B) = 3$, so the set $B$ belongs to $\mathcal{D}$. 
However, their intersection is $A \cap B = \qty{2}$. 
The measures of this set are $\mu \qty(\qty{2}) = 1$ and $\nu \qty(\qty{2}) = 2$. 
Because $\mu \qty(A \cap B) \neq \nu \qty(A \cap B)$, the intersection does not belong to $\mathcal{D}$. 
Since $\mathcal{D}$ contains two sets but not their intersection, it is not closed under finite intersections and therefore is not a $\sigma$-algebra. 
