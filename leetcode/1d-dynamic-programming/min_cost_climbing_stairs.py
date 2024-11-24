class Solution:
    def minCostClimbingStairs(self, cost):
        """
        Use a bottom-up approach to calculate the minimum cost to reach the top. For each step,
        update its cost as the sum of its own value and the cheaper of the next two steps. 
        Finally, return the smaller cost of starting from step 0 or step 1.

        Time Complexity: O(n) - We iterate through the cost array once.
        Space Complexity: O(1) - The input array is modified in place, using no extra space.
        """
        # Add a zero to represent the cost of the "top" beyond the last step
        cost.append(0)
        
        # Iterate backwards, starting from the third-to-last step
        for i in range(len(cost) - 3, -1, -1):
            # Update cost[i] to the total minimum cost to reach the top from step i
            cost[i] += min(cost[i + 1], cost[i + 2])
        
        # Return the minimum cost of starting from step 0 or step 1
        return min(cost[0], cost[1])
