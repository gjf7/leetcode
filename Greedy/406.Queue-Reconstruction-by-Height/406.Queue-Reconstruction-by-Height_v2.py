class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        result = []
        people.sort(key = lambda p: (-p[0], p[1]))

        for p in people:
            result.insert(p[1], p)
        
        return result
