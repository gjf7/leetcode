function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let p = dummy;
  let carry = 0;
  while (l1 || l2 || carry) {
    let currentDigital = carry;
    if (l1) {
      currentDigital += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      currentDigital += l2.val;
      l2 = l2.next;
    }
    p.next = new ListNode(currentDigital % 10);
    carry = Math.floor(currentDigital / 10);
    p = p.next;
  }
  return dummy.next;
}
