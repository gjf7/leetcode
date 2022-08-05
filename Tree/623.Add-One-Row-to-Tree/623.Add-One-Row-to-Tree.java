/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode addOneRow(TreeNode root, int val, int depth) {
        return addOneRowHelper(root, val, depth, 1);
    }

    private TreeNode addOneRowHelper(TreeNode root, int val, int depth, int direction) {
        if (depth == 1) {
            return direction == 1 ? new TreeNode(val, root, null) : new TreeNode(val, null, root);
        }

        if (root.left != null || depth == 2) {
            root.left = addOneRowHelper(root.left, val, depth - 1, 1);
        }

        if (root.right != null || depth == 2) {
            root.right = addOneRowHelper(root.right, val, depth - 1, 0);
        }

        return root;
    }
}
