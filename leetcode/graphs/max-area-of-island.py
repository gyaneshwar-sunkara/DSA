from collections import deque
from typing import List

class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        """
        Approach:
        - Treat the grid as a map where each '1' is land.
        - Use BFS to explore and mark all connected land cells as visited while keeping track of the area.
        - Update the maximum area encountered and return it.

        Time Complexity: O(m * n), where m is the number of rows and n is the number of columns.
        Space Complexity: O(m * n) for the visited set in the worst case.
        """
        if not grid:
            return 0

        rows, cols = len(grid), len(grid[0])
        visited = set()
        max_area = 0

        def bfs(r, c):
            """Performs BFS to explore the island and calculates its area."""
            queue = deque([(r, c)])
            visited.add((r, c))
            area = 1
            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]

            while queue:
                row, col = queue.popleft()
                for dr, dc in directions:
                    nr, nc = row + dr, col + dc
                    if (
                        0 <= nr < rows and 0 <= nc < cols and
                        grid[nr][nc] == 1 and
                        (nr, nc) not in visited
                    ):
                        queue.append((nr, nc))
                        visited.add((nr, nc))
                        area += 1

            return area

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == 1 and (r, c) not in visited:
                    max_area = max(max_area, bfs(r, c))

        return max_area
