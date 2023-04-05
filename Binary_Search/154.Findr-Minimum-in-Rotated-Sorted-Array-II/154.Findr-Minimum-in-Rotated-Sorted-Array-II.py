class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0
        right = len(nums) - 1

        while right > 0 and nums[right] == nums[0]:
            right -= 1
        
        if nums[right] > nums[left]:
            return nums[left]

        while left < right:
            middle = (left + right) // 2
            if nums[middle] < nums[0]:
                right = middle
            else:
                left = middle + 1
        
        return nums[right]
