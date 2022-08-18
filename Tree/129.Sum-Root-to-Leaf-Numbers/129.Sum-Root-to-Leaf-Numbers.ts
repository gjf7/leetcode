function sumNumbers(root: TreeNode | null): number {
  let ret = 0;
  dfs(root);
  return ret;
  function dfs(root: TreeNode | null, sum: number = 0) {
    if (root === null) {
      return;
    }

    if (root.left === null && root.right === null) {
      ret += sum * 10 + root.val;
    }

    dfs(root.left, sum * 10 + root.val);
    dfs(root.right, sum * 10 + root.val);
  }
}
