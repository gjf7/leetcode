function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p1 < 0) {
            nums1[i] = nums2[p2--];
        } else if (p2 < 0) {
            nums1[i] = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1--];
        } else {
            nums1[i] = nums2[p2--];
        }
    }
};
