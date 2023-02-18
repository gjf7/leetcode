class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        current = []
        
        def dfs(index, sum):
            if sum > target:
                return
            
            if sum == target:
                result.append(current[:])
                return

            for i in range(index, len(candidates)):
                if i == index or candidates[i] != candidates[i - 1]:
                    current.append(candidates[i])
                    dfs(i + 1, sum + candidates[i])
                    current.pop()
        dfs(0, 0)
        return result
