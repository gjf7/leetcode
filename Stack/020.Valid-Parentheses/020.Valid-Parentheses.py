class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for char in s:
            match char:
                case '(':
                    stack.append(')')
                case '{':
                    stack.append('}')
                case '[':
                    stack.append(']')
                case _:
                    if len(stack) == 0 or stack[-1] != char:
                        return False
                    stack.pop()
        
        if len(stack):
            return False

        return True
                    
