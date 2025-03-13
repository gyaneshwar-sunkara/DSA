from collections import deque
from typing import List

class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        """
        Use BFS or DFS to explore and mark all connected land cells as visited. Count the number of separate explorations to get the total islands.
        
        Time Complexity: O(m * n), where m is the number of rows and n is the number of columns.
        Space Complexity: O(m * n) in the worst case due to the visited set and queue.
        """

        # Edge case: if the grid is empty, return 0
        if not grid:
            return 0

        rows, cols = len(grid), len(grid[0])
        visited = set()  # To keep track of visited land cells
        island_count = 0  # Counter for islands

        def bfs(r, c):
            """Performs BFS to explore all connected land ('1') cells."""
            q = deque([(r, c)])
            visited.add((r, c))

            while q:
                row, col = q.popleft()

                # Directions for moving up, down, left, and right
                directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

                for dr, dc in directions:
                    nr, nc = row + dr, col + dc

                    # Continue if out of bounds, water ('0'), or already visited
                    if (
                        0 <= nr < rows and 0 <= nc < cols and
                        grid[nr][nc] == "1" and
                        (nr, nc) not in visited
                    ):
                        q.append((nr, nc))
                        visited.add((nr, nc))

        # Iterate through the grid and start BFS on unvisited land cells
        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1" and (r, c) not in visited:
                    bfs(r, c)  # Explore the island
                    island_count += 1  # Increment island count

        return island_count