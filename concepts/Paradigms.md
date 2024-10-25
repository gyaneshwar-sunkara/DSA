# Problem Solving Paradigms
    1. Brute Force – Foundation for understanding the problem space.
    2. Greedy Algorithms – Simple optimization strategy.
    3. Divide and Conquer – Builds recursion skills.
    4. Backtracking – For exhaustive search problems.
    5. Dynamic Programming – For overlapping subproblems.
    6. Graph Algorithms – Essential for graph-based problems.
    7. Advanced Techniques – Branch-and-Bound, Memoized Backtracking, etc.

## Brute Force
What it is
    
    Try all possible solutions and choose the best one. It’s a naive approach, but sometimes it helps to understand the problem deeply before optimizing.

When to use

    When the problem space is small (like checking all possible outcomes for a 3x3 board game).

## Greedy
What it is

    Make the best local decision at every step, hoping that it will lead to the globally optimal solution.

When to use

    When the problem has an optimal substructure (the global solution can be constructed from optimal local choices).

A problem has an optimal substructure when its optimal solution can be constructed by combining the optimal solutions to its smaller subproblems, essentially meaning that making the best choice at each local step will lead to the overall best solution for the entire problem; this property is often used in algorithms like dynamic programming and greedy algorithms & Branch and Bound to efficiently solve complex problems. 


## Divide & Conquer

This technique can be divided into the following three parts:

1. Divide: This involves dividing the problem into smaller sub-problems.
2. Conquer: Solve sub-problems by calling recursively until solved.
3. Combine: Combine the sub-problems to get the final solution of the whole problem.

Problems here needs to be recursive in nature(If you break the problem it should be the same problem) and the solutions of the sub problems should be able to sum up to a final answer.
Eg: Binary Search, Finding Max and Min, Merge Sort, Quick Sort, Strassen's Matrix Multiplication

### Recurrence Relations





### Knapsack Problem
### Job Sequencing with Deadlines
### Optimal Merge Pattern
### Prims & Kruskals Algorithms
### Dijkstra Algorithm

https://www.youtube.com/watch?v=ARvQcqJ_-NY&list=PLfFeAJ-vQopt_S5XlayyvDFL_mi2pGJE3&ab_channel=AbdulBari

https://youtu.be/bC7o8P_Ste4



## Backtracking
* Backtracking algorithm explores each and every possible path by brute forcing in order to find a valid solution.
* Backtracking always uses recursion to solve problems.

## Dynamic Programming
DP is a method for solving problems by breaking them down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. The next time the same subproblem occurs, instead of recomputing its solution, you simply look up the previously computed solution. 

1. How to recognize a DP problem
2. Identify problem variables
3. Clearly express the recurrence relation
4. Identify the base cases
5. Decide if you want to implement it iteratively or recursively
6. Add memoization
7. Determine time complexity

Source:  https://www.freecodecamp.org/news/follow-these-steps-to-solve-any-dynamic-programming-interview-problem-cc98e508cd0e/