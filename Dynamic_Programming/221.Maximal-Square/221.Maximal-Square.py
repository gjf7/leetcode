# dp[i][j]：以i, j 为顶点，能形成正方形的边长
# 递推式： dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1 (背)
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        dp = [[0] * (len(matrix[0]) + 1) for _ in range(len(matrix) + 1)]

        result = 0
        for i in range(1, len(dp)):
            for j in range(1, len(dp[0])):
                if matrix[i - 1][j - 1] == "1":
                    dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                    result = max(result, dp[i][j] * dp[i][j])
        
        return result
