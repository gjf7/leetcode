class Solution:
    def climbStairs(self, n: int) -> int:
        a = 1
        b = 1
        for i in range(1, n):
            previousB = b
            b = a + b
            a = previousB
        return b
