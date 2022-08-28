function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let a, b;
    a = b = head;
    for (let i = 0; i < k; i++) {
        if (b === null) return head;
        b = b.next;
    }
    const newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;  
};
function reverse(a: ListNode | null, b: ListNode | null): ListNode {
    let pre = null;
    let current = a;
    while (current !== b) {
        const next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    return pre;
}
