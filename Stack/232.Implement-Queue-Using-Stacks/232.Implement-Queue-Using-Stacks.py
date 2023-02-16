class MyQueue:

    def __init__(self):
        self.insertStack = []
        self.deleteStack = []


    def push(self, x: int) -> None:
        self.insertStack.append(x)

    def pop(self) -> int:
        self.moveIfdeleteStackEmpty()
        return self.deleteStack.pop()


    def peek(self) -> int:
        self.moveIfdeleteStackEmpty()
        return self.deleteStack[-1]


    def empty(self) -> bool:
        return len(self.insertStack) == 0 and len(self.deleteStack) == 0
    
    def moveIfdeleteStackEmpty(self) -> None:
        if len(self.deleteStack) == 0:
            while len(self.insertStack) > 0:
                self.deleteStack.append(self.insertStack.pop())
                



# Your MyQueue object will be instantiated and called as such:
# obj = MyQueue()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.peek()
# param_4 = obj.empty()
