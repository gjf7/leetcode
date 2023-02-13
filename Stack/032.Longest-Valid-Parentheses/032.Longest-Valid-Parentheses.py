class Solution:
    def longestValidParentheses(self, s: str) -> int:
        result = 0
        stack = []
        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            elif len(stack) > 0 and s[stack[-1]] == '(':
                stack.pop()
                result = max(result, i + 1 if len(stack) == 0 else i - stack[-1])
            else:
                stack.append(i)
        return result
