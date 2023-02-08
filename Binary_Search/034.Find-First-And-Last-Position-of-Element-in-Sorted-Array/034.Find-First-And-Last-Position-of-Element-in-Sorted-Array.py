class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) == 0:
            return [-1, -1]

        left = 0
        right = len(nums) - 1
        while left < right:
            middle = (left + right) // 2
            if nums[middle] >= target:
                right = middle
            else:
                left = middle + 1
        
        startIndex = right if nums[right] == target else -1
        
        left = 0
        right = len(nums) - 1
        while left < right:
            middle = math.ceil((left + right) / 2)
            if nums[middle] <= target:
                left = middle
            else:
                right = middle - 1
        
        endIndex = left if nums[left] == target else -1
        return [startIndex, endIndex]
