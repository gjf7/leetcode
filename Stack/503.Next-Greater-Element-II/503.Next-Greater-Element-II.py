class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        result = [-1] * len(nums)

        stack = [0]
        for i in range(1, len(nums) * 2):
            i = i % len(nums)
            while len(stack) and nums[i] > nums[stack[-1]]:
                index = stack.pop()
                result[index] = nums[i]
            stack.append(i)
        return result
                
