## Basics


A **graph** is a collection of **nodes (vertices)** and **edges (connections between nodes)**. It is used to model relationships between different entities.

#### **Example Graph:**
```
   A --- B
   |     |
   C --- D
```
Here, **A, B, C, and D** are **nodes**, and the lines between them are **edges**.

---

### **Types of Graphs**
#### **Based on Edges:**
- **Undirected Graph:** Edges have no direction (e.g., social networks, road maps).
- **Directed Graph (Digraph):** Edges have direction (e.g., one-way roads, websites linking to each other).

#### **Based on Weights:**
- **Unweighted Graph:** All edges have the same cost.
- **Weighted Graph:** Each edge has a cost (e.g., road distances, network latencies).

#### **Other Variations:**
- **Cyclic Graph:** Contains cycles (loops).
- **Acyclic Graph:** No cycles (e.g., trees, dependency graphs).
- **Connected Graph:** Every node can reach every other node.
- **Disconnected Graph:** Some nodes are unreachable from others.

---

### **Graph Representation**
Graphs can be represented in different ways in code:

#### **Adjacency List (Most Efficient)**
```python
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D'],
    'C': ['A', 'D'],
    'D': ['B', 'C']
}
```
- Best for **sparse** graphs (fewer edges).
- Uses **less memory**.

#### **Adjacency Matrix**
```python
graph_matrix = [
    [0, 1, 1, 0],  # A -> B, C
    [1, 0, 0, 1],  # B -> A, D
    [1, 0, 0, 1],  # C -> A, D
    [0, 1, 1, 0]   # D -> B, C
]
```
- Best for **dense** graphs (many edges).
- Uses **more memory**.

---

### **Graph Traversal Algorithms**
- **Breadth-First Search (BFS)** – Explores level by level, uses a **queue**.
- **Depth-First Search (DFS)** – Explores deep paths first, uses a **stack or recursion**.

---

### **Pathfinding Algorithms**
- **Dijkstra’s Algorithm** – Finds the shortest path in a weighted graph.
- **Bellman-Ford Algorithm** – Handles negative weights.
- **A* Algorithm** – Uses heuristics to optimize pathfinding.

---

### **Common Graph Problems**
- **Shortest path (e.g., Google Maps)**
- **Cycle detection**
- **Connected components**
- **Topological sorting (e.g., task scheduling)**

Would you like help with any specific graph topic? 🚀


## Fundamental Tree Traversal Algorithms

Breadth-First Search (BFS) and Depth-First Search (DFS) are two fundamental graph traversal algorithms with key differences:

| Feature         | Breadth-First Search (BFS) | Depth-First Search (DFS) |
|---------------|-------------------------|-------------------------|
| **Approach**  | Explores all neighbors of a node before going deeper | Explores as deep as possible along one branch before backtracking |
| **Data Structure** | Uses a **Queue (FIFO)** | Uses a **Stack (LIFO)** (or recursion) |
| **Traversal Order** | Level by level | Depth-wise, following one branch before backtracking |
| **Optimality** | Guarantees the shortest path in an **unweighted** graph | Does not guarantee the shortest path |
| **Memory Usage** | Requires more memory (stores all nodes at the current level) | Requires less memory (only stores the path being explored) |
| **Best for** | Finding the shortest path in an unweighted graph, solving problems like shortest route or network broadcasting | Solving problems like maze generation, topological sorting, and detecting cycles |

### Example Use Cases:
- **BFS:** Shortest path in an unweighted graph (e.g., social network connections, GPS navigation)
- **DFS:** cycle detection in a graph, Solving mazes, topological sorting 


### **Breadth-First Search (BFS)**
```python
from collections import deque

def bfs(graph, start):
    visited = set()  # To track visited nodes
    queue = deque([start])  # FIFO queue
    result = []

    while queue:
        node = queue.popleft()  # Dequeue a node
        if node not in visited:
            visited.add(node)
            result.append(node)
            queue.extend(graph[node])  # Enqueue all unvisited neighbors

    return result

# Example Graph (Adjacency List)
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F', 'G'],
    'D': ['B'],
    'E': ['B', 'H'],
    'F': ['C'],
    'G': ['C'],
    'H': ['E']
}

print("BFS:", bfs(graph, 'A'))
```
**Output:**
```
BFS: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
```
---

### **Depth-First Search (DFS)**
#### **Using Recursion**
```python
def dfs_recursive(graph, node, visited=None, result=None):
    if visited is None:
        visited = set()
    if result is None:
        result = []

    if node not in visited:
        visited.add(node)
        result.append(node)
        for neighbor in graph[node]:
            dfs_recursive(graph, neighbor, visited, result)

    return result

print("DFS (Recursive):", dfs_recursive(graph, 'A'))
```

#### **Using a Stack (Iterative)**
```python
def dfs_iterative(graph, start):
    visited = set()
    stack = [start]  # LIFO stack
    result = []

    while stack:
        node = stack.pop()  # Pop a node
        if node not in visited:
            visited.add(node)
            result.append(node)
            stack.extend(reversed(graph[node]))  # Push all unvisited neighbors

    return result

print("DFS (Iterative):", dfs_iterative(graph, 'A'))
```

**Output:**
```
DFS (Recursive): ['A', 'B', 'D', 'E', 'H', 'C', 'F', 'G']
DFS (Iterative): ['A', 'B', 'D', 'E', 'H', 'C', 'F', 'G']
```

Would you like me to explain any part of the implementation? 🚀