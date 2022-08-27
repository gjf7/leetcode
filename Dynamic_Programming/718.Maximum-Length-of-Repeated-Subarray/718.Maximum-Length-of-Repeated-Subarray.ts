function findLength(nums1: number[], nums2: number[]): number {
  const m = nums1.length;
  const n = nums2.length;
  nums1.unshift(0);
  nums2.unshift(0);
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  let ret = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = nums1[i] === nums2[j] ? dp[i - 1][j - 1] + 1 : 0;
      ret = Math.max(ret, dp[i][j]);
    }
  }

  return ret;
}
