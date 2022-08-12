function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }
  return pre;
}
