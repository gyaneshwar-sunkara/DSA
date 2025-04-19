## Basics

A Tree is a hierarchical data structure consisting of nodes, with a single root node and zero or more child nodes.

Used in:

- File systems
- XML/HTML parsing
- AI/game development (decision trees)
- Databases (B-trees)

Key Terms:

- Root: The top node of the tree.
- Node: Each element in the tree.
- Edge: The connection between nodes.
- Parent: A node that has child nodes.
- Child: Nodes that descend from another node.
- Leaf: A node with no children.
- Depth: The number of edges from the root to a node.
- Height: The length of the longest path from a node to a leaf.

Types of Trees:

- Binary Tree - Each node has at most two children (left and right).
- Binary Search Tree (BST) - A sorted binary tree where:
  - Left subtree contains nodes less than the parent.
  - Right subtree contains nodes greater than the parent.
- Balanced Binary Tree - A tree where the height difference between left and right subtrees is at most 1 (e.g., AVL Tree, Red-Black Tree).
- Heap (Min/Max Heap) - A complete binary tree where the parent is always smaller (Min-Heap) or larger (Max-Heap) than its children.
- Trie (Prefix Tree) - Used for efficient word searches (e.g., autocomplete).
- N-ary Tree - Each node can have more than two children.

## Tree Traversal Algorithms

There are two main types of traversal:

### Depth-First Search (DFS)

- Preorder (Root → Left → Right)

```python
def preorder_traversal(node):
    if node:
        print(node.data, end=" ")
        preorder_traversal(node.left)
        preorder_traversal(node.right)

preorder_traversal(root) # 1 2 4 5 3 6 7
```

- Inorder (Left → Root → Right)

```python
def inorder_traversal(node):
    if node:
        inorder_traversal(node.left)
        print(node.data, end=" ")
        inorder_traversal(node.right)

inorder_traversal(root) # 4 2 5 1 6 3 7
```

- Postorder (Left → Right → Root)

```python
def postorder_traversal(node):
    if node:
        postorder_traversal(node.left)
        postorder_traversal(node.right)
        print(node.data, end=" ")

postorder_traversal(root) # 4 5 2 6 7 3 1
```

### Breadth-First Search (BFS)

- Also called Level Order Traversal (visits level by level).

```python
from collections import deque

def level_order_traversal(node):
    if not node:
        return
    queue = deque([node])  # Initialize the queue with the root node
    while queue:
        current = queue.popleft()
        print(current.data, end=" ")
        if current.left:
            queue.append(current.left)
        if current.right:
            queue.append(current.right)

level_order_traversal(root) # 1 2 3 4 5 6 7
```

## Binary Tree

- Full Binary Tree: Every node has either 0 or 2 children.
- Complete Binary Tree: All levels are completely filled except possibly the last, which is filled from left to right.
- Perfect Binary Tree: All levels are completely filled.
- Binary Search Tree (BST): A binary tree where:
  - Left child contains smaller values than the parent.
  - Right child contains greater values than the parent.