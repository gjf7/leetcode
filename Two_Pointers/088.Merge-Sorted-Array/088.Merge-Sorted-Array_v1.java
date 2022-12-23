class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int[] aux = new int[nums1.length];

        for (int i = 0; i < m; i++) {
            aux[i] = nums1[i];
        }
        for (int i = 0; i < n; i++) {
            aux[m + i] = nums2[i];
        }

        int i = 0;
        int j = m;
        
        for (int p = 0; p < m + n; p++) {
            if (i >= m) {
                nums1[p] = aux[j++];
            } else if (j >= m + n) {
                nums1[p] = aux[i++];
            } else if (aux[i] <= aux[j]) {
                nums1[p] = aux[i++];
            } else {
                nums1[p] = aux[j++];
            }
        }
    }
}