function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }
  return dfs(root, targetSum);
  function dfs(root: TreeNode | null, targetSum: number) {
    if (root == null) {
      return false;
    }

    if (root.left === null && root.right === null) {
      return targetSum === root.val;
    }

    return (
      dfs(root.left, targetSum - root.val) ||
      dfs(root.right, targetSum - root.val)
    );
  }
}
