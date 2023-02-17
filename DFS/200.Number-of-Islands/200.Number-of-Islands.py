class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        result = 0
        m = len(grid)
        n = len(grid[0])
        
        def dfs(row, column):
            if row < 0 or row >= m  or column < 0 or column >= n:
                return 

            if grid[row][column] == '0':
                return
            
            grid[row][column] = '0'
            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for [x, y] in directions:
                dfs(row + x, column + y)

        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    result += 1
                    dfs(i, j)
        
        return result

                    
