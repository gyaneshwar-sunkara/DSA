## Tree Traversals

A Tree Data Structure can be traversed in following ways:

* ### Depth First Search or DFS

    * Inorder Traversal
    * Preorder Traversal
    * Postorder Traversal

* ### Level Order Traversal or Breadth First Search or BFS

* ### Boundary Traversal
* ### Diagonal Traversal

#### Inorder Traversal

* Traverse the left subtree, i.e., call Inorder(left->subtree)
* Visit the root.
* Traverse the right subtree, i.e., call Inorder(right->subtree)

Uses:
* In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order.

#### Preorder Traversal

* Visit the root.
* Traverse the left subtree, i.e., call Preorder(left->subtree)
* Traverse the right subtree, i.e., call Preorder(right->subtree) 

Uses:
* Preorder traversal is used to create a copy of the tree. 
* Preorder traversal is also used to get prefix expressions on an expression tree.

#### Postorder Traversal

* Traverse the left subtree, i.e., call Postorder(left->subtree)
* Traverse the right subtree, i.e., call Postorder(right->subtree)
* Visit the root

Uses:
* Postorder traversal is used to delete the tree.
* Postorder traversal is also useful to get the postfix expression of an expression tree.

#### Level Order Traversal

For each node, first, the node is visited and then it’s child nodes are put in a FIFO queue. Then again the first node is popped out and then it’s child nodes are put in a FIFO queue and repeat until queue becomes empty.

#### Boundary Traversal

#### Diagonal Traversal