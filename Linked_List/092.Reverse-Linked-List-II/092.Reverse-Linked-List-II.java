class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {
        ListNode dummy = new ListNode(0, head);
        ListNode leftPointer = dummy;
        ListNode rightPointer = dummy;
        int distance = right - left;
        
        while (distance > 0) {
            rightPointer = rightPointer.next;
            distance--;
        }

        ListNode prePointer = dummy;
        while (left > 0) {
            prePointer = leftPointer;
            leftPointer = leftPointer.next;
            rightPointer = rightPointer.next;
            left--;
        }
        
        ListNode postPointer = rightPointer.next;

        ListNode pre = null;
        ListNode current = leftPointer;
        while (current != postPointer) {
            ListNode next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        prePointer.next = pre;
        leftPointer.next = postPointer;

        return dummy.next;
    }
}
