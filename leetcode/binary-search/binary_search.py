class Solution:
    def search(self, nums, target):
        """
        Use two pointers, `l` and `r`
        Check the mid-point - if it matches the target, return its index.
        If the target is smaller, move `r` to `mid - 1`; if larger, move `l` to `mid + 1`.
        Repeat until the range is invalid, returning `-1` if not found.

        Time Complexity: O(log n) - Each iteration halves the search space.
        Space Complexity: O(1) - Constant space usage.
        """
        # Initialize left and right pointers
        l, r = 0, len(nums) - 1

        while l <= r:
            mid = r + (l - r) // 2  # Avoid overflow
            if nums[mid] == target:
                return mid
            elif nums[mid] > target:  # Search left sub array
                r = mid - 1
            else:  # Search right sub array
                l = mid + 1

        return -1
