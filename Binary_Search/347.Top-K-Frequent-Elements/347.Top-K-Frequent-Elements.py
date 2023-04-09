class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        notebook = dict(Counter(nums))
        # 找到第 K 个的元素的频率到底是多少
        left = 0
        right = len(nums)
        while left < right:
            middle = math.ceil((left + right) / 2)
            if self.freqGreaterOrEqualCount(middle, notebook) >= k:
                left = middle
            else:
                right = middle - 1

        result = []
        for num in notebook:
            if notebook[num] >= right:
                result.append(num)
        return result
                
    def freqGreaterOrEqualCount(self, times, notebook):
        count = 0
        for num in notebook:
            if notebook[num] >= times:
                count += 1
        return count
