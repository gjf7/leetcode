function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }
    const reversed = reverseList(head.next)
    head.next.next = head
    head.next = null;
    return reversed
};
