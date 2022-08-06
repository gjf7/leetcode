function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];
  let beginRow = 0;
  let endRow = matrix.length - 1;
  let beginColumn = 0;
  let endColumn = matrix[0].length - 1;
  while (beginRow <= endRow && beginColumn <= endColumn) {
    for (let i = beginColumn; i <= endColumn; i++) {
      ans.push(matrix[beginRow][i]);
    }
    beginRow++;
    for (let i = beginRow; i <= endRow; i++) {
      ans.push(matrix[i][endColumn]);
    }
    endColumn--;
    if (beginRow <= endRow) {
      for (let i = endColumn; i >= beginColumn; i--) {
        ans.push(matrix[endRow][i]);
      }
    }
    endRow--;
    if (beginColumn <= endColumn) {
      for (let i = endRow; i >= beginRow; i--) {
        ans.push(matrix[i][beginColumn]);
      }
    }
    beginColumn++;
  }
  return ans;
}
