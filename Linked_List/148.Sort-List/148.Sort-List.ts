function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let pre = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    pre = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (pre) {
    pre.next = null;
  }
  const left = sortList(head);
  const right = sortList(slow);
  return merge(left, right);
}

function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let p = dummy;
  while (left && right) {
    if (left.val < right.val) {
      p.next = left;
      left = left.next;
    } else {
      p.next = right;
      right = right.next;
    }
    p = p.next;
  }
  if (left) {
    p.next = left;
  }

  if (right) {
    p.next = right;
  }
  return dummy.next;
}
