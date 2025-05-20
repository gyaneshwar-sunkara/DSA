class Solution:
    def reverseBits(self, n: int) -> int:
        """
        Reverse the bits of a 32-bit unsigned integer.
        """

        def bitwise_shift() -> int:
            """
            Bitwise Shift Approach:
            Repeatedly extract the least significant bit from n and append it to the result from the left.
            Perform 32 iterations to fully reverse the bits.

            Time Complexity: O(1), always 32 iterations.
            Space Complexity: O(1)
            """
            result = 0
            for _ in range(32):
                result <<= 1
                result |= (n & 1)
                n >>= 1
            return result

        def bin_string_reverse() -> int:
            """
            String-Based Brute Force:
            Convert to a binary string, reverse it, and convert back to an integer.

            Time Complexity: O(1), since the binary string has fixed length 32.
            Space Complexity: O(1), extra space used for strings.
            """
            bin_str = bin(n)[2:].zfill(32)      # Get binary with leading zeros
            reversed_str = bin_str[::-1]        # Reverse string
            return int(reversed_str, 2)         # Convert back to int

        def bitmask_divide_conquer() -> int:
            """
            Optimized Bitmasking Approach (Divide and Conquer):
            Reverse the bits using a sequence of fixed bitmask operations.
            This swaps:
            - 16-bit halves
            - 8-bit bytes
            - 4-bit nibbles
            - 2-bit pairs
            - 1-bit positions

            Time Complexity: O(1), constant-time bit manipulation.
            Space Complexity: O(1)
            """
            n = ((n & 0xffff0000) >> 16) | ((n & 0x0000ffff) << 16)
            n = ((n & 0xff00ff00) >> 8)  | ((n & 0x00ff00ff) << 8)
            n = ((n & 0xf0f0f0f0) >> 4)  | ((n & 0x0f0f0f0f) << 4)
            n = ((n & 0xcccccccc) >> 2)  | ((n & 0x33333333) << 2)
            n = ((n & 0xaaaaaaaa) >> 1)  | ((n & 0x55555555) << 1)
            return n

        return bitmask_divide_conquer()
