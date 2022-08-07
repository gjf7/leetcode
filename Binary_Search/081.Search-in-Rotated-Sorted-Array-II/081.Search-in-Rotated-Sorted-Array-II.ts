function search(nums: number[], target: number): boolean {
  // array is already sorted
  if (nums[nums.length - 1] > nums[0]) {
    return binarySearch(nums, 0, nums.length - 1, target);
  }

  // find the rotate point
  let high = nums.length - 1;
  let low = 0;
  // 一定要从第一个不与num[0]元素相同的项开始找
  while (low + 1 <= high && nums[low + 1] === nums[0]) {
    low++;
  }

  while (low < high) {
    const middle = (low + high) >> 1;
    if (nums[middle] <= nums[0]) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  return (
    binarySearch(nums, 0, high, target) ||
    binarySearch(nums, high, nums.length - 1, target)
  );
}

function binarySearch(nums: number[], low: number, high: number, target) {
  while (low <= high) {
    const middle = (low + high) >> 1;
    if (nums[middle] === target) {
      return true;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return false;
}
