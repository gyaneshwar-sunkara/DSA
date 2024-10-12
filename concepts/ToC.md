What are fundamental capabilities and limitations of computers?

### Types of Proofs

* Direct Argument

* Construction

* Contradiction

* Weak Induction

* Strong Induction


## Formal Languages and Automata Theory


### Languages
* Alphabet
* Strings
* Empty String
* Star-Closure
    All strings obtained by concatenating 0 or more symbols in the alphabet including (empty string)
* Positive-Closure
    All strings excluding (empty string)

### Formal Languages
A language L for an alphabet is a subset of Star-Closure


### Grammars 
Mechanism to describe a language, generating the sentences of language.

A grammar tells us whether a sentence is well formed or not

A grammar is a quadruple G = (V, Sigma, R, S) where

V: Finite set called **variables**.\
Sigma: **Alphabet** or **Terminals** 
is a finite set disjoint from V.\
R: Finite set of **rules*.\
S: Start variable

### Automata

Automata: Abstract Digital Computer

### Finite Automata

States and Transitions

* Starting state
* Accepting State: Double circle

### DFA - Deterministic Finite Automata

A DFA is a 5-tuple (Q, Sigma, Delata, q0, F)

Q: Finite set of states\
Sigma: Alphabet\
Delta: Transition function = Q X 
Sigma -> Q\
q0: Start state\
F: A set of accept (final) states


### Regular Language
A language is regular if and only if it can be recognized by a DFA.

The class of regular languages is closed under the regular operations - that performing those operations on regular languages results in regular languages

#### Union Closure



### NDFA - Non Deterministic Finite Automata

## Computability Theory

Why are some problems just not solvable?

## Complexity Theory

What makes some problems computationally hard and others easy?

NP - Non Deterministic Polynomial Time
P - Deterministic Polynomical Time
NP-Hard
NP-Complete
NP-Zero


# Notes:

Halting Problem??
