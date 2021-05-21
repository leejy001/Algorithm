
# 파이썬 문자열 기능 이용 1의 개수 계산 36ms
class Solution_one:
    def hammingWeight(self, n: int) -> int:
        return bin(n).count('1')


# 비트 연산 52ms
class Solution_two:
    def hammingWeight(self, n: int) -> int:
        count = 0
        while n:
            n &= n-1
            count += 1
        return count