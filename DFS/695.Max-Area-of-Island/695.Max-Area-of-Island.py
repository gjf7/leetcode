class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        m = len(grid[0])
        n = len(grid)
        def dfs(i: int, j: int) -> int:
            if i < 0 or i >= n or j < 0 or j >= m:
                return 0
            
            if grid[i][j] == 0 or grid[i][j] == 2:
                return 0
            
            grid[i][j] = 2

            sum = 1
            direction = [[-1, 0], [1, 0], [0, 1], [0, -1]]
            for [x, y] in direction:
                sum += dfs(i + x, j + y)
            return sum
        
        result = 0
        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    result = max(result, dfs(i, j))
        
        return result
