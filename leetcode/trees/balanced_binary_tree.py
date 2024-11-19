"""
Height Balanced Binary Tree

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
"""

from typing import Optional, Tuple

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def checkBalance(self, node: Optional[TreeNode]) -> Tuple[bool, int]:
        """
        Helper function to check balance by calculating height.

        Returns:
        - (is_balanced: bool, height: int)
        """
        if not node:
            return True, 0  # Base case: empty subtree is balanced with height 0

        # Check left subtree
        left_balanced, left_height = self.checkBalance(node.left)
        if not left_balanced:
            return False, 0  # Early exit if left subtree is unbalanced

        # Check right subtree
        right_balanced, right_height = self.checkBalance(node.right)
        if not right_balanced:
            return False, 0  # Early exit if right subtree is unbalanced

        # Check current node balance
        is_balanced = abs(left_height - right_height) <= 1
        height = max(left_height, right_height) + 1

        return is_balanced, height

    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        """
        Main function to check if the binary tree is height-balanced.
        
        Returns:
        - True if the tree is balanced.
        - False otherwise.
        """
        is_balanced, _ = self.checkBalance(root)
        return is_balanced
