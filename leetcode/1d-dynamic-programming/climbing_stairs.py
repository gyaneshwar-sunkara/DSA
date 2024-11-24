class Solution:
    def climbStairs(self, n: int) -> int:
        """
        Treat it like a Fibonacci sequence: each step's count is the sum of the previous two, optimized with two variables

        Time Complexity: O(n) - We calculate each step from 4 to `n`.
        Space Complexity: O(1) - We use only two variables to store intermediate results.
        """
        # Base cases for small values of n
        if n <= 3:
            return n
        
        # Initialize variables for the two most recent steps
        n1, n2 = 2, 3

        # Iterate from step 4 to n
        for i in range(4, n + 1):
            temp = n1 + n2  # Calculate the number of ways to current step
            n1 = n2         # Update `n1` to previous `n2`
            n2 = temp       # Update `n2` to the current step count
        
        return n2  # Return the final result for step `n`

     # Optimized Space Dynamic Programming (Iterative)
    def optimized(self, n: int) -> int:
        """
        Optimized approach using two variables to compute results iteratively.

        Time Complexity: O(n) - Iterate through steps.
        Space Complexity: O(1) - Only two variables used.
        """
        # Base cases for small values of n
        if n <= 3:
            return n
        
        # Initialize variables for the two most recent steps
        n1, n2 = 2, 3

        # Iterate from step 4 to n
        for i in range(4, n + 1):
            temp = n1 + n2  # Calculate the number of ways to current step
            n1 = n2         # Update `n1` to previous `n2`
            n2 = temp       # Update `n2` to the current step count
        
        return n2  # Return the final result for step `n`

    # Dynamic Programming with Memoization
    def memoization(self, n: int) -> int:
        """
        Memoized recursive approach to avoid redundant calculations.

        Time Complexity: O(n) - Each result is calculated once.
        Space Complexity: O(n) - For the recursion stack and memo dictionary.
        """
        # Dictionary to store results of sub-problems
        memo = {}

        def dp(steps):
            """
            Helper function to compute the number of ways to climb `steps` stairs.
            Uses memoization to store results.
            """
            # Base cases for small inputs
            if steps <= 3:
                return steps

            # Check if result for `steps` is already computed
            if steps not in memo:
                # Recursively compute result and store it in memo
                memo[steps] = dp(steps - 1) + dp(steps - 2)
            return memo[steps]

        # Call the helper function for the input `n`
        return dp(n)

    # Dynamic Programming with Tabulation
    def tabulation(self, n: int) -> int:
        """
        Tabulated approach to fill an array iteratively.

        Time Complexity: O(n) - Single loop to compute results.
        Space Complexity: O(n) - To store results for all steps.
        """
        # Base cases for small inputs
        if n <= 3:
            return n

        # Initialize dp array
        dp = [0] * (n + 1)
        dp[1], dp[2], dp[3] = 1, 2, 3  # Base cases

        # Fill dp array iteratively for steps from 4 to n
        for i in range(4, n + 1):
            dp[i] = dp[i - 1] + dp[i - 2]  # Current step is sum of last two

        # Return the result for the nth step
        return dp[n]
