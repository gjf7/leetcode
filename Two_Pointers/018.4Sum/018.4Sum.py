class Solution:
    def fourSum(self, nums:List[int], target: int) -> List[List[int]]:
        result = []
        nums.sort()
        for i in range(len(nums)):
            if i > 0 and nums[i - 1] == nums[i]:
                continue

            for j in range(len(nums) - 1, 0, -1):
                if j + 1 < len(nums) and nums[j + 1] == nums[j]:
                    continue

                left = i + 1
                right = j - 1
                
                while left < right:
                    sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if sum == target:
                        result.append([nums[i], nums[j], nums[left], nums[right]])
                        left += 1
                        right -= 1

                        while left < right and nums[left] == nums[left - 1]:
                            left += 1
                        while left < right and nums[right] == nums[right + 1]:
                            right -= 1
                    elif sum < target:
                        left += 1
                    else:
                        right -= 1
        return result
                        
