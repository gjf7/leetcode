class Solution {
    public int threeSumClosest(int[] nums, int target) {
        Arrays.sort(nums);
        int minGap = Integer.MAX_VALUE;
        
        int result = -1;
        for (int i = 0; i < nums.length; i++) {
            int left = i + 1;
            int right = nums.length - 1;
            
            while (left < right) {
                int sum = nums[left] + nums[right] + nums[i];

                if (sum == target) {
                    return sum;
                } else {
                    int gap = Math.abs(target - sum);
                    if (gap < minGap) {
                        minGap = gap;
                        result = sum;
                    }
                    
                    if (sum > target) {
                        right -= 1;
                    } else {
                        left += 1;
                    }
                }
            }
        }
        return result;

    }
}
