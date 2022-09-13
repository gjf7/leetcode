class Solution {
    public int searchInsert(int[] nums, int target) {
        // 边界  当插入项小于第一项
        if (nums[0] > target) {
            return 0;
        }
        
        int left = 0;
        int right = nums.length - 1;
        while (left < right) {
            int middle = right + (left - right) / 2; // [0, 1]
            if (nums[middle] <= target) {
                left = middle;
            } else {
                right = middle - 1;
            }
        }
        return nums[left] == target ? left : left + 1;
    }
}
