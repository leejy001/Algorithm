from typing import List

#딕셔너리 이용
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        dic = {"2":"abc", "3":"def", "4":"ghi", "5":"jkl", "6":"mno", "7":"pqrs", "8":"tuv", "9":"wxyz"}
        dlen = len(digits)
        answer = []
        def dfs(index, s):
            if len(s) == dlen:
                answer.append(s)
                return
            
            for i in range(index, dlen):
                for j in dic[digits[i]]:
                    dfs(i+1, s+j)
                    
        if not digits:
            return []
        
        dfs(0, "")
        
        return answer