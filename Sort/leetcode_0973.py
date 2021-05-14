from typing import List

# 구현 720ms
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        answer = []
        for x, y in points:
            dist = [(((0-x)**2) + ((0-y)**2))**0.5, [x, y]]
            answer.append(dist)
        answer.sort()
        
        return [answer[i][1] for i in range(k)]

# 우선순위 큐 이용 (704ms)& 불필요한 식 생략 (680ms)
class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        heap = []
        for x, y in points:
            dist = (x**2) + (y**2)
            heapq.heappush(heap,(dist, x, y))
        
        result = []
        for _ in range(k):
            (dist, x, y) = heapq.heappop(heap)
            result.append((x, y))
        return result