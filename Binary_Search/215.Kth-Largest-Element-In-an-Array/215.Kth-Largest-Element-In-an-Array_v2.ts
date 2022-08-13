// 构建大小为K的最小堆
function findKthLargest(nums: number[], k: number): number {
  const lastParent = (k - 1 - 1) >> 1;
  for (let i = lastParent; i >= 0; i--) {
    sink(i);
  }
  for (let i = k; i < nums.length; i++) {
    if (nums[i] > nums[0]) {
      swap(i, 0);
      sink(0);
    }
  }
  return nums[0];

  function leftChild(i: number) {
    return 2 * i + 1;
  }

  function rightChild(i: number) {
    return 2 * i + 2;
  }

  function sink(i: number) {
    if (i > lastParent) {
      return;
    }

    const minChild = min(leftChild(i), rightChild(i));
    if (min(i, minChild) === minChild) {
      swap(i, minChild);
      sink(minChild);
    }
  }

  function min(i: number, j: number) {
    if (i > k - 1) {
      return j;
    } else if (j > k - 1) {
      return i;
    }
    return nums[i] < nums[j] ? i : j;
  }

  function swap(i: number, j: number) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}
