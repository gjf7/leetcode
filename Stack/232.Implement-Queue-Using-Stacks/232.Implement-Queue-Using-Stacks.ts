class MyQueue {
  private insertStack: number[];
  private deleteStack: number[];
  constructor() {
    this.insertStack = [];
    this.deleteStack = [];
  }

  push(x: number): void {
    this.insertStack.push(x);
  }

  pop(): number {
    if (this.deleteStack.length > 0) {
      return this.deleteStack.pop();
    } else {
      this.move();
      return this.deleteStack.pop();
    }
  }

  private move() {
    while (this.insertStack.length) {
      this.deleteStack.push(this.insertStack.pop());
    }
  }

  peek(): number {
    if (this.deleteStack.length === 0) {
      this.move();
    }
    return this.deleteStack[this.deleteStack.length - 1];
  }

  empty(): boolean {
    return this.insertStack.length === 0 && this.deleteStack.length === 0;
  }
}
