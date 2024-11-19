"""
Diameter of Binary Tree:

The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
This path may or may not pass through the root.
The length of a path between two nodes is represented by the number of edges between them.
"""
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        """
        Use a helper function to calculate the depth of each subtree while simultaneously tracking the maximum diameter.
        The diameter at any node is the sum of the depths of its left and right subtrees.

        Time Complexity: O(n) - Each node is visited once to compute depth and diameter.
        Space Complexity: O(h) - The recursion stack depth is proportional to the height of the tree, which is O(log n) for a balanced tree and O(n) for a skewed tree.
        """
        def maxDepth(node: Optional[TreeNode]) -> int:
            # Base case: If the node is null, its depth is 0
            if not node:
                return 0
        
            # Recursively calculate the depth of the left and right subtrees
            left_depth = maxDepth(node.left)
            right_depth = maxDepth(node.right)
            
            # Update the maximum diameter (global variable)
            nonlocal diameter
            diameter = max(diameter, left_depth + right_depth)
            
            # Return the depth of the current node
            return 1 + max(left_depth, right_depth)
        
        diameter = 0  # Initialize the maximum diameter
        maxDepth(root)  # Calculate depths and track the diameter
        return diameter
