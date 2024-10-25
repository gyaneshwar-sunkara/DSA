from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        """
        Brute Force Approach:
        Use Depth-First Search (DFS) to explore all possible jump paths from the starting index.

        Time Complexity: O(2^n) - In the worst case, each element may have two possibilities (jump or not), resulting in exponential growth.
        Space Complexity: O(n) - The recursive stack can grow up to the size of the input array.
        """
        def brute_force():
            def dfs(index):
                # If we reach the last index, return True (we can reach the end)
                if index == len(nums) - 1:
                    return True
                # If the current number is 0, we're stuck and can't jump further
                if nums[index] == 0:
                    return False

                # Try all possible jumps from 1 to nums[index] steps
                for i in range(1, nums[index] + 1):
                    # If any jump path leads to the last index, return True
                    if dfs(index + i):
                        return True

                # If no valid jump path is found, return False
                return False

            return dfs(0)

        """
        Greedy Approach:
        Maintain a variable to track the farthest index reachable at any point. 
        If, at any step, the current index exceeds this max reach, it means we can't proceed further.

        Time Complexity: O(n) - We iterate through the list once.
        Space Complexity: O(1) - No extra space required except for variables to track the maximum reach.
        """
        def greedy_approach():
            max_reach = 0  # Track the farthest index we can reach so far

            for i in range(len(nums)):
                # If the current index is beyond the max reach, we can't proceed
                if max_reach < i:
                    return False

                # Update max_reach with the farthest point reachable from this index
                max_reach = max(max_reach, i + nums[i])

                # If we can reach or exceed the last index, return True
                if max_reach >= len(nums) - 1:
                    return True

            # If we exit the loop, it means we can reach the end
            return True

        return greedy_approach()
