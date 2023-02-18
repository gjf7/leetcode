class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        result = []
        current = []
        used = [False] * len(nums)

        def dfs():
            if len(current) == len(nums):
                result.append(current[:])
                return
            
            chosen = set()

            for i in range(len(nums)):
                if nums[i] not in chosen and not used[i]:
                    chosen.add(nums[i])

                    used[i] = True
                    current.append(nums[i])
                    dfs()
                    current.pop()
                    used[i] = False
        
        dfs()
        return result
            
