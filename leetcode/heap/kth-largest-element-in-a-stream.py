import heapq
from typing import List

class KthLargest:
    """
    Design a class to find the kth largest element in a stream of numbers.
    """

    def __init__(self, k: int, nums: List[int]):
        """
        Constructor to initialize the object with the integer k and the stream of integers nums.
        """
        self.k = k
        self.heap = []

        # Add each number to the heap using the optimized approach
        for num in nums:
            self.add(num)

    def add(self, val: int) -> int:
        """
        Use a min-heap to maintain the top k largest elements. The smallest element in the heap
        will be the kth largest overall.

        Time Complexity: O(log k) per add() call due to heap insertion/removal.
        Space Complexity: O(k), since the heap size is at most k.
        """
        # Add the new value to the heap if size < k or it's larger than the smallest
        if len(self.heap) < self.k or val > self.heap[0]:
            heapq.heappush(self.heap, val)
            if len(self.heap) > self.k:
                heapq.heappop(self.heap)

        return self.heap[0]
