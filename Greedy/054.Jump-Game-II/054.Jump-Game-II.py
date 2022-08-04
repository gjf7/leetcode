class Solution:
    def jump(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return 0
        step = 0
        start = 0
        end = 0
        while start <= end:
            newEnd = end
            for i in range(start, end + 1):
                newEnd = max(newEnd, nums[i] + i)
                if newEnd >= len(nums) - 1:
                    return step + 1
            step += 1
            start = end + 1
            end = newEnd
        return -1
