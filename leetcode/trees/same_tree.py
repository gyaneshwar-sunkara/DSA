"""
Similar Trees

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
"""
from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        """
        Time Complexity: O(n), where n is the number of nodes in the smaller tree.
        Space Complexity: O(h), where h is the height of the tree (recursion stack depth).
        """
        # Base case: Both nodes are None, the trees are identical up to this point
        if p is None and q is None:
            return True

        # Base case: If only one of the nodes is None, the trees are not identical
        if p is None or q is None:
            return False

        # Base case: If the values of the nodes do not match, the trees are not identical
        if p.val != q.val:
            return False

        # Recursively check the left and right subtrees
        return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
