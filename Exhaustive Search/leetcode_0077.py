from typing import List
from itertools import combinations

# combinations 함수 사용 76ms
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        return list(itertools.combinations(range(1, n+1), k))


# DFS 이용 464ms
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []
        def dfs (arr, start, cnt):
            if cnt == k:
                result.append(arr[:])
                return
            
            for i in range(start, n+1):
                arr.append(i)
                dfs(arr, i+1, cnt+1)
                arr.pop()
            
        dfs([],1,0)
        return result