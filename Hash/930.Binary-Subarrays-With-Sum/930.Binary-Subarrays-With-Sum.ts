function numSubarraysWithSum(nums: number[], goal: number): number {
  let s = 0;
  let ans = 0;
  const prefix = { 0: 0 };
  for (const i of nums) {
    prefix[s] = (prefix[s] || 0) + 1;
    s += i;
    ans += prefix[s - goal] || 0;
  }
  return ans;
}
