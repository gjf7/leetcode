function rob(nums: number[]): number {
  let n = nums.length;
  if (n === 1) {
    return nums[0];
  } else if (n === 2) {
    return Math.max(nums[0], nums[1]);
  }
  let dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = nums[0];
  dp[2] = Math.max(nums[0], nums[1]);
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(nums[i - 1] + dp[i - 2], dp[i - 1]);
  }
  return dp[n];
}
