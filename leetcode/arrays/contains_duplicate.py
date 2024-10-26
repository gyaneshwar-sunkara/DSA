from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        """
        Check if the input list contains any duplicates.
        
        Uses a set to track seen elements. 
        If an element is encountered more than once, it returns True. 
        Otherwise, it continues until all elements are processed, returning False if no duplicates are found.
        
        Time Complexity: O(n), where n is the number of elements in the list,
        as each insertion and lookup in the set is on average O(1).
        
        Space Complexity: O(n) in the worst case, where all elements are unique
        and stored in the set.
        """
        s = set()  # Create an empty set to track seen elements
        
        # Iterate through each number in the input list
        for i in nums:
            if i in s:  # Check if the current number is already in the set
                return True  # Found a duplicate, return True
            s.add(i)  # Add the current number to the set
            
        return False  # No duplicates found, return False
