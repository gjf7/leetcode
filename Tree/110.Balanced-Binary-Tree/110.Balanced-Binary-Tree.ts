interface dfsReturn {
  isBalanced: boolean;
  height: number;
}

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root).isBalanced;

  function dfs(root: TreeNode | null): dfsReturn {
    if (root === null) {
      return { isBalanced: true, height: 0 };
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    const isBalanced =
      left.isBalanced && right.isBalanced
        ? Math.abs(left.height - right.height) <= 1
        : false;
    return { isBalanced, height: Math.max(left.height, right.height) + 1 };
  }
}
