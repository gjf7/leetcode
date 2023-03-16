# 与435几乎一样
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        result = 1
        
        points.sort(key=lambda point: point[1])

        start = points[0][0]
        end = points[0][1]
        for i in range(1, len(points)):
            if points[i][0] <= end: 
                start = points[i][0]
            else:
                result += 1
                start = points[i][0]
                end = points[i][1]
        return result
