from typing import List
import heapq

# 내가 푼 코드 120ms
class Solution_one:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        result = []
        people.sort(key=lambda x : (x[0], -x[1]), reverse=True)
        for p in people:
            result.insert(p[1],p)
        return result


# 우선순위 큐 이용 100ms
class Solution_two:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        heap = []
        # 키 역순, 인덱스 삽입
        for person in people:
            heapq.heappush(heap, (-person[0], person[1]))
        result = []
        # 키 역순, 인덱스 추출
        while heap:
            person = heapq.heappop(heap)
            result.insert(person[1], [-person[0], person[1]])
        return result