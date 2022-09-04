function swapPairs(head: ListNode | null): ListNode | null {
  let start = head;
  let end = head;
  for (let i = 0; i < 2; i++) {
    if (end === null) {
      return head;
    }
    end = end.next;
  }
  let newHead = swap(start, end);
  start.next = swapPairs(end);
  return newHead;
}

function swap(p: ListNode, head: ListNode | null) {
  let prev = null;
  let next = p;
  while (p !== head) {
    next = p.next;
    p.next = prev;
    prev = p;
    p = next;
  }
  return prev;
}
