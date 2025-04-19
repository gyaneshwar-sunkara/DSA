## Heap

A heap is a specialized binary tree-based data structure that satisfies the heap property:
* **Min-Heap:** The parent node is always smaller than or equal to its children.
* **Max-Heap:** The parent node is always greater than or equal to its children.

### Parent-Child Relationship

Parent index: `i`

Left child index: `2 * i + 1`

Right child index: `2 * i + 2`

Parent of a node at index i: `(i - 1) // 2`

