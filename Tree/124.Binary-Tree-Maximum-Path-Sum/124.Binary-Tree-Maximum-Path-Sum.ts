function maxPathSum(root: TreeNode | null): number {
  let result = Number.MIN_SAFE_INTEGER;
  MaxDownPath(root);
  return result;
  function MaxDownPath(node: TreeNode | null) {
    if (node === null) {
      return 0;
    }
    const leftSum = MaxDownPath(node.left);
    const rightSum = MaxDownPath(node.right);

    let maxTurnSum = node.val;
    if (leftSum >= 0) {
      maxTurnSum += leftSum;
    }
    if (rightSum >= 0) {
      maxTurnSum += rightSum;
    }
    result = Math.max(maxTurnSum, result);

    if (leftSum < 0 && rightSum < 0) {
      return node.val;
    } else {
      return Math.max(leftSum, rightSum) + node.val;
    }
  }
}
