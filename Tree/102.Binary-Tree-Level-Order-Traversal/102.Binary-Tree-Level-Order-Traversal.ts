function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const queue = [root];
  const ret: number[][] = [];
  while (queue.length !== 0) {
    const levelLen = queue.length;
    const level = [];
    for (let i = 0; i < levelLen; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }
    ret.push(level);
  }
  return ret;
}
