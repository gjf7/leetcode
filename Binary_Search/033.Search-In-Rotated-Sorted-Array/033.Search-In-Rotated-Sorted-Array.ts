function search(nums: number[], target: number): number {
  // find the rotation point
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = (low + high) >> 1;
    if (nums[mid] < nums[0]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  const pivot = high;

  return target >= nums[0]
    ? binarySearch(0, pivot)
    : binarySearch(pivot, nums.length - 1);

  function binarySearch(low: number, high: number) {
    while (low <= high) {
      const mid = (low + high) >> 1;
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return -1;
  }
}
