# 部分竟可能多，只能区间结尾在能满足条件下最小
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        result = []
        positions = [None] * 26
        for (index, char) in enumerate(s):
            if positions[ord(char) - 97] == None:
                positions[ord(char) - 97] = [index, index]
            else:
                positions[ord(char) - 97][1] = index
        intervals = list(filter(lambda item:item != None, positions))

        intervals.sort(key=lambda interval:interval[0])
        
        start = intervals[0][0]
        end = intervals[0][1]
        for i in range(1, len(intervals)):
            if intervals[i][0] < end:
                end = max(end, intervals[i][1])
            else:
                result.append(end - start + 1)
                start = intervals[i][0]
                end = intervals[i][1]
        result.append(end - start + 1)
        return result
