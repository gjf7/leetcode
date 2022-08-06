class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int start = 0;
        int end = 0;
        int ret = Integer.MAX_VALUE;
        int windowSum = 0;
        for (; end < nums.length; end++) {
            windowSum += nums[end];
            while (windowSum >= target) {
                ret = Math.min(ret, end - start + 1);
                windowSum -= nums[start++];
            }
        }
        return ret == Integer.MAX_VALUE ? 0 : ret;
    }
}
