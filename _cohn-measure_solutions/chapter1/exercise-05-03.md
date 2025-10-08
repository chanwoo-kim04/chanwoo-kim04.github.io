---
title: "Exercise 1.5.3"
date: 2025-10-09
---
$\require{physics}$
Let $X = \mathbb{R}$ and let the $\sigma$-algebra be $\mathcal{A} = \qty{\varnothing, \mathbb{R}}$. 
Define two finite measures $\mu$ and $\nu$ on $\mathcal{A}$ by setting $\mu \qty(\mathbb{R}) = 1$ and $\nu \qty(\mathbb{R}) = 0$. 

First, we find the completion $\mathcal{A}\_{\mu}$. 
For any subset $A \subseteq \mathbb{R}$ that is not $\varnothing$ or $\mathbb{R}$, the only choice for sets $E$, $F \in \mathcal{A}$ satisfying $E \subseteq A \subseteq F$ is $E = \varnothing$ and $F = \mathbb{R}$. 
For this choice, however, the condition on the measure fails, as $\mu \qty(F-E) = \mu \qty(\mathbb{R}) = 1 \neq 0$. 
Thus, no such set $A$ is in the completion, which means the completion $\mathcal{A}\_{\mu}$ is just the original $\sigma$-algebra $\qty{\varnothing, \mathbb{R}}$. 

Next, we find the completion $\mathcal{A}_{\nu}$. 
For any subset $A \subseteq \mathbb{R}$, we can again choose $E = \varnothing$ and $F = \mathbb{R}$. 
In this case, $E \subseteq A \subseteq F$ and $\nu \qty(F-E) = \nu \qty(\mathbb{R}) = 0$. 
Therefore, every subset $A$ is in the completion. 
The completion $\mathcal{A}\_{\nu}$ is the power set $\mathcal{P} \qty(\mathbb{R})$. 
Since $\mathcal{A}\_{\mu} \neq \mathcal{A}\_{\nu}$, this example suffices. 

(b) Let $X = \mathbb{R}$, $\mathcal{A} = \mathcal{B} \qty(\mathbb{R})$, $\mu = \delta_0$, and $\nu = \delta_1$, where $\delta_0$ and $\delta_1$ are point masses concentrated at $0$ and $1$, respectively. 
As shown in *Exercise 1.5.2(a)*, the completion of $\mathcal{B} \qty(\mathbb{R})$ under $\delta_0$ is the power set $\mathcal{P} \qty(\mathbb{R})$. 
By an identical argument, the completion of $\mathcal{B} \qty(\mathbb{R})$ under $\delta_1$ is also the power set $\mathcal{P} \qty(\mathbb{R})$. 
Therefore, their completions are equal.

However, $\mu$ and $\nu$ do not have the same sets of measure zero. 
For example $\mu\qty(\qty{1}) = 0$ but $\nu\qty(\qty{1}) = 1$. 
Since the measures do not share the same sets of measure zero, the statement is disproven. 
