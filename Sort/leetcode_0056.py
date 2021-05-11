from typing import List

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals = sorted(intervals, key=lambda x : x[0])
        answer = []
        i = 0
        for i in intervals:
            if answer and i[0] <= answer[-1][1]:
                answer[-1][1] = max(answer[-1][1], i[1])
            else:
                answer.append(i)
        
        return answer