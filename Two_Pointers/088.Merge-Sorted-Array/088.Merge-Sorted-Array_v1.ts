function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const aux: number[] = [...nums1.slice(0, m), ...nums2];
  let i = 0;
  let j = m;
  for (let k = 0; k < nums1.length; k++) {
    if (i >= m) {
      nums1[k] = aux[j++];
    } else if (j >= aux.length) {
      nums1[k] = aux[i++];
    } else if (aux[i] < aux[j]) {
      nums1[k] = aux[i++];
    } else {
      nums1[k] = aux[j++];
    }
  }
}
