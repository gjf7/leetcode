function sortedArrayToBST(nums: number[]): TreeNode | null {
  return buildTree(nums, 0, nums.length - 1);
}

function buildTree(
  nums: number[],
  left: number,
  right: number
): TreeNode | null {
  if (left > right) {
    return null;
  }
  const middleIndex = (left + right) >> 1;
  const node = new TreeNode(nums[middleIndex]);
  node.left = buildTree(nums, left, middleIndex - 1);
  node.right = buildTree(nums, middleIndex + 1, right);
  return node;
}
