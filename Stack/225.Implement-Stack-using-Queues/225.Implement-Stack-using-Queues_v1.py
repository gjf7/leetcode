class MyStack:

    def __init__(self):
        self.queue1 = []
        self.queue2 = []


    def push(self, x: int) -> None:
        if len(self.queue1) == 0:
            self.queue2.append(x)
        else:
            self.queue1.append(x)


    def pop(self) -> int:
        emptyQueue = None
        notEmptyQueue = None
        if len(self.queue1) == 0:
            emptyQueue = self.queue1
            notEmptyQueue = self.queue2
        else:
            emptyQueue = self.queue2
            notEmptyQueue = self.queue1
        
        while len(notEmptyQueue) > 1:
            emptyQueue.append(notEmptyQueue.pop(0))
        return notEmptyQueue.pop(0)

    def top(self) -> int:
        result = self.pop()
        self.push(result)
        return result


    def empty(self) -> bool:
        return len(self.queue1) == 0 and len(self.queue2) == 0



# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()
