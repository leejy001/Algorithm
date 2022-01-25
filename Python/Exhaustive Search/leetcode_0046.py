from typing import List
from itertools import permutations

# permutations 사용 34ms
class Solution_one:
    def permute(self, nums: List[int]) -> List[List[int]]:
        per = permutations(nums,len(nums))
        return per


# DFS (tree) 40ms
class Solution_two:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        prev_e = []
        
        def dfs(elements):
            # Leaf 노드일 때 결과 추가
            if len(elements) == 0:
                result.append(prev_e[:])
            # 순열 생성 재귀 호출
            for e in elements:
                next_e = elements[:]
                next_e.remove(e)
                
                prev_e.append(e)
                dfs(next_e)
                prev_e.pop()
                
        dfs(nums)
        return result


# DFS 64ms
class Solution_three:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(index):
            if index == n:
                answer.append(num[:])
                return

            for i in range(n):
                if check[i] == 1:
                    continue
                num[index] = nums[i]
                check[i] = 1
                dfs(index+1)
                check[i] = 0
        
        answer = []
        n = len(nums)
        num = [0] * n
        check = [0] * n
        dfs(0)

        return answer