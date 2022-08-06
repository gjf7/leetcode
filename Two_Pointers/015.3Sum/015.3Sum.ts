function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    const sum = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] === sum) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (nums[left] + nums[right] > sum) {
        right -= 1;
      } else {
        left += 1;
      }
    }
    while (i + 1 < n && nums[i + 1] === nums[i]) {
      i++;
    }
  }
  return ans;
}
