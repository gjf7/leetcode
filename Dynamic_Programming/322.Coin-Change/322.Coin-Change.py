# 01背包
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if amount == 0:
            return 0

        dp = [[0] + ([amount + 1] * (amount)) for i in range(len(coins) + 1)]


        for (i, coin) in enumerate(coins):
            for currentAmount in range(1, amount + 1):
                if coin > currentAmount:
                    dp[i + 1][currentAmount] = dp[i][currentAmount]
                else:
                    dp[i + 1][currentAmount] = min(dp[i][currentAmount], 1 + dp[i + 1][currentAmount - coin])

        result = amount + 1
        for counts in dp:
            result = min(result, counts[amount])
        return -1 if result == amount + 1 else result

###########----------------------------------########################

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        if not amount:
            return 0

        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        for i in range(1, amount + 1):
            for coin in coins:
                if amount >= coin:
                    dp[i] = min(dp[i], 1 + dp[i - coin])
        
        return -1 if dp[amount] == amount + 1 else dp[amount]
