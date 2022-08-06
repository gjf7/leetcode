class Solution {
    public List<List<Integer>> fourSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> ret = new ArrayList<>();
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = nums.length - 1; j > 0; j--) {
                int left = i + 1;
                int right = j - 1;
                long sum = (long) target - nums[i] - nums[j];
                while (left < right) {
                    if ((long)nums[left] + nums[right] == sum) {
                        ret.add(Arrays.asList(nums[i], nums[j], nums[left], nums[right]));
                        left++;
                        right--;

                        while (left < right && nums[left] == nums[left - 1]){
                            left++;
                        }
                        while (left < right && nums[right] == nums[right + 1]) {
                            right--;
                        }
                    } else if ((long)nums[left] + nums[right] < sum) {
                        left++;
                    } else {
                        right--;
                    }
                }
                while (j - 1 > 0 && nums[j - 1] == nums[j]) {
                    j--;
                }
            }
            while (i + 1 < nums.length - 1 && nums[i + 1] == nums[i]) {
                i++;
            }
        }
        return ret;
    }
}
