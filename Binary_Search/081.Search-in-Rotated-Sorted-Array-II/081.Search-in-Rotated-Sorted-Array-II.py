class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        left = 0
        right = len(nums) - 1

        while right > 0 and nums[right] == nums[0]:
            right -= 1

        while left <= right:
            middle = (left + right) // 2
            
            if nums[middle] == target:
                return True
            
            if (nums[middle] >= nums[0]) == (target >= nums[0]):
                if nums[middle] > target:
                    right = middle - 1
                else:
                    left = middle + 1
            elif nums[middle] >= nums[0]:
                left = middle + 1
            else:
                right = middle - 1
        return False
        
