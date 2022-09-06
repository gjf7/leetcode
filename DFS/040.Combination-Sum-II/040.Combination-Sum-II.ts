function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const ret: number[][] = [];
  const current: number[] = [];
  dfs(0);
  return ret;

  function dfs(index: number, sum = 0) {
    if (sum > target) {
      return;
    }

    if (sum === target) {
      ret.push([...current]);
    }

    for (let i = index; i < candidates.length; i++) {
      if (i === index || candidates[i] !== candidates[i - 1]) {
        current.push(candidates[i]);
        dfs(i + 1, sum + candidates[i]);
        current.pop();
      }
    }
  }
}
