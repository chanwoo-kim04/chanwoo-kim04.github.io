---
title: "Exercise 1.4.3"
date: 2025-10-06
---
$\require{physics}$
(a) First, we will prove that any distance-preserving linear map $T \colon \mathbb{R}^d \to \mathbb{R}^d$ is invertible. 
A linear map is invertible if and only if its kernel is trivial, that is, $\ker \qty(T) = \qty{0}$. 
Since $T$ is a linear map, $T \qty(0) = 0$. 
The distance-preserving property states that for any $x$, $y \in \mathbb{R}^d$, we have $\norm{T \qty(x) - T \qty(y)} = \norm{x-y}$. 
By setting $y = 0$, this simplifies to $\norm{T \qty(x)} = \norm{x}$ for all $x \in \mathbb{R}^d$. 
Now, let $x$ be an element in the kernel of $T$. 
By definition, $T \qty(x) = 0$. 
This implies that $\norm{x} = \norm{T \qty(x)} = 0$, and it follows that $x = 0$. 
Thus, the kernel of $T$ contains only the zero, and we conclude that $T$ is invertible. 
Note that a linear map on a finite-dimensional space is continuous, so $T$ and $T^{-1}$ are both continuous. 
Therefore, $T$ is a homeomorphism. 

Now, let $\mathcal{S} = \qty{A \subseteq \mathbb{R}^d \colon T \qty(A) \in \mathcal{B} \qty(\mathbb{R}^d)}$. 
If $\qty{A_i}$ is a countable collection of sets in $\mathcal{S}$, then $T \qty(A_i) \in \mathcal{B} \qty(\mathbb{R}^d)$ for each $i$. 
Since $T$ is a bijection, $T \qty(\bigcup_i A_i) = \bigcup_i T \qty(A_i)$. 
The countable union of Borel sets is a Borel set, so $\bigcup_i T \qty(A_i) \in \mathcal{B} \qty(\mathbb{R}^d)$, which means $\bigcup_i A_i \in \mathcal{S}$. 
If $A \in \mathcal{S}$, then $T \qty(A) \in \mathcal{B} \qty(\mathbb{R}^d)$. 
Because $T$ is a bijection, $T \qty(A^c) = T\qty(A)^c$. 
The complement of a Borel set is a Borel set, so $T \qty(A)^c \in \mathcal{B} \qty(\mathbb{R}^d)$, which means $A^c \in \mathcal{S}$. 
Since $T \qty(\mathbb{R}^d) = \mathbb{R}^d \in \mathcal{B} \qty(\mathbb{R}^d)$, we have $\mathbb{R}^d \in \mathcal{S}$. 
Thus, $\mathcal{S}$ is a $\sigma$-algebra. 

Now, let $U$ be an open subset of $\mathbb{R}^d$. 
Since $T$ is a homeomorphism, it is an open map, which means $T \qty(U)$ is an open set. 
Every open set is a Borel set, so $T \qty(U) \in \mathcal{B} \qty(\mathbb{R}^d)$. 
Therefore, $U \in \mathcal{S}$. 
Since $\mathcal{S}$ is a $\sigma$-algebra containing all open sets, it must contain the smallest $\sigma$-algebra containing the open sets, which is $\mathcal{B} \qty(\mathbb{R}^d)$. 
Thus, $\mathcal{B} \qty(\mathbb{R}^d) \subseteq \mathcal{S}$, which means that if $A$ is a Borel set, then $T \qty(A)$ is also a Borel set. 
The same argument applies to the map $T^{-1}$. 
Therefore, if $T \qty(A)$ is a Borel set, then $A = T^{-1} \qty(T \qty(A))$ must also be a Borel set. 

(b) Define a new measure $\mu$ on $\qty(\mathbb{R}^d, \mathcal{B} \qty(\mathbb{R}^d))$ by the formula $\mu \qty(A) = \lambda \qty(T \qty(A))$ for any $A \in \mathcal{B} \qty(\mathbb{R}^d)$. 
From part (a), we know that $T \qty(A)$ is a Borel set, so this definition is valid. 
We must verify that $\mu$ satisfies the conditions of *Proposition 1.4.5*. 
First, $\mu \qty(\varnothing) = \lambda \qty(T \qty(\varnothing)) = \lambda \qty(\varnothing) = 0 $. 
For any countable collection of disjoint Borel sets $\qty{A_i}$, the sets $\qty{ T \qty(A_i)}$ are also disjoint because $T$ is a bijection. 
Thus, we have:

$$
\begin{aligned}
  \mu \qty(\bigcup_i A_i) &= \lambda \qty(T \qty(\bigcup_i A_i)) = \lambda \qty(\bigcup_i T \qty(A_i)) \\
  &= \sum_i \lambda \qty(T \qty(A_i)) = \sum_i \mu \qty(A_i)
\end{aligned}
$$

So, $\mu$ is a measure. 
Since $\mu \qty(\mathbb{R}^d) = \lambda \qty(T \qty(\mathbb{R}^d)) = \lambda \qty(\mathbb{R}^d) > 0$, $\mu$ is a nonzero measure. 

Let $K$ be a bounded Borel subset. 
Then there exists $R > 0$ such that $K \subseteq B \qty(0, R)$, where $B \qty(0, R)$ is an open ball with radius $R$ centered at $0$. 
Then $T \qty(K) \subseteq T \qty( B \qty(0, R))$. 
Since $T$ preserves distances, $T \qty(B \qty(0, R)) = B \qty(0, R)$. 
So $T \qty(K)$ is also bounded. 
A bounded Borel set has finite Lebesgue measure, so $\mu \qty(K) = \lambda \qty(T \qty(K))$ is finite. 

Let $A \in \mathcal{B} \qty(\mathbb{R}^d)$ and $x \in \mathbb{R}^d$. 
We check if $\mu \qty(A+x) = \mu \qty(A)$. 
By definition, $\mu \qty(A+x) = \lambda \qty(T \qty(A+x))$. 
Since $T$ is a linear map, $T \qty(A+x) = T \qty(A) + T \qty(x)$. 
This gives $\mu \qty(A+x) = \lambda \qty(T \qty(A) + T \qty(x))$. 
Lebesgue measure $\lambda$ is translation invariant, so $\lambda \qty(T \qty(A) + T \qty(x)) = \lambda \qty(T \qty(A)) = \mu \qty(A)$. 
Therefore, $\mu \qty(A+x) = \mu \qty(A)$, so $\mu$ is translation invariant. 

Since $\mu$ satisfies all the conditions of *Proposition 1.4.5*, there must exist a positive constant $c$ such that $\mu \qty(A) = c \lambda \qty(A)$ for all $A \in \mathcal{B} \qty(\mathbb{R}^d)$. 
This means $\lambda \qty(T \qty(A)) = c \lambda \qty(A)$. 
To find the value of $c$, consider the unit ball $B = B \qty(0, 1)$. 
Applying our equation to the unit ball, we get $\lambda \qty(T \qty(B)) = c \lambda \qty(B)$. 
Since $T$ preserves distances, $T \qty(B) = B$, which means $\lambda \qty(B) = c \lambda \qty(B)$. 
Since $\lambda \qty(B) > 0$, we must have $c = 1$. 
Therefore, $\lambda \qty(T \qty(A)) = \lambda \qty(A)$ for all Borel subsets $A$ of $\mathbb{R}^d$. 
