class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        for i in range(len(flowerbed)):
            if flowerbed[i] == 0 and (i - 1 < 0 or flowerbed[i - 1] != 1) and (i + 1  >= len(flowerbed) or flowerbed[i + 1] != 1):
                n -= 1
                flowerbed[i] = 1

        return n <= 0
