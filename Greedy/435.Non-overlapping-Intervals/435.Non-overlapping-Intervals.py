# 贪心区间问题：区间尽可能多，区间结尾尽可能小

class Solution:
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        result = 0
        intervals.sort(key=lambda interval:interval[1])

        start = intervals[0][0]
        end = intervals[0][1]
        for i in range(1, len(intervals)):
            if intervals[i][0] < end:
                result += 1
            else:
                start = intervals[i][0]
                end = intervals[i][1]

        return result
            
