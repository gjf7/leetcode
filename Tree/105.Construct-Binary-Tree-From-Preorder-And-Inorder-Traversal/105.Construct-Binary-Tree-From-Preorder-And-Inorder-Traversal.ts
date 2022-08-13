function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const notebook = new Map<number, number>();
  for (let i = 0; i < inorder.length; i++) {
    notebook.set(inorder[i], i);
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1);
  function build(
    preLeft: number,
    preRight: number,
    inLeft: number,
    inRight: number
  ) {
    if (preLeft > preRight || inLeft > inRight) {
      return null;
    }

    const rootVal = preorder[preLeft];
    const root = new TreeNode(rootVal);
    const i = notebook.get(rootVal);
    // 对齐左右子树
    root.left = build(preLeft + 1, preLeft + i - inLeft, inLeft, i - 1);
    root.right = build(preLeft + i - inLeft + 1, preRight, i + 1, inRight);
    return root;
  }
}
