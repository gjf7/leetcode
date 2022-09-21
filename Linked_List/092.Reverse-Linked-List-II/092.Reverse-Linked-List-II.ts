function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummy = new ListNode(0, head);
  let distance = right - left;
  // prev node at left position
  let prePointer = dummy;
  let leftPointer = head;
  // find node at left position
  while (left > 1) {
    prePointer = leftPointer;
    leftPointer = leftPointer.next;
    left -= 1;
  }
  // find node at right positon
  let rightP = leftPointer;
  while (distance > 0) {
    rightP = rightP.next;
    distance -= 1;
  }
  // post node at right position
  const postPointer = rightP.next;

  // do reverse
  let current = leftPointer;
  let prev = null;
  while (current !== postPointer) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // handle head and tail pointer
  prePointer.next = rightP;
  leftPointer.next = postPointer;

  return dummy.next;
}
