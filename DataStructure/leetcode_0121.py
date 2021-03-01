from typing import List

# 부르트포스 (시간 초과)
class Solution_one:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(len(prices)):
            for j in range(i+1, len(prices)):
                if profit < prices[j]-prices[i]:
                    profit = prices[j]-prices[i]
        if profit < 0:
            return
        else:
            return profit

# 저점과 현재 값과의 차이 계산
class Solution_two:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        min_price = 100000
        max_price = 0
        
        for price in prices:
            min_price = min(min_price, price)
            profit = max(profit, price - min_price)
        return profit