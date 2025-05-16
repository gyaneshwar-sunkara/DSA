class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        """
        Find the element that appears only once in the array where every other element appears exactly twice.
        """
        
        def brute_force() -> int:
            """
            Brute Force Approach:
            Count occurrences of each number using a dictionary.
            Return the one with count == 1.

            Time Complexity: O(n), where n is the number of elements in the array.
            We traverse the list and count frequencies.

            Space Complexity: O(n), due to storing counts in a dictionary.
            """
            count = {}
            for num in nums:
                count[num] = count.get(num, 0) + 1
            for num in nums:
                if count[num] == 1:
                    return num
            return -1 

        def xor_method() -> int:
            """
            OR Approach:
            XOR all elements together. Since a ^ a = 0 and a ^ 0 = a, duplicates cancel out,
            leaving only the unique number.

            Time Complexity: O(n), where n is the number of elements in the array.
            We iterate through the list once.

            Space Complexity: O(1), no extra space is used aside from one variable.
            """
            res = 0
            for num in nums:
                res ^= num
            return res

        return xor_method()
