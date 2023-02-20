# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head

        dummy = ListNode(0, head)
        current = dummy

        while current and current.next and current.next.next:
            node1 = current.next
            node2 = current.next.next
            postP = current.next.next.next
            node1.next = postP
            node2.next = node1
            current.next = node2

            current = current.next.next
            
            
        
        return dummy.next
