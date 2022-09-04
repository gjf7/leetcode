function nextPermutation(nums: number[]): void {
  // 1. find the first decreasing number from the end
  let i = nums.length - 1;
  while (i - 1 >= 0 && nums[i] <= nums[i - 1]) {
    i--;
  }
  if (i === 0) {
    nums.reverse();
    return;
  }

  i -= 1;
  // 2. find the first number that is larger than nums[i] from the end
  let j = nums.length - 1;

  while (j > i && nums[j] <= nums[i]) {
    j--;
  }
  swap(i, j);
  // 3. sort the array from i + 1 to the end
  sort(i + 1, nums.length - 1);

  function swap(i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function sort(start: number, end: number): void {
    if (start >= end) {
      return;
    }
    const pivot = partition(start, end);
    sort(start, pivot - 1);
    sort(pivot + 1, end);
  }

  function partition(start: number, end: number): number {
    const pivot = start + Math.floor(Math.random() * (end - start + 1));
    swap(pivot, start);
    let i = start;
    let j = end + 1;
    while (true) {
      while (nums[++i] < nums[start]) {}

      while (nums[--j] > nums[start]) {}

      if (i >= j) {
        swap(start, j);
        break;
      }

      swap(i, j);
    }
    return j;
  }
}
