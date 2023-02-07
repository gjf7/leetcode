class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        result = float('inf')
        
        start =  0
        windowSum = 0
        for end in range(len(nums)):

            windowSum += nums[end]

            while windowSum >= target:
                length = end - start + 1
                result = min(result, length)
                windowSum -= nums[start]
                start += 1
        
        return result if result != float('inf') else 0
