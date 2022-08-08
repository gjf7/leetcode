class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        def dfs(index, sum):
            if index == len(nums):
                return sum == target
            elif (index, sum) in memo:
                return memo[(index, sum)]
            memo[(index, sum)] = dfs(index + 1, sum + nums[index]) + dfs(index + 1, sum - nums[index])
            return memo[(index, sum)]
        memo = {}
        return dfs(0, 0)
