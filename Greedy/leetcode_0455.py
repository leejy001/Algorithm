from typing import List

# 그리디 알고리즘 308ms
class Solution_one:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        
        child = cookie = 0
        while child < len(g) and cookie < len(s):
            if g[child] <= s[cookie]:
                child += 1
            cookie += 1
        return child


# 이진 검색 160ms
class Solution_two:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        g.sort()
        s.sort()
        
        result = 0
        for i in s:
            # 이진 검색으로 더 큰 인덱스 검색
            index = bisect.bisect_right(g, i)
            if index > result:
                result += 1
        return result