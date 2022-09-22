class MyStack {
  private queue1: number[];
  private queue2: number[];
  private isInsertQ1: boolean;
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
    this.isInsertQ1 = true;
  }

  push(x: number): void {
    if (this.isInsertQ1) {
      this.queue1.push(x);
    } else {
      this.queue2.push(x);
    }
  }

  pop(): number {
    this.move();
    if (this.isInsertQ1) {
      this.isInsertQ1 = false;
      return this.queue1.shift();
    } else {
      this.isInsertQ1 = true;
      return this.queue2.shift();
    }
  }

  top(): number {
    this.move();
    if (this.isInsertQ1) {
      return this.queue1[0];
    } else {
      return this.queue2[0];
    }
  }

  empty(): boolean {
    return this.queue1.length === 0 && this.queue2.length === 0;
  }

  move(): void {
    if (this.isInsertQ1) {
      while (this.queue1.length > 1) {
        this.queue2.push(this.queue1.shift());
      }
    } else {
      while (this.queue2.length > 1) {
        this.queue1.push(this.queue2.shift());
      }
    }
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
