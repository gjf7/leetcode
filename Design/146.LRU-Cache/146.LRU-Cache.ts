class LinkedListNode {
  public val: number;
  public prev: LinkedListNode | null;
  public next: LinkedListNode | null;
  public key: number;
  constructor(
    key: number,
    val: number,
    prev?: LinkedListNode,
    next?: LinkedListNode
  ) {
    this.val = val;
    this.key = key;
    this.prev = prev === undefined ? null : prev;
    this.next = next === undefined ? null : next;
  }
}
class LRUCache {
  private readonly sentinel: LinkedListNode;
  private capacity: number;
  private nodeMap: Map<number, LinkedListNode>;
  public constructor(capacity: number) {
    this.sentinel = new LinkedListNode(0, 0);
    this.sentinel.prev = this.sentinel;
    this.sentinel.next = this.sentinel;
    this.capacity = capacity;
    this.nodeMap = new Map();
  }

  get(key: number): number {
    const node = this.nodeMap.get(key);

    if (node === undefined) {
      return -1;
    }

    // hoisting to last of the linkedlist
    if (this.sentinel.prev !== node) {
      this.remove(node);
      this.addLast(node.key, node.val);
    }

    return node.val;
  }

  put(key: number, value: number): void {
    const node = this.nodeMap.get(key);

    if (node) {
      this.remove(node);
      this.addLast(key, value);
      return;
    }

    if (this.nodeMap.size === this.capacity) {
      this.remove(this.sentinel.next);
    }
    this.addLast(key, value);
  }

  private remove(node: LinkedListNode): void {
    if (node === this.sentinel.next) {
      this.sentinel.next = this.sentinel.next.next;
      this.sentinel.next.prev = this.sentinel;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    this.nodeMap.delete(node.key);
  }

  private addLast(key: number, val: number): void {
    const node = new LinkedListNode(
      key,
      val,
      this.sentinel.prev,
      this.sentinel
    );
    this.sentinel.prev.next = node;
    this.sentinel.prev = node;
    this.nodeMap.set(key, node);
  }
}
