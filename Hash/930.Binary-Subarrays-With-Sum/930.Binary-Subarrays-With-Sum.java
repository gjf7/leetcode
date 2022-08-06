class Solution {
    public int numSubarraysWithSum(int[] nums, int goal) {
        Map<Integer, Integer> prefix = new HashMap<>();
        int ret = 0;
        int s = 0;
        for (int i = 0; i < nums.length; i++) {
            prefix.put(s, prefix.getOrDefault(s,0) + 1);
            s += nums[i];
            ret += prefix.getOrDefault(s - goal, 0);
        }
        return ret;
    }
}
