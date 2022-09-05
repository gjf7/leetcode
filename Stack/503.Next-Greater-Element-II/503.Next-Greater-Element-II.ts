function nextGreaterElements(nums: number[]): number[] {
  const ret = new Array(nums.length).fill(-1);
  const stack = [];
  for (let i = 0; i < nums.length * 2; i++) {
    const idx = i % nums.length;
    while (stack.length !== 0 && nums[idx] > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      ret[index] = nums[idx];
    }
    stack.push(idx);
  }
  return ret;
}
