from typing import List

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        """
        It checks all possible subarrays and finds their sums, returning the largest one.
        
        Time Complexity: O(n²) because it goes through all combinations.
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
        By iterating through the array once, maintaining a running sum of the current subarray, and updating the maximum sum whenever the current sum exceeds it.
        If the running sum becomes negative, it resets to zero since a negative sum would reduce the potential of future subarrays.        
        
        Time Complexity: O(n) because it processes each element only once.
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

                # If current_sum becomes negative, reset it to 0 to start fresh -- Sum of two negative numbers will never be greater than one negative number
                if current_sum < 0:
                    current_sum = 0

            return max_sum

        return kadane_algorithm()