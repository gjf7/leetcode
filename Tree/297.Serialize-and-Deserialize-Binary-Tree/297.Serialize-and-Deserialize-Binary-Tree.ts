/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root === null) {
    return JSON.stringify([]);
  }
  const res: Array<null | number> = [];
  const queue: Array<null | TreeNode> = [root];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      res.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push(null);
    }
  }
  return JSON.stringify(res);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const tree = JSON.parse(data);
  if (!tree.length) {
    return null;
  }
  const root: TreeNode = new TreeNode(tree.shift());
  let node: TreeNode, left: number | null, right: number | null;
  const queue: TreeNode[] = [root];
  while (tree.length && tree.length) {
    node = queue.shift();
    left = tree.shift();
    right = tree.shift();
    if (left !== null) {
      node.left = new TreeNode(left);
      queue.push(node.left);
    }
    if (right !== null) {
      node.right = new TreeNode(right);
      queue.push(node.right);
    }
  }
  return root;
}
