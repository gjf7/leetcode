class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False
        
        left = 0
        mapForS1 = dict()
        mapForWindow = dict()

        for s in s1:
            mapForS1[s] = mapForS1.get(s, 0) + 1
        
        for right in range(len(s2)):
            mapForWindow[s2[right]] = mapForWindow.get(s2[right], 0) + 1
            
            while mapForWindow[s2[right]] > mapForS1.get(s2[right], 0):
                mapForWindow[s2[left]] = mapForWindow[s2[left]] - 1
                left += 1
            
            if right - left + 1 == len(s1):
                return True
        
        return False
