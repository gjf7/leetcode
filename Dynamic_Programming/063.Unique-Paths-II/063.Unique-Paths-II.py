class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m = len(obstacleGrid)
        n = len(obstacleGrid[0])

        if obstacleGrid[0][0] == 1 or obstacleGrid[m - 1][n - 1] == 1:
            return 0

        paths = [[0] * n for i in range(m)]
        for i in range(m):
            for j in range(n):
                if i == 0 and j == 0:
                    paths[i][j] = 1
                elif obstacleGrid[i][j] == 1:
                    paths[i][j] = 0
                elif i == 0:
                    paths[i][j] = paths[i][j - 1]
                elif j == 0:
                    paths[i][j] = paths[i - 1][j]
                else:
                    paths[i][j] = paths[i - 1][j] + paths[i][j - 1]
        return paths[m - 1][n - 1]
        
