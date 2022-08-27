function minSubArrayLen(target: number, nums: number[]): number {
  let start = 0;
  let end = 0;
  let windowSum = 0;
  let ret = Number.MAX_SAFE_INTEGER;
  for (; end < nums.length; end++) {
    windowSum += nums[end];
    while (windowSum >= target) {
      ret = Math.min(end - start + 1, ret);
      windowSum -= nums[start];
      start += 1;
    }
  }
  return ret === Number.MAX_SAFE_INTEGER ? 0 : ret;
}
