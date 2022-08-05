/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  return addOneRowHelper(root, depth, 1);

  function addOneRowHelper(
    root: TreeNode | null,
    depth: number,
    direction: number
  ): TreeNode | null {
    if (depth === 1) {
      return direction === 1
        ? new TreeNode(val, root, null)
        : new TreeNode(val, null, root);
    }
    if (root.left !== null || depth - 1 === 1) {
      root.left = addOneRowHelper(root.left, depth - 1, 1);
    }

    if (root.right !== null || depth - 1 === 1) {
      root.right = addOneRowHelper(root.right, depth - 1, 0);
    }

    return root;
  }
}
