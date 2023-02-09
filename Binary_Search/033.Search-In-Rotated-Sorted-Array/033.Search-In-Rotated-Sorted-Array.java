class Solution {
    public int search(int[] nums, int target) {
        int low = 0;
        int high = nums.length - 1;
        while (low < high) {
            int middle = (low + high) / 2;
            if (nums[middle] < nums[0]) {
                high = middle;
            } else {
                low = middle + 1;
            }
        }
        int pivot = high;
        if (target >= nums[0]) {
            return bs(nums, 0, pivot, target);
        } else {
            return bs(nums, pivot, nums.length - 1, target);
        }
    }

    public int bs(int[] nums, int low, int high, int target) {
        while (low <= high) {
            int middle = (low + high) / 2;
            if (nums[middle] > target) {
                high = middle - 1;
            } else if (nums[middle] < target) {
                low = middle + 1;
            } else {
                return middle;
            }
        }
        return -1;
    }
}
