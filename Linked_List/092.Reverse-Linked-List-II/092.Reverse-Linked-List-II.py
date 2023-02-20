# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        leftPointer = dummy
        leftStep = left - 1
        while leftStep > 0:
            leftPointer = leftPointer.next
            leftStep -= 1
        
        rightPointer = leftPointer
        targerLen = right - left + 1
        while targerLen > 0:
            rightPointer = rightPointer.next
            targerLen -= 1

        prev = leftPointer
        current = leftPointer.next
        rightNode = rightPointer.next
        while current and current != rightNode:
            next = current.next
            current.next = prev
            prev = current
            current = next
        
        leftPointer.next.next = rightNode
        leftPointer.next = prev


        return dummy.next
        
