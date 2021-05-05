import collections
import heapq
from typing import List

# 내가 푼 풀이, Counter 사용 104ms
class Solution_one:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        c = collections.Counter(nums)
        
        if not nums:
            return
        
        m = c.most_common(k)
        l = []
        for i in range(len(m)):
            l.append(m[i][0])
        return l

# 딕셔너리 이용 112ms
class Solution_two:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        di = {}
        for num in nums:
            if di.get(num):
                di[num] += 1
            else:
                di[num] = 1
                
        res = sorted(di, key = lambda x : di[x], reverse=True)

        return res[:k]

# Counter, heapq 사용한 음수 순 추출 88ms
class Solution_three:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqs = collections.Counter(nums)
        freqs_heap = []
        # 힙에 음수로 삽입
        for f in freqs:
            heapq.heappush(freqs_heap, (-freqs[f], f))

        print(freqs_heap)
        topk = list()
        # k번 만큼 추출, 민 힙 이므로 가장 작은 음수 순으로 추출
        for _ in range(k):
            topk.append(heapq.heappop(freqs_heap)[1])

        return topk


# 파이썬다운 방식 104ms
class Solution_four:
    def topKFrequent(self, nums, k):
        return list(zip(*collections.Counter(nums).most_common(k)))[0]