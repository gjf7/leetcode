function search(nums: number[], target: number): number {
  let low = 0,
    high = nums.length - 1;
  if (target > nums[high]) {
    return -1;
  }
  while (low < high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] > target) {
      high = middle - 1;
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}
