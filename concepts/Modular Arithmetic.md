# Modular Arithmetic

Modular arithmetic is the branch of arithmetic mathematics related with the “mod” functionality. Basically, modular arithmetic is related with computation of “mod” of expressions.

**Source** https://www.geeksforgeeks.org/modular-arithmetic/

### Modular Addition

Rule:

<pre>
(a + b) mod m = ((a mod m) + (b mod m)) mod m
</pre>

Example:

<pre>
(15 + 17) % 7
= ((15 % 7) + (17 % 7)) % 7
= (1 + 3) % 7
= 4 % 7
= 4
</pre>

Note: The same rule is to modular subtraction

### Modular Multiplication

Rule:

<pre>
(a * b) mod m = ((a mod m) * (b mod m)) mod m
</pre>

Example:

<pre>
(12 x 13) % 5
= ((12 % 5) x (13 % 5)) % 5
= (2 x 3) % 5
= 6 % 5
= 1
</pre>

## The Modulo Operator is ideal for treating an Array Circularly

#### To “advance” the front index, we use the arithmetic (Used for dequeue in ArrayQueue)

<pre> f = (f + 1) % N </pre>

#### The index of the next opening based on the formula (Used for enqueue in ArrayQueue)

<pre> avail = (f + s) % N </pre>