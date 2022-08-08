function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let ret = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] !== '1') {
        continue;
      } else {
        dfs(i, j);
        ret += 1;
      }
    }
  }
  return ret;
  function dfs(m: number, n: number) {
    if (m < 0 || m >= grid.length || n < 0 || n >= grid[0].length) {
      return;
    }

    if (grid[m][n] === '1') {
      grid[m][n] = '2';
    } else {
      return;
    }
    dfs(m - 1, n);
    dfs(m + 1, n);
    dfs(m, n - 1);
    dfs(m, n + 1);
  }
}
