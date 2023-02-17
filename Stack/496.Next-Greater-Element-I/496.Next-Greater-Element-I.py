class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = [-1] * len(nums1)

        notebook = {}
        for index, value in enumerate(nums1):
            notebook[value] = index

        stack = [nums2[0]]
        for num in nums2[1:]:
            while len(stack) and num > stack[-1]:
                lastNumber = stack.pop()
                if lastNumber in notebook:
                    result[notebook[lastNumber]] = num
            stack.append(num)
        return result
