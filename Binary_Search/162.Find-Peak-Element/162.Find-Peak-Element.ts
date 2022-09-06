function findPeakElement(nums: number[]): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    // [0 1] middle 回落到0上，middle永远不会等于high、保证了middle + 1 永远是存在的
    const middle = low + Math.floor((high - low) / 2);
    if (nums[middle] > nums[middle + 1]) {
      high = middle; // 这里check一下会不会死循环、 0 1时 middle 为 0，high改变 不会死循环
    } else {
      low = middle + 1;
    }
  }
  return high;
}
