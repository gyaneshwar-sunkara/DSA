
class Solution:
    def hammingWeight(self, n: int) -> int:
        """
        Calculate the number of set bits (1s) in the binary representation of a positive integer n.
        Also known as the Hamming weight.
        """

        def brute_force() -> int:
            """
            Brute Force Approach:
            Convert the number to a binary string and count the '1's.

            Time Complexity: O(log n), because converting to binary takes log n time.
            Space Complexity: O(log n), since the binary string representation consumes space proportional to number of bits.
            """
            return bin(n).count('1')

        def bitwise_shift_counting() -> int:
            """
            Bitwise Shift Approach:
            Repeatedly shift n right and check the least significant bit using n & 1.

            Time Complexity: O(log n), up to 32 or 64 iterations depending on integer size.
            Space Complexity: O(1), constant extra space used.
            """
            count = 0
            while n:
                count += n & 1
                n >>= 1
            return count

        def brian_kernighan() -> int:
            """
            Brian Kernighan's Algorithm:
            Remove the lowest set bit(the rightmost 1) repeatedly until n becomes 0.
            Each operation clears one set bit.
            
            Insight:    When you subtract 1 from a binary number:
                        The rightmost 1 becomes a 0
                        And all the bits to the right of it flip

            Time Complexity: O(k), where k is the number of set bits in n.
            Space Complexity: O(1), constant space used.
            """
            count = 0
            while n:
                n &= (n - 1)
                count += 1
            return count
        
        return brian_kernighan()
