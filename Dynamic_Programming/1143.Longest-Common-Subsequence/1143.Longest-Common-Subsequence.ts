function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[m][n];

  // 输入所有最长公共子序列
  let ret = [];
  function backTrace(i: number, j: number, current: string) {
    while (i > 0 && j > 0) {
      if (text1[i - 1] === text2[j - 1]) {
        current = text1[i - 1] + current;
        i -= 1;
        j -= 1;
      } else {
        if (dp[i - 1][j] > dp[i][j - 1]) {
          i -= 1;
        } else if (dp[i - 1][j] < dp[i][j - 1]) {
          j -= 1;
        } else {
          backTrace(i - 1, j, current);
          backTrace(i, j - 1, current);
          return;
        }
      }
    }
    if (current.length > 0) {
      ret.push(current);
    }
  }
  backTrace(m, n, '');
  console.log(ret);
}
