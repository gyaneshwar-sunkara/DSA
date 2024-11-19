class Tree:
    """A simple Tree Node class."""

    def __init__(self, data):
        self.data = data  # Value of the node
        self.children = []  # List to store child nodes

    def add_child(self, child_node):
        """Add a child node to the current node."""
        self.children.append(child_node)
        