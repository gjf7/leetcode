// 每次push都进行反转，这样就保证了最后一个元素在队列的最前面，pop 和 top 就是 O(1) 了。
class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): void {
    this.queue.push(x);
    let size = this.queue.length;
    while (size > 1) {
      this.queue.push(this.queue.shift());
      size -= 1;
    }
  }

  pop(): number {
    return this.queue.shift();
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
