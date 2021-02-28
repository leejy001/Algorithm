from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        mul = []
        start = 1
        for i in range(len(nums)):
            mul.append(start)
            start = start * nums[i]
            
        start = 1
        for i in range(len(nums)-1, -1, -1):
            mul[i] = mul[i] * start
            start = start * nums[i]
            
        return mul