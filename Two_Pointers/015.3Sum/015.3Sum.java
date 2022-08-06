class Solution {
  public List<List<Integer>> threeSum(int[] nums) {
  List < List < Integer >> ret = new ArrayList<>();
  Arrays.sort(nums);
  for (int i = 0; i < nums.length; i++) {

            int left = i + 1;
            int right = nums.length - 1;
            int sum = -nums[i];

    while (left < right) {
      if (nums[left] + nums[right] == sum) {
        ret.add(Arrays.asList(nums[i], nums[left], nums[right]));
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (nums[left] + nums[right] < sum) {
        left++;
      } else {
        right--;
      }
    }
    while (i + 1 < nums.length && nums[i + 1] == nums[i]) {
      i++;
    }
  }
  return ret;
}
}
