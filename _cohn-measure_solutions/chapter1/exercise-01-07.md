---
title: "Exercise 1.1.7"
date: 2025-10-04
---
$\require{physics}$
Let $\mathcal{A}$ be the union of all $\sigma$-algebras of the form $\sigma \qty(\mathcal{C})$, where $\mathcal{C}$ ranges over the countable subfamilies of $\mathcal{T}$. 
We will show that $\mathcal{A}$ is a $\sigma$-algebra and is equal to $\sigma \qty(\mathcal{T})$. 

For any countable subfamily $\mathcal{C} \subset \mathcal{T}$, it holds that $\sigma \qty(\mathcal{C}) \subset \sigma \qty(\mathcal{T})$. 
Since $\mathcal{A}$ is the unoin of all such $\sigma$-algebras, it follows that $\mathcal{A} \subset \sigma \qty(\mathcal{T})$. 
Conversely, for any set $T \in \mathcal{T}$, the collection $\qty{T}$ is a countable subfamily of $\mathcal{T}$. 
Thus, $T \in \sigma \qty(\qty{T}) \subset \mathcal{A}$, which shows that $\mathcal{T} \subset \mathcal{A}$. 

Now, we show that $\mathcal{A}$ is a $\sigma$-algebra. 
- Since any $\sigma \qty(\mathcal{C})$ contains $X$, their union $\mathcal{A}$ also contains $X$.
- If $A \in \mathcal{A}$, then by definition there exists a countable subfamily $\mathcal{C}_A \subset \mathcal{T}$ such that $A \in \sigma \qty(\mathcal{C}_A)$.
  Since $\sigma \qty(\mathcal{C}_A)$ is a $\sigma$-algebra, $A^c \in \sigma \qty(\mathcal{C}_A)$, which implies $A^c \in \mathcal{A}$.
  Thus, $\mathcal{A}$ is closed under complementation.
- Let $\qty(A_n)_{n=1}^\infty$ be a sequence of sets in $\mathcal{A}$.
  For each $A_n$, there exists a countable subfamily $\mathcal{C}_n \subset \mathcal{T}$ such that $A_n \in \sigma \qty(\mathcal{C}_n)$.
  Let $\mathcal{C}^{\*} = \bigcup\_{n=1}^\infty \mathcal{C}_n$.
  As a countable union of countable sets, $\mathcal{C}^*$ is a countable subfamily of $\mathcal{T}$.
  For each $n$, we have $\mathcal{C}\_n \subset \mathcal{C}^{\*}$, so $\sigma \qty(\mathcal{C}\_n) \subset \sigma \qty(\mathcal{C}^{\*})$, which means every $A_n$ is in the single $\sigma$-algebra $\sigma \qty(\mathcal{C}^{\*})$.
  It follows that their union, $\bigcup\_{n=1}^\infty A_n$, is also an element of $\sigma \qty(\mathcal{C}^{\*})$.
  By the definition of $\mathcal{A}$, this implies $\bigcup\_{n=1}^\infty A_n \in \mathcal{A}$.

Since $\mathcal{A}$ is a $\sigma$-algebra containing $\mathcal{T}$, and $\sigma\qty(\mathcal{T})$ is the smallest such $\sigma$-algebra, we have $\sigma \qty(\mathcal{T}) \subset \mathcal{A}$. 
Combined with $\mathcal{A} \subset \sigma \qty(\mathcal{T})$, we conclude that $\mathcal{A} = \sigma \qty(\mathcal{T})$. 

Therefore, for any $A \in \sigma \qty(\mathcal{T})$, it must be that $A \in \mathcal{A}$. 
By the definition of $\mathcal{A}$, this means there exists a countable subfamily $\mathcal{C}_0$ of $\mathcal{T}$ such that $A \in \sigma \qty(\mathcal{C}_0)$. 
