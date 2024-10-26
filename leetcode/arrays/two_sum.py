from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        Find two numbers in the input list that sum up to the target.
        """
        def brute_force() -> List[int]:
            """
            This implementation tries all possible pairs to check if their sum equals the target.

            Time Complexity: O(n^2), where n is the number of elements in the list.
            We check every pair of elements, resulting in a quadratic time complexity.

            Space Complexity: O(1), as no extra data structures are used.
            """
            # Iterate through each pair of elements in the list
            for i in range(len(nums)):
                for j in range(i + 1, len(nums)):
                    if nums[i] + nums[j] == target:
                        return [i, j]  # If found, return the pair of indices
            return []  # Return an empty list if no valid pair is found

        def optimized() -> List[int]:
            """
            Optimized Approach:
            Use a dictionary to find two numbers that sum to the target in linear time.

            Time Complexity: O(n), where n is the number of elements in the list.
            We traverse the list once, and dictionary lookups take O(1) time on average.

            Space Complexity: O(n), since in the worst case we store all elements in the dictionary.
            """
            s = dict()  # Dictionary to store value -> index pairs

            # Iterate over the list of numbers
            for i in range(len(nums)):
                # Check if the complement (target - nums[i]) exists in the dictionary
                if target - nums[i] in s:
                    return [s[target - nums[i]], i]  # If found, return the two indices

                # Store the current element and its index in the dictionary as key value pair
                s[nums[i]] = i

            return []  # Return an empty list if no valid pair is found

        return optimized()
