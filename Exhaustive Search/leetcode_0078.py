from typing import List

# 내가 푼 코드 28ms

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = []
        def dfs (idx, n):
            result.append(n)
            for i in range(idx, len(nums)):
                dfs(i+1, n+[nums[i]])
            
        dfs(0,[])
        return result