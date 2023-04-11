class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        n = len(isConnected)
        visited = [False] * len(isConnected)

        def dfs(i: int):
            visited[i] = True
            for j in range(n):
                if isConnected[i][j] == 1 and not visited[j]:
                    dfs(j)

        result = 0
        for i in range(n):
            if not visited[i]:
                result += 1
                dfs(i)
        return result
