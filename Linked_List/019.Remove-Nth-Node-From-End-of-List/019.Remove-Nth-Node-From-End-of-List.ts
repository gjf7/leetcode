function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0, head);
  let fast = head;
  let slow = head;
  let prev = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast !== null) {
    prev = slow;
    fast = fast.next;
    slow = slow.next;
  }

  prev.next = slow.next;

  return dummy.next;
}
