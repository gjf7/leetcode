class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        current = []
        def dfs(index, goalLen):
            if len(current) == goalLen:
                result.append(current[:])
                return
            
            for i in range(index, len(nums)):
                current.append(nums[i])
                dfs(i + 1, goalLen)
                current.pop()
            
        for i in range(len(nums) + 1):
            dfs(0, i)
        
        return result
            
