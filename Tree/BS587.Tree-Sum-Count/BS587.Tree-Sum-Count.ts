class Solution {
  solve(root: Tree, k: number): number {
    let ans = 0;
    let sum = 0;
    const prefix: Record<number, number> = {};
    dfs(root);
    return ans;
    function dfs(root: Tree) {
      if (!root) {
        return;
      }
      prefix[sum] = (prefix[sum] || 0) + 1;
      sum += root.val;
      ans += prefix[sum - k] || 0;
      dfs(root.left);
      dfs(root.right);
      sum -= root.val;
      prefix[sum] -= 1;
    }
  }
}
