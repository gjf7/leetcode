function maxArea(height: number[]): number {
  let max = 0;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}
