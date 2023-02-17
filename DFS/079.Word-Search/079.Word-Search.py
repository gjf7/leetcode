class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m = len(board)
        n = len(board[0])

        seen = [[0] * n for i in range(m)]

        def dfs(row, column, index):
            if row < 0 or row >= m or column < 0 or column >= n:
                return False

            if seen[row][column] or board[row][column] != word[index]:
                return False

            if index == len(word) - 1:
                return True

            seen[row][column] = 1

            directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
            for [x, y] in directions:
                if dfs(row + x, column + y, index + 1):
                    return True

            seen[row][column] = 0
            return False

        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):
                    return True
        return False
            
