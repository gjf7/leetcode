function threeSumClosest(nums: number[], target: number): number {
  let ret = 0;
  let gapMin = Number.MAX_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sumOfThree = nums[i] + nums[left] + nums[right];
      const gap = Math.abs(target - sumOfThree);
      if (gap < gapMin) {
        gapMin = gap;
        ret = sumOfThree;
      }

      if (sumOfThree > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return ret;
}
