---
title: "Exercise 2.1.8"
date: 2025-10-12
---
$\require{physics}$

Let $R_g$ be the range of the function $g$, and let $S$ be the set of points in the Cantor set $K$ that are not right-hand endpoints of any open interval removed during the construction of $K$. 
We will prove that $R_g = S$ by showing inclusion in both directions. 

First, we prove that $R_g \subseteq S$. 
Let $x_0$ be an arbitrary point in the range of $g$. 
Then $x_0 = g \qty(y_0)$ for some $y_0 \in \qty[0, 1]$. 
By the definition of $g$, $x_0 = \inf \qty{x \in \qty[0, 1] \colon f \qty(x) = y_0}$. 
We must show that $x_0 \in K$ and that $x_0$ is not a right-hand endpoint of a removed interval. 

1. To show $x_0 \in K$: Assume for contradiction that $x_0 \notin K$.
    Then $x_0$ must belong to some open interval $\qty(a, b)$ that was removed during the construction of the Cantor set.
    By the definition of the Cantor function $f$, it is constant on the closure $\qty[a, b]$.
    Since $f$ is continuous, $f \qty(x_0) = y_0$, and we have $f \qty(x) = y_0$ for all $x \in \qty[a, b]$.
    This implies that the set $\qty{x \colon f \qty(x) = y_0}$ contains the interval $\qty[a, b]$.
    The infimum of this set is therefore at most $a$.
    This gives $x_0 = g \qty(y_0) \leq a$, which contradicts the assumption that $x_0 \in \qty(a, b)$.
    Thus, $x_0$ must be in the Cantor set $K$.
2. To show $x_0$ is not a right-hand endpoint: Assume for contradiction that $x_0$ is the right-hand endpoint of the removed open interval $\qty(a, b)$, so $x_0 = b$.
    As before, $f$ is constant on $\qty[a, b]$, so $f \qty(x) = f \qty(b) = y_0$ for all $x \in \qty[a, b]$.
    The infimum of the set $\qty{x \colon f \qty(x) = y_0}$ is at most $a$.
    This implies that $x_0 = g \qty(y_0) \leq a$, which contradicts the fact that $a < b$.
    Thus, $x_0$ cannot be a right-hand endpoint.

This completes the proof that $R_g \subseteq S$. 

Next, we prove that $S \subseteq R_g$. 
Let $x_0$ be an arbitrary point in $S$. 
This means $x_0 \in K$ and $x_0$ is not a right-hand endpoint of any removed interval. 
Let $y_0 = f \qty(x_0)$. 
To show $x_0 \in R_g$, we must show that $x_0 = g \qty(y_0)$, which requires proving that $x_0$ is the infimum of the set $\qty{x \colon f \qty(x) = y_0}$. 
Since $x_0$ is in this set, we only need to show that there is no smaller element. 
Assume for contradiction that there exists an $x_1 < x_0$ such that $f \qty(x_1) = f \qty(x_0)$. 
Because the Cantor function $f$ is nondecreasing, it must be constant on the entire interval $\qty[x_1, x_0]$. 
This means that $\qty(x_1, x_0)$ must be a subset of a single removed open interval $\qty(a, b)$. 
This implies that we have the relation $a \leq x_1 < x_0 \leq b$. 
If $x_0 < b$, then $x_0$ would lie inside the open interval $\qty(a, b)$. 
This would mean $x_0 \notin K$, which is a contradiction. 
The only remaining possibility is that $x_0 = b$. 
In this case, $x_0$ is the right-hand endpoint of the removed open interval $\qty(a, b)$. 
This conclusion, however, directly contradicts our initial assumption that $x_0 \in S$, which specifies that $x_0$ is not a right-hand endpoint of any removed interval. 
Since all possibilities lead to a contradiction, the initial assumption that such an $x_1 < x_0$ exists must be false. 
Therefore, $x_0$ is the smallest value for which $f \qty(x) = y_0$. 
By definition, this means $x_0 = g\qty(y_0)$, and we conclude that $S \subseteq R_g$. 

Since we have shown inclusion in both directions, we conclude that the two sets are equal. 
