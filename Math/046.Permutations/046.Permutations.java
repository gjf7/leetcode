class Solution {
    List<List<Integer>> ret;
    boolean[] used;
    public List<List<Integer>> permute(int[] nums) {
        ret = new ArrayList<>();
        used = new boolean[nums.length];
        List<Integer> path = new ArrayList<>();
        dfs(nums, path);
        return ret;
    }
    private void dfs(int[] nums, List<Integer> path) {
        if (path.size() == nums.length) {
            ret.add(new ArrayList(path));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue;
            }
            used[i] = true;
            path.add(nums[i]);
            dfs(nums, path);
            used[i] = false;
            path.remove(path.size() - 1);
        }
    }
}
