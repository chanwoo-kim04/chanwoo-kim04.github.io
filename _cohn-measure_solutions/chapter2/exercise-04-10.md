---
title: "Exercise 2.4.10"
date: 2025-10-17
---
$\require{physics}$
We first prove that the function $x \mapsto xe^{tx} f \qty(x)$ is Lebesgue integrable for any fixed $t \in I$. 
Let $t$ be an element of the open interval $I$. 
We can choose a real number $\eta > 0$ small enough such that the closed interval $\qty[t - \eta, t + \eta]$ is contained in $I$. 
For any nonzero $x \in \mathbb{R}$, we can use the elementary inequality $2\eta\abs{x} \leq e^{\eta x} + e^{-\eta x}$. 
This leads to the following pointwise bound for the absolute value of our function:

$$
\begin{aligned}
  \abs{xe^{tx} f\qty(x)} &= \abs{f \qty(x)e^{tx}} \cdot \abs{x} \\
  &\leq \abs{f \qty(x) e^{tx}} \frac{e^{\eta x} + e^{-\eta x}}{2\eta} \\
  &= \frac{1}{2\eta} \qty(\abs{f \qty(x)e^{\qty(t + \eta)x}} + \abs{f \qty(x)e^{\qty(t - \eta)x}})
\end{aligned}
$$

Let $H \qty(x) = \frac{1}{2\eta} \qty(\abs{f \qty(x)e^{\qty(t + \eta)x}} + \abs{f \qty(x)e^{\qty(t - \eta)x}})$. 
By hypothesis, since both $t + \eta$ and $t - \eta$ are in $I$, the functions $x \mapsto f \qty(x) e^{\qty(t + \eta)x}$ and $x \mapsto f \qty(x) e^{\qty(t - \eta)x}$ are Lebesgue integrable. 
It follows that their absolute values are integrable, and therefore their sum, $H \qty(x)$, is an integrable function. 
The function $x \mapsto xe^{tx} f \qty(x)$ is measurable as it is the product of measurable functions. 
Since its absolute value is dominated by the integrable function $H \qty(x)$, it is itself integrable by the monotonicity of the integral. 

Now we prove that $h$ is differentiable and compute its derivative. 
Let $t_0$ be an arbitrary point in $I$. 
To find the derivative $h' \qty(t_0)$, we consider the limit of the difference quotient. 
Let $\qty{s_n}_{n=1}^\infty$ be any sequence of nonzero real numbers that converges to $0$ and is such that $t_0 + s_n \in I$ for all $n$. 
By the linearity of the integral, the difference quotient for $h$ can be written as:

$$
  \frac{h \qty(t_0 + s_n) - h \qty(t_0)}{s_n} = \int_{\mathbb{R}} \frac{e^{\qty(t_0 + s_n)x} - e^{t_0 x}}{s_n}f \qty(x) d\lambda
$$

Let $G_n \qty(x)$ denote the integrand. 
For a fixed $x$, the expression $\frac{e^{\qty(t_0 + s_n)x} - e^{t_0 x}}{s_n}$ is the difference quotient for the function $t \mapsto e^{tx}$, whose limit as $s_n \to 0$ is the partial derivative $xe^{t_0 x}$. 
Thus, the sequence of functions $\qty{G_n \qty(x)}$ converges pointwise almost everywhere to $xe^{t_0 x} f \qty(x)$. 

To apply the Dominated Convergence Theorem, we must find an integrable function that dominates $\abs{G_n \qty(x)}$ for all $n$. 
Since $I$ is open, we can choose a compact interval $\qty[t_1, t_2] \subseteq I$ that contains $t_0$ in its interior. 
We may assume that our sequence $\qty{s_n}$ was chosen such that $t_0 + s_n \in \qty[t_1, t_2]$ for all $n$. 
By the Mean Value Theorem applied to the function $u \mapsto e^{ux}$ for a fixed $x$, for each $s_n$ there exists a number $c_n \qty(x)$ between $t_0$ and $t_0 + s_n$ such that:

$$
  \frac{e^{\qty(t_0 + s_n)x} - e^{t_0 x}}{s_n} = xe^{c_n \qty(x)x}
$$

Note that $c_n \qty(x) \in \qty[t_1, t_2]$. 
We can bound the absolute value of the integrand:

$$
  \abs{G_n \qty(x)} = \abs{f \qty(x)} \cdot \abs{xe^{c_n \qty(x)x}}
$$

For any $c \in \qty[t_1, t_2]$, the convexity of the exponential function implies that $\abs{xe^{cx}} \leq \frac{\abs{e^{t_2 x} - e^{t_1 x}}}{t_2 - t_1}$. 
This bound is independent of $c$. 
Thus, we have:

$$
\begin{aligned}
  \abs{G_n \qty(x)} &\leq \abs{f \qty(x)}\frac{\abs{e^{t_2 x} - e^{t_1 x}}}{t_2 - t_1} \\
  &\leq \frac{1}{t_2 - t_1} \qty(\abs{f \qty(x) e^{t_2 x}} + \abs{f \qty(x) e^{t_1 x}})
\end{aligned}
$$

Let the right-hand side be denoted by $M \qty(x)$. 
Since $t_1$ and $t_2$ are in $I$, the functions $x \mapsto f \qty(x) e^{t_1 x}$ and $x \mapsto f \qty(x) e^{t_2 x}$ are integrable by hypothesis. 
Therefore, $M \qty(x)$ is an integrable function that dominates $\abs{G_n \qty(x)}$ for all $n$. 

All conditions for the Dominated Convergence Theorem are satisfied. 
We can therefore interchange the limit and the integral:

$$
\begin{aligned}
  \lim_{n \to \infty} \frac{h \qty(t_0 + s_n) - h \qty(t_0)}{s_n} &= \lim_{n \to \infty} \int_{\mathbb{R}} G_n \qty(x) d\lambda \\
  &= \int_{\mathbb{R}} \lim_{n \to \infty} G_n \qty(x) d\lambda \\
  &= \int_{\mathbb{R}} xe^{t_0 x} f \qty(x) d \lambda
\end{aligned}
$$

Since this holds for any sequence $\qty{s_n}$ converging to $0$, the derivative of $h$ exists at $t_0$ and is equal to the integral. 
As $t_0$ was an arbitrary point in $I$, this completes the proof. 
