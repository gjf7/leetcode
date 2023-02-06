class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0;
        right = len(height) - 1;
        
        result = 0;
        while left < right:
            currentHeight = min(height[left], height[right]);
            currentWidth = right - left;
            result = max(result, currentHeight * currentWidth);
            if height[left] < height[right]:
                left += 1;
            else:
                right -= 1;
        return result;
