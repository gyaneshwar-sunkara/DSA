"""
Height/Maximum Depth of the binary tree: Height is the maximum depth of its nodes.

Height as nodes: A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Height as edges: Measures connections (standard in most textbooks and technical references).
"""
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        """
        Find the maximum depth of the binary tree by recursively calculating the depth of the left and right subtrees. 
        Base case where root is None has 0 depth.
        Add 1 to the maximum depth of the subtrees to account for the current node.

        Time Complexity: O(n) - Each node is visited once.
        Space Complexity: O(h) - The recursion stack depth is proportional to the height of the tree, which is O(log n) for a balanced tree and O(n) for a skewed tree.
        """
        if root == None:
            return 0  # Base case: If the tree is empty, the depth is 0

        # Recursively calculate the depth of left and right subtrees, take the maximum, and add 1
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
