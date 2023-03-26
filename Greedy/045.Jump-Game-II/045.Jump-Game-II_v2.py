class Solution:
    def jump(self, nums: List[int]) -> int:
        result = 0
        currentMostFar = 0
        currentEnd = 0
            

        for (index, num) in enumerate(nums[:-1]):
            currentMostFar = max(currentMostFar, index + num)

            if index == currentEnd:
                result += 1
                currentEnd = currentMostFar
            
        
        return result
