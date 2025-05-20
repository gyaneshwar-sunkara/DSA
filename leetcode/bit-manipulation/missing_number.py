class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        """
        Given an array nums containing n distinct numbers in the range [0, n],
        return the only number in the range that is missing from the array.
        """

        def gauss_formula() -> int:
            """
            Mathematical Summation (Gauss' Formula):
            The sum of numbers from 0 to n is n * (n + 1) // 2.
            Subtract the actual sum of nums to find the missing number.

            Time Complexity: O(n), one pass to compute sum.
            Space Complexity: O(1), constant space.
            """
            n = len(nums)
            expected = n * (n + 1) // 2
            actual = sum(nums)
            return expected - actual

        def xor_method() -> int:
            """
            XOR-Based Approach:
            XOR all indices and numbers together. Pairs cancel out, leaving the missing number.

            Time Complexity: O(n), single loop through nums.
            Space Complexity: O(1), constant space.
            """
            n = len(nums)
            xor_total = 0
            for i in range(n + 1):
                xor_total ^= i
            for num in nums:
                xor_total ^= num
            return xor_total

        def brute_force() -> int:
            """
            Brute Force Approach using Set Lookup:
            Store all elements in a set and check which number from 0 to n is missing.

            Time Complexity: O(n), due to one pass and O(1) lookup per number.
            Space Complexity: O(n), due to set storage.
            """
            num_set = set(nums)
            for i in range(len(nums) + 1):
                if i not in num_set:
                    return i
            return -1
        
        return xor_method()
