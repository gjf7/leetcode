class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        prefix = {}
        result = 0

        sum = 0
        for num in nums:
            prefix[sum] =  prefix.setdefault(sum, 0) + 1
            sum += num
            result += prefix.get(sum - goal, 0)

        return result
            
