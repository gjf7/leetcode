class MinStack:

    def __init__(self):
        self.stack = []

    def push(self, val: int) -> None:
        currentMin = val
        if len(self.stack) != 0 and self.stack[-1] < val:
            currentMin = self.stack[-1]
        self.stack.append(val)
        self.stack.append(currentMin)

    def pop(self) -> None:
        self.stack.pop()
        self.stack.pop()

    def top(self) -> int:
        return self.stack[-2]

    def getMin(self) -> int:
        return self.stack[-1]



# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
