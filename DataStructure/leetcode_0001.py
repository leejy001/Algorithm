from typing import List

# 부르트포스 방식
class Solution_one:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]

# taget에서 뺀 숫자 비교
class Solution_two:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, n in enumerate(nums):
            complement = target - n
            if complement in nums[i+1:]:
                return [nums.index(n), nums[i+1:].index(complement)+(i+1)]

# 딕셔너리 이용
class Solution_three:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        find_num = {}
        for i, n in enumerate(nums):
            find_num[n] = i
        
        for i, n in enumerate(nums):
            if target - n in find_num and i != find_num[target - n]:
                return [i, find_num[target - n]]
