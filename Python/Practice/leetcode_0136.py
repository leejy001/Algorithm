from typing import List

# 비트 연산 216ms
class Solution_one:
    def singleNumber(self, nums: List[int]) -> int:
        result = 0
        for num in nums:
            result ^= num
        return result


# 딕셔너리 이용 172ms
class Solution_two:
    def singleNumber(self, nums: List[int]) -> int:
        dic = {}
        for num in nums:
            if dic.get(num):
                dic[num] += 1
            else:
                dic[num] = 1
        
        for k, v in dic.items():
            if v == 1:
                return k