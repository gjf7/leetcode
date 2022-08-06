function generateMatrix(n: number): number[][] {
  const matrix: number[][] = new Array(n).fill(null).map(() => []);
  let beginRow = 0;
  let endRow = n - 1;
  let beginColumn = 0;
  let endColumn = n - 1;
  let counter = 1;
  while (beginRow <= endRow && beginColumn <= endColumn) {
    for (let i = beginColumn; i <= endColumn; i++) {
      matrix[beginRow][i] = counter++;
    }
    beginRow++;
    for (let i = beginRow; i <= endRow; i++) {
      matrix[i][endColumn] = counter++;
    }
    endColumn--;
    if (beginColumn <= endColumn) {
      for (let i = endColumn; i >= beginColumn; i--) {
        matrix[endRow][i] = counter++;
      }
    }
    endRow--;
    if (beginRow <= endRow) {
      for (let i = endRow; i >= beginRow; i--) {
        matrix[i][beginColumn] = counter++;
      }
    }
    beginColumn++;
  }
  return matrix;
}
