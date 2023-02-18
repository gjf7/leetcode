class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        candidates.sort()
        result = []
        current = []
        def dfs(index, sum):
            if sum > target:
                return
            
            if sum == target:
                result.append(current[:])

            for i in range(index, len(candidates)):
                current.append(candidates[i])
                dfs(i, sum + candidates[i])
                current.pop()

        dfs(0, 0)
        return result
