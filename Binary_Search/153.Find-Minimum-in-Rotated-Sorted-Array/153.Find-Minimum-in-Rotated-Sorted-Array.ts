function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  if (nums[left] < nums[right]) {
    return nums[0];
  }
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < nums[0]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  return nums[right];
}
