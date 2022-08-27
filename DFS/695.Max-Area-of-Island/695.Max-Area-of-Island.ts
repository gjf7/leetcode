function maxAreaOfIsland(grid: number[][]): number {
  let currentSize = 0;
  let ret = 0;
  const m = grid.length;
  const n = grid[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0 || grid[i][j] === 2) {
        continue;
      }
      currentSize = 0;
      dfs(i, j);
      ret = Math.max(currentSize, ret);
    }
  }

  return ret;

  function dfs(i: number, j: number): void {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }

    if (grid[i][j] === 0 || grid[i][j] === 2) {
      return;
    }

    grid[i][j] = 2;
    currentSize += 1;

    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
}
