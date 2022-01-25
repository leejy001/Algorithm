from typing import List

# 모든 지점 방문 3440ms
class Solution_one:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        n = len(gas)
        for i in range(n):
            left_gas = 0
            visited = 0
            for j in range(n):
                left_gas += gas[j] - cost[j]
                if left_gas < 0:
                    break
                else:
                    visited += 1
            if visited == n:
                return i
            gas = gas[1:] + gas[:1]
            cost = cost[1:] + cost[:1]
        return -1


# 한번만 방문 76ms
class Solution_two:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        if sum(gas) < sum(cost):
            return -1
        
        start, fuel = 0, 0
        for i in range(len(gas)):
            if gas[i] + fuel < cost[i]:
                start = i + 1
                fuel = 0
            else:
                fuel += gas[i] - cost[i]
        return start