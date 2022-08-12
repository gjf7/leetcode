function maxSubArray(nums: number[]): number {
  const dp = new Array(nums.length).fill(Number.MIN_SAFE_INTEGER);

  dp[0] = nums[0];
  let ret = dp[0];
  for (let i = 1; i < nums.length; i++) {
    // 要么自己单干，要么和前面一起干
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ret = Math.max(ret, dp[i]);
  }

  return ret;
}
