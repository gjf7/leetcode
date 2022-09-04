function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) {
    return root === subRoot;
  }

  if (
    isSameTree(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  ) {
    return true;
  } else {
    return false;
  }
}
function isSameTree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null || subRoot === null) {
    return root === subRoot;
  }

  if (
    root.val === subRoot.val &&
    isSameTree(root.left, subRoot.left) &&
    isSameTree(root.right, subRoot.right)
  ) {
    return true;
  } else {
    return false;
  }
}
