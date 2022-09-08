function isPalindrome(head: ListNode | null): boolean {
  let listLen = 0;
  let p = head;
  while (p !== null) {
    p = p.next;
    listLen += 1;
  }
  let step = listLen >> 1;
  const isOddLen = listLen % 2 === 1;
  p = head;

  while (step > 0) {
    p = p.next;
    step -= 1;
  }

  // reverse Linked list
  let pre = null;
  let current = head;
  while (current !== p) {
    const next = current.next;
    current.next = pre;
    pre = current;
    current = next;
  }

  if (isOddLen) {
    p = p.next;
  }

  while (pre && p) {
    if (pre.val !== p.val) {
      return false;
    }

    pre = pre.next;
    p = p.next;
  }
  return true;
}
