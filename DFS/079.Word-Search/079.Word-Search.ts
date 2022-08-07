function exist(board: string[][], word: string): boolean {
  // find the entry char,then brute force every path
  const m = board.length;
  const n = board[0].length;
  const seen = new Array(m).fill(null).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (DFS(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
  function DFS(i: number, j: number, index: number): boolean {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return false;
    }
    if (seen[i][j] === 1) {
      return false;
    }
    if (board[i][j] !== word[index]) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }

    seen[i][j] = 1;
    const dir = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1],
    ];
    for (let k = 0; k < 4; k++) {
      let x = dir[k][0] + i;
      let y = dir[k][1] + j;
      if (DFS(x, y, index + 1)) {
        return true;
      }
    }
    seen[i][j] = 0;
    return false;
  }
}
