class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0

        minPriceSoFar = prices[0]
        for i in range(1, len(prices)):
            result = max(result, prices[i] - minPriceSoFar)

            if prices[i] < minPriceSoFar:
                minPriceSoFar = prices[i]
        
        return result
