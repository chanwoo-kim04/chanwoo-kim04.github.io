---
title: "Exercise 1.5.2"
date: 2025-10-09
---
$\require{physics}$
(a) Let $\delta_0$ be the point mass concentrated at $0$. 
We want to find the completion of the Borel $\sigma$-algebra $\mathcal{B} \qty(\mathbb{R})$ under this measure. 
Let $A$ be an arbitrary subset of $\mathbb{R}$. 
We must show that $A$ belongs to the completion $\mathcal{B} \qty(\mathbb{R})_{\delta_0}$. 
- If $0 \in A$, choose the Borel sets $E = \qty{0}$ and $F = \mathbb{R}$.
  The required inclusion $E \subseteq A \subseteq F$ holds.
  The measure of their difference is $\delta_0 \qty(\mathbb{R} - \qty{0}) = 0$.
  By the definition of a completion, $A$ is in $\mathcal{B} \qty(\mathbb{R})_{\mu}$.
- If $0 \notin A$, choose the Borel sets $E = \varnothing$ and $F = \mathbb{R} - \qty{0}$.
  The inclusion $E \subseteq A \subseteq F$ holds.
  The measure of their difference is $\delta_0 \qty(\mathbb{R} - \qty{0}) = 0$.
  Thus, $A$ is in $\mathcal{B} \qty(\mathbb{R})_{\mu}$.

Since every subset of $\mathbb{R}$ either contains $0$ or does not, every subset of $\mathbb{R}$ is in the completion. 
Therefore, the completion of $\mathcal{B} \qty(\mathbb{R})$ under the point mass at $0$ is the power set $\mathcal{P} \qty(\mathbb{R})$. 

(b) Let $\delta_O$ be the point mass at the origin $O = \qty(0, 0)$ in $\mathbb{R}^2$, and let $L_0$ be the vertical line $\qty{0} \times \mathbb{R}$ in $\mathbb{R}^2$. 
A set $A \subseteq \mathbb{R}^2$ is in the completion of $\mathcal{A}$ if there exist sets $E$, $F \in \mathcal{A}$ such that $E \subseteq A \subseteq F$ and $\delta_O \qty(F-E) = 0$. 
The condition $\delta_O \qty(F-E) = 0$ means $O \notin F-E$, which is equivalent to the statement $O \notin F$ or $O \in E$. 
Since $E$ and $F$ are unions of vertical lines, this is equivalent to $L_0 \cap F = \varnothing$ or $L_0 \subseteq E$. 

If $A$ is in the completion, then such $E$ and $F$ exist. 
If $L_0 \subseteq E$, then $L_0 \subseteq A$ since $E \subseteq A$. 
If $L_0 \cap F = \varnothing$, then $L_0 \cap A = \varnothing$ since $A \subseteq F$. 
Thus, any set in the completion must either contain $L_0$ or be disjoint from it. 

Conversely, suppose this condition holds for a set $A \subseteq \mathbb{R}^2$. 
If $L_0 \subseteq A$, we can choose $E = L_0$ and $F = \mathbb{R}^2$. 
Both are in $\mathcal{A}$, $E \subseteq A \subseteq F$, and the condition $L_0 \subseteq E$ ensures $\delta_O \qty(F-E) = 0$. 
If $L_0 \cap A = \varnothing$, we can choose $E = \varnothing$ and $F = \mathbb{R}^2 - L_0$. 
Both are in $\mathcal{A}$, $E \subseteq A \subseteq F$, and the condition $L_0 \cap F = \varnothing$ ensures $\delta_O \qty(F-E) = 0$. 
In both cases, $A$ is in the completion. 

Therefore, the completion of $\mathcal{A}$ consists of all subsets of $\mathbb{R}^2$ such that either $L_0 \subseteq A$ or $L_0 \cap A = \varnothing$. 
