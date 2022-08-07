function longestPalindrome(s: string): string {
  // 马拉车
  let t = '#';
  for (const char of s) {
    t = `${t + char}#`;
  }
  const n = t.length;
  const dp = new Array(n).fill(1);
  let maxRight = -1;
  let maxCenter = -1;
  let maxR = 0;
  let center = 0;
  for (let i = 0; i < n; i++) {
    let r;
    if (maxRight >= i) {
      const j = 2 * maxCenter - i;
      r = Math.min(dp[j], maxRight - i);
      while (i - r >= 0 && i + r < n && t[i - r] === t[i + r]) {
        r++;
      }
    } else {
      r = 0;
      while (i - r >= 0 && i + r < n && t[i - r] === t[i + r]) {
        r++;
      }
    }
    dp[i] = r - 1;
    if (dp[i] > maxR) {
      maxR = dp[i];
      center = i;
    }
    if (dp[i] + i > maxRight) {
      maxRight = dp[i] + i;
      maxCenter = i;
    }
  }

  return s.slice((center - maxR) / 2, (center + maxR) / 2);
}
