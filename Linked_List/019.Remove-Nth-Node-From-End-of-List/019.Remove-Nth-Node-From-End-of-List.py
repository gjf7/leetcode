# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        fast = dummy
        slow = dummy
        
        while n > 0:
            fast = fast.next
            n -= 1

        while fast and fast.next:
            fast = fast.next
            slow = slow.next
        print(slow.val)
        slow.next = slow.next.next

        return dummy.next
