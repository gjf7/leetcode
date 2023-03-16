# 分配策略： 给孩子最小的刚好满足要求的饼干为最优解
class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        result = 0
        g.sort()
        s.sort()

        i = len(g) - 1
        j = len(s) - 1
        while i >= 0 and j >= 0:
            if s[j] >= g[i]:
                result += 1
                i -= 1
                j -= 1
            elif s[j] < g[i]:
                i -= 1
            
        return result
