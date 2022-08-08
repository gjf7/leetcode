function maxSumBST(root: TreeNode | null): number {
  let ret = 0;
  dfs(root);
  return ret;

  function dfs(root: TreeNode | null) {
    if (!root) {
      return {
        min: Number.MAX_SAFE_INTEGER,
        max: Number.MIN_SAFE_INTEGER,
        sum: 0,
        isBST: true,
      };
    }
    const left = dfs(root.left);
    const right = dfs(root.right);
    if (
      left.isBST &&
      right.isBST &&
      root.val > left.max &&
      root.val < right.min
    ) {
      const sum = root.val + left.sum + right.sum;
      ret = Math.max(ret, sum);
      return {
        min: Math.min(left.min, root.val),
        max: Math.max(right.max, root.val),
        sum,
        isBST: true,
      };
    } else {
      return { isBST: false };
    }
  }
}
