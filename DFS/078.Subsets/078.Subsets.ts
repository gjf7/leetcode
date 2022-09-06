function subsets(nums: number[]): number[][] {
  const ret = [[]];
  const current = [];
  for (let i = 1; i <= nums.length; i++) {
    dfs(0, i);
  }
  return ret;

  function dfs(index: number, total: number) {
    if (current.length === total) {
      ret.push([...current]);
    }

    for (let i = index; i < nums.length; i++) {
      current.push(nums[i]);
      dfs(i + 1, total);
      current.pop();
    }
  }
}
