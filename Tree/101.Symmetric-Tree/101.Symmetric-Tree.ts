function isSymmetric(root: TreeNode | null): boolean {
    return helper(root.left, root.right);

    function helper(root1: TreeNode | null, root2: TreeNode | null) {
        if (root1 === null && root2 === null) {
            return true;
        } else if (root1 === null || root2 === null) {
            return false;
        }
        return root1.val === root2.val && helper(root1.right, root2.left) && helper(root1.left, root2.right);
    }
};
