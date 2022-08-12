function maxProfit(prices: number[]): number {
  const n = prices.length;
  if (n < 2) {
    return 0;
  }
  const profit: number[] = [];

  for (let i = 1; i < n; i++) {
    profit.push(prices[i] - prices[i - 1]);
  }

  const dp = new Array(profit.length).fill(0);
  dp[0] = profit[0];
  let ret = dp[0];
  for (let i = 1; i < profit.length; i++) {
    dp[i] = Math.max(dp[i - 1] + profit[i], profit[i]);
    ret = Math.max(ret, dp[i]);
  }
  return Math.max(0, ret);
}
