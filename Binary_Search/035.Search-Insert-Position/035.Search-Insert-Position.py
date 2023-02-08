class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if nums[len(nums) - 1] < target:
            return len(nums)

        left = 0
        right = len(nums) - 1
        while left < right:
            middle = (left + right) // 2
            if nums[middle] >= target:
                right = middle
            else:
                left = middle + 1
        return right 
