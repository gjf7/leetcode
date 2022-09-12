class Solution {
    public int reverse(int x) {
        // 最小值取绝对值会溢出，我们需要先判断一下是不是最小值
        if (x == Integer.MIN_VALUE) {
            return 0;
        }

        int sign = 1;
        if (x < 0) {
            sign = -1;
        }

        x = Math.abs(x);

        int ret = 0;
        while (x > 0) {
            // 这里也是很巧妙，我们如何在不溢出的情况下去判断 ret * 10 > MAX_VALUE 呢
            // 转换成 ret > Integer.MAX_VALUE / 10 就好了
            if (ret > Integer.MAX_VALUE / 10) {
                return 0;
            }
            // 与上同
            if (ret * 10 > Integer.MAX_VALUE - x % 10) {
                return 0;
            }

            ret = ret * 10 + x % 10;
            x = x / 10;
        }
        return sign * ret;
    }
}
