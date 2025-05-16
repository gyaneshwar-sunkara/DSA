class Solution:
    def singleNumber(self, nums: list[int]) -> int:
        """
        Find the element that appears only once in the array where every other element appears exactly three times.
        """

        def brute_force() -> int:
            """
            Brute Force Approach:
            Count occurrences using a dictionary and return the number with count == 1.

            Time Complexity: O(n), where n is the number of elements.
            Space Complexity: O(n), for the dictionary to store frequencies.
            """
            count = {}
            for num in nums:
                count[num] = count.get(num, 0) + 1
            for num in nums:
                if count[num] == 1:
                    return num
            return -1  # Shouldn't happen if input is valid 
        
        def bit_counting_mod3() -> int:
            """
            Bit Counting Approach:
            Count the number of 1s at each bit position. Since all numbers except one appear three times,
            the bits that appear `count % 3 != 0` belong to the unique number.

            Time Complexity: O(32n) = O(n), since we iterate over 32 bits for each of n elements.
            Space Complexity: O(1), constant space used.
            """
            result = 0
            for i in range(32):  # For each bit position
                bit_sum = 0
                for num in nums:
                    if (num >> i) & 1:
                        bit_sum += 1
                if bit_sum % 3:
                    result |= (1 << i)

            # Handle negative numbers
            if result >= 2**31:
                result -= 2**32

            return result

        def bitmasking_ones_twos() -> int:
            """
            Bitmasking using ones and twos:
            Use two bitmasks (ones and twos) to simulate a finite-state machine for each bit.
            Each bit goes through: seen once → seen twice → cleared.

            Time Complexity: O(n), one pass through the array.
            Space Complexity: O(1), only two variables used.
            """
            ones, twos = 0, 0
            for num in nums:
                ones = (ones ^ num) & ~twos
                twos = (twos ^ num) & ~ones
            return ones

        return bitmasking_ones_twos()
