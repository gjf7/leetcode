class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        if target > nums[high] or target < nums[low]:
            return -1
        while low <= high:
            middle = (low + high) // 2
            if nums[middle] > target:
                high = middle - 1
            elif nums[middle] < target:
                low = middle + 1
            else:
                return middle
        return -1
