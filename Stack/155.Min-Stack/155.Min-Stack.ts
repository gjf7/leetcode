class MinStack {
    private stack: number[]
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(val);
            this.stack.push(val);
        } else {
            const currentMin = this.getMin();
            this.stack.push(val);
            if (val < currentMin) {
                this.stack.push(val);
            } else {
                this.stack.push(currentMin);
            }
        }
    }

    pop(): void {
        this.stack.pop();
        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 2];
    }

    getMin(): number {
        return this.stack[this.stack.length - 1];
    }
}
