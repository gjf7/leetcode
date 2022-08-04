class Solution:
    def canJump(self, nums: List[int]) -> bool:
        k = 0
        for i in range(len(nums)):
            if i > k:
                return False
            k = max(k, nums[i] + i)
        return True
