// 正数的话 跟最大连续和子数组一样 但是负数的话就要考虑负负得正的情况(翻身当主人) 所以叫记录最小值
function maxProduct(nums: number[]): number {
  const dp = new Array(nums.length).fill(null).map(() => [0, 0]);
  dp[0][0] = nums[0]; // max product subarray ending at i
  dp[0][1] = nums[0]; // min product subarray ending at i
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(
      nums[i] * dp[i - 1][0],
      nums[i] * dp[i - 1][1],
      nums[i]
    );
    dp[i][1] = Math.min(
      nums[i] * dp[i - 1][1],
      nums[i] * dp[i - 1][0],
      nums[i]
    );
    max = Math.max(max, dp[i][0]);
  }
  return max;
}
