function searchRange(nums: number[], target: number): number[] {
  const result = [-1, -1];

  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] >= target) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }
  if (nums[right] === target) {
    result[0] = right;
    while (right + 1 < nums.length && nums[right + 1] === target) {
      right += 1;
    }
    result[1] = right;
  }
  return result;
}
