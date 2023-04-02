# 直观解法
class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        result = []
        people.sort(key = lambda p: p[1])

        for p in people:
            # find the insert position
            insertIndex = 0
            greaterOrEqualCount = 0
            
            for (index, item) in enumerate(result):
                if item[0] >= p[0]:
                    greaterOrEqualCount += 1
                
                if greaterOrEqualCount == p[1]:
                    insertIndex = index + 1

            result.insert(insertIndex, p)
        
        return result
