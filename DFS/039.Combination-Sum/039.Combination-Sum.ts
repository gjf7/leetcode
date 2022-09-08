function combinationSum(candidates: number[], target: number): number[][] {
  const ret: number[][] = [];
  const current: number[] = [];
  candidates.sort((a, b) => a - b);
  dfs(0);
  return ret;
  function dfs(index: number, sum = 0) {
    if (sum === target) {
      ret.push([...current]);
      return;
    }
    if (sum > target) {
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      current.push(candidates[i]);
      dfs(i, sum + candidates[i]);
      current.pop();
    }
  }
}
