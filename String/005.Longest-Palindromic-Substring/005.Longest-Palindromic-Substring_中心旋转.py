class Solution:
    def longestPalindrome(self, s: str) -> str:
        longest = ""

        def helper(index, isGap):
            nonlocal longest
            start = index
            end = index
            if isGap:
                start = index - 1

            while start >= 0 and end < len(s) and s[start] == s[end]:
                start -= 1
                end += 1
            if end - start - 1 > len(longest):
                longest = s[start + 1:end]

        for i in range(len(s)):
            helper(i, False)
            if i + 1 < len(s):
                helper(i + 1, True)
        
        return longest
