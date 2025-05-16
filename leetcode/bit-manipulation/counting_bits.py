class Solution:
    def countBits(self, n: int) -> list[int]:
        """
        Return an array ans where ans[i] is the number of set bits (1s) in the binary representation of i,
        for all i in the range 0 to n.
        """

        def brute_force_brian_kernighan() -> list[int]:
            """
            Brute Force using Brian Kernighan's Algorithm:
            For each number i from 0 to n, count the number of set bits using n & (n - 1) trick.

            Time Complexity: O(k), where k is the total number of set bits in all numbers from 0 to n.
            Worst case: O(n log n), as each number takes up to log(i) steps.
            Space Complexity: O(n), for storing the result.
            """
            def count_ones(x: int) -> int:
                count = 0
                while x:
                    x &= (x - 1)
                    count += 1
                return count

            return [count_ones(i) for i in range(n + 1)]

        def dp_lowest_set_bit() -> list[int]:
            """
            Dynamic Programming with Lowest Set Bit:
            Use the relation:
                countBits[i] = countBits[i >> 1] + (i & 1)
            This builds on the previous results using bitwise shifting.

            Time Complexity: O(n), one pass from 1 to n.
            Space Complexity: O(n), output array of size n + 1.
            """
            ans = [0] * (n + 1)
            for i in range(1, n + 1):
                ans[i] = ans[i >> 1] + (i & 1)
            return ans

        return dp_lowest_set_bit()