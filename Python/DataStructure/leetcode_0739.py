from typing import List

# 스택을 이용한 풀이 504ms
class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        dist = [0]
        s = [0]*len(T)
        for i in range(1, len(T)):
            while dist and T[i] > T[dist[-1]]:
                last = dist.pop()
                s[last] = (i - last)
            else:
                dist.append(i)
        return s