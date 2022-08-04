class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        # find the rotation point
        while low < high:
            middle = (low + high) // 2
            if nums[middle] < nums[0]:
                high = middle
            else:
                low = middle + 1
        pivot = high
        if target >= nums[0]:
            return self.bs(nums, 0, pivot, target)
        else:
            return self.bs(nums, pivot, len(nums) - 1, target)

    def bs(self, nums, low, high, target):
        while low <= high:
            middle = (low + high) // 2
            if nums[middle] > target:
                high = middle - 1
            elif nums[middle] < target:
                low = middle + 1
            else:
                return middle
        return -1
