class Node:

    def __init__(self, key, value, prev = None, next = None):
        self.key = key
        self.value = value
        self.prev = prev
        self.next = next

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.currentSize = 0
        self.sentinel = Node(0,0)
        self.sentinel.prev = self.sentinel
        self.sentinel.next = self.sentinel
        self.notebook = dict()
        

    def get(self, key: int) -> int:
      notebook = self.notebook
      if key in notebook:
        node = notebook[key]
        self.deleteNode(node)
        self.addNodeToFirst(node)
        return node.value
      return -1

    def put(self, key: int, value: int) -> None:
      if key in self.notebook:
         node = self.notebook[key]
         node.value = value
         self.deleteNode(node)
         self.addNodeToFirst(node)
         return

      if self.currentSize == self.capacity:
        lastNode = self.sentinel.prev
        self.deleteNode(lastNode)
        del self.notebook[lastNode.key]
        self.currentSize -= 1

      node = Node(key, value)
      self.addNodeToFirst(node)
      self.notebook[key] = node
      self.currentSize += 1
      
    def addNodeToFirst(self, node: Node):
      next = self.sentinel.next
      node.prev = self.sentinel
      node.next = next
      next.prev = node
      self.sentinel.next = node

    def deleteNode(self, node: Node):
      prev = node.prev
      next = node.next
      prev.next = next
      next.prev = prev
      node.next = None
      node.prev = None


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)
