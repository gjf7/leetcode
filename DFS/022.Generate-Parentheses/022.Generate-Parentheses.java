class Solution {
    List<String> ret;
    int n;
    public List<String> generateParenthesis(int n) {
        ret = new ArrayList<>();
        this.n = n;
        dfs("", 0, 0);
        return ret;
    }
    private void dfs(String current, int left, int right) {
        if (current.length() == n * 2) {
            if (left == right) {
                ret.add(current);
            }
            return;
        }

        if (left < n) {
            dfs(current + "(", left + 1, right);
        }
        if (right < left) {
            dfs(current + ")", left, right + 1);
        }
    }
}
