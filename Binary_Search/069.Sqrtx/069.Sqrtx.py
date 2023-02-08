class Solution:
    def mySqrt(self, x: int) -> int:
        low = 0
        high = x

        while low < high:
            middle = math.ceil((low + high) / 2) #high - (high - low) // 2
            if middle * middle <= x :
                low = middle
            else:
                high = middle - 1
        return low
