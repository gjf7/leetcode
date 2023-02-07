class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        notebook = {}
        result = 0
        
        start = 0
        for end in range(len(s)):
            notebook[s[end]] = notebook.setdefault(s[end], 0) + 1
            while notebook[s[end]] > 1:
                notebook[s[start]] = notebook.setdefault(s[start], 0) - 1
                start += 1
            result = max(result, end - start + 1)
        return result
