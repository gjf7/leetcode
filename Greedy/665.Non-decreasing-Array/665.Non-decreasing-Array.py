class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        fallCount = 0
        
        for i in range(1, len(nums)):
            if nums[i - 1] > nums[i]:
                fallCount += 1
                if fallCount > 1:
                    return False

                if i == 1 or i == len(nums) - 1:
                    continue

                if nums[i - 1] > nums[i + 1] and nums[i - 2] > nums[i]:
                    return False
        
        return True
            
            
