from typing import List

# 중복 조합 함수 사용 100ms
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        n = target//min(candidates)+1
        for i in range(n):
            for cwr in combinations_with_replacement(candidates, i):
                if sum(cwr) == target:
                    res.append(cwr)
        return res

# DFS 구현 84ms
class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []
        def dfs (csum, index, path):
            if csum >= target:
                if csum == target:
                    result.append(path)
                return
            for i in range(index, len(candidates)):
                dfs(csum+candidates[i], i, path+[candidates[i]])
        
        dfs(0, 0, [])
        return result