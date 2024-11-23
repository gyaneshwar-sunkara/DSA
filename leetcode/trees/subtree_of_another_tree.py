from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
        """
        Check if two trees are identical.
        Time Complexity: O(m), where m is the number of nodes in the subtree.
        Space Complexity: O(h), where h is the height of the subtree.
        """
        if not left and not right:  # Both are None
            return True
        if not left or not right:  # One is None, the other isn't
            return False
        if left.val != right.val:  # Values differ
            return False
        # Recursively check left and right subtrees
        return self.isSameTree(left.left, right.left) and self.isSameTree(left.right, right.right)

    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        """
        Determine if `subRoot` is a subtree of `root`.

        Time Complexity: O(n * m), where n is the number of nodes in `root` and m in `subRoot`.
        Space Complexity: O(h), where h is the height of the root tree (recursion depth).
        """
        if not root:  # If root is None, subRoot can't be a subtree
            return False
        # Check if the trees rooted at current nodes are identical
        if self.isSameTree(root, subRoot):
            return True
        # Otherwise, check the left and right subtrees
        return self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot)
