from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        """
        Recursive Approach:
        Swap the left and right children of each node recursively. 
        The function traverses the entire tree, inverting the children of each node.

        Time Complexity: O(n) - Each node in the tree is visited once.
        Space Complexity: O(h) - The recursion stack depth is proportional to the height of the tree, which is O(log n) for a balanced tree and O(n) for a skewed tree.
        """
        if root is None:
            return root  # Base case: If the node is null, return null

        # Swap left and right subtrees by recursively calling invertTree
        root.right, root.left = self.invertTree(root.left), self.invertTree(root.right)

        return root  # Return the root after inverting