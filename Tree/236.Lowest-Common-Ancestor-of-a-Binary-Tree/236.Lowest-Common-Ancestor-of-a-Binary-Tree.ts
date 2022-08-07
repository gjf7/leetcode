function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  let res = null;
  dfs(root, p, q);
  return res;

  function dfs(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
    if (root === null) {
      return 0;
    }
    const left = dfs(root.left, p, q);
    const right = dfs(root.right, p, q);
    const self = root === q || root === p;
    const count = left + right + Number(self);
    if (count === 2 && res === null) {
      res = root;
    }
    return count;
  }
}
