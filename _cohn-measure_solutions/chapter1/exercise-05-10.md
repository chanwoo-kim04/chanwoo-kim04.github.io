---
title: "Exercise 1.5.10"
date: 2025-10-09
---
$\require{physics}$
First, we show that if $A$ is a Borel set in $\mathbb{R}$, then $A \times \mathbb{R}$ is a Borel set in $\mathbb{R}^2$. 
Let $\mathcal{S} = \qty{A \in \mathcal{B} \qty(\mathbb{R}) \colon A \times \mathbb{R} \in \mathcal{B} \qty(\mathbb{R}^2)}$. 
For any open set $U \subseteq \mathbb{R}$, the set $U \times \mathbb{R}$ is open in $\mathbb{R}^2$ and therefore is in $\mathcal{B} \qty(\mathbb{R}^2)$, so all open sets are in $\mathcal{S}$. 
It is straightforward to verify that $\mathcal{S}$ is closed under complements and countable unions, making it a $\sigma$-algebra. 
Since $\mathcal{S}$ is a $\sigma$-algebra containing all open sets, it must contain the Borel $\sigma$-algebra, so $\mathcal{B} \qty(\mathbb{R}) \subseteq \mathcal{S}$. 
This proves the first claim. 

Next, we show that if $A \subseteq \mathbb{R}$ is a Lebesgue measurable set with $\lambda_1 \qty(A) = 0$, then $A \times \mathbb{R}$ is a Lebesgue measurable set in $\mathbb{R}^2$ with $\lambda_2 \qty(A \times \mathbb{R}) = 0$. 
Since the Lebesgue measure space is complete, it suffices to show that the outer measure $\lambda_2^* \qty(A \times \mathbb{R})$ is zero. 
We can write $A \times \mathbb{R}$ as the countable union $\bigcup_{n \in \mathbb{Z}} \qty(A \times \qty[n, n+1])$. 
We will show the outer measure of each piece is zero. 
For any $\varepsilon > 0$, we can cover $A$ with a countable collection of open intervals $\qty{I_k}$ such that $\sum_k \lambda_1 \qty(I_k) < \varepsilon$. 
The open rectangles $\qty{I_k \times \qty(n-1, n+2)}$ then form a cover of $A \times \qty[n, n+1]$. 
By the definition of outer measure:

$$
  \lambda_2^* \qty(A \times \qty[n, n+1]) \leq \sum_{k} \text{vol} \qty(I_k \times \qty(n-1, n+2)) < 3 \varepsilon
$$

Since $\varepsilon$ is arbitrary, $\lambda_2^* \qty(A \times \qty[n, n+1]) = 0$. 
As $A \times \mathbb{R}$ is a countable union of such sets of outer measure zero, it is also a set whose outer measure zero and is therefore Lebesgue measurable. 

Finally, consider the general case where $A$ is any Lebesgue measurable subset of $\mathbb{R}$. 
By *Lemma 1.5.3*, there exist Borel sets $E$ and $F$ in $\mathbb{R}$ such that $E \subseteq A \subseteq F$ and $\lambda_1 \qty(F-E) = 0$. 
This implies the inclusion $E \times \mathbb{R} \subseteq A \times \mathbb{R} \subseteq F \times \mathbb{R}$. 
From our first step, since $E$ and $F$ are Borel sets, the sets $E \times \mathbb{R}$ and $F \times \mathbb{R}$ are Borel subsets of $\mathbb{R}^2$. 
The difference between these two sets is $\qty(F-E) \times \mathbb{R}$. 
Since $\lambda_1 \qty(F-E) = 0$, our second step shows that $\lambda_2 \qty(\qty(F-E) \times \mathbb{R}) = 0$. 
The set $A \times \mathbb{R}$ is therefore contained between two Borel sets whose difference has measure zero. 
This means $A \times \mathbb{R}$ is in the completion of $\mathcal{B} \qty(\mathbb{R}^2)$ under the Lebesgue measure $\lambda_2$. 
By *Proposition 1.5.2*, this completion is precisely the $\sigma$-algebra of Lebesgue measurable sets, and therefore $A \times \mathbb{R}$ is Lebesgue measurable. 
