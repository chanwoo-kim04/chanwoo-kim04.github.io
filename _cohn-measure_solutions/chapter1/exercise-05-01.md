---
title: "Exercise 1.5.1"
date: 2025-10-09
---
$\require{physics}$
First, we prove that $\qty(\mathcal{A}\_{\mu})\_{\overline{\mu}} = \mathcal{A}\_{\mu}$. 
The inclusion $\qty(\mathcal{A}\_{\mu})\_{\overline{\mu}} \supseteq \mathcal{A}\_{\mu}$ holds by the definition of a completion. 
For the reverse inclusion, let $A$ be a set in $\qty(\mathcal{A}\_{\mu})\_{\overline{\mu}}$. 
By definition, there exist sets $E$ and $F$ in $\mathcal{A}\_{\mu}$ such that $E \subseteq A \subseteq F$ and $\overline{\mu} \qty(F-E) = 0$. 
According to *Proposition 1.5.1*, the measure space $\qty(X, \mathcal{A}\_{\mu}, \overline{\mu})$ is complete. 
The set $F-E$ is an element of $\mathcal{A}_{\mu}$ with $\overline{\mu}$-measure zero. 
Since $A-E$ is a subset of $F-E$, the completeness of the space implies that $A-E$ must also belong to $\mathcal{A}\_{\mu}$. 
As $E$ is also in $\mathcal{A}\_{\mu}$ and $\mathcal{A}\_{\mu}$ is a $\sigma$-algebra, the union $A = E \cup \qty(A-E)$ must belong to $\mathcal{A}\_{\mu}$. 
This shows that $\qty(\mathcal{A}\_{\mu})\_{\overline{\mu}} \subseteq \mathcal{A}\_{\mu}$, which establishes the equality of the two $\sigma$-algebras.

Next, we prove that $\overline{\overline{\mu}} = \overline{\mu}$. 
By definition, the completion of the measure is an extension of the original measure, so they agree on the original $\sigma$-algebra. 
Here, $\overline{\overline{\mu}}$ is the completion of the measure $\overline{\mu}$. 
Therefore, $\overline{\overline{\mu}}$ must agree with $\overline{\mu}$ on the domain of $\overline{\mu}$, which is $\mathcal{A}\_{\mu}$. 
It follows that for any set $A \in \mathcal{A}_{\mu}$, we have $\overline{\overline{\mu}} \qty(A) = \overline{\mu}\qty(A)$. 
This completes the proof.
