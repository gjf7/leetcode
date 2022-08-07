function countSmaller(nums: number[]): number[] {
  const len = nums.length;
  const origin = [...nums];
  const aux = new Array(len).fill(0);
  const result = new Array(len).fill(0);
  sort(nums, 0, len - 1);
  return result;

  function sort(nums: number[], start: number, end: number) {
    if (start >= end) {
      return;
    }
    const middle = (start + end) >> 1;
    sort(nums, start, middle);
    sort(nums, middle + 1, end);
    for (let i = start; i <= middle; i++) {
      let res = end + 1;
      let low = middle + 1;
      let high = end;
      while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] >= origin[i]) {
          res = mid;
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
      result[i] += res - middle - 1;
    }
    merge(nums, start, middle, end);
  }

  function merge(nums: number[], start: number, middle: number, end: number) {
    let i = start;
    let j = middle + 1;
    for (let k = start; k <= end; k++) {
      aux[k] = nums[k];
    }

    for (let k = start; k <= end; k++) {
      if (i > middle) {
        nums[k] = aux[j++];
      } else if (j > end) {
        nums[k] = aux[i++];
      } else if (aux[i] < aux[j]) {
        nums[k] = aux[i++];
      } else {
        nums[k] = aux[j++];
      }
    }
  }
}
