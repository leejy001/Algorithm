from typing import List

# 삽입 정렬 이용 72ms
class Solution:
    @staticmethod
    def larger(n1:int, n2:int) -> bool:
        return str(n1) + str(n2) < str(n2) + str(n1)
        
    def largestNumber(self, nums: List[int]) -> str:
        i = 1
        while i < len(nums):
            j = i
            while j > 0 and self.larger(nums[j-1], nums[j]):
                nums[j], nums[j-1] = nums[j-1], nums[j]
                j -= 1
            i += 1
        
        return str(int(''.join(map(str, nums))))