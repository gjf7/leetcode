function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const ret = new Array(nums1.length).fill(-1);
  const stack = [];
  const notebook = new Map<number, number>();
  for (let i = 0; i < nums1.length; i++) {
    notebook.set(nums1[i], i);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (stack.length === 0) {
      stack.push(nums2[i]);
    } else if (nums2[i] <= stack[stack.length - 1]) {
      stack.push(nums2[i]);
    } else {
      while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
        ret[notebook.get(stack[stack.length - 1])] = nums2[i];
        stack.pop();
      }
      stack.push(nums2[i]);
    }
  }
  return ret;
}
