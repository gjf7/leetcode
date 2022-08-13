function findKthLargest(nums: number[], k: number): number {
  let low = Math.min(...nums);
  let high = Math.max(...nums);

  while (low < high) {
    //考虑low 为 0， high 为 1的情况， 可能会陷入死循环
    const middle = high - Math.floor((high - low) / 2);
    const n = greaterThanTarget(middle);
    if (n >= k) {
      low = middle;
    } else {
      high = middle - 1;
    }
  }
  return low;

  function greaterThanTarget(n: number) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= n) {
        counter += 1;
      }
    }
    return counter;
  }
}
