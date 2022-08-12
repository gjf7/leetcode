function hasCycle(head: ListNode | null): boolean {
    let fast = head;
    let slow = head;

    while (fast && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};
