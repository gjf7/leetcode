function permuteUnique(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const ret: number[][] = [];
  let used = new Array<boolean>(nums.length).fill(false);
  let current: number[] = [];
  dfs();
  return ret;
  function dfs() {
    if (current.length === nums.length) {
      ret.push([...current]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }

      if (i < nums.length && nums[i + 1] === nums[i] && !used[i + 1]) {
        continue;
      }

      used[i] = true;
      current.push(nums[i]);
      dfs();
      current.pop();
      used[i] = false;
    }
  }
}
