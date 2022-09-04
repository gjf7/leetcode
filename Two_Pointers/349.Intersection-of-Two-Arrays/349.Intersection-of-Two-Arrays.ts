function intersection(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const ret = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    while (i + 1 < nums1.length && nums1[i] === nums1[i + 1]) {
      i += 1;
    }

    while (j + 1 < nums2.length && nums2[j] === nums2[j + 1]) {
      j += 1;
    }
    if (nums1[i] === nums2[j]) {
      ret.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      i++;
    }
  }
  return ret;
}
