class Solution:
    def simplifyPath(self, path: str) -> str:
        arr = path.split('/')
        stack = []
        for char in arr:
            if char == '' or char == '.':
                continue
            if char == '..':
                if len(stack) > 0:
                    stack.pop()
            else:
                stack.append(char)
        return '/' + '/'.join(stack)
                    
