function trap(height: number[]): number {
  let ret = 0;
  const Len = height.length;
  const leftMost: number[] = new Array(height.length).fill(0);
  const rightMost: number[] = new Array(height.length).fill(0);
  for (let i = 1; i < Len; i++) {
    leftMost[i] = Math.max(leftMost[i - 1], height[i - 1]);
  }

  for (let i = Len - 2; i >= 0; i--) {
    rightMost[i] = Math.max(rightMost[i + 1], height[i + 1]);
  }

  for (let i = 0; i < Len; i++) {
    const h = Math.min(leftMost[i], rightMost[i]) - height[i];
    ret += Math.max(0, h * 1);
  }

  return ret;
}
