from typing import List

# 오름 차순 풀이 284ms
class Solution_one:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        add = 0
        for i in range(1, len(nums), 2):
            add += min(nums[i-1],nums[i])
        
        return add

# 짝수 번째 값 계산 272ms
class Solution_two:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        add = 0
        for i in range(1, len(nums), 2):
            add += nums[i-1]
        
        return add

# 파이썬 다운 방식(1) 264ms
class Solution_three:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(nums[i] for i in range(0, len(nums), 2))

# 파이썬 다운 방식(2) 252ms
class Solution_four:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])