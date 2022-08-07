function recoverTree(root: TreeNode | null): void {
  let pre = new TreeNode(Number.MIN_SAFE_INTEGER);
  let target1 = null;
  let target2 = null;
  dfs(root);
  const temp = target1.val;
  target1.val = target2.val;
  target2.val = temp;
  function dfs(node: TreeNode | null): void {
    if (node === null) {
      return;
    }
    dfs(node.left);
    if (pre.val <= node.val) {
      pre = node;
    } else {
      if (!target1) {
        target1 = pre;
        target2 = node;
        pre = node;
      } else {
        target2 = node;
        return;
      }
    }
    dfs(node.right);
  }
}
