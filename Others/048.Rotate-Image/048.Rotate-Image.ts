function rotate(matrix: number[][]): void {
  // 90 转置 + 镜像 ，180 reverse每行 + 转置 ，270 镜像 + 转置
  const m = matrix.length;
  const n = matrix[0].length;
  let top = 0;
  let down = m - 1;
  while (top < down) {
    const temp = matrix[top];
    matrix[top] = matrix[down];
    matrix[down] = temp;
    top += 1;
    down -= 1;
  }

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}
