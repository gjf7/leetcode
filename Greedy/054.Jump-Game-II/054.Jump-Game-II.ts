function jump(nums: number[]): number {
  if (nums.length === 1) return 0;
  let start = 0;
  let end = 0;
  let step = 0;
  while (start <= end) {
    let newEnd = end;
    for (let i = start; i <= end; i++) {
      newEnd = Math.max(newEnd, nums[i] + i);
      if (newEnd >= nums.length - 1) {
        return step + 1;
      }
    }
    step += 1;
    start = end + 1;
    end = newEnd;
  }
  return -1;
}
