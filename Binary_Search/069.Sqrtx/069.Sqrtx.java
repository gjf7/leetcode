class Solution {
    public int mySqrt(int x) {
        if (x <= 1) {
            return x;
        }

        int low = 0;
        int high = x;
        int ret = 0;
        while (low <= high) {
            int middle = low + (high - low) / 2;
            if (middle <= x / middle) {
                ret = middle;
                low = middle + 1;
            } else {
                high = middle - 1;
            }
        }
        return ret;
    }
}
