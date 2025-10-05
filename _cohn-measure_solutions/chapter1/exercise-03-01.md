---
title: "Exercise 1.3.1"
date: 2025-10-06
---
$\require{physics}$
An outer measure $\mu^{\*}$ must satisfy: (i) $\mu^{\*} \qty(\varnothing) = 0$, (ii) monotonicity, and (iii) countable subadditivity.
A set $B$ is $\mu^{\*}$-measurable if for every set $A \subseteq \mathbb{R}$, the condition $\mu^* \qty(A) = \mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c)$ holds. It suffices to check the inequality $\mu^* \qty(A) \geq \mu^* \qty(A \cap B) + \mu^* \qty(A \cap B^c)$ for all sets $A$ with finite outer measure. 

(a) 
The function $\mu\_{2}^{\*}$ is an outer measure. 
Conditions (i) and (ii) are clear. 
For (iii), we must show that for any sequence $\qty{A_n}$ of subsets of $\mathbb{R}$, the inequality $\mu\_2^{\*} \qty(\bigcup_n A_n) \leq \sum_n \mu\_2^{\*} \qty(A_n)$ holds. 
If all $A_n$ are empty, the inequality is $0 \leq 0$. 
If at least one $A_k$ is nonempty, then $\bigcup_n A_n$ is nonempty, and the inequality becomes $\infty \leq \infty$. 

$\mu\_3^{\*}$ is not an outer measure because it fails countable subadditivity. 
Let $A_n = \qty[n, n+1]$ for $n \in \mathbb{N}$. 
Each set $A_n$ is bounded, so $\mu\_3^{\*} \qty(A_n) = 0$, and their sum is $\sum_n \mu\_3^{\*} \qty(A_n) =0$. 
However, their union $A = \bigcup_{n=1}^\infty A_n = \left[1, \infty \right)$ is unbounded, making $\mu\_3^{\*} \qty(A) = 1$. 
The subadditivity condition $1 \leq 0$ is false. 

$\mu\_4^{\*}$ is an outer measure. Conditions (i) and (ii) are clear. 
For subadditivity, consider any sequence $\qty{A_n}$ of subsets of $\mathbb{R}$. 
If any $A_n$ is unbounded, their union $A = \bigcup_n A_n$ is unbounded, and the inequality becomes $\infty \leq \infty$. 
If all $A_n$ are bounded, then $\sum_n \mu\_4^{\*}$ counts the number of nonempty sets in the sequence. 
If $A$ is bounded, $\mu\_4^{\*} \qty(A) \leq 1$, which is less than or equal to the sum. 
If $A$ is unbounded, then the sequence must contain infinitely many nonempty sets, making the sum infinite, so $\mu\_4^{\*} \qty(A) = \infty \leq \infty$. 

$\mu\_6^{\*}$ is an outer measure. 
Conditions (i) and (ii) are clear. 
For subadditivity, consider any sequence $\qty{A_n}$ of subsets of $\mathbb{R}$. 
If all $A_n$ are countable, their union is countable, and the inequality is $0 \leq 0$. 
If at least one $A_n$ is uncountable, their union is uncountable, and the inequaltiy is $\infty \leq \infty$. 

(b) 
For $\mu\_1^{\*}$ and for $\mu\_4^{\*}$: The measurable sets are $\qty{\varnothing, \mathbb{R}}$. 
To be measurable, a set $B$ must satisfy the measurability condition for all sets $A \subseteq \mathbb{R}$ with $\mu^{\*} \qty(A) < \infty$. 
For both $\mu^{\*}_1$ and $\mu^{\*}_4$, any nonempty bounded set $A$ has $\mu^{\*} \qty(A) = 1$. 
If we choose any proper, nonempty set $B$, we can construct a set $A = \qty{b, c}$ where $b \in B$ and $c \in B^c$. 
For this $A$, we have $\mu^{\*} \qty(A) = 1$, but $\mu^{\*} \qty(A \cap B) = 1$ and $\mu^{\*} \qty(A \cap B^c) = 1$. 
The condition $\mu^{\*} \qty(A) \geq \mu^{\*} \qty(A \cap B) + \mu^{\*} \qty(A \cap B^c)$ becomes $1 \geq 1 + 1$, which is false. 
Thus, the only trivial subsets are measurable. 

For $\mu^{\*}_2$ and for $\mu^{\*}_6$: The measurable sets are all subsets $\mathcal{P} \qty(\mathbb{R})$. 
For these outer measures, the only sets $A$ with finite outer measure are those with $\mu^{\*} \qty(A) = 0$. 
For any such $A$, the condition becomes $0 \geq \mu^{\*} \qty(A \cap B) + \mu^{\*} \qty(A \cap B^c)$. 
Since the terms on the right are nonnegative, they must be zero. 
This is always true, as $A \cap B$ and $A \cap B^c$ are subsets of $A$ and thus also have outer measure $0$. 
As the condition holds trivially for any set $B$, all subsets are measurable. 

For $\mu^{\*}_5$: The measurable sets are countable or co-countable sets. 
A set $B$ is measurable if for every uncountable set $A$, either $A \cap B$ is countable or $A \cap B^c$ is countable. 
If $B$ is countable, $A \cap B$ is always countable. 
If $B$ is co-countable, $A \cap B^c$ is always countable. 
If neither $B$ nor $B^c$ is countable, let $A = \mathbb{R}$. 
Then $A \cap B = B$ and $A \cap B^c = B^c$ are both uncountable. 
The measurability condition $\mu^{\*}_5 \qty(A) \geq \mu^{\*}_5 \qty(A \cap B) + \mu^{\*}_5 \qty(A \cap B^c)$ becomes $1 \geq 1 + 1$, which is false. 
