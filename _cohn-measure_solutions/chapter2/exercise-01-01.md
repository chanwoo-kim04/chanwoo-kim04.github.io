---
title: "Exercise 2.1.1"
date: 2025-10-12
---
$\require{physics}$
(a) The function $\qty(\liminf_k \chi_{A_k}) \qty(x)$ equals $1$ if and only if the sequence of values $\qty{\chi_{A_k} \qty(x)}$ is eventually $1$. 
This holds if and only if there exists an integer $N$ such that $x \in A_k$ for all $k \geq N$. 
This is precisely the definition of $x$ belonging to the set $B = \bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k$. 
Thus, $\qty(\liminf_k \chi_{A_k}) \qty(x) = 1$ if and only if $\chi_B \qty(x) = 1$. 
Since both functions only take values in $\qty{0, 1}$, the identity holds for all $x$. 

(b) Similarly, the function $\qty(\limsup_k \chi_{A_k}) \qty(x)$ equals $1$ if and only if the sequence $\qty{\chi_{A_k} \qty(x)}$ is $1$ for infinitely many values of $k$. 
This holds if and only if for every integer $N$, there exists some $k \geq N$ such that $x \in A_k$. 
This is precisely the definition of $x$ belonging to the set $C = \bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k$. 
Thus, $\qty(\limsup_k \chi_{A_k}) \qty(x) = 1$ if and only if $\chi_C \qty(x) = 1$, which proves the identity. 
