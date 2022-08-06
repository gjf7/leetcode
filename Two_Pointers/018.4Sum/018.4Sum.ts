function fourSum(nums: number[], target: number): number[][] {
  let ans: number[][] = [];
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    // 保证不与前一个数相等 前一个数我们已经处理过了 且数组是排过序的 这样就保证了我们处理的都是不相等的数
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    for (let j = n; j > i; j--) {
      let left: number = i + 1;
      let right: number = j - 1;
      // 保证不与后一个数相等，后一个数我们已经处理过了
      if (j < n && nums[i] + nums[j] === nums[i] + nums[j + 1]) {
        continue;
      }
      while (left < right) {
        if (nums[left] + nums[right] + nums[i] + nums[j] === target) {
          ans.push([nums[left], nums[right], nums[i], nums[j]]);
          // 保证不与前一个数相等，前一个数我们已经处理过了
          while (left < j && nums[left] === nums[left + 1]) {
            left++;
          }
          // 保证不与后一个数相等，后一个数我们已经处理过了
          while (right > i && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        } else if (nums[left] + nums[right] + nums[i] + nums[j] > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return ans;
}
