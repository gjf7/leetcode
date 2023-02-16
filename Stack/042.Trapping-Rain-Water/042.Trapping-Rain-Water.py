class Solution:
    def trap(self, height: List[int]) -> int:
        result = 0
        leftMost = [0] * len(height)
        rightMost = [0] * len(height)
        
        for i in range(1, len(height)):
            leftMost[i] = max(leftMost[i - 1], height[i - 1])

        for i in range(len(height) - 2, -1, -1):
            rightMost[i] = max(rightMost[i + 1], height[i + 1])

        for i in range(len(height)):
            result += max(min(leftMost[i], rightMost[i]) - height[i] ,0)

        return result
            
