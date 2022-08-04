class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        n = len(s)
        need = [0] * 26
        ret = []
        for char in p:
            need[ord(char) - ord("a")] += 1
        
        start = 0
        for end in range(n):
            index = ord(s[end]) - ord("a")
            need[index] -= 1
            while need[index] < 0:
                need[ord(s[start]) - ord("a")] += 1
                start += 1
            if end - start + 1 == len(p):
                ret.append(start)
        return ret
