function rightSideView(root: TreeNode | null): number[] {
    const ret = [];
    dfs(root, 0);
    return ret;
    function dfs(root: TreeNode | null, level: number): void {
        if (root === null) {
            return;
        }
        if (ret[level] === undefined) {
            ret[level] = root.val;
        }
        dfs(root.right, level + 1);
        dfs(root.left, level + 1);
    }
};
