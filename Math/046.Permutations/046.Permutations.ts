function permute(nums: number[]): number[][] {
  let res: number[][] = [];
  let path: number[] = [];
  backtrack(path, nums, res);
  return res;
}

function backtrack(path: number[], nums: number[], res: number[][]) {
  if (path.length === nums.length) {
    res.push(path);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!path.includes(nums[i])) {
      backtrack(path.concat(nums[i]), nums, res);
    }
  }

  return res;
}
