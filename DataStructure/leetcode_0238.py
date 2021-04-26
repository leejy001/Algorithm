from typing import List

# 왼쪽 곱셈 값과 오른쪽 곱셈 값을 곱하기 232ms
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        arr = []
        mul = 1
        for i in range(len(nums)):
            arr.append(mul)
            mul = mul * nums[i]

        mul = 1
        for i in range(len(nums) - 1, -1, -1):
            arr[i] = arr[i] * mul
            mul = mul * nums[i]

        return arr