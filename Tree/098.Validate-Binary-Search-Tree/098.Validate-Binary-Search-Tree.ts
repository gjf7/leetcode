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

function isValidBST(
  root: TreeNode | null,
  max: number = Infinity,
  min: number = -Infinity
): boolean {
  if (root === null) {
    return true;
  }
  if (root.val > min && root.val < max) {
    if (
      isValidBST(root.left, root.val, min) &&
      isValidBST(root.right, max, root.val)
    ) {
      return true;
    }
  }
  return false;
}
