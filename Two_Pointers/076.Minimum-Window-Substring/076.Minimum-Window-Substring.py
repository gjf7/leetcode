class Solution:
    def minWindow(self, s: str, t: str) -> str:
        result = ""
        if len(t) > len(s):
            return result

        minWindowSize = len(s) + 1
        notebook = dict(Counter(t))
        print(notebook)
        includedCharCount = 0
        left = 0
        minLeft = 0
        for (right, char) in enumerate(s):
            if char not in notebook:
                continue
            
            notebook[char] -= 1

            if notebook[char] >= 0:
                includedCharCount += 1

            while includedCharCount == len(t):
                currentWindowSize = right - left + 1
                if currentWindowSize < minWindowSize:
                    minLeft = left
                    minWindowSize = currentWindowSize
                
                if s[left] in notebook:
                    notebook[s[left]] += 1
                    if notebook[s[left]] == 1:
                        includedCharCount -= 1
                left += 1
            
        return "" if minWindowSize > len(s) else s[minLeft: minLeft + minWindowSize]
