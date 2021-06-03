from typing import List

# 내가 푼 코드 (그리디 방식) 96ms
class Solution_one:
    def maxProfit(self, prices: List[int]) -> int:
        result = 0
        for i in range(1, len(prices)):
             if prices[i-1] < prices[i]:
                    result += prices[i] - prices[i-1]
        return result


# 파이썬 다운 방식 60ms
class Solution_two:
    def maxProfit(self, prices: List[int]) -> int:
        # 0보다 크면 무조건 합산
        return sum(max(prices[i+1] - prices[i], 0) for i in range(len(prices) - 1))