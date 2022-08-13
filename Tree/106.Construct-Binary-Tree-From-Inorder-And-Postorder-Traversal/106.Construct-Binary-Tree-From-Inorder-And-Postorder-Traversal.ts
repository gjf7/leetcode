function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const notebook: Map<number, number> = new Map();
  for (let i = 0; i < inorder.length; i++) {
    notebook.set(inorder[i], i);
  }
  return build(0, postorder.length - 1, 0, inorder.length - 1);
  function build(
    inLeft: number,
    inRight: number,
    postLeft: number,
    postRight: number
  ): TreeNode | null {
    if (inLeft > inRight || postLeft > postRight) {
      return null;
    }

    const rootVal = postorder[postRight];
    const root = new TreeNode(rootVal);
    const i = notebook.get(rootVal);
    // 对齐左右树的index即可
    root.left = build(inLeft, i - 1, postLeft, postLeft + i - 1 - inLeft);
    root.right = build(i + 1, inRight, postLeft + i - inLeft, postRight - 1);
    return root;
  }
}
