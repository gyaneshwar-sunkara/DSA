from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        """
        Brute Force Approach:
        It checks all possible subarrays and finds their sums, returning the largest one.

        Time Complexity: O(n²) - For every element, we iterate through the remaining elements to form all possible subarrays.
        Space Complexity: O(1) - No extra space is used, only variables to track sums.
        """
        def brute_force():
            max_sum = float('-inf')
            
            # Iterate over all possible starting points of subarrays
            for i in range(len(nums)):
                
                # Iterate over all possible ending points of subarrays
                for j in range(i, len(nums)):
                    
                    # Calculate the sum of the current subarray nums[i:j+1]
                    running_sum = sum(nums[i:j + 1])
                    
                    # Update max_sum if the current sum is larger
                    if running_sum > max_sum:
                        max_sum = running_sum
            
            return max_sum
        
        """
        Kadane's Algorithm:
        By iterating through the array once, it maintains a running sum of the current subarray and updates the maximum sum whenever the running sum exceeds it.
        If the running sum becomes negative, it resets to zero since a negative sum would reduce the potential of future subarrays.

        Time Complexity: O(n) - Each element is processed exactly once.
        Space Complexity: O(1) - Only constant extra space is used for tracking sums.
        """
        def kadane_algorithm():
            max_sum = float('-inf')
            current_sum = 0

            # Iterate through each number in the array
            for num in nums:
                # Add the current number to the ongoing sum
                current_sum += num

                # Update max_sum if the current sum is greater than the recorded max_sum
                if current_sum > max_sum:
                    max_sum = current_sum

                # If current_sum becomes negative, reset it to 0 to start fresh
                # (Sum of two negative numbers won't be larger than one negative number)
                if current_sum < 0:
                    current_sum = 0

            return max_sum

        return kadane_algorithm()